export default function SplitForm() {
  return (
    <form className="form-split-bill">
      <h2>split a bill with X</h2>
      <label>💰 Bill value</label>
      <input type="text" />
      <label>🧍🏼‍♂️ Your expense</label>
      <input type="text" />
      <label>🧑‍🤝‍🧑 X's expense</label>
      <input type="text" />
      <label>🤑 Who is paying the bill?</label>
      <select value="You">
        <option value="You">You</option>
        <option value="X">X</option>
      </select>
      <button className="button">Split bill</button>
    </form>
  );
}
