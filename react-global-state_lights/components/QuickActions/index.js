import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ rooms, handleIncrement, handleRoom }) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          console.log("Turn all lights off");
          handleRoom("off")
          handleIncrement(0)

        }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          console.log("Turn all lights on");
          handleRoom("on")
          handleIncrement(rooms.length)
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
