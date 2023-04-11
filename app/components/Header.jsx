import Link from "next/link";
const Header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4  lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-center lg:justify-between items-center mx-auto max-w-screen-xl">
          <Link
            href={"/"}
            className="text-blue-500  hover:text-blue-300 text-2xl font-bold"
          >
            Next 13 App
          </Link>
          <div className="flex justify-center lg:justify-between items-center w-full  lg:w-auto lg:order-1">
            <ul className="flex mt-4 font-medium flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  href={"/"}
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={"/code/repos"}
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Code
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
