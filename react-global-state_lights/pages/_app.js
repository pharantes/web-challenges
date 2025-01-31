import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {

  const rooms = [{ name: "Living Room", lightOn: false },
  { name: "Kitchen", lightOn: false },
  { name: "Bedroom", lightOn: false },
  { name: "Garage", lightOn: false },
  { name: "Porch", lightOn: false },
  { name: "Garden", lightOn: false },
  { name: "Office", lightOn: false },
  { name: "Outside", lightOn: false },]

  const [count, setCount] = useState(0)
  const [localStorageRooms, setLocalStorageRooms] = useState(rooms);
  function handleIncrement(n) {
    setCount(n)
  }

  function handleRoom(name) {
    setLocalStorageRooms((prevState) => {
      let updatedRooms = prevState.map((room) => {
        if (room.name === name) {
          return {
            ...room, lightOn: !room.lightOn
          }
        } else {
          return {
            ...room
          }
        }
      })
      console.log(updatedRooms)
      return updatedRooms
    })
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        count={count}
        rooms={localStorageRooms}
        handleIncrement={handleIncrement}
        handleRoom={handleRoom}
      />
    </Layout>
  );
}