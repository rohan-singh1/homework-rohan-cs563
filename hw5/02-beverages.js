const url =
  'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

let app = document.querySelector('#results');

function removeLoader() {
  const loader = document.getElementById('loading');
  loader.remove();
}

function displayError(error) {
  removeLoader();
  console.error(error);
  const errorParagraph = document.createElement('p');
  const errorText = document.createTextNode(
    'An error occured. Please try again.'
  );
  errorParagraph.appendChild(errorText);
  app.appendChild(errorParagraph);
}

function processData(data) {
  console.log(data);

  removeLoader();
  data.drinks.forEach((drink) => {
    populateDrinkElement(drink);
  });
}

function populateDrinkElement(drink) {
  const strDrink = drink.strDrink;
  const strDrinkThumbUrl = drink.strDrinkThumb;
  const resultsSection = document.getElementById('results');
  resultsSection.classList.add('results-section');

  let drinkDiv = document.createElement('div');
  drinkDiv.className = 'figure';

  let drinkImage = document.createElement('img');
  drinkImage.src = strDrinkThumbUrl;
  drinkImage.className = 'drink-image';
  drinkImage.alt = 'Thumbnail of a non-alcoholic drink called ' + strDrink;

  let drinkCaption = document.createElement('h5');
  drinkCaption.className = 'drink-caption';

  let drinkCaptionText = document.createTextNode(strDrink);

  drinkCaption.appendChild(drinkCaptionText);
  drinkDiv.appendChild(drinkImage);
  drinkDiv.appendChild(drinkCaption);
  resultsSection.appendChild(drinkDiv);
}

const fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => processData(data))
    .catch((error) => displayError(error));
};

fetchData(url);
