import PropTypes from "prop-types";
import "./Statistics.css";

function Statistics({ title, stats }) {
  return (
    <section className="Statistics">
      {title && <h2 className="Statistics__title">{title}</h2>}

      <ul className="Statistics__stat-list">
        {stats.map((stat) => (
          <li key={stat.id.toString()} className="Statistics__item">
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
