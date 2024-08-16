import { useState } from "react";

export default function SplitForm({
  selectedFriend,
  friends,
  onSetFriends,
  setSelectedFriend,
}) {
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
              balance:
                whoPay === "You"
                  ? el.balance + bill - myExpense
                  : el.balance + myExpense - bill,
            }
          : el
      )
    );

    setBill("");
    setMyExpense("");
    setSelectedFriend(null);
  }

  return (
    myFriend && (
      <form className="form-split-bill" onSubmit={handleBalance}>
        <h2>split a bill with {myFriend.name}</h2>

        <label>💰 Bill value</label>
        <input
          type="Number"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />

        <label>🧍🏼‍♂️ Your expense</label>
        <input
          type="Number"
          value={myExpense}
          onChange={(e) =>
            setMyExpense(
              Number(e.target.value) > bill ? myExpense : Number(e.target.value)
            )
          }
        />

        <label>🧑‍🤝‍🧑 {myFriend.name}'s expense</label>
        <input type="Number" value={bill - myExpense} disabled />

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
