const researchPapers = [
  "Research Paper 1",
  "Research Paper 2",
  "Research Paper 3",
];

const StudentResearch = () => {
  return (
    <div className="w-11/12 mx-auto pt-10">
      <h2 className="text-3xl font-bold pt-5 pb-3 text-gray-900 dark:text-white">
        Student Research
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {researchPapers.map((paper, index) => (
          <div
            key={index}
            className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] dark:border-gray-800 hover:bg-white dark:bg-gray-900 p-4 items-center bg-[#f0f2f5] dark:hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <div className="text-[#111418] dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"></path>
              </svg>
            </div>

            <h2 className="text-[#111418] dark:text-white text-base font-bold leading-tight">
              {paper}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentResearch;
