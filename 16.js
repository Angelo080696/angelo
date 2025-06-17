$liste = document.querySelector('.result__container')
$searchForm = document.querySelector('.search__form')

$searchForm.addEventListener('submit', async e => {
    e.preventDefault();
    $liste.innerHTML = ''
    const data = new FormData($searchForm)
    const day = data.get('day')
    const month = data.get('month')
    const year = data.get('year')
    const urlApi = `https://fr.wikipedia.org/api/rest_v1/feed/onthisday/events/${month}/${day}`

        try {
            let resp = await fetch(urlApi)
            resp = await resp.json()
            console.log(resp)
            affEvents(resp.events)
        }
        catch(err) {
            console.log(err)
           // $liste.innerHTML = (year === null) ? `<p>Pas d'event pour le ${day}/${month}</p>` : `<p>Pas d'event pour le ${day}/${month}/${year}</p>`
        }   
   
})

const affEvents = (events) => {

events.forEach(event => {
    if (!event.pages || event.pages.length === 0) return;

    console.log(event.pages[0].thumbnail)
    const image = event.pages[0]?.thumbnail?.source 
    ?? 'https://endlessicons.com/wp-content/uploads/2012/11/image-holder-icon-614x460.png';

    const url = event.pages[0].content_urls?.desktop?.page ?? '#';

    const template = `
<details class="card">
      <summary class="card__title">
    ${event.year} - ${event.pages[0].title.replace(/_/g, ' ')}
      </summary>
      <div>
        <div class="card__more">
          <img class="card__image" src="${image}" alt="image holder"/>
          <div class="card__info">
            <p class="card__text">${event.text}</p>
          </div> 
        </div>
        <div class="card__links">
          <a class="card__article" href="${url}">🔗 Lire l'article complet</a>
          <!--<p class="card__also">Voir aussi : autre</p>-->
        </div>
      </div>
    </details>
`
    $liste.insertAdjacentHTML('beforeend', template)
    
       
});
}