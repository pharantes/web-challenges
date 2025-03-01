import "./styles.css";

export default function App() {
  const [isActive, setActive] = useState(false);

  function handleClick() {
    setActive(!isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>Activate</button>
    </main>
  );
}
