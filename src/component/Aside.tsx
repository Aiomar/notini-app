// Component
import Nav from "./Nav";

//prop types
interface asideProps {
  currentLocation: string;
  onUpdateLocation: (newLocation: string) => void;
  updateOpenState: () => void;
}
export default function Aside({
  currentLocation,
  onUpdateLocation,
  updateOpenState,
}: asideProps) {
  return (
    <aside className="flex mt-24 w-full h-screen z-50 fixed right-0 left-0">
      <Nav
        currentLocation={currentLocation}
        onUpdateLocation={onUpdateLocation}
        source="aside"
        updateOpenState={updateOpenState}
      />
    </aside>
  );
}
