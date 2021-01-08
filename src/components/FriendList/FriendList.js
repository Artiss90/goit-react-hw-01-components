import FriendListItem from "../FriendListItem/FriendListItem";
import PropTypes from "prop-types";

function FriendList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map((prop) => (
        <FriendListItem
          key={prop.id}
          status={prop.status}
          avatar={prop.avatar}
          name={prop.name}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
