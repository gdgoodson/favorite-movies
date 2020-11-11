function Movie (title, director, year, cast, rating) {
  this.title = title
  this.director = director
  this.year = year
  this.cast = cast
  this.rating = rating
}

var newHope = new Movie('Star Wars: A New Hope', 'George Lucas', '1977', ['Mark Hammil', 'Carrie Fisher', 'Harrison Ford'], 5)
