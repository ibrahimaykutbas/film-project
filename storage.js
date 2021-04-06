class Storage {
  static addFilmToStorage(newFilm) {
  // Filmi local storage'a ekleme

    let films = this.getFilmsFromStorage();
    films.push(newFilm);
    localStorage.setItem("films", JSON.stringify(films));
  }

  static getFilmsFromStorage() {
    // Local storage içerisinde array kontrolü ve bu arrayi dönme

    let films;
    if (localStorage.getItem("films") === null) {
      films = [];
    } else {
      films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
  }

  static deleteFilmToStorage(filmTitle) {
    // Seçilen filmi local storage'dan silme

    let films = this.getFilmsFromStorage();
    films.forEach(function (film, index) {
      if (filmTitle === film.title) {
        films.splice(index, 1);
      }
    });
    localStorage.setItem("films", JSON.stringify(films));
  }

  static clearAllFilmsToStorage() {
    // Local storage'daki array'i silme
    localStorage.removeItem("films");
  }
}
