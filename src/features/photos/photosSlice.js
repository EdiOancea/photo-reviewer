import {createSlice} from '@reduxjs/toolkit';
import {createApi} from 'unsplash-js';

const parseLocalStorageItem = (key, defaultValue) => localStorage.getItem(key)
  ? JSON.parse(localStorage.getItem(key))
  : defaultValue;

const initialState = {
  currentPhoto: parseLocalStorageItem('currentPhoto', null),
  loading: false,
  approvedPhotos: parseLocalStorageItem('approvedPhotos', {}),
  disapprovedPhotos: parseLocalStorageItem('disapprovedPhotos', {}),
};

// This is not secure in production by any means
const api = createApi({accessKey: process.env.REACT_APP_ACCESS_KEY});

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    approve: state => {
      state.approvedPhotos[state.currentPhoto.id] = state.currentPhoto;
      localStorage.setItem('approvedPhotos', JSON.stringify(state.approvedPhotos));
    },
    disapprove: state => {
      state.disapprovedPhotos[state.currentPhoto.id] = state.currentPhoto;
      localStorage.setItem('disapprovedPhotos', JSON.stringify(state.disapprovedPhotos));
    },
    setLoading: (state, {payload}) => {
      state.loading = payload;
    },
    setCurrentPhoto: (state, {payload}) => {
      state.currentPhoto = payload;
      localStorage.setItem('currentPhoto', JSON.stringify(state.currentPhoto));
    },
  },
});

export const {setLoading, setCurrentPhoto, approve, disapprove} = photosSlice.actions;

export const fetchRandomPhoto = () => async (dispatch, getState) => {
  const approvedPhotoIds = selectApprovedPhotoIds(getState());
  const disapprovedPhotoIds = selectDisapprovedPhotoIds(getState());
  const invalidIds = [...approvedPhotoIds, ...disapprovedPhotoIds];

  dispatch(setLoading(true));
  const {response} = await api.photos.getRandom();

  if (invalidIds.includes(response.id)) {
    dispatch(fetchRandomPhoto);

    return;
  }

  dispatch(setLoading(false));
  dispatch(setCurrentPhoto(response));
}

export const selectApprovedPhotoIds = state => Object.keys(state.photos.approvedPhotos);
export const selectDisapprovedPhotoIds = state => Object.keys(state.photos.disapprovedPhotos);

export const selectLoading = state => state.photos.loading;
export const selectCurrentPhoto = state => state.photos.currentPhoto;
export const selectApprovedPhotos = state => Object.values(state.photos.approvedPhotos);
export const selectApprovedPhotoCount = state => Object.keys(state.photos.approvedPhotos).length;

export default photosSlice.reducer;
