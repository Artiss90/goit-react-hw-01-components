import PropTypes from "prop-types";
import "./FriendListItem.css";

function FriendListItem({ status, avatar, name }) {
  return (
    <li className="FriendListItem">
      <span
        className="status"
        style={{ backgroundColor: status === true ? "green" : "red" }}
      >
        {status === true ? "online" : "offline"}
      </span>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
