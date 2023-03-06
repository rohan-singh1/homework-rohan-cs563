function removeLoader() {
  $('#loading').remove();
}

function addDrinkToDoc(drink) {
  console.log(drink.strDrinkThumb);

  let resultsSection = $('#results');
  resultsSection.addClass('resultsSection');

  const drinkDiv = $('<div></div>');
  drinkDiv.attr('class', 'figure');

  let drinkImage = $('<img></<img>');
  const altText = 'Thumbnail of a non-alcoholic drink called ' + drink.strDrink;
  drinkImage.attr('src', drink.strDrinkThumb);
  drinkImage.attr('class', 'drinkImage');
  drinkImage.attr('alt', altText);

  let drinkCaption = $('<h5></h5>');
  drinkCaption.attr('class', 'drinkCaption');

  drinkCaption.append(drink.strDrink);
  drinkDiv.append(drinkImage);
  drinkDiv.append(drinkCaption);
  resultsSection.append(drinkDiv);
}

function displayError() {
  removeLoader();
  console.error('Error!');
  $('#results').append($('<p>An error occured. Please try again.</p>'));
}

$(document).ready(function () {
  const url =
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

  const fetchData = (url) => {
    $.ajax({
      type: 'GET',
      url: url,
      success: (data) => {
        removeLoader();
        const drinksArray = data.drinks;
        if (drinksArray) {
          drinksArray.forEach((drink) => {
            addDrinkToDoc(drink);
          });
        } else {
          displayError();
        }
      },
      error: (error) => {
        displayError();
      },
    });
  };

  fetchData(url);
});
