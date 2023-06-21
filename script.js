var questions = [
  "Zerwales / Zerwalas z kims przez komunikator internetowy",
  "Siedzisz za długo na tiktoku",
  "Płakałaś / Płakałeś na ostatniej imprezie",
  "Miałeś / Miałaś swój pierwszy pocałunek przed 15 rokiem życia",
  "Powiedziałeś/ Powiedziałaś przy spowiedzi wiecej grzechow nie pamietam, a jednak pamietałeś(aś)",
  "Nie zarywałeś(aś) nocki",
  "Nigdy nie podobał Ci sie nikt z klasy",
  "Podobała Ci się kiedykolwiek osoba z tej samej płci co ty",
  "Nigdy nie byłeś zakochany/zakochana",
  "Wolisz starszych/starsze",
  "Kiedykolwiek złamałeś/złamałaś komuś serce",
  "Nigdy nie miałeś / miałaś złamanego serca",
  "Jesteś konfidentem",
  "Próbowałeś kiedyś napoju alkoholowego",
  "Kiedykolwiek wysłałeś(aś) screnna nie do tej osoby ktorej miales wyslac",
  "Zostałeś / Zostałaś wspomniany(a) kiedyś na spotted w stylu :szukam tej osoby:",
  "Miałeś / Miałaś kiedykolwiek erotyczny sen"
];

var challenges = [
  "Przytulaj osobe po twojej lewej lub prawej stronie przez minute",
  "Try not to kiss",
  "Idź do jakiegos pomieszczenia z dowolna osoba i zostan tam przez 5 minut (czas moze byc inny, zalezy jakie jest pomieszczenie)",
  "Usiądź na kolana osobie po twojej prawej lub lewej stronie (min. 5 minut) - twój wybór!",
  "Pozwól zakryć sobie oczy, reszta graczy wybierze część ciała jakiejs osoby, ktora bedziesz musial / musiala dotknac i odgadnac kto to jest",
  "Przytulaj osobe po twojej lewej lub prawej stronie przez minute",
  "Try not to kiss",
  "Idź do jakiegos pomieszczenia z dowolna osoba i zostan tam przez 5 minut (czas moze byc inny, zalezy jakie jest pomieszczenie)",
  "Usiądź na kolana osobie po twojej prawej lub lewej stronie (min. 5 minut) - twój wybór!",
  "Pozwól zakryć sobie oczy, reszta graczy wybierze część ciała jakiejs osoby, ktora bedziesz musial / musiala dotknac i odgadnac kto to jest"
];

var currentQuestionIndex = 0;
var currentChallengeIndex = 0;

var questionButton = document.getElementById("question-button");
var challengeButton = document.getElementById("challenge-button");

questionButton.addEventListener("click", displayNextQuestion);
challengeButton.addEventListener("click", displayNextChallenge);

function displayNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex >= questions.length) {
    document.getElementById("question-text").innerText = "Koniec pytań!";
    questionButton.disabled = true;
  } else {
    document.getElementById("question-text").innerText = questions[currentQuestionIndex];
  }
}

function displayNextChallenge() {
  currentChallengeIndex++;
  if (currentChallengeIndex >= challenges.length) {
    document.getElementById("challenge-text").innerText = "Koniec wyzwań!";
    challengeButton.disabled = true;
  } else {
    document.getElementById("challenge-text").innerText = challenges[currentChallengeIndex];
  }
}
