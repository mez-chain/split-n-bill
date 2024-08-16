import FriendsList from "./friendsList";
import AddFriend from "./addFriend";
import SplitForm from "./splitForm";
import { useState } from "react";

export default function App() {
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(0);

  return (
    <div className="app">
      <div>
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
        ></FriendsList>
        <AddFriend onSetFriends={setFriends} friends={friends}></AddFriend>
      </div>
      <SplitForm
        selectedFriend={selectedFriend}
        setSelectedFriend={setSelectedFriend}
        friends={friends}
        onSetFriends={setFriends}
      ></SplitForm>
    </div>
  );
}
