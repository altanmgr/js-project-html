const movies = [
    { title: "Spirited Away", year:2001, Genre:"Animation", status:"Want"},
    { title: "Inception", year:2010, Genre:"Sci-fi", status:"Watched"},
    { title: "Fifty first dates", year:2004, Genre:"Romance", Status:"Watched"},
    { title: "Numafung", year:2001, Genre:"Drama", Status:"Watched"},
    { title: "Gharjwai", year:2024, Genre:"Romance/Drama", Status:"Watched"},
    { title: "Jaari", year:2023, Genre:"Drama", Status:"Watched"},
]; 


console.log("Total movies:", movies.length);
//returns total numbers of movies
console.log("First Movie:", movies[0]);
//returns the first movie details 
console.log("First movie title:", movies[0].title);
//returns the first movie title
console.log("First Movie year:", movies[0].year);
//returns the first movie released date
console.log("Second Movie status:", movies[1].status);
//returns the first movie watch status 


let isWatched = true;
let movieRating = null;

console.log(isWatched);
//should return a boolean value 
console.log(movieRating)
//should return null
console.log(typeof movies[0].title);
// should return the datatype for title
console.log(typeof movies[0].year)
//should return the datatype for movie year

const currentYear = 2026; 
let yearsAgo = currentYear - movies[0].year; 
let isOldfilm = movies[0].year>2000; 
let isClassic=movies[0].year <= 2010; 
let isExact = movies[0].year === 2001; 
console.log(yearsAgo);
console.log(isOldfilm);
console.log(isClassic); 
console.log(isExact); 

let firstMovie = movies[0];
let badgeClass = "";
let badgeText = ""; 

if (firstMovie.status)