// Sample menu data - in a real app this would come from an API
const menuItems = [
    {
        id: 1,
        name: "shiro",
        price: 52.99,
        image: "images/shiro.jpg"
    },
    {
        id: 2,
        name: "Pasta",
        price: 44.99,
        image: "images/pasta.jpg"
    },
    {
        id: 3,
        name: "Caesar Salad",
        price: 99.99,
        image: "images/salad.JPG"
    },
    {
        id: 4,
        name: "Makaroni",
        price: 47.99,
        image: "images/makaroni.jpeg"
    },
    {
        id: 5,
        name: "Iced Coffee",
        price: 54.49,
        image: "images/ice coffee.jpg"
    },
    {
        id: 6,
        name: "Avocado Toast",
        price: 108.99,
        image: "images/toasted avocado .jpg"
    },
    {
        id: 7,
        name: "Chocolate ",
        price: 57.00,
        image: "images/Chocolate .jpg"
    },
    {
        id: 8,
        name: "Coffee",
        price: 24.49,
        image: "images/coffee.jpeg"
    },
    {
        id: 9,
        name: "Tea",
        price: 18.00,
        image: "images/tea.jpeg"
    },
];

// Function to create a menu card
function createMenuCard(item) {
    const card = document.createElement('div');
    card.className = 'menu-card';
    
    const img = document.createElement('img');
    img.className = 'card-image';
    img.src = item.image;
    img.alt = item.name;
    
    // Handle image loading errors
    img.onerror = function() {
        this.onerror = null;
        this.src = 'https://via.placeholder.com/250x180?text=No+Image';
    };
    
    const content = document.createElement('div');
    content.className = 'card-content';
    
    const caption = document.createElement('h3');
    caption.className = 'card-caption';
    caption.textContent = item.name;
    
    const price = document.createElement('p');
    price.className = 'card-price';
    price.textContent = `${item.price.toFixed(2)} Birr`;
    
    content.appendChild(caption);
    content.appendChild(price);
    
    card.appendChild(img);
    card.appendChild(content);
    
    return card;
}

// Render all menu cards
function renderMenuCards() {
    const container = document.querySelector('.menu-container');
    
    menuItems.forEach(item => {
        const card = createMenuCard(item);
        container.appendChild(card);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', renderMenuCards);