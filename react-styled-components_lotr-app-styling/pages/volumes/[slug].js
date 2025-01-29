import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import VolumeDetailComponent from "../components/VolumeDetailComponent";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  return (
    <VolumeDetailComponent
      volume={volume}
      previousVolume={previousVolume}
      nextVolume={nextVolume}
    />
  );
}
