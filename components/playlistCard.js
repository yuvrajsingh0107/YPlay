export const playlistCard = (songNo) => {
  if (songNo === undefined) {
    songNo = 1;
  }
  const img = "song image url"
  const title = "song title";
  const description = "song description";
  return `
      <a class="hover:bg-gray-500 delay-50 duration-100 bg-gray-800 p-5 rounded-lg w-60 group" href="">
        <!-- Image Cover -->
        <img src="${img}" class="w-full rounded shadow" />
      <!-- Title -->
      <h3 class="text-gray-200 font-bold mt-5"> ${title}</h3>
      <!-- Description -->
      <p class="text-gray-400 font-light mt-2 text-xs"> ${description}</p>
    </a>
    `
  };


