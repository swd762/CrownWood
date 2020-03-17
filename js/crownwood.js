
// Slider for advantages block in mobile layout
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="making-arrow-prev"></button>',
    nextArrow: '<button class="making-arrow-next"></button>',
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    // adaptiveHeight: true,
    focusOnSelect: true
});
// ***

// Slider for samples in mobile layout
$('.samples-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // fade: true,
    dots: true,
    centerMode: false,
    // adaptiveHeight: true
});
// ***

// Initilize fancy box for #single_image
$("a#single_image").fancybox();
// ***

// Slowly links transition
$(".slowly").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
});
// ***

// script for yellow bar in top menu
let links = document.querySelectorAll('.menu-js');
let target = document.querySelector('.target');
let t_left = target.getBoundingClientRect().left;
let t_top = target.getBoundingClientRect().top;

function mouseenterFunc() {
    target.classList.add('active');
    const width = this.getBoundingClientRect().width;
    const left = this.getBoundingClientRect().left;
    target.style.width = `${width}px`;
    target.style.transform = `translateX(${left-t_left}px)`;
    target.style.top = `${t_top}px`;
}
function mouseleaveFunc() {
    target.style.removeProperty('width');
    // target.style.removeProperty('transform');
    target.style.transform = `none`;
    target.classList.remove('active');
}

for (let i = 0; i <links.length ; i++) {
    links[i].addEventListener('mouseenter', mouseenterFunc);
    links[i].addEventListener('mouseleave', mouseleaveFunc);
}
// ***

// remove events from a.dots
let no_dots = document.querySelectorAll('.dot-js');
for (let i = 0; i <no_dots.length ; i++) {
    no_dots[i].addEventListener('click', function (event) {
    event.preventDefault();
    });
}
// ***

// Up button initialize
$(document).ready(function() {
    let defaults = {
        containerID: 'toTop', // fading element id
        containerHoverID: 'toTopHover', // fading element hover id
        scrollSpeed: 1200,
        easingType: 'linear'
    };
    $().UItoTop({ easingType: 'easeOutQuart' });
});
// ***

// Maps
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
// ymaps.ready(init);
//
// function init() {
//     // Создание карты.
//     // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/map-docpage/
//     var myMap = new ymaps.Map("map", {
//         // Координаты центра карты.
//         // Порядок по умолчнию: «широта, долгота».
//         center: [55.76, 37.64],
//         // Уровень масштабирования. Допустимые значения:
//         // от 0 (весь мир) до 19.
//         zoom: 12,
//         // Элементы управления
//         // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/controls/standard-docpage/
//         controls: [
//
//             'zoomControl', // Ползунок масштаба
//             'rulerControl', // Линейка
//             'routeButtonControl', // Панель маршрутизации
//             'trafficControl', // Пробки
//             'typeSelector', // Переключатель слоев карты
//             'fullscreenControl', // Полноэкранный режим
//
//             // Поисковая строка
//             new ymaps.control.SearchControl({
//                 options: {
//                     // вид - поисковая строка
//                     size: 'large',
//                     // Включим возможность искать не только топонимы, но и организации.
//                     provider: 'yandex#search'
//                 }
//             })
//
//         ]
//     });
//
//     // Добавление метки
//     // https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/
//     var myPlacemark = new ymaps.Placemark([55.76, 37.64], {
//         // Хинт показывается при наведении мышкой на иконку метки.
//         hintContent: 'Содержимое всплывающей подсказки',
//         // Балун откроется при клике по метке.
//         balloonContent: 'Содержимое балуна'
//     });
//
//     // После того как метка была создана, добавляем её на карту.
//     myMap.geoObjects.add(myPlacemark);
//
// }
// var myMap;
var myMap;
var placemarkCollections = {};
var placemarkList = {};

