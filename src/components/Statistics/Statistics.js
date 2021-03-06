import PropTypes from "prop-types";
import style from "./Statistics.module.css";

function Statistics({ title, stats }) {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.list}>
        {stats.map((stat) => (
          <li key={stat.id.toString()} className={style.item}>
            <span className="label">{stat.label}</span>
            <span className="percentage"> {stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Statistics;
