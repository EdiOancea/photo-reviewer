import React from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes, faCheck} from '@fortawesome/free-solid-svg-icons';

import {
  approve,
  disapprove,
  fetchRandomPhoto,
  selectCurrentPhoto,
  selectLoading,
} from './photosSlice';
import Hint from './Hint';

import {Button} from '../../components';

const ButtonsWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
`;

const NoButton = styled(Button)`
  background-color: #000000;
`;

const YesButton = styled(Button)`
  background-color: #6600CC;
`;

const Buttons = () => {
  const dispatch = useDispatch();
  const currentPhoto = useSelector(selectCurrentPhoto);
  const loading = useSelector(selectLoading);

  if (!currentPhoto) {
    return <Hint />
  }

  return (
    <ButtonsWrapper>
      <NoButton
        disabled={loading}
        onClick={() => {
          dispatch(disapprove());
          dispatch(fetchRandomPhoto());
        }}
      >
        <FontAwesomeIcon icon={faTimes} size="lg" color="#FFFFFF" />
      </NoButton>
      <YesButton
        disabled={loading}
        onClick={() => {
          dispatch(approve());
          dispatch(fetchRandomPhoto());
        }}
      >
        <FontAwesomeIcon icon={faCheck} size="lg" color="#FFFFFF" />
      </YesButton>
    </ButtonsWrapper>
  );
};

export default Buttons;
