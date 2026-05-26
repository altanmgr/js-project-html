// const movies = [
//     { title: "Spirited Away", year:2001, Genre:"Animation", status:"Want"},
//     { title: "Inception", year:2010, Genre:"Sci-fi", status:"Watched"},
//     { title: "Fifty first dates", year:2004, Genre:"Romance", Status:"Watched"},
//     { title: "Numafung", year:2001, Genre:"Drama", Status:"Watched"},
//     { title: "Gharjwai", year:2024, Genre:"Romance/Drama", Status:"Watched"},
//     { title: "Jaari", year:2023, Genre:"Drama", Status:"Watched"},
// ]; 


// console.log("Total movies:", movies.length);
// //returns total numbers of movies
// console.log("First Movie:", movies[0]);
// //returns the first movie details 
// console.log("First movie title:", movies[0].title);
// //returns the first movie title
// console.log("First Movie year:", movies[0].year);
// //returns the first movie released date
// console.log("Second Movie status:", movies[1].status);
// //returns the first movie watch status 


// let isWatched = true;
// let movieRating = null;

// console.log(isWatched);
// //should return a boolean value 
// console.log(movieRating)
// //should return null
// console.log(typeof movies[0].title);
// // should return the datatype for title
// console.log(typeof movies[0].year)
// //should return the datatype for movie year

// // const currentYear = 2026; 
// // let yearsAgo = currentYear - movies[0].year; 
// // let isOldfilm = movies[0].year>2000; 
// // let isClassic=movies[0].year <= 2010; 
// // let isExact = movies[0].year === 2001; 
// // console.log(yearsAgo);
// // console.log(isOldfilm);
// // console.log(isClassic); 
// // console.log(isExact); 


const movies = [
    { title: "Spirited Away", year:2001, Genre:"Animation", status:"Want"},
    { title: "Inception", year:2010, Genre:"Sci-fi", status:"Watched"},
    { title: "Fifty first dates", year:2004, Genre:"Romance", Status:"Watched"},
    { title: "Numafung", year:2001, Genre:"Drama", Status:"Watched"},
    { title: "Gharjwai", year:2024, Genre:"Romance/Drama", Status:"Watched"},
    { title: "Jaari", year:2023, Genre:"Drama", Status:"Watched"},
]; 

let firstMovie = movies[0];
let badgeClass = "";
let badgeText = ""; 

if (firstMovie.status ==="want") {
    badgeclass = "badge-want";
    badgeText = "want to watch";
} else if (firstMovie.status === "watching") { 
    badgeClass = "badge-Watching"; 
    badgeText = "watching"; 
} else if (firstMovie.status === "watched"){ 
    badgeClass = "badge-watched"; 
    badgeText = "watched"; 
} else { 
    badgeClass = "badge-want"; 
    badgeText = "unknown"; 
}

console.log(`$(firstMovie.title) > class: ${badgeClass} text:${badgeText}`); 

// now learning operators for search and filter

let movieYear = movies[0].year;
let movieGenre = movies[0].genre; 

let isAnimatedOld = movieGenre === "Animation" && movieYear < 2010; 
console.log(isAnimatedOld); 

let isScifiOrThriller = movieGenre === "Sci-fi" || movieGenre === "thriller"; 
console.log(isScifiOrThriller);

let isNotWatched = !(firstMovie.status === "watched");
console.log(isNotWatched);

// now we use switch for badge logic for checking multiple values against me

let secondMovie = movies[1]; 
switch (secondMovie.status) { 
    case "want": 
        console.log(`${secondMovie.title}: want to watch`); 
        break; 
    case "watching": 
        console.log(`${secondMovie.title}:watching`); 
        break; 
    case "watched": 
        console.log(`${secondMovie.title}:watched`); 
        break;
    default: 
        console.log(`${secondMovie.title}:status unknown`);
}