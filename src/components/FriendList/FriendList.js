import FriendListItem from "../FriendListItem/FriendListItem";
import PropTypes from "prop-types";

function FriendList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map((user) => (
        <FriendListItem
          key={user.id}
          status={user.isOnline}
          avatar={user.avatar}
          name={user.name}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
