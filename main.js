const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartMenu = document.querySelector('.navbar-shopping-cart');
const shoppingCartItems = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
shoppingCartMenu.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu() {
    const isShoppingCartItemsClosed = shoppingCartItems.classList.contains('inactive');
    if (!isShoppingCartItemsClosed) {
        shoppingCartItems.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    const isShoppingCartItemsClosed = shoppingCartItems.classList.contains('inactive');
    if (!isShoppingCartItemsClosed) {
        shoppingCartItems.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleShoppingCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isdesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!isdesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    shoppingCartItems.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Laptop',
    price: 800,
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Headphones',
    price: 50,
    image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg'
});

productList.push({
    name: 'Smartphone',
    price: 500,
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});

productList.push({
    name: 'Watch',
    price: 150,
    image: 'https://images.pexels.com/photos/2078268/pexels-photo-2078268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});

productList.push({
    name: 'Desk',
    price: 250,
    image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(products) {
    for (product of products) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image)
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerHTML = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerHTML = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);


        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList)