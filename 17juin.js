const $modal = document.querySelector('#modal')
const $close = document.querySelector('#close')
const $form = document.querySelector('#contactForm')
const $add = document.querySelector('#add')
const $usersList = document.querySelector('#contactList')
//chercher mes elements dans les id et les cibler

//url api
const urlFirebase = "https://projet-de-angelo-default-rtdb.europe-west1.firebasedatabase.app/contacts"// prendre l'url de mon fire base pour que ça s'affcihe 

//permet de lister les evenement dans le formulaire
$form.addEventListener("submit", (ev) => {
    ev.preventDefault()
    let data = new FormData($form)
    data = Object.fromEntries(data.entries())//mettre les objts qui rentre dans le formulaire (data)
    ajaxRq(data)
    switchModal()
    $form.reset()//permet de recommencer l'action
}) 

const ajaxRq = async (data) => {
    // essayer de tenter qqch 
    try {
        const rq = await fetch(urlFirebase + ".json", {
            method: "post",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(data)
        })

        let resp = await rq.json()// demande une attente avant l'exucution 
        console.log(resp)
        data.key = resp.name
        actualize(data)

    }
    // attraper la chose s'il ya erreur 
    catch (err) {
        console.log(err)
    }
}
   

$add.addEventListener('click', e => {
    switchModal()
})
$close.addEventListener('click', e => {
    switchModal()
})

const switchModal = () => {
    $modal.classList.toggle('hidden')
}

// permets de representer les infos de l'utilisateur et des boutons d'action
const actualize = (data) => {
    const template = `
    <li data-id="${data.key}" class="bg-white shadow rounded p-4 flex justify-between items-center">
    <div>
     <p class="font-medium">${data.firstname} ${data.lastname}</p>
      <p class="text-sm text-gray-500">${data.email}</p>
    </div>
    <div class="space-x-2">
      <button class="text-sm bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500 data-action='edit">Éditer</button>
      <button class="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 data-action='delete">Supprimer</button>
    </div>
  </li>

  `
  //1er bouton du dessus = pour editer l'utilisateur 
  //2e bouton pour supprimer l'utilisateur 

    $usersList.innerHTML += template //correspond à un element dans le dom( dans le <ul> par exemple )

}

const init = async () => {
    try {
        const rq = await fetch(urlFirebase+'.json')
        let resp = await rq.json()
        console.log(resp)
        data = Object.entries(resp).map(([key, value]) => ({
            key: key,
            ...value
            }))
        console.log(data)
        data.forEach(el => {
            actualize(el)
        });

    }
    // attraper la chose s'il ya erreur 
    catch (err) {
        console.log(err)
    }
}

$usersList.addEventListener('click',e => {}
    e.preventDefault())
    if(e.target.dataset.action == 'delete')

init()