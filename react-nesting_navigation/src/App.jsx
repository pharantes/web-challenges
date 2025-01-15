import "./styles.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Link from "./components/Link";
import Img from "./components/Img";
import Button from "./components/Button";
import avatar from "./img/avatar.jpg";
import logo from "./img/logo.jpg";

export default function App() {
  function handleClick() {
    console.log("I could toggle a profile!");
  }

  return (
    <>
      <Header>
        <a href="#">
          <Img className="round-image" src={logo} alt="logo" />
        </a>
        <Nav>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Nav>
        <Button type="button" onClick={handleClick} ariaLabel="toggle profile">
          <Img src={avatar} alt="avatar" />
        </Button>
      </Header>
      <main>content goes here…</main>
    </>
  );
}
