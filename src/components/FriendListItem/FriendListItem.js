import PropTypes from "prop-types";

function FriendListItem({ status, avatar, name }) {
  return (
    <li class="item">
      <span class="status">{status === true ? "online" : "offline"}</span>
      <img class="avatar" src={avatar} alt="" width="48" />
      <p class="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
