import styled from 'styled-components';

export const TableTransactionHistory = styled.table`
  border: 1px solid ${props => props.theme.colors.gray};
  text-align: center;
  box-shadow: ${props => props.theme.shadow};
  border-radius: ${props => props.theme.radii.sm};
`;

export const TableHead = styled.thead`
  background-color: ${props => props.theme.colors.green};
  color: ${props => props.theme.colors.white};
  height: 50px;
`;

export const TableBody = styled.tbody`
  border: 1px solid ${props => props.theme.colors.gray};
`;
export const TableRow = styled.tr`
  height: 50px;
  &:nth-of-type(2n) {
    background-color: ${props => props.theme.colors.lightBlue};
  }
`;
