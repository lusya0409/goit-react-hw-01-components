import styled from 'styled-components';
const getColorIsOnline = props => {
  console.log(props);
  return props.$_isonline ? props.theme.colors.green : props.theme.colors.red;
};

export const ListItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: ${props => props.theme.spasing(4)};
  width: 100%;
  max-width: 370px;

  gap: ${props => props.theme.spasing(2)};
  color: ${props => props.theme.colors.black};

  border: 1px solid ${props => props.theme.colors.gray};
  box-shadow: ${props => props.theme.shadow};
  border-radius: ${props => props.theme.radii.sm};
`;

export const FriendName = styled.p`
  color: ${props => props.theme.colors.black};
`;
export const StatusOnLine = styled.span`
  display: block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${getColorIsOnline};
`;
export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  padding: ${props => props.theme.spasing(2)};
  border-radius: ${props => props.theme.radii.sm};
  background-color: ${props => props.theme.colors.gray};
`;
