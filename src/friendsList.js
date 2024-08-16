// import { useState } from "react";
import Friend from "./friend";

export default function FriendsList({
  friends,
  selectedFriend,
  setSelectedFriend,
  setIsOpen,
}) {
  // const [newFriend, setNewFriend] = useState("");

  return (
    <ul className="sidebar">
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          id={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
          setIsOpen={setIsOpen}
        ></Friend>
      ))}
    </ul>
  );
}
