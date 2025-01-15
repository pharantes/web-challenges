import Button from "./components/Button";

export default function App() {
  function handleClick() {
    console.log(`i got clicked`);
  }
  return (
    <>
      <Button
        onClick={handleClick}
        text="1st Button"
        color="green"
        disabled={false}
      />
      <Button
        onClick={handleClick}
        text="2nd Button"
        color="white"
        disabled={false}
      />
      <Button
        onClick={handleClick}
        text="3rd Button"
        color="red"
        disabled={false}
      />
    </>
  );
}
