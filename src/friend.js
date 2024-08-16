export default function Friend({ img, name }) {
  return (
    <>
      <img src={img} alt="avatar"></img>
      <h3>{name}</h3>
      <p>You and {name} are even</p>
      <button className="button">Select</button>
    </>
  );
}
