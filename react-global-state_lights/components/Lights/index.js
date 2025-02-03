import styled from "styled-components";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;
export default function Lights({ count, handleIncrement, rooms, handleRoom }) {

  return (
    <StyledLights>
      {rooms.map((room, index) => {
        return (
          <li key={index}>
            <Light
              count={count}
              handleIncrement={handleIncrement}
              handleRoom={handleRoom}
              name={room.name}
              lightOn={room.lightOn}
            />
          </li>
        )
      })}


    </StyledLights>
  );
}
