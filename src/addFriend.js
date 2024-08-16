export default function AddFriend() {
  return (
    <form className="form-add-friend">
      <label>🧑‍🤝‍🧑Friend name </label>
      <input type="text" placeholder="full name" />
      <label>🖼️ Image URL</label>
      <input type="text" value="https://i.pravatar.cc/48" />
      <button className="button">Add</button>
    </form>
  );
}
