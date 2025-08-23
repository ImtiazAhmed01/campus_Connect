// import { Banner } from "./components/Banner";
// import CollegeLife from "./components/CollegeLife";
// import FeaturedColleges from "./components/FeaturedColleges";
// import Reviews from "./components/Reviews";
// import StudentResearch from "./components/StudentResearch";


// export default function Home() {
//   return (
//     <div>

//       <Banner />
//       <FeaturedColleges />
//       <CollegeLife />
//       <StudentResearch />
//       <Reviews />
//     </div>
//   );
// }
"use client";

import { Banner } from "./components/Banner";
import CollegeLife from "./components/CollegeLife";
import FeaturedColleges from "./components/FeaturedColleges";
import Reviews from "./components/Reviews";
import StudentResearch from "./components/StudentResearch";
import SearchColleges from "./components/SearchColleges";

export default function Home() {
  return (
    <div>
      <Banner />
      <SearchColleges /> {/* live results as you type */}
      <FeaturedColleges />
      <CollegeLife />
      <StudentResearch />
      <Reviews />
    </div>
  );
}
