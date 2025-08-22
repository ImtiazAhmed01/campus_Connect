export function Banner() {
  return (
    <div className="w-11/12 mx-auto">
      {/* banner image */}
      <div className="w-full">
        <div className="py-2">
          <div className="relative w-full flex flex-col justify-end overflow-hidden rounded-lg min-h-[218px] md:min-h-[280px] lg:min-h-[360px]">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuA7Y9QkzqqOD5_lTs0b-ykDxk3gSEj2BFUvC3VextUEt5_KDVavfDXwqKBT9-GV2Ys0u2iKXh5gzYmenLA5OmPYu9T5_Ysud69pqgKdbFzej6pvIR8V5K_vO7ojpIRMJdcU3uT43EXe2po2SopT1YcbNaGhYhwHOATi7Yg_Yai4ymPm2kA40LLpTC3Mloqo8iTpD53T-q3RYHl_JZJLg_Z-VSqPI4L2oLo_jKHzdmtCz49xCDHESondpT3lA_2JNyv-kLamwvscraE')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            {/* Content overlay */}
            <div className="relative z-10 flex p-4 md:p-6 lg:p-8">
              <p className="text-white tracking-light text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Find your perfect college
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* search bar */}
      <div className="">
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
            <div className="text-[#60758a] dark:text-gray-400 flex border-none bg-[#f0f2f5] dark:bg-gray-800 items-center justify-center pl-4 rounded-l-lg border-r-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </div>
            <input
              placeholder="Find your college"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] dark:bg-gray-800 focus:border-none h-full placeholder:text-[#60758a] dark:placeholder:text-gray-500 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
              value=""
            />
          </div>
        </label>
      </div>
    </div>
  );
}
