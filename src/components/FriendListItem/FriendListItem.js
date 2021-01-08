import PropTypes from "prop-types";

function FriendListItem({ status, avatar, name }) {
  return (
    <li class="item">
      <span class="status"></span>
      <img class="avatar" src={avatar} alt="" width="48" />
      <p class="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  status: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default FriendListItem;
