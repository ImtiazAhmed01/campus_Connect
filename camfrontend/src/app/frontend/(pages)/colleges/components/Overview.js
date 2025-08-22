export default function Overview() {
  return (
    <div className="py-8">
      {/* About Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          About Lakeside University
        </h2>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Lakeside University is a leading institution dedicated to fostering
          academic excellence, innovation, and community engagement. With a rich
          history spanning over a century, we offer a diverse range of
          undergraduate and graduate programs designed to prepare students for
          success in their chosen fields. Our campus provides a supportive and
          inclusive environment where students can thrive academically,
          socially, and personally.
        </p>
      </section>

      {/* Academic Programs */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Academic Programs
        </h2>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          Our academic programs are designed to challenge and inspire students,
          providing them with the knowledge and skills needed to excel in their
          careers. We offer a wide range of disciplines, including business,
          engineering, arts and sciences, and health sciences. Our faculty are
          experts in their fields, committed to providing high-quality education
          and mentorship.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {[
            {
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAm2P6gO3tYR5g0IUgF18xBa4YYZ-bF6jTgC8Yabkk3LskDtXIQFr0aAG_EJM25CGz6qbsMY7lBozeLkd6xseHApNUoXVYUPCz5TFtPyqT-4oZ9-Ca_IFZaxX_6lqYJ-Nb5XTOhTraYz1mPgkNVhSKo8TDlcfA_65vjkSPmoSUzh9zAQtO6R1p2Bz8RHNuOTffYGTzT0TizQd35GZF7km8-Zu2SPoK4n5hUymuxKwpZi68FCm0H-IY0r__rurliHWrVG5-Ok7cR13I",
              title: "Business School",
              description:
                "Innovative programs in finance, marketing, and management.",
            },
            {
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCz1Gdo8_Q3tEIe678FdPVUGZt0ibNKnLPKDQfXnGx0jp82qKPLpB69lqykDr4mM-XHZtpIqMLNOjS2mV_MIRFsYCMcgeqIK09wSvM_Zq-axxEbA5EPqoxALu3yYOLh0e-2Jm1QnIMMtTzTXu6hiYrklyxRzxU0z3n-JiIEavCN8XVgNwY9UysA5uu8uuEapwk6t9pOyEmZFuReZDNhNHwFOVvgO271Fe_p5p3BxX9sL69ycox9_Wpj_E-UelPqSAvlAGBixxqqU3A",
              title: "Engineering School",
              description:
                "Cutting-edge research and hands-on learning in various engineering disciplines.",
            },
            {
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCs1-s49fanu_VZ-H8WvpXGKKtBgtvUW_nSJWNBaksH-0atAJ9E3dQXBv5e-_shaJka7j0Tx8YAw5mFmIS-NVJjPwOECUy9CH4H9n35kXvlRNheDeu-ZhBLpqsmBFTLbB6YEcB_t182EEnS-Aa4CZNFGeV1cldphFT5i7lcvwnR-fgjS67mh_QqES3zSlme1VjoWzBp9SiIaysxE0T1Za0_zpbMEKBqk6i5kyNNlI5kiydYGlVfkenzQW-3KG6pv-NWZN8LNMIZq08",
              title: "Arts and Sciences",
              description:
                "Comprehensive education in humanities, social sciences, and natural sciences.",
            },
            {
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAl-y0YolnSgsz_N-KPS6qm_zzSm5p-MaHpeMjyAixaOX2vb8JpmpMEh88rshfuQ75E0qxR_aywUFg_AoCtBEBipGlpsDUGzF4Pw7ooNkk0DFs2EoGyjYb6mIowJColWVTVYCOnNvXa9ZP50bd9rSuv-H6Z0TsOOJ9TfYd4FrQuvrq3GvknqJAwJaT1rFD4OJLe7959lFljoKupwLZlDhsxxvk668Fsg6XmCnFumMnqZQASM0G-A69dsuywGAF8qXCz0Vjilz3WSTc",
              title: "Health Sciences",
              description:
                "Preparing future healthcare professionals with state-of-the-art facilities.",
            },
          ].map((program, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div
                className="w-full h-38 bg-cover bg-center"
                style={{ backgroundImage: `url(${program.image})` }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {program.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Campus Life */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Campus Life
        </h2>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          Lakeside University offers a vibrant campus life with numerous
          opportunities for students to get involved. From student organizations
          and clubs to athletic events and cultural activities, there is
          something for everyone. Our campus facilities include modern residence
          halls, libraries, recreational centers, and dining options, ensuring a
          comfortable and engaging experience for all students.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {[
            {
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuABQL00Hb-_Fr7rLlAdZ6T0WdA95pgVqzMpRLH93keGmLlrlubaaWee7rENZrlE8XjihU7R7tO5D03KJWDxCv7fRRQVkgSXvLi5NqO_ybavSEG59ojYPt5cLW8zb0lmrA3xeu2pAnfkMUavMit_x2gEXLHFILYHo26bf-DzDZMSla5XP8fU-HCKnEsSXG6pQ6KDBbVfBau4Mc221RQurDD6hIGrEZVqsxlaBFVl_yQcxWAQpuDjKF-mfyVwMyYjM8z1krkWjI8MhPo",
              title: "Student Union",
              description: "A hub for student activities and events.",
            },
            {
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBZyedPiDQvr4bWjeJLeUJlGd2BE5X19r1yCnOe_3icMOgn1-LqgSAkiPfcvjhSiSQiJXisZ1lVrPIycwpai8xojK3Px96adWoo9uPCapbXgAheKTYESBpuarEUR9zwRnY4LR5-dFmeMfcxSaqNzng1ACc0Ls9yrYMbDOTJmQS687TG7YgXh88EwB7Xu5dea57dZVHx6dOy-Filf_n74rRewLmPLpyC1Yc7w1hB5fW8Khwy-MqIO4_FdP6GAZrn7V4fWeSlMwse224",
              title: "Recreational Center",
              description:
                "State-of-the-art facilities for fitness and sports.",
            },
            {
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDhsJAYgvfZ_G-KJ4oMkHLBK47ZNT1lGQfOiTjutcPBWZzFDyS6LhNtxhpyYegYjsnk-6mypoKkeneTk8EqlXgSOJawkSnW4Mc66FEtc7jsSYqqwJ5dk_gIgqWn0YS0KLSwqUTv-_29R_NImxRaQuqZ3fbess1ExFiw1HokSYN4mPcujq2KdxAK3ff3xvUT6W44SSS3mOzP5PfBzCF1gkPPDuQ3U3JrAqWF_SnLOQw0z4ZtR90pI7lDaP9-GAyyHHjgKWO50A6T1UY",
              title: "Library",
              description:
                "Extensive collection of resources and study spaces.",
            },
            {
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCAmJJjLqgxMaN5HL5vo--1rdrG4K8aW9Y8C-fYtPxeyqYZPrWnT1MHgMUoyQaP8z3t2JEIRms-8o_jAP5dZhGvoqmC8JXpZeST4qcuYkCfeeAxAN9_bEg7p3FPGxdqAQfZWV3TTqxw3-XqbkHhrVwlKl9aE1WGyR-mZmykIMBXvXtrBff4RLvbhoDok3cNcNd80U0Xez3Yz1UkTZYO63U3Q6uei6Z7YVh7HZS4yEWOKGL-WVzqVxJyCbv-z987A2bueRCwWix0Ig4",
              title: "Residence Halls",
              description: "Comfortable and modern living spaces for students.",
            },
          ].map((facility, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div
                className="w-full h-38 bg-cover bg-center"
                style={{ backgroundImage: `url(${facility.image})` }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {facility.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Notable Alumni */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Notable Alumni
        </h2>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          Our alumni network includes leaders and innovators in various fields,
          reflecting the quality and impact of a Lakeside University education.
          Many of our graduates have gone on to achieve significant
          accomplishments in their careers and communities, serving as role
          models for current and future students.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {[
            {
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAq1hh9JoO3BPyk_Njw2sCvsSzWaiTa26zcAVcWwfziT9dltxaKflkjrE_f5VUVEAjPXxsOI3_UXNH9qbG2EzZpag8rA2ozOe3Y9iOn6aLZJI27PcCYLBAtMmsvKJIXjjGKSnNgA7RLpYr1GdkDTF5Z5JWMXM_UHCpLqBw3Iyf1czk2IP9yCQm1c4SPMK81NdnXsvGThZsv3xPozBmdJ6YACMWrTgzH6aOX7VGNSRQB3CSmXf78-1gQPQImgYr75FhfK7S70btCqaU",
              name: "Dr. Amelia Carter",
              description: "CEO of a leading tech company.",
            },
            {
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuC7l3-7EZwdasliPc_gH2clHoQL4U-reDy0OFzjZS59Z-4-psz04o1MVeZ8gnVb3-oQRM7b8GUOCAqBuQe0CiN7Faj0QAmGN_hkDc4JNCZOZrdpLpC54P6XoVIKEz74zmE3DdCo7uU43ZcW-kT4_t_7955yWCmWvy3FSsleqhdPRm53Bc5OCarTnl3_BACC9k4i-B3-ENWqYcYpdokp0nnXzoooNO6iqkGzAQj-1k29-sPMyC5vG-S7v6vy9DW42vwDKtB8ycz8pns",
              name: "Mr. Ethan Bennett",
              description: "Award-winning architect and designer.",
            },
            {
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAEzqJARVzyv4M8gLO0k70ajvUzfZfD_Iyk4xg3YcQMnBfyGij8GoRERWRcGZndvn-QvyaZZqobmNHWRx75xJEz-6iNE32B2b20vAKppd5O7yHBUrvAdQLWOk28_8wdw8jkOgCStgSrTtt08tPMBgSfDhZiOSeAIA-uu8vWltV9bAhzC6WHnQC3D5-psEyPFZfao8ERhb9ijhnU5helhkfGPbe6hOCQ3GZVKLhlXkB6QfQhiYC4MSo-fHK4hqu5iNJMpnHejZLUja8",
              name: "Ms. Olivia Hayes",
              description: "Renowned author and journalist.",
            },
            {
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAHzKjq7xSw9NDcoxkx9qk4mTGkN3G0gGZcSmuVtnfmD4q6qPSNcQU3ObMJdPqQUjxekPMc0_nhMBfmpYx21tXutCgUHBt6-w5OJsM6QyowCAW5WPm3MzzSBHsua--tzdvcLU5dY3Txy2ufBV98ZTf5uEQKG18cJVrk6GzYZZOXoOv7MAIZ2UWR3A_6eOoOv52y0dyRGJbP31iP__AzBOovdkFEofUfwFOMEGyEwatOpiNRzEZ35D8SYr-jmj6VNQNV_4acPYcXJ_k",
              name: "Mr. Noah Thompson",
              description: "Pioneering researcher in biotechnology.",
            },
          ].map((alumni, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div
                className="w-full h-38 bg-cover bg-center"
                style={{ backgroundImage: `url(${alumni.image})` }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {alumni.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {alumni.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
