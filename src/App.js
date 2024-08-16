import FriendsList from "./friendsList";
import AddFriend from "./addFriend";
import SplitForm from "./splitForm";

export default function App() {
  return (
    <div>
      <div>
        <FriendsList></FriendsList>
        <AddFriend></AddFriend>
      </div>
      <SplitForm></SplitForm>
    </div>
  );
}
