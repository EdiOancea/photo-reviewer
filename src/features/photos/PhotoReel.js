import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

import {selectApprovedPhotos} from './photosSlice';
import AddImage from './AddImage';

const InlineContainer = styled.div`
  display: inline-block;
  white-space: nowrap;
  overflow-x: scroll;
`;

const Image = styled.img`
  margin-bottom: 15px;
  margin-right: 15px;
`;

const PhotoReel = () => {
  const approvedPhotos = useSelector(selectApprovedPhotos);

  if (!approvedPhotos.length) {
    return <AddImage />
  }

  return (
    <InlineContainer>
      {approvedPhotos.map(({urls: {thumb}, alt_description}) => (
        <Image
          key={thumb}
          src={thumb}
          alt={alt_description}
          width={70}
          height={40}
        />
      ))}
    </InlineContainer>
  );
};

export default PhotoReel;
