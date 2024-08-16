import FriendsList from "./friendsList";
import AddFriend from "./addFriend";
import SplitForm from "./splitForm";
import { useState } from "react";

export default function App() {
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="app">
      <div>
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
          setIsOpen={setIsOpen}
        ></FriendsList>
        <AddFriend
          onSetFriends={setFriends}
          friends={friends}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        ></AddFriend>
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