// Список городов и магазинов в них
var myStores = [
    {
        'storeName': 'Салон «Пол Страны», Профсоюзная',
        'storeAddress':'Москва, Профсоюзная улица, д. 45',
        'storeMetro':'м. Новые Черемушки',
        'coordinates':[55.72532368326033, 37.748675112058876],
    },
    {
        'storeName': 'Салон «Пол Страны», Профсоюзная',
        'storeAddress':'Москва, Профсоюзная улица, д. 45',
        'storeMetro':'м. Новые Черемушки',
        'coordinates':[55.72532368326033, 37.748675112058876],
    }

];
var shopList = [
    {
        'cityName': 'Москва',
        'shops': [
            {'coordinates': [55.72532368326033, 37.748675112058876], 'name': 'Рязанский проспект, 6Ас21'},
            {'coordinates': [55.701677873469, 37.57358050756649], 'name': 'Ленинский проспект, 47с2'}
        ]
    },
    {
        'cityName': 'Санкт-Петербург',
        'shops': [
            {'coordinates': [59.863210042666125, 30.37903938671841], 'name': 'Будапештская улица, 36к2'},
            {'coordinates': [59.99486277158917, 30.406505207030918], 'name': 'проспект Непокорённых'}
        ]
    }
];

ymaps.ready(init);

function init() {

    // Создаем карту
    myMap = new ymaps.Map("map", {
        center: [56, 37],
        zoom: 8,
        controls: [
            'zoomControl'
        ],
        zoomMargin: [20]
    });

    for (var i = 0; i < shopList.length; i++) {

        // Добавляем название города в выпадающий список
        $('select#cities').append('<option value="' + i + '">' + shopList[i].cityName + '</option>');

        // Создаём коллекцию меток для города
        var cityCollection = new ymaps.GeoObjectCollection();

        for (var c = 0; c < shopList[i].shops.length; c++) {
            var shopInfo = shopList[i].shops[c];

            var shopPlacemark = new ymaps.Placemark(
                shopInfo.coordinates,
                {
                    hintContent: shopInfo.name,
                    balloonContent: shopInfo.name
                }
            );

            if (!placemarkList[i]) placemarkList[i] = {};
            placemarkList[i][c] = shopPlacemark;

            // Добавляем метку в коллекцию
            cityCollection.add(shopPlacemark);

        }

        placemarkCollections[i] = cityCollection;

        // Добавляем коллекцию на карту
        myMap.geoObjects.add(cityCollection);

    }

    $('select#cities').trigger('change');
}


// Переключение города
$(document).on('change', $('select#city'), function () {
    var cityId = $('select#cities').val();

    // Масштабируем и выравниваем карту так, чтобы были видны метки для выбранного города
    myMap.setBounds(placemarkCollections[cityId].getBounds(), {checkZoomRange:true}).then(function(){
        if(myMap.getZoom() > 15) myMap.setZoom(15); // Если значение zoom превышает 15, то устанавливаем 15.
    });

    $('#shops').html('');
    for (var c = 0; c < shopList[cityId].shops.length; c++) {
        $('#shops').append('<li value="' + c + '">' + shopList[cityId].shops[c].name + '</li>');
    }

});

// Клик на адрес
$(document).on('click', '#shops li', function () {

    var cityId = $('select#cities').val();
    var shopId = $(this).val();

    placemarkList[cityId][shopId].events.fire('click');
});
//
// // Дождёмся загрузки API и готовности DOM.
// ymaps.ready(init);
//
// function init () {
//     // Создание экземпляра карты и его привязка к контейнеру с
//     // заданным id ("map").
//
//     myMap = new ymaps.Map('map', {
//         // При инициализации карты обязательно нужно указать
//         // её центр и коэффициент масштабирования.
//         center: [55.76, 37.64], // Москва
//         zoom: 10
//     }, {
//         searchControlProvider: 'yandex#search'
//     });
//     // disable scroll on map
//     myMap.behaviors.disable('scrollZoom');
//
// }
