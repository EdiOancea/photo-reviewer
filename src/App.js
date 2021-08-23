import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

import {Divider} from './components';

import {selectApprovedPhotoCount} from './features/photos/photosSlice';
import Buttons from './features/photos/Buttons';
import CurrentPhoto from './features/photos/CurrentPhoto';
import PhotoReel from './features/photos/PhotoReel';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const AppCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 15px;
  border-radius: 5px;
  border: 1px solid #AAAAAA;
  width: 400px;
`;

const Label = styled.h5`
  color: #6600CC;
`;

function App() {
  const approvedPhotoCount = useSelector(selectApprovedPhotoCount);

  return (
    <Wrapper>
      <AppCard>
        <Label>IMAGE APPROVAL APPLICATION</Label>
        <Divider />
        <Label>APPROVED IMAGES ({approvedPhotoCount})</Label>
        <PhotoReel />
        <Divider />
        <CurrentPhoto />
        <Divider />
        <Buttons />
      </AppCard>
    </Wrapper>
  );
}

export default App;
