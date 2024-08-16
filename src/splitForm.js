import { useState } from "react";

export default function SplitForm() {
  const [bill, setBill] = useState(0);
  const [myExpense, setMyExpense] = useState(0);
  // const [friendExpense, setFriendExpense] = useState(0);

  return (
    <form className="form-split-bill">
      <h2>split a bill with X</h2>
      <label>💰 Bill value</label>
      <input type="text" onChange={(e) => setBill(Number(e.target.value))} />
      <label>🧍🏼‍♂️ Your expense</label>
      <input
        type="text"
        onChange={(e) => setMyExpense(Number(e.target.value))}
      />
      <label>🧑‍🤝‍🧑 X's expense</label>
      <input type="text" value={bill - myExpense} readOnly />
      <label>🤑 Who is paying the bill?</label>
      <select value="You">
        <option value="You">You</option>
        <option value="X">X</option>
      </select>
      <button className="button">Split bill</button>
    </form>
  );
}
