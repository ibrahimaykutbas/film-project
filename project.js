const form = document.querySelector("#film-form");
const titleInput = document.querySelector("#title");
const directorInput = document.querySelector("#director");
const urlInput = document.querySelector("#url");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearFilms = document.querySelector("#clear-films");

eventListener();
function eventListener(e) {
  // Tetiklenecek eventleri bir fonksiyon içerisinde tutma

  form.addEventListener("submit", addFilm);
  document.addEventListener("DOMContentLoaded", loadAllFilms);
  secondCardBody.addEventListener("click", deleteFilm);
  clearFilms.addEventListener("click", clearAllFilms);
}

function addFilm(e) {
  // Inputlardan değerleri alma
  // Dataları UI'a ve storage'a ekleme
  // UI'da işlem sonlarında bildirim gösterme

  const title = titleInput.value.trim();
  const director = directorInput.value.trim();
  const url = urlInput.value.trim();
  if (title === "" || director === "" || url === "") {
    UI.showAlert("danger", "Bütün alanları doldurunuz!");
  } else {
    const newFilm = new Film(title, director, url);
    UI.addFilmToUI(newFilm);
    Storage.addFilmToStorage(newFilm);
    UI.showAlert("info", "Film başarılı bir şekilde eklendi");
  }
  UI.clearInput(titleInput, directorInput, urlInput);
  e.preventDefault();
}

function loadAllFilms() {
  /*  
Sayfa her yenilendiğinde storage'daki filmleri UI'da eklemek için 
local storage ile bağlantı kurmak
*/

  let films = Storage.getFilmsFromStorage();
  UI.loadAllFilms(films);
}

function deleteFilm(e) {
  // Seçilen filmi UI'dan ve storage'dan silme
  // İşlem sonunda UI'da bildirim gösterme

  if (e.target.id === "delete-film") {
    UI.deleteFilmToUI(e.target);
    Storage.deleteFilmToStorage(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent
    );
    UI.showAlert("info", "Film başarılı bir şekilde silindi");
  }
}

function clearAllFilms() {
  // Bütün filmleri UI'dan ve storagedan silme
  // İşlem sonunda UI'da bildirim gösterme

  let films = Storage.getFilmsFromStorage();
  if (localStorage.getItem("films") === null) {
    UI.showAlert("danger", "Film listesi boş!");
  } else {
    if (confirm("Emin misiniz?")) {
      UI.clearAllFilmsToUI();
      Storage.clearAllFilmsToStorage();
      UI.showAlert("info", "Bütün filmler başarılı bir şekilde silindi!");
    }
  }
}
