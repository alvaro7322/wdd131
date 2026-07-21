const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

if (hamButton) {
  hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
  });
}

// 2. Arreglo de Templos (Coma agregada entre Arequipa y Trujillo)
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple5.jpg"
  },
  {
    templeName: "Arequipa Perú",
    location: "Arequipa, Perú",
    dedicated: "2019, December, 15",
    area: 26969,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/arequipa-peru-temple/arequipa-peru-temple-7185.jpg"
  },
  {
    templeName: "Trujillo Perú",
    location: "Trujillo, Perú",
    dedicated: "2015, June, 21",
    area: 28200,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/trujillo-peru-temple/trujillo-peru-temple-35171.jpg"
  }
];

function displayTemples(templeList) {
  const mainContainer = document.querySelector("main");
  
  const existingCards = mainContainer.querySelectorAll(".temple-card");
  existingCards.forEach(card => card.remove());


  templeList.forEach(temple => {
    // Crear elementos HTML
    let card = document.createElement("section");
    card.classList.add("temple-card");

    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;
    

    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", "400");
    img.setAttribute("height", "250");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    mainContainer.appendChild(card);
  });
}

const navLinks = document.querySelectorAll(".navigation a");
const pageHeading = document.querySelector("main h2");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const filter = link.textContent.trim();
    if (pageHeading) pageHeading.textContent = filter;

    switch (filter) {
      case "Old":
        displayTemples(temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900));
        break;

      case "New":
        displayTemples(temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000));
        break;

      case "Large":
        displayTemples(temples.filter(t => t.area > 90000));
        break;

      case "Small":
        displayTemples(temples.filter(t => t.area < 10000));
        break;

      default:
        displayTemples(temples);
        break;
    }
  });
});

displayTemples(temples);