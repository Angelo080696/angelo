//On veut récupérer le nombre de l'utilisateur
//On va toujours initialiser et affecter les controleurs html qu'on va utiliser au début du fichier
const $debug = document.querySelector(".debug");
const $userNb = document.querySelector(".userNb");
const $userForm = document.querySelector(".userForm");
const $notification = document.querySelector(".notification");

var rnd = parseInt(Math.random() * 100) + 1;
$debug.innerHTML = rnd;
//Je met un event submit sur le form mais 
$userForm.addEventListener('submit', event => {
  //empèche le reload de la page (le comportement par défaut)
  event.preventDefault();
  const userNb = $userNb.value;
  console.log(userNb);
  if (isNaN(userNb) || userNb < 1 || userNb >= 100) {
    alert('Tapez un nombre entre 1 et 100');
    $userForm.reset();
    return;
  }
  else {
    if (userNb < rnd) {
      displayNotif("Trop bas");
    }
    else if (userNb > rnd) {
      displayNotif("Trop Haut");

    } else {
      displayNotif("Gagné!");

    }


  }
})

const displayNotif = function (text) {
  let message = text;
  $notification.innerHTML = message;
  $notification.classList.remove("hidden");
  if(message == "Gagné")
  //déclencher une fonction (qui reviens a l'état d'origine du div notification) après 2 sec
  setTimeout(() => {
    $notification.classList.remove("hidden");
    $notification.classList.add("is-danger");
  }, 2000);
}
