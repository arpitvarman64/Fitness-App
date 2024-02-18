export const exerciseOptions = {
  method:'GET',

  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

 export const YoutubeOptions = {
 
  method:'GET',
  
  headers: {
    'X-RapidAPI-Key': 'c1036a1710msh410ea4a882cfda1p18295bjsn04f9fb1cebcd',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
