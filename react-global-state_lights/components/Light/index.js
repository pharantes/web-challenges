import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ count, name, handleIncrement, handleRoom, lightOn }) {

  return (
    <LightButton
      type="button"
      onClick={() => {
        handleRoom(name)

        if (!lightOn) {
          handleIncrement(count + 1)
        }
        if (lightOn) {
          handleIncrement(count - 1)
        }
      }}
      $isOn={lightOn}
    >
      <Icon $isOn={lightOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{lightOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
