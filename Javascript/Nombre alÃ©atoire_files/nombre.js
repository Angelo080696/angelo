function devinerNombre() {
    console.log("Pense à un nombre entre 1 et 100, et je vais essayer de le deviner.");
    console.log("Réponds avec :");
    console.log(" - 'incorrect si ce n'est pas le bon nombre'.");
    console.log(" - 'tu as gagné' si la réponse est correct.");
   
    
    let bas = 1;
    let haut = 100;
    let essais = 0;
    
    function poserQuestion() {
      essais++;
      // L'ordinateur fait une supposition
      let guess = Math.floor((bas + haut) / 2);
      let reponse = prompt(`Est-ce que c'est ${guess} ?\nRéponse (plus/moins/correct) :`).toLowerCase();
      
      if (reponse === "correct") {
        alert(`J'ai deviné le nombre ${guess} en ${essais} essais!`);
      } else if (reponse === "plus") {
        bas = guess + 1;
        poserQuestion(); // Redemander avec les nouvelles limites
      } else if (reponse === "moins") {
        haut = guess - 1;
        poserQuestion(); // Redemander avec les nouvelles limites
      } else {
        alert("Réponse invalide. Réponds avec 'plus', 'moins', ou 'correct'.");
        poserQuestion(); // Redemander si la réponse est invalide
      }
    }
  
    poserQuestion();
  }
  
  // Appeler la fonction pour démarrer le jeu
  devinerNombre();