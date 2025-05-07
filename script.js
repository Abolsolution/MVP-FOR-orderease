const menuItems = [
    {
        id: 1,
        name: "Shiro",
        amharic: "ሽሮ",
        price: 52.99,
        image: "images/shiro.jpg",
        ingredients: "Chickpea flour, onion, garlic, berbere, oil"
    },
    {
        id: 2,
        name: "Pasta",
        amharic: "ፓስታ",
        price: 44.99,
        image: "images/pasta.jpg",
        ingredients: "Pasta, tomato sauce, garlic, onion, herbs"
    },
    {
        id: 3,
        name: "Caesar Salad",
        amharic: "ሳላድ",
        price: 99.99,
        image: "images/salad.JPG",
        ingredients: "Lettuce, croutons, parmesan, Caesar dressing"
    },
    {
        id: 4,
        name: "Makaroni",
        amharic: "ማካሮኒ",
        price: 47.99,
        image: "images/makaroni.jpeg",
        ingredients: "Macaroni, sauce, vegetables, spices"
    },
    {
        id: 5,
        name: "Iced Coffee",
        amharic: "ቀዝቃዛ ቡና",
        price: 54.49,
        image: "images/ice-coffee.jpg",
        ingredients: "Coffee, milk, ice, sugar"
    },
    {
        id: 6,
        name: "Avocado Toast",
        amharic: "አቮካዶ ቁርስ",
        price: 108.99,
        image: "images/toasted-avocado.jpg",
        ingredients: "Bread, avocado, lemon, salt, pepper"
    },
    {
        id: 7,
        name: "Chocolate",
        amharic: "ቸኮሌት",
        price: 57.00,
        image: "images/chocolate.jpg",
        ingredients: "Cocoa, sugar, milk"
    },
    {
        id: 8,
        name: "Coffee",
        amharic: "ቡና",
        price: 24.49,
        image: "images/coffee.jpeg",
        ingredients: "Coffee beans, hot water"
    },
    {
        id: 9,
        name: "Tea",
        amharic: "ሻይ",
        price: 18.00,
        image: "images/tea.jpeg",
        ingredients: "Tea leaves, water, sugar"
    },
];

function createMenuCard(item) {
    const card = document.createElement('div');
    card.className = 'menu-card';

    const inner = document.createElement('div');
    inner.className = 'card-inner';

    const front = document.createElement('div');
    front.className = 'card-front';

    const back = document.createElement('div');
    back.className = 'card-back';

    // Front
    const img = document.createElement('img');
    img.className = 'card-image';
    img.src = item.image;
    img.alt = item.name;
    img.onerror = function () {
        this.onerror = null;
        this.src = 'https://via.placeholder.com/250x180?text=No+Image';
    };

    const content = document.createElement('div');
    content.className = 'card-content';

    const caption = document.createElement('h3');
    caption.className = 'card-caption';
    caption.innerHTML = `${item.name}<br><span style="font-size: 0.9rem; color: gray;">${item.amharic}</span>`;

    const price = document.createElement('p');
    price.className = 'card-price';
    price.textContent = `${item.price.toFixed(2)} Birr`;

    content.appendChild(caption);
    content.appendChild(price);
    front.appendChild(img);
    front.appendChild(content);

    // Back
    const backContent = document.createElement('div');
    backContent.className = 'card-content';
    const ingredients = item.ingredients.split(',').map(i => i.trim());
    backContent.innerHTML = `
        <strong>Ingredients</strong>
        <ul>${ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
    `;
    back.appendChild(backContent);

    // Assemble
    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);

    // Flip effect
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });

    return card;
}

function renderMenuCards() {
    const container = document.querySelector('.menu-container');
    menuItems.forEach(item => {
        const card = createMenuCard(item);
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderMenuCards);
