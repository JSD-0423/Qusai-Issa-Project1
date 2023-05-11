/* function ReadElement(selector) {
  return document.querySelector(selector);
} */

const cardData = [
  {
    image: 'assits/logos/accessibility.png',
    description: 'Web devalopment languege',
    title: 'HTML',
    author: 'Sarah smith',
  },
  {
    image: './assits/logos/css.webp',
    description: 'Web devalopment languege',
    title: 'CSS',
    author: 'David Lee',
  },
  {
    image: './assits/logos/jquery.png',
    description: 'Web devalopment languege',
    title: 'jQuery',
    author: 'John Johnson',
  },
  {
    image: './assits/logos/angular.png',
    description: 'Web devalopment languege',
    title: 'Angular',
    author: 'Jessica Davis',
  },
  {
    image: './assits/logos/react.webp',
    description: 'Web devalopment languege',
    title: 'React',
    author: 'Olivia Martinez',
  },
  {
    image: './assits/logos/flask.webp',
    description: 'Web devalopment languege',
    title: 'Flask',
    author: 'Ethan Thompson',
  },
  {
    image: './assits/logos/sql.png',
    description: 'Web devalopment languege',
    title: 'SQL',
    author: 'Madison Davis',
  },
  {
    image: './assits/logos/nosql.png',
    description: 'Web devalopment languege',
    title: 'NoSQL',
    author: 'Isabella Wilson',
  },
  {
    image: './assits/logos/restapi.jpeg',
    description: 'Web devalopment languege',
    title: 'REST APIs',
    author: 'Jacob Garcia',
  },
  {
    image: './assits/logos/graphql.png',
    description: 'Web devalopment languege',
    title: 'GraphQL',
    author: 'Mia Brown',
  },
  {
    image: './assits/logos/oauth.png',
    description: 'Web devalopment languege',
    title: 'OAuth',
    author: 'Evelyn Nguyen',
  },
  {
    image: './assits/logos/json.png',
    description: 'Web devalopment languege',
    title: 'JSON',
    author: 'Lian Hernandez',
  },
  {
    image: './assits/logos/ajax.gif',
    description: 'Web devalopment languege',
    title: 'AJAX',
    author: 'Avery Perez',
  },
  {
    image: './assits/logos/wai.jpeg',
    description: 'Web devalopment languege',
    title: 'WebSockets',
    author: 'Victoria Kim',
  },
  {
    image: './assits/logos/responsive.gif',
    description: 'Web devalopment languege',
    title: 'Responsive Design',
    author: 'Ryan Jones',
  },
  {
    image: './assits/logos/accessibility.png',
    description: 'Web devalopment languege',
    title: 'Accessibilty',
    author: 'Samantha Martin',
  },
  {
    image: './assits/logos/ux.jpeg',
    description: 'Web devalopment languege',
    title: 'User Experience(UX)',
    author: 'Luke Davis',
  },
  {
    image: './assits/logos/ui.png',
    description: 'Web devalopment languege',
    title: 'User Interface (UI)',
    author: 'Grace Wilson',
  },
  {
    image: './assits/logos/design-systems.jpeg',
    description: 'Web devalopment languege',
    title: 'Design Systems',
    author: 'Noah Martinez',
  },
  {
    image: './assits/logos/performance.png',
    description: 'Web devalopment languege',
    title: 'Performance Optimization',
    author: 'Chloe Taylor',
  },
  {
    image: './assits/logos/cross-browser.jpeg',
    description: 'Web devalopment languege',
    title: 'Cross-Compatibility',
    author: 'David Lee',
  },
  {
    image: './assits/logos/web-security.jpeg',
    description: 'Web devalopment languege',
    title: 'Web Security',
    author: 'Gabriel Hernandez',
  },
  {
    image: './assits/logos/testing.jpeg',
    description: 'Web devalopment languege',
    title: 'Testing and Debugging',
    author: 'Avery Perez',
  },
  {
    image: './assits/logos/ci-cd.jpeg',
    description: 'Web devalopment languege',
    title: 'Continuous Integration',
    author: 'Madison Davis',
  },
  {
    image: './assits/logos/devops.png',
    description: 'Web devalopment languege',
    title: 'DevOps',
    author: 'Isabella Wilson',
  },
  {
    image: './assits/logos/cloud.jpeg',
    description: 'Web devalopment languege',
    title: 'Cloud Computing',
    author: 'Jacob Garcia',
  },
  {
    image: './assits/logos/docker.png',
    description: 'Web devalopment languege',
    title: 'Docker',
    author: 'Mia Brown',
  },
  {
    image: './assits/logos/microservices.png',
    description: 'Web devalopment languege',
    title: 'MicroServices',
    author: 'Evelyn Nguyen',
  },
  {
    image: './assits/logos/pwa.png',
    description: 'Web devalopment languege',
    title: 'Progressive Web Apps',
    author: 'Lian Hernandez',
  },
  {
    image: './assits/logos/wai.jpeg',
    description: 'Web devalopment languege',
    title: 'Web Accessibility Initiaive',
    author: 'Avery Perez',
  },
  {
    image: './assits/logos/cms.png',
    description: 'Web devalopment languege',
    title: 'Content Mangment Systems',
    author: 'Victoria Kim',
  },
  {
    image: './assits/logos/analytics.png',
    description: 'Web devalopment languege',
    title: 'Web Analytics',
    author: 'Ryan Jones',
  },
];

document.querySelector('.card-section-holder').innerHTML = cardData.map((card) => `
        
        <div class="card-div">
            
                <img class= "card-image" src=${card.image} alt="${card.title}">
                <div class="card-cotants">
                  <h4 class="card-description px-2">${card.description}</h4>
                  <h3 class="card-title px-2">${card.title}</h4>
                  <div class ="stars-div" id="rater">
                    <ion-icon class ="rating-icon" name="star"></ion-icon>
                    <ion-icon class ="rating-icon" name="star-half"></ion-icon>
                    <ion-icon class ="rating-icon" name="star-outline"></ion-icon>
                    <ion-icon class ="rating-icon" name="star-outline"></ion-icon>
                    <ion-icon class ="rating-icon" name="star-outline"></ion-icon>
                  </div>
                  <h4 class="card-author">Author: ${card.author}</h4>
                </div>
        </div>
    
`).join('');
