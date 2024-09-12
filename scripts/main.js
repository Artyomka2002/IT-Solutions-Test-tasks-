

class CardComponent {
    constructor(containerId, carData) {
        this.container = document.getElementById(containerId);
        this.carData = carData;
    }

    render() {
        // Создаем элементы
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = this.carData.image;
        img.alt = 'Car';

        const nameCar = document.createElement('div');
        nameCar.className = '__card-nameCar';
        nameCar.textContent = this.carData.name;

        const specifications = document.createElement('div');
        specifications.className = '__card-Specifications';
        specifications.textContent = this.carData.specifications;

        const bottomContainer = document.createElement('div');
        bottomContainer.className = '__card-bottomConteiner';

        const price = document.createElement('div');
        price.textContent = this.carData.price;

        const button = document.createElement('button');
        button.textContent = 'Оставить заявку';

        // Собираем структуру
        bottomContainer.appendChild(price);
        bottomContainer.appendChild(button);
        card.appendChild(img);
        card.appendChild(nameCar);
        card.appendChild(specifications);
        card.appendChild(bottomContainer);

        // Добавляем карточку в контейнер
        this.container.appendChild(card);
    }
}

// Пример данных для машины
const carData = [{
    image: './img/card/subaruLEVORG.png',
    name: 'Subaru LEVORG VN5',
    specifications: '2021 • 1.8л • 4WD • Бензин • Вариатор',
    price: '2 115 600 ₽'
}, {
    image: './img/card/mazda.png',
    name: 'Mazda Mazda6 2.5 AT Touring',
    specifications: '2020 • 2.5 л • Передний • Бензин • Автомат',
    price: '2 114 600 $'
}, {
    image: './img/card/TOYOTA CROWN.png',
    name: 'Toyota CROWN AZSH21',
    specifications: '2019 • 2.5 л • 4WD • Гибрид •  Планетарная',
    price: '2 852 600 ₽'
},
{
    image: './img/card/LExux RC F.png',
    name: 'Lexus RC F USC10',
    specifications: '2019 • 5.0 л • Задний • Бензин • Автомат',
    price: '5 965 600 ₽'
}, {
    image: './img/card/mitsubisi Eclips.png',
    name: 'Mitsubishi ECLIPSE CROSS G...',
    specifications: '2019 • 1.5 л • Передний • Бензин • Вариатор',
    price: '2 005 200 ₽'
},, {
    image: './img/card/Lexus RX200T.png',
    name: 'Lexus RX200T AGL20W',
    specifications: '2018 • 2.0 л • 4WD • Бензин • Вариатор',
    price: '2 852 600 ₽'
},, {
    image: './img/card/SUbaruImprezza WRX.png',
    name: 'Subaru IMPREZA WRX VAG',
    specifications: '2017 • 2.0 л • Передний • Бензин • Автомат',
    price: '2 999 800 ₽'
},, {
    image: './img/card/mitsubishi.png',
    name: 'Mitsubishi Outlander PHEV G...',
    specifications: '2013 • 3.0 л • 4WD • Бензин • Автомат',
    price: '2 366 200 ₽'
},]

// Создаем и рендерим компонент
carData.map((item) => {
    const cardComponent = new CardComponent('app', item);
    cardComponent.render()
})
