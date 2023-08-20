import styled from 'styled-components';

export const WrapperProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spasing(3)};
  width: 100%;
  max-width: 370px;
  margin: 0 auto;
  padding: ${props => props.theme.spasing(2)};
  box-shadow: ${props => props.theme.shadow};
  border-radius: ${props => props.theme.radii.sm};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spasing(2)};
  width: 100%;
`;

export const ImageWrapper = styled.div`
  width: 250px;
  padding: ${props => props.theme.spasing(1)};
  margin-bottom: ${props => props.theme.spasing(3)};
  border-radius: 50%;
  overflow: hidden;
  background-color: ${props => props.theme.colors.gray};
`;

export const UserName = styled.p`
  font-size: 28px;
  font-weight: bold;
  color: ${props => props.theme.colors.black};
`;

export const ListStats = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  gap: ${props => props.theme.spasing(3)};
  /* flex: calc((100% -2 * ${props => props.theme.spasing(2)}) / 3); */
  background-color: #e4f5f7;
`;
export const Item = styled.li`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.theme.spasing(4)};

  gap: ${props => props.theme.spasing(1)};
  color: ${props => props.theme.colors.gray};
  border-right: 1px solid ${props => props.theme.colors.gray};
`;

export const ItemQuantity = styled.span`
  font-weight: bold;
  color: ${props => props.theme.colors.black};
`;
