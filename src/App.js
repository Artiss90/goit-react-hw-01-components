import Profile from "./components/Profile";
import user from "./user.json";
import Statistics from "./components/Statistics";
import statisticalData from "./statistical-data.json";
import FriendList from "./components/FriendList";
import friends from "./friends.json";
import TransactionHistory from "./components/TransactionHistory";
import transactions from "./transactions.json";

export default function App() {
  return (
    <>
      <Profile
        nameUser={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
      <Statistics title="Upload stats" stats={statisticalData}></Statistics>
      <Statistics stats={statisticalData}></Statistics>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
