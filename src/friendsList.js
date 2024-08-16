// import { useState } from "react";
import Friend from "./friend";

export default function FriendsList({ friends }) {
  // const [newFriend, setNewFriend] = useState("");

  return (
    <ul className="sidebar">
      {friends.map((friend) => (
        <li>
          <Friend img={friend.image} name={friend.name}></Friend>
        </li>
      ))}
    </ul>
  );
}
