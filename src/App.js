import FriendsList from "./friendsList";
import AddFriend from "./addFriend";
import SplitForm from "./splitForm";
import { useState } from "react";

// const initialFriends = [
//   {
//     id: 118836,
//     name: "Clark",
//     image: "https://i.pravatar.cc/48?u=118836",
//     balance: -7,
//   },
//   {
//     id: 933372,
//     name: "Sarah",
//     image: "https://i.pravatar.cc/48?u=933372",
//     balance: 20,
//   },
//   {
//     id: 499476,
//     name: "Anthony",
//     image: "https://i.pravatar.cc/48?u=499476",
//     balance: 0,
//   },
// ];

export default function App() {
  const [friends, setFriends] = useState([]);

  return (
    <div className="app">
      <div>
        <FriendsList friends={friends}></FriendsList>
        <AddFriend onSetFriends={setFriends} friends={friends}></AddFriend>
      </div>
      <SplitForm></SplitForm>
    </div>
  );
}
