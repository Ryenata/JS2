const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (item, img ='https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg') => 
   ` <div class="product-item">
        <img src="${img}" alt="no image"></img>
        <h3 class="product-item__heading">${item.title}</h3>
        <p class="product-item__price">${item.price}</p>
        <button class="buy-btn">Купить</button>
    </div>`;
const renderPage = list => {
    document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
};

renderPage(products);