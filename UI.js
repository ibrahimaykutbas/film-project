class UI {
  static addFilmToUI(newFilm) {
    // Filmi UI'a ekleme

    const filmList = document.querySelector("#films");
    filmList.innerHTML += `
        <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
        `;
  }

  static clearInput(titleInput, directorInput, urlInput) {
    // İstenen durumlarda input alanlarını temizleme
    
    titleInput.value = "";
    directorInput.value = "";
    urlInput.value = "";
  }

  static loadAllFilms(films) {
    // Sayfa her yenilendiğinde storage'daki filmleri UI'da listeleme

    let filmList = document.querySelector("#films");
    films.forEach(function (film) {
      filmList.innerHTML += `
            <tr>
                <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
                <td>${film.title}</td>
                <td>${film.director}</td>
                <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr>
            `;
    });
  }

  static showAlert(type, message) {
    // Olası hatalarda ve işlem sonlarında kullanıcıya UI'da bildirim gösterme

    const firstCardBody = document.querySelectorAll(".card-body")[0];
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;

    firstCardBody.appendChild(alert);

    setTimeout(function () {
      alert.remove();
    }, 3000);
  }

  static deleteFilmToUI(film) {
    // Aranan son kullanıcılar listesinden seçili kullanıcı adını UI'dan silme
    film.parentElement.parentElement.remove();
  }

  static clearAllFilmsToUI() {
    // UI'daki son aranan kullanıcıların tamamını silme

    const filmList = document.querySelector("#films");
    while (filmList.firstElementChild !== null) {
      filmList.firstElementChild.remove();
    }
  }
}
