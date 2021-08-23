import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

import {selectCurrentPhoto} from './photosSlice';

import AddImage from './AddImage';

const Image = styled.img`
  margin: 15px 0;
`;

const CurrentPhoto = () => {
  const currentPhoto = useSelector(selectCurrentPhoto);

  if (!currentPhoto) {
    return <AddImage fullWidth />;
  }

  return (
    <Image
      src={currentPhoto.urls.full}
      alt={currentPhoto.alt_description}
      height={350}
    />
  );
};

export default CurrentPhoto;
