import React from 'react';
import styled, {css} from 'styled-components';
import {useDispatch} from 'react-redux';

import {fetchRandomPhoto} from './photosSlice';
import {PlusIcon} from '../../components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 40px;
  margin: 15px 0;
  border: 1px solid #AAAAAA;
  border-radius: 5px;
  background-color: #F1F1F1;
  cursor: pointer;

  ${({fullWidth}) => fullWidth && css`
    width: 100%;
    height: 350px;
  `}
`;

const AddImage = ({fullWidth}) => {
  const dispatch = useDispatch();

  return (
    <Wrapper fullWidth={fullWidth} onClick={() => dispatch(fetchRandomPhoto())}>
      <PlusIcon size={fullWidth ? '3x' : 'lg'} />
    </Wrapper>
  );
};

export default AddImage;
