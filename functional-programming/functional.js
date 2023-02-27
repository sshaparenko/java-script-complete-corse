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

const governmentForms = [{
    name: "Plutocracy",
    definition: "Rule by the wealthy"
},
{
    name: "Oligarchy",
    definition: "Rule by a small number of people"
},
{
    name: "Kleptocracy",
    definition: "Rule by the thieves"
},
{
    name: "Theocracy",
    definition: "Rule by a religious elite"
},
{
    name: "Democracy",
    definition: "Rule by the people"
},
{
    name: "Autocracy",
    definition: "Rule by a single person"
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
/*Complete the following program to compute and return
the names of political forms ending with "cy"*/
console.log("\nTask2....");
const filter = forms => forms.filter(form => form.name.endsWith("cy"));
const formTitles = forms => forms.map(form => form.name);

console.log(formTitles(filter(governmentForms)));

//3
console.log()