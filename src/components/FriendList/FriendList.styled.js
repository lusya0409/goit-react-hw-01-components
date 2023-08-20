import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: ${props => props.theme.spasing(2)};
`;
