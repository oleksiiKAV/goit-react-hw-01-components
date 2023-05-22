import PT from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ title, data }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {data.map(el => (
          <li key={el.id} className={css.item}>
            <span className={css.label}>{el.label}</span>
            <span className={css.percentage}> {el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PT.string,
  data: PT.arrayOf(
    PT.shape({
      id: PT.string,
      label: PT.string,
      percentage: PT.number,
    })
  ),
};

export default Statistics;
