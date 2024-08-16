export default function Friend({
  friend,
  selectedFriend,
  setSelectedFriend,
  id,
  setIsOpen,
}) {
  function handleSelectedElement() {
    if (selectedFriend === id) {
      setSelectedFriend(null);
    } else setSelectedFriend(id);
    setIsOpen(false);
  }

  return (
    <li className={selectedFriend === id ? "selected" : ""}>
      <img src={friend.image} alt="avatar"></img>
      <h3>{friend.name}</h3>
      <p
        className={
          friend.balance === 0 ? "" : friend.balance > 0 ? "green" : "red"
        }
      >
        {friend.balance === 0
          ? `You and ${friend.name} are even`
          : friend.balance > 0
          ? `${friend.name} owes you ${friend.balance}$`
          : `you owe ${friend.name} ${Math.abs(friend.balance)}$`}
      </p>
      <button className="button" onClick={handleSelectedElement}>
        {selectedFriend === id ? "Close" : "Select"}
      </button>
    </li>
  );
}
