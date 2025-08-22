export default function Overview1() {
  const campusImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBej8pE989Bk65FJPUVo_ANIhpPmpJXA-Xvr_XZ3t_FYcyvJVhV9GRuxK9FPWqfGZw2BrOZphvpmpi24HENCgd_6TdvhnDC9vUx86rEH-Kg6KvpgszRXxUcFR1Mn8PfAFvz6AkaoXO9UCVB5Fcmtm1b1PE2JQU6uiecoQZ5TcwALA05dlYphWGXFCaJjpm8PD6EB0KK11QTxQf3ZW83Cmkeb9sEXYx9h6DNzbPvT7vkc9Uz_9Pm3TU2zacvSXS-3bMOSOz-s8lLzUg",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBBM2PdlmJj-V2Ns-L4f2ZMeWFRpnFM-0RV9L7Ecvz8CEEuChHSzliDzfHPrPG3pZTXvN7gcpnU4Lr5EzEswSAM3Bd0WMvNreAsfTpyPgIdVTXK6dCH3Lk3Ugp9AzmwLq2ACvM7dE-OkLcmo8YdYaTGnW1YGRx0BlDtbKQsVQp7I2wTOhBtE3T3LqY25L_b6cy8qX2oeHg_89oR4iausgVTMgiqEW01cTBZE5yaiaD6mXRWhWkotXDGo8yHeQFhfBjScUrB13HAOE4",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAbraYXFS0XnCQJJsNs9b-utCdK7krCP6qogMv-6dorhVT-R8WxjZ1zIXditmm85bsTdri8h6fhx0On7wIpDb8XK0uTVqbOstT9FD5zzq9k2PZlIfX1GSwg0_b3zNaKOGI6bBF0pcA4ZQCz6xDKasRqQm5OfEv2PSQVyFOgXRFnHenPlDxXLYkFhCLb1Vd-K-hLWGoB5RMVZqVk7XUSpeCNzqQfX32lZXtASlj11t0VgYiMER1Z8zDehPjU0y00O_BLO4qQcJBNrvo",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAX3Fcx7329e2CSljqYisfl80dAiUgLe1f0ssysvvjM8aC7wZ8eHAQLhhyMWObp2PJmkj2PdXuksBNjYm0rE_BP9b1a4dn4TKfui2wM5kgb0N-Vw1fVTG8am1ccQYExPayCkw4ryQR3rzUfbFu2UlgUPKWjb3IYRvV48Z6yytbBkCSD06pTXNiaR6WZahXbwBv7Uffg9jISw6i392VDVipCv-HGe6paojfbqA27oIkkySqzTnAOzWY04hEqdmowOQZde-rpKn9Ssl0",
  ];

  const reviews = [
    {
      name: "Sophia Clark",
      date: "May 15, 2023",
      rating: 5,
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCI575Np384b0ASIILOdXrAKtpA80Nm68bU5rilz5T2CAeZkfzhiuH4zFkK0uYeWRmNzw0bFErfH1sdKfYV_ADNZCxEJZDEfDtLQnTcze7-COBDlk6LMbAjMZkE-rNRzZsPNXxqHHqjGm4wcH_7C9p63ESo3l5xWR4vJuhm1L6uUaB1PmgGmsNxHhSG9Ih_wC0baHhP7TWOLRngG3h3VfXO30zWBDClm_jvx5n8uVc1u8u8WURXqh_5lbsV_cdgc_pRcRs37_tAI3g",
      comment:
        "My experience at University of Metropolitan has been nothing short of amazing. The faculty are incredibly supportive, and the campus environment is vibrant and inclusive.",
    },
    {
      name: "Ethan Bennett",
      date: "June 20, 2023",
      rating: 4,
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBI7F8h_uYHmx6UwgLgFMed7964IFQudn6NkLrrArNO1viB2_-3OmvykPM_79dl7kqWrU4ZTtbvhrfYOCKzjurdxxZdJA8EseE2bH5Nag60ABAH0VoB9XX4Kiz5_-uUdelU4KBxAePSus_meVrAQCasv0sJSjh2oxswuVmJjG8e24KCQwxGSj42Aeo6o8ImqM6KddrLzLz2W3JjO5xu8YVfbVwU4F1RDqidE3sP0BSIcgX1RgHjlA01pyy3yMErqNUYBDyYccUUDWQ",
      comment:
        "University of Metropolitan offers a great balance between academics and social life. The courses are challenging but rewarding, and there are plenty of opportunities to get involved.",
    },
  ];

  return (
    <>
      {/* About Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          About University of Metropolitan
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          University of Metropolitan is a vibrant academic community committed
          to fostering intellectual growth and personal development. With a rich
          history and a forward-thinking approach, we offer a wide range of
          undergraduate and graduate programs designed to prepare students for
          success in a rapidly changing world.
        </p>
      </section>

      {/* Campus Life */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Campus Life
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {campusImages.map((img, i) => (
            <div
              key={i}
              className="aspect-square bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url('${img}')` }}
            />
          ))}
        </div>
      </section>

      {/* Student Reviews */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Student Reviews
        </h2>

        <div className="space-y-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 bg-cover bg-center rounded-full"
                  style={{ backgroundImage: `url('${review.avatar}')` }}
                />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {review.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {review.date}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled={i < review.rating} />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300">
                {review.comment}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button className="px-6 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            View All Reviews
          </button>
        </div>
      </section>
    </>
  );
}

// Star icon component for ratings
function StarIcon({ filled }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      className={
        filled ? "text-yellow-400" : "text-gray-300 dark:text-gray-500"
      }
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
