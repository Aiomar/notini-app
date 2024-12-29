//* Components
import Nav from "./Nav";

//* proptypes
interface headerProps {
  currentLocation: string;
  onUpdateLocation: (newLocation: string) => void;
  updateOpenState: () => void;
}

export default function Header({
  currentLocation,
  onUpdateLocation,
  updateOpenState,
}: headerProps) {
  return (
    <header className="w-full h-24 flex items-center justify-center bg-gray-900 fixed z-50 left-0 right-0">
      <div className="p-5">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden
            hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400
            dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={updateOpenState}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div className="md:mb-0 float-start ml-5 z-10">
        <a href="" className="flex items-center">
          <img src="/logo.svg" className="h-10 rounded-full" alt="" />
          <span className="ml-2 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Notini Testing{" "}
          </span>
        </a>
      </div>
      <Nav
        currentLocation={currentLocation}
        onUpdateLocation={onUpdateLocation}
        source="Header"
        updateOpenState={updateOpenState}
      />
    </header>
  );
}
