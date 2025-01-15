import Smiley from "./components/Smiley";

export default function App() {
  return (
    <>
      <Smiley isHappy={true} />
      <Smiley isHappy={false} />
    </>
  );
}
