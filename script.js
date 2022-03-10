var dadosFilmes = []

const fetchFilms = () => {
    const url = `https://ghibliapi.herokuapp.com/films`
    const ghibliCards = document.querySelector('.ghibli');
    fetch(url)
        .then(resposta => resposta.json())
        .then(ghibli => {
            for (let i = 0; i <= ghibli.length - 1; i++) {
                dadosFilmes.push(ghibli[i]);
                var description = dadosFilmes[i].description;
                if (description.length >= 400) {
                    description = description.split(".", 3)
                    description = description[0] + ". " + description[1] + ".";
                }
                ghibliCards.innerHTML += `
                <div class="col pb-4 my-0 ">
                <div class="card col-md-12 cards-style px-2 box-shadow-cards">
                    <div class="row">
                        <div class="col-md-4 d-flex flex-column justify-content-center align-items-center">
                            <img src="${dadosFilmes[i].image}"
                                class="img-fluid rounded-start card-img" alt="${dadosFilmes[i].title}">
                        </div>
                        <div class="col-md-8 mb-5">
                            <div class="card-body cards-style">
                                <h5 class="card-title fs-2">${dadosFilmes[i].title}</h5>
                                <p class="card-subtitle fs-5 my-2">${dadosFilmes[i].director} | ${dadosFilmes[i].release_date}</p>
                                <p class="card-text pb-5">${description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

            }
            ;

        });
}


fetchFilms()