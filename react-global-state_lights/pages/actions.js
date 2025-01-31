import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({ rooms, handleIncrement, handleRoom }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions handleRoom={handleRoom} rooms={rooms} handleIncrement={handleIncrement} />
    </>
  );
}
