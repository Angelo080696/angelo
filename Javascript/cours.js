const vignettes = document.querySelectorAll('.vignette')//
const $bigImg = document.querySelector('.big')
console.log(vignettes)
vignettes.forEach(vignette => {
    let eventClick = vignette.addEventListener('click', event => {
        const cible = event.target
        console.log(event.target.src)
        document.querySelector('.active').classList.remove('active')
        cible.classList.add('active')
        $bigImg.src = event.target.src

    },{once:true})
    })
