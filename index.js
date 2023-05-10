
function ReadElement(selector) {
    return document.querySelector(selector);
  }

const cardDetails = [
    {
      title: 'HTML',
      description: 'Web devalopment languege',
      rating: 4,
      imageUrl: 'assits/cards/html.png',
      Author: "sarah smith",
    },     {
        title: 'CSS',
        description: 'Web devalopment languege',
        rating: 5,
        imageUrl: 'assits/cards/css.webp',
        Author: "david Lee",
      },     {
        title: 'JavaScript',
        description: 'Web devalopment languege',
        rating: 4,
        imageUrl: 'assits/cards/javascript.jpg',
        Author: "Emily chen",
      },     {
        title: 'JavaScript',
        description: 'Web devalopment languege',
        rating: 4,
        imageUrl: 'assits/cards/javascript.jpg',
        Author: "Emily chen",
      },     {
        title: 'JavaScript',
        description: 'Web devalopment languege',
        rating: 4,
        imageUrl: 'assits/cards/javascript.jpg',
        Author: "Emily chen",
      },
      {
        title: 'HTML',
        description: 'Web devalopment languege',
        rating: 4,
        imageUrl: 'assits/cards/html.png',
        Author: "sarah smith",
      },     {
          title: 'CSS',
          description: 'Web devalopment languege',
          rating: 5,
          imageUrl: 'assits/cards/css.webp',
          Author: "david Lee",
        },     {
          title: 'JavaScript',
          description: 'Web devalopment languege',
          rating: 4,
          imageUrl: 'assits/cards/javascript.jpg',
          Author: "Emily chen",
        },     {
          title: 'JavaScript',
          description: 'Web devalopment languege',
          rating: 4,
          imageUrl: 'assits/cards/javascript.jpg',
          Author: "Emily chen",
        },     {
          title: 'JavaScript',
          description: 'Web devalopment languege',
          rating: 4,
          imageUrl: 'assits/cards/javascript.jpg',
          Author: "Emily chen",
        }
  ];

  document.querySelector('.card-section-holder').innerHTML = cardDetails.map((card) => `
        
        <div class="card-div">
            
                <img class= "card-image" src=${card.imageUrl} alt="${card.title}">
                <h4 class="card-description px-2">${card.description}</h4>
                <h3 class="card-title px-2">${card.title}</h4>
                <div class ="stars-div" id="rater">
                  <ion-icon class ="rating-icon" name="star"></ion-icon>
                  <ion-icon class ="rating-icon" name="star-half"></ion-icon>
                  <ion-icon class ="rating-icon" name="star-outline"></ion-icon>
                  <ion-icon class ="rating-icon" name="star-outline"></ion-icon>
                  <ion-icon class ="rating-icon" name="star-outline"></ion-icon>
                </div>
                <h4 class="card-author">Author: ${card.Author}</h4>
            
        </div>
    
`).join('');



