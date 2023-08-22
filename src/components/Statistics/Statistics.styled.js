import styled from 'styled-components';

const getColor = props => {
  switch (props.label) {
    case '.docx':
      return props.theme.colors.blue;
    case '.mp3':
      return props.theme.colors.red;
    case '.pdf':
      return props.theme.colors.violet;
    case '.psd':
      return props.theme.colors.green;

    default:
      return null;
  }
};
export const StatisticsSection = styled.section`
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
export const StatisticTitle = styled.h2`
  text-transform: uppercase;
  font-size: 24px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;

  width: 100%;

  gap: ${props => props.theme.spasing(0)};
  flex: calc((100% - 3 * ${props => props.theme.spasing(0)}) / 4);
`;
export const ListItem = styled.li`
  display: flex;
  justify-content: start;

  flex-direction: column;
  align-items: center;
  padding: ${props => props.theme.spasing(4)};
  min-width: 84px;
  gap: ${props => props.theme.spasing(1)};
  color: ${props => props.theme.colors.white};
  background-color: ${getColor};

  border: 1px solid ${getColor};
`;

export const TextLabel = styled.span`
  font-size: 14px;
`;
