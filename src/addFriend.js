import { useState } from "react";

export default function AddFriend({ friends, onSetFriends }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const [isOpen, setIsOpen] = useState(true);

  function handleAddFriend(e) {
    e.preventDefault();
    onSetFriends([
      ...friends,
      { id: Date.now(), name: name, image: image, balance: 0 },
    ]);

    setName("");
  }

  function handleToggleAddForm() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {isOpen && (
        <form className="form-add-friend" onSubmit={handleAddFriend}>
          <label>🧑‍🤝‍🧑name </label>
          <input
            type="text"
            value={name}
            placeholder="full name"
            onChange={(e) => setName(e.target.value)}
          />
          <label>🖼️ Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button className="button">Add</button>
        </form>
      )}

      <button
        style={{ float: "right", margin: "10px" }}
        className="button"
        onClick={handleToggleAddForm}
      >
        {isOpen ? "Close" : "Add friend"}
      </button>
    </>
  );
}
