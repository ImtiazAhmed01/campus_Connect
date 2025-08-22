const Footer = () => {
  return (
    <footer className="flex justify-center bg-white dark:bg-gray-900 border-t border-[#f0f2f5] dark:border-gray-800">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
          <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
            <a
              className="text-[#60758a] dark:text-gray-400 text-base font-normal leading-normal min-w-40 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              href="#"
            >
              About
            </a>
            <a
              className="text-[#60758a] dark:text-gray-400 text-base font-normal leading-normal min-w-40 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              href="#"
            >
              Contact
            </a>
            <a
              className="text-[#60758a] dark:text-gray-400 text-base font-normal leading-normal min-w-40 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
          <p className="text-[#60758a] dark:text-gray-400 text-base font-normal leading-normal">
            @2024 CampusConnect. All rights reserved.
          </p>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;