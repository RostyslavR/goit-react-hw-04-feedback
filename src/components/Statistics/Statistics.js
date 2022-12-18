import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';
import { StatisticItem } from './StatisticItem';
import { ListSt, ItemSt } from './Statistics.styled';

export const Statistics = ({ feedbacks }) => {
  const fbStatistic = { ...feedbacks };
  fbStatistic.total = Object.values(feedbacks).reduce((sum, el) => sum + el, 0);
  if (fbStatistic.total > 0) {
    fbStatistic.positive = `${Math.round(
      ((fbStatistic.good + fbStatistic.neutral) * 100) / fbStatistic.total
    )}%`;
  }

  return (
    <ListSt>
      {fbStatistic.total !== 0 ? (
        Object.entries(fbStatistic).map((el, idx) => (
          <ItemSt key={idx}>
            <StatisticItem nameSt={el[0]} valueSt={el[1]} />
          </ItemSt>
        ))
      ) : (
        <ItemSt>
          <Notification message="There is no any feedback" />
        </ItemSt>
      )}
    </ListSt>
  );
};

Statistics.propTypes = {
  feedbacks: PropTypes.object.isRequired,
};
