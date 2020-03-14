// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function cardCreator(data) {
    const cardContainer = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const authImg = document.createElement('img');
    const name = document.createElement('span');

    cardContainer.append(headline);
    cardContainer.append(author);

    author.append(imgContainer);
    author.append(name);

    imgContainer.append(authImg);

    cardContainer.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = `${data.headline}`;
    authImg.setAttribute('src', `${data.authorPhoto}`);
    name.textContent = `By ${data.authorName}`;


    return cardContainer;
}

const cardsCont = document.querySelector('.cards-container');

axios
    .get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(response => {
        console.log(response);
        console.log(response.data);

        const articleData = response.data.articles;
        articleData.javascript.forEach(el => {
            const card = cardCreator(el);
            cardsCont.append(card);
        })
        articleData.bootstrap.forEach(el => {
            const card = cardCreator(el);
            cardsCont.append(card);
        })
        articleData.technology.forEach(el => {
            const card = cardCreator(el);
            cardsCont.append(card);
        })
        articleData.jquery.forEach(el => {
            const card = cardCreator(el);
            cardsCont.append(card);
        })
        articleData.node.forEach(el => {
            const card = cardCreator(el);
            cardsCont.append(card);
        })
    })

    .catch(error => {
        console.log(`Error encountered.`, error)
    });