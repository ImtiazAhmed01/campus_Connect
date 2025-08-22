export default function Reviews() {
  const reviews = [
    {
      name: "Sophia Carter",
      date: "2 months ago",
      rating: 5,
      content: "The University of Innovation has an amazing campus and great faculty. I highly recommend it!",
      likes: 12,
      dislikes: 2,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAe3YNHOksyT9NuMYEYglvcTdTN1BFr0dqn3MkjLL86F15yzPccGd3vvFqeeoFWIQ4-HGPjlNKMVVzHOTuW6CRYLeynmo_BvZRaL63rdlZC_yyXdd9xVlCh-_QBpT2kbc3L-CqyrlkhqC-xMEm33wxxorQSMyR9LvQzC8zvDeljSMLkmAp3Gcs5Bz2LHHbxnZri-aAdf_eeg_z8Kn4NhzgptCnog4_bg4E7pwsElrb1bweYFudJwz1N9YFOpbhmvT4H4oi_xKV8NE"
    },
    {
      name: "Ethan Bennett",
      date: "3 months ago",
      rating: 4,
      content: "Metropolitan College offers a diverse range of programs and a vibrant student community. I enjoyed my time there.",
      likes: 8,
      dislikes: 1,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABXxuuqd7dqVkHXcTj7PA578dHdKxLNk1-Ss3gET_6dq82GiJ3Hyh6M6guNixbPWzLYZ4Zbx9T7UdZQtzhopFN416tjlWTx3fqZSS1Egxp5eu78U2QIbNuYmoZkE2YNgJgqGHXyJvEFREqvRQHouYiIGEmL8eEqC9ob2XYYrOdg8z0ZbXZS4paHlpd-D38UCCld78PadPF25Ch8SsiTvrHujJz0tWun_2IbMxwWUM7w--VXGWmIzscAdaBFAIRoI-hLWGCj56jc3U"
    }
  ];
  return (
    <div className="w-11/12 mx-auto py-10">
      <h2 className="text-3xl font-bold pt-5 pb-3 text-gray-900 dark:text-white">
        Reviews
      </h2>
      <div className="flex flex-col gap-2 overflow-x-hidden">
        {reviews.map((review, index) => (
          <div key={index} className="flex flex-col gap-3 bg-white dark:bg-gray-900 p-4 rounded-lg border border-[#dbe0e6] dark:border-gray-800">
            <div className="flex items-center gap-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{ backgroundImage: `url('${review.image}')` }}
              ></div>
              <div className="flex-1">
                <p className="text-[#111418] dark:text-white text-base font-medium leading-normal">
                  {review.name}
                </p>
                <p className="text-[#60758a] dark:text-gray-400 text-sm font-normal leading-normal">
                  {review.date}
                </p>
              </div>
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={i < review.rating ? "text-yellow-400" : "text-[#bac4cf] dark:text-gray-600"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d={i < review.rating ?
                        "M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" :
                        "M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"
                      }
                    ></path>
                  </svg>
                </div>
              ))}
            </div>
            <p className="text-[#111418] dark:text-white text-base font-normal leading-normal">
              {review.content}
            </p>
            <div className="flex gap-9 text-[#60758a] dark:text-gray-400">
              <button className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <div className="text-inherit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"
                    ></path>
                  </svg>
                </div>
                <p className="text-inherit">{review.likes}</p>
              </button>
              <button className="flex items-center gap-2 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                <div className="text-inherit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"
                    ></path>
                  </svg>
                </div>
                <p className="text-inherit">{review.dislikes}</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};