//* React Hooks
import { useState, useEffect } from "react";

//* prop types
interface NavProps {
  currentLocation: string;
  source: string; // this prop indicates from where the compoenet is being called
  onUpdateLocation: (newLocation: string) => void;
  updateOpenState: () => void;
}

export default function Nav({
  currentLocation,
  onUpdateLocation,
  source,
  updateOpenState,
}: NavProps) {
  //* handle anchor tag <a> activity state
  const [activeLSI, setActiveLSI] = useState(true);
  const [activeLISI, setActiveLISI] = useState(false);

  useEffect(() => {
    if (currentLocation === "LISI") {
      setActiveLISI(true);
      setActiveLSI(false);
    } else {
      setActiveLISI(false);
      setActiveLSI(true);
    }
  }, [currentLocation]);

  return (
    <nav className="flex md:items-center justify-center bg-white border-gray-200 dark:bg-gray-900 w-full">
      <div className="flex flex-wrap md:items-center justify-between mx-auto ">
        <div
          className={
            source === "Header"
              ? "hidden md:flex md:w-fit md:items-center"
              : "flex md:w-fit md:items-center"
          }
          id="navbar-default"
        >
          <ul
            className={
              source === "Header"
                ? "font-medium flex flex-col p-4 md:p-0 mt-4bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-whitedark:bg-gray-900"
                : "font-medium text-2xl flex flex-col p-4 md:p-0 mt-4 bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-900"
            }
          >
            <li onClick={() => updateOpenState}>
              <a
                href="#LSI"
                className={
                  activeLSI
                    ? "block py-2 px-3  rounded md:bg-transparent text-blue-500 md:p-0"
                    : "block py-2 px-3 text-white  rounded md:bg-transparent md:hover:text-blue-500 md:p-0"
                }
                aria-current="page"
                onClick={() => onUpdateLocation("LSI")}
              >
                <p className="hidden md:block">LSI</p>
                <button onClick={updateOpenState} className="md:hidden">
                  LSI
                </button>
              </a>
            </li>
            <li>
              <a
                href="#LISI"
                className={
                  activeLISI
                    ? "block py-2 px-3 rounded md:bg-transparent text-blue-500 md:p-0"
                    : "block py-2 px-3 text-white rounded md:bg-transparent md:hover:text-blue-500 md:p-0"
                }
                onClick={() => onUpdateLocation("LISI")}
              >
                <p className="hidden md:block">LISI</p>
                <button onClick={updateOpenState} className="md:hidden">
                  LISI
                </button>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100
                  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0
                  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                  dark:hover:text-white md:dark:hover:bg-transparent"
              >
                LIG
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
