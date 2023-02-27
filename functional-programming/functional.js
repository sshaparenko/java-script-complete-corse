const movieList = [
{
  title: "Batman",
  year: 1989,
  director: "Tim Burton",
  imdbRating: 7.6
},
{
  title: "Batman Returns",
  year: 1992,
  director: "Tim Burton",
  imdbRating: 7.0
},
{
  title: "Batman Forever",
  year: 1995,
  director: "Joel Schumacher",
  imdbRating: 5.4
},
{
  title: "Batman & Robin",
  year: 1997,
  director: "Joel Schumacher",
  imdbRating: 3.7
},
{
  title: "Batman Begins",
  year: 2005,
  director: "Christopher Nolan",
  imdbRating: 8.3
},
{
  title: "The Dark Knight",
  year: 2008,
  director: "Christopher Nolan",
  imdbRating: 9.0
},
{
  title: "The Dark Knight Rises",
  year: 2012,
  director: "Christopher Nolan",
  imdbRating: 8.5
}];

//1
/*Write a program that shows the titles of movies 
released before the year 20002000, using functional 
programming.*/
console.log("Task1....");
const filterByYear = movie => movie.year < 2000;
const before2000 = (movies, fun) => movies.filter(fun);
const titles = movies => movies.map(m => m.title);

console.log(titles(before2000(movieList, filterByYear)));

//2
console.log("\nTask2....");