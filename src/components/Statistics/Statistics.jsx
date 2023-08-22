import PropTypes from 'prop-types';
import {
  StatisticsSection,
  List,
  ListItem,
  StatisticTitle,
  TextLabel,
} from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      {/* {title.length > 0 && <StatisticTitle>{title.length}</StatisticTitle>} */}

      <List>
        {stats.map(({ id, label, percentage }) => (
          <ListItem key={id} label={label}>
            <TextLabel>{label}</TextLabel>
            <span>{percentage}%</span>
          </ListItem>
        ))}
      </List>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
