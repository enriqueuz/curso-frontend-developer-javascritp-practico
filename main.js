const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartMenu = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const mainContainer = document.querySelector('.main-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
shoppingCartMenu.addEventListener('click', toggleShoppingCart);


function toggleDesktopMenu() {
    closeShoppingCart();
    closeProductDetailAside();

    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    closeShoppingCart();
    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}
function toggleShoppingCart() {
    closeDesktopMenu();
    closeMobileMenu();
    closeProductDetailAside();
    shoppingCartContainer.classList.toggle('inactive');
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
    description: 'A laptop',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Headphones',
    price: 50,
    description: 'A pair of headphones',
    image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg'
});

productList.push({
    name: 'Smartphone',
    price: 500,
    description: 'A smartphone',
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});

productList.push({
    name: 'Watch',
    price: 150,
    description: 'A watch product.',
    image: 'https://images.pexels.com/photos/2078268/pexels-photo-2078268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});

productList.push({
    name: 'Desk',
    price: 250,
    description: 'A desk.',
    image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(products) {
    for (const [index, product] of products.entries()) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image)
        productImg.addEventListener('click', renderProductDetail.bind(null, product.name, product.price, product.description, product.image));
        
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

function renderProductDetail(name, price, description, img) {
    // Create aside
    let productDetailAside = document.querySelector('#productDetail');
    if (productDetailAside) {
        document.body.removeChild(productDetailAside);
    }
    productDetailAside = document.createElement('aside');
    productDetailAside.setAttribute('id', 'productDetail');
    
    // Create close button
    const closeButtonDiv = document.createElement('div');
    closeButtonDiv.classList.add('product-detail-close');
    const closeButtonImg = document.createElement('img');
    closeButtonImg.setAttribute('src', './icons/icon_close.png');
    closeButtonImg.setAttribute('alt', 'close');
    closeButtonDiv.appendChild(closeButtonImg);
    
    // Create product image
    const productImage = document.createElement('img');
    productImage.setAttribute('src', img);
    productImage.setAttribute('alt', name);
    
    // Create product info
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    const productPrice = document.createElement('p')
    productPrice.innerHTML = price
    productInfo.appendChild(productPrice);
    
    const productName = document.createElement('p')
    productName.innerHTML = name
    productInfo.appendChild(productName);
    
    const productDescription = document.createElement('p')
    productDescription.innerHTML = description
    productInfo.appendChild(productDescription);
    
    
    const addToCartButton = document.createElement('button');
    addToCartButton.classList.add('primary-button', 'add-to-cart-button');
    addToCartButton.innerHTML = 'Add to Cart';
    productInfo.appendChild(addToCartButton);
    
    const addToCartButtonImg = document.createElement('img');
    addToCartButtonImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    addToCartButtonImg.setAttribute('alt', 'Add to Cart');
    addToCartButton.appendChild(addToCartButtonImg);
    
    // Add all elements created 
    productDetailAside.appendChild(closeButtonDiv);
    productDetailAside.appendChild(productImage);
    productDetailAside.appendChild(productInfo);
    document.body.insertBefore(productDetailAside, mainContainer)

    // Add event listener to close button
    closeButtonDiv.addEventListener('click', () => {document.body.removeChild(productDetailAside)});

    // Close shopping cart
    closeShoppingCart();

    // Close mobile menu
    closeMobileMenu();

}

function closeProductDetailAside() {
    const productDetailAside = document.querySelector('#productDetail');
    if (productDetailAside) {
        document.body.removeChild(productDetailAside);
    }
}

function closeShoppingCart() {
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
}

function closeMobileMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
}

function closeDesktopMenu() {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
}