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
                title="License Science Informatique"
                onClick={() => onUpdateLocation("LSI")}
              >
                <p className="hidden md:flex flex-row justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                    />
                  </svg>
                  License SI
                </p>
                <button
                  onClick={updateOpenState}
                  className={
                    activeLSI
                      ? "md:hidden bg-gray-950 w-80 h-10 rounded-md outline outline-blue-500"
                      : "md:hidden bg-gray-950 w-80 h-10 rounded-md"
                  }
                >
                  <p className="flex flex-row justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                      />
                    </svg>
                    License SI
                  </p>
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
                title="License Ingeneurie Systeme Informatique"
                onClick={() => onUpdateLocation("LISI")}
              >
                <p className="hidden md:flex flex-row justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
                    />
                  </svg>
                  License ISI
                </p>
                <button
                  onClick={updateOpenState}
                  className={
                    activeLISI
                      ? "md:hidden bg-gray-950 w-80 h-10 rounded-md outline outline-blue-500"
                      : "md:hidden bg-gray-950 w-80 h-10 rounded-md "
                  }
                >
                  <p className="flex flex-row justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
                      />
                    </svg>
                    License ISI
                  </p>
                </button>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="License Informatiques de Gestion"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100
                  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0
                  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                  dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <p className="hidden md:flex md:flex-row justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                    />
                  </svg>
                  License IG
                </p>
                <button
                  onClick={updateOpenState}
                  className="md:hidden bg-gray-950 w-80 h-10 rounded-md"
                >
                  <p className="flex flex-row justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                      />
                    </svg>
                    License IG
                  </p>
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
