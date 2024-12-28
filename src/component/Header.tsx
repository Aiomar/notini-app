export default function Header() {
  return (
    <header className="w-full h-24 flex items-center justify-center bg-gray-900 fixed z-50 left-0 right-0">
      <nav className="flex items-center justify-center bg-white border-gray-200 dark:bg-gray-900 w-full">
        <div className="md:mb-0 float-start ml-5">
          <a href="" className="flex items-center">
            <img src="/logo.svg" className="h-10 rounded-full" alt="" />
            <span className="ml-2 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Notini{" "}
            </span>
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-between mx-auto ">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden
            hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400
            dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
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
          <div
            className="hidden md:flex md:w-fit md:items-center"
            id="navbar-default"
          >
            <ul
              className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg
              bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white
              dark:bg-gray-900 dark:border-gray-700 "
            >
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700
                  md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  LSI
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
                  LISI
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
    </header>
  );
}
