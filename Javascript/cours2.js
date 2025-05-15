const $vignettes = document.querySelector('#list-users')
const $bigImg = document.querySelector('.big')//je sauvegarde mon image dans une variable
console.log($vignettes)// info pour moi même

    //
    $vignettes.addEventListener('click', event => {
    const cible = event.target// ce qui permets de faire l'action du click et d'animer la page
    event.preventDefault()
    if (cible.classList.contains('vignette')) { // il cible les images que l'on a mis dans le body
        console.log($vignettes)
        $vignettes.querySelector('.active').classList.remove('active')//pour repeter l'action
        cible.classList.add('active')
        //bigImg.src = event.target.src
    }
}, { once: false })



/* vignette[0]
     fais tout ce qu'il y a dans le foreach pour la vignette[0]
 vignette[1]
     fais tout ce qu'il y a dans le foreach pour la vignette[1]
 

 */