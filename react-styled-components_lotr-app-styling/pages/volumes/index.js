import VolumesOverviewComponent from "../components/VolumesOverviewComponent";
import { introduction, volumes } from "../../lib/data";

export default function Volumes() {

  return (
    <VolumesOverviewComponent
      volumes={volumes}
      introduction={introduction}
    />

  );
}
