import React from 'react';
import styled from 'styled-components';

import {PlusIcon} from '../../components';

const Wrapper = styled.div`
  padding: 20px;
  text-align: center;
`;

const Hint = () => (
  <Wrapper>
    <p>
      Click on the
      {' '}
      <PlusIcon />
      {' '}
      in order to get image recommendations.
    </p>
  </Wrapper>
);

export default Hint;
