import photosReducer, {
  approve,
  disapprove,
  selectCurrentPhoto,
  selectApprovedPhotoIds,
  selectDisapprovedPhotoIds,
  setCurrentPhoto,
} from './photosSlice';

const samplePhoto = {id: 'id4'};

const selectorSampleState = {
  photos: {
    currentPhoto: samplePhoto,
    loading: true,
    approvedPhotos: {id1: {}, id2: {}},
    disapprovedPhotos: {id3: {}},
  }
};

const defaultAppState = {
  currentPhoto: null,
  loading: false,
  approvedPhotos: {},
  disapprovedPhotos: {},
}

const approveDisapproveInitialState = {
  currentPhoto: samplePhoto,
  loading: false,
  approvedPhotos: {},
  disapprovedPhotos: {},
};
describe('photos reducer', () => {
  it('should handle initial state', () => {
    const newState = photosReducer(undefined, {type: 'approve_but_maybe_disapprove'});
    expect(newState).toEqual(defaultAppState);
  });

  it('sets the current photo', () => {
    const newState = photosReducer(undefined, setCurrentPhoto(samplePhoto));
    expect(newState).toEqual({...defaultAppState, currentPhoto: samplePhoto});
  });

  it('adds the approved photo', () => {
    const newState = photosReducer(approveDisapproveInitialState, approve(samplePhoto));
    expect(newState).toEqual({
      ...defaultAppState,
      approvedPhotos: {id4: samplePhoto},
      currentPhoto: samplePhoto,
    });
  });

  it('adds the disapproved photo', () => {
    const newState = photosReducer(approveDisapproveInitialState, disapprove(samplePhoto));
    expect(newState).toEqual({
      ...defaultAppState,
      disapprovedPhotos: {id4: samplePhoto},
      currentPhoto: samplePhoto,
    });
  });

  it('selects approved photo ids', () => {
    expect(selectApprovedPhotoIds(selectorSampleState)).toEqual(['id1', 'id2']);
  });

  it('selects disapproved photo ids', () => {
    expect(selectDisapprovedPhotoIds(selectorSampleState)).toEqual(['id3']);
  });

  it('selects the current photo', () => {
    expect(selectCurrentPhoto(selectorSampleState)).toEqual(samplePhoto);
  });
});
