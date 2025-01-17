import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 1339,
      name: "🍊 Orange",
      color: "orange",
    },
    {
      id: 1340,
      name: "🍈 Lemon",
      color: "green",
    },
    {
      id: 1341,
      name: "🍇 Grapes",
      color: "purple",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit, index) => {
        return <Card id={index} name={fruit.name} color={fruit.color} />;
      })}
    </div>
  );
}
