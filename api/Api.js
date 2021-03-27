//const API_KEY = 'ivnOLENfhwX4ZHoHOYAN77fN0623';

//get all the matches [upcoming matches]

export const getMatches = () => {
    //const url = ' https://cricapi.com/api/matches/?apikey=${API_KEY}';
    const url = 'https://cricapi.com/api/matches/?apikey=ivnOLENfhwX4ZHoHOYAN77fN0623';
     
     return fetch(url)
     .then((response) => response.json())
     .catch((error) => console.log("ERROR:",error));
 };

 //Load match details

export const getMatchDetail = (id) => {
    const url = 'https://cricapi.com/api/cricketScore/?apikey=ivnOLENfhwX4ZHoHOYAN77fN0623&unique_id=${id}';

    return fetch(url)
     .then((response) => response.json())
     .catch((error) => console.log("ERROR:",error));
};