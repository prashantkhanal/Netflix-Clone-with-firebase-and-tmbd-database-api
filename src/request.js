const API_KEY = 'e985a6aadc31bf79ad0db0403ac0b7d8';

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
};
export default requests;
