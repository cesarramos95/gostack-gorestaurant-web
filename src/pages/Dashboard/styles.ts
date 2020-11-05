import styled from 'styled-components';

export const FoodsContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 10px 0 50px 0;
  margin-top: -140px;

  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
`;
