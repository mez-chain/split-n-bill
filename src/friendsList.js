// import { useState } from "react";
import Friend from "./friend";

export default function FriendsList({
  friends,
  selectedFriend,
  setSelectedFriend,
}) {
  // const [newFriend, setNewFriend] = useState("");

  return (
    <ul className="sidebar">
      {friends.map((friend, id) => (
        <li>
          <Friend
            id={friend.id}
            friend={friend}
            selectedFriend={selectedFriend}
            setSelectedFriend={setSelectedFriend}
          ></Friend>
        </li>
      ))}
    </ul>
  );
}
