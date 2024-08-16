import FriendsList from "./friendsList";
import AddFriend from "./addFriend";
import SplitForm from "./splitForm";

export default function App() {
  return (
    <div className="app">
      <div>
        <FriendsList></FriendsList>
        <AddFriend></AddFriend>
      </div>
      <SplitForm></SplitForm>
    </div>
  );
}
