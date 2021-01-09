import FriendListItem from "../FriendListItem";
import PropTypes from "prop-types";
import "./FriendList.css";

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
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
