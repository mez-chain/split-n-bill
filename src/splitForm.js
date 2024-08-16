import { useState } from "react";

export default function SplitForm({ selectedFriend, friends, onSetFriends }) {
  const [bill, setBill] = useState(0);
  const [myExpense, setMyExpense] = useState(0);
  const [whoPay, setWhoPay] = useState("You");
  // const [friendExpense, setFriendExpense] = useState(0);
  const myFriend = friends.find((el) => el.id === selectedFriend);

  function handleBalance(e) {
    e.preventDefault();
    onSetFriends(
      friends.map((el) =>
        el.id === selectedFriend
          ? {
              ...el,
              balance: whoPay === "You" ? bill - myExpense : myExpense - bill,
            }
          : el
      )
    );
  }

  return (
    myFriend && (
      <form className="form-split-bill" onSubmit={handleBalance}>
        <h2>split a bill with {myFriend.name}</h2>
        <label>💰 Bill value</label>
        <input type="text" onChange={(e) => setBill(Number(e.target.value))} />
        <label>🧍🏼‍♂️ Your expense</label>
        <input
          type="text"
          onChange={(e) => setMyExpense(Number(e.target.value))}
        />
        <label>🧑‍🤝‍🧑 {myFriend.name}'s expense</label>
        <input type="text" value={bill - myExpense} readOnly />
        <label>🤑 Who is paying the bill?</label>
        <select value={whoPay} onChange={(e) => setWhoPay(e.target.value)}>
          <option value="You">You</option>
          <option value={myFriend.name}>{myFriend.name}</option>
        </select>
        <button className="button">Split bill</button>
      </form>
    )
  );
}
