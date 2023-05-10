function ReadElement(selector) {
    return document.querySelector(selector);
  }

const cardDetails = [
    {
      title: 'HTML',
      name: 'Web devalopment languege',
      rating: 4,
      imageUrl: 'assits/cards/html.png',
      Author: "sarah smith",
    },     {
        title: 'CSS',
        name: 'Web devalopment languege',
        rating: 5,
        imageUrl: 'assits/cards/css.webp',
        Author: "david Lee",
      },     {
        title: 'JavaScript',
        name: 'Web devalopment languege',
        rating: 4,
        imageUrl: 'assits/cards/javascript.jpg',
        Author: "Emily chen",
      }
  ];

  document.querySelector('.card-section-holder').innerHTML = cardDetails.map((card) => `
    
        <div class="card-div">
            <img class= "card-image" src=${card.imageUrl} alt="${card.title}">
            <h4 class="card-title px-2">${card.title}</h4>
            <span class="card-author">${card.Author}</span>
        </div>
    
`).join('');



