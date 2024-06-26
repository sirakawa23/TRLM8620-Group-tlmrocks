import i18n from '../services/i18n.js';
import {locale} from '../app.js';

var productCatalog = [{}];

const products = {

    loadProductCatalog : async() => {

        await i18n.loadStringsJSON(locale);
        console.log("Loaded locale strings for " + locale);

        productCatalog = [{
            "productID" : 1,
            "type": "droid",
            "class": 2,
            "title": i18n.getString("title", "1"),
            "price": 1995,
            "qty": 0,
            "imageURL": "img/E bike 2.jpg",
            "desc": i18n.getString("desc", "1")
        },
        {
            "productID" : 2,
            "type": "droid",
            "class": 4,
            "title": i18n.getString("title", "2"),
            "price": 3695,
            "qty": 0,
            "imageURL": "img/E bike 4.jpg",
            "desc": i18n.getString("desc", "2")
        },
        {
            "productID" : 3,
            "type": "droid",
            "class": 1,
            "title": i18n.getString("title", "3"),
            "price": 8995,
            "qty": 0,
            "imageURL": "img/E bike 1.jpg",
            "desc": i18n.getString("desc", "3")
        },
        {
            "productID" : 4,
            "type": "droid",
            "title": i18n.getString("title", "4"),
            "price": 4295,
            "qty": 0,
            "imageURL": "img/E bike 3.jpg",
            "desc": i18n.getString("desc", "4")
        },
        {
            "productID" : 5,
            "type": "vehicle",
            "title": i18n.getString("title", "5"),
            "price": 29.95,
            "qty": 0,
            "imageURL": "img/basket.jpg",
            "desc": i18n.getString("desc", "5")
        },
        {
            "productID" : 6,
            "type": "droid",
            "title": i18n.getString("title", "6"),
            "price": 2995,
            "qty": 0,
            "imageURL": "img/E bike 5.jpg",
            "desc": i18n.getString("desc", "6")
        },
        {
            "productID" : 7,
            "type": "vehicle",
            "title": i18n.getString("title", "7"),
            "price": 99.95,
            "qty": 0,
            "imageURL": "img/cover.jpg",
            "desc": i18n.getString("desc", "7")
        },
        {
            "productID" : 8,
            "type": "vehicle",
            "title": i18n.getString("title", "8"),
            "price": 17.95,
            "qty": 0,
            "imageURL": "img/bell.jpg",
            "desc": i18n.getString("desc", "8")
        },
        /*
        {
            "productID" : 9,
            "type": "vehicle",
            "title": i18n.getString("title", "9"),
            "price": 200000,
            "qty": 0,
            "imageURL": "img/ETA-2.png",
            "desc": i18n.getString("desc", "9")
        },
        {
            "productID" : 10,
            "type": "droid",
            "title": i18n.getString("title", "10"),
            "price": 3450,
            "qty": 0,
            "imageURL": "img/R3.png",
            "desc": i18n.getString("desc", "10")
        },
        {
            "productID" : 11,
            "type": "vehicle",
            "title": i18n.getString("title", "11"),
            "price": 150000,
            "qty": 0,
            "imageURL": "img/T70.png",
            "desc": i18n.getString("desc", "11")
        },
        {
            "productID" : 12,
            "type": "vehicle",
            "title": i18n.getString("title", "12"),
            "price": 134999,
            "qty": 0,
            "imageURL": "img/Y-Wing.png",
            "desc": i18n.getString("desc", "12")
        },
        {
            "productID" : 13,
            "type": "droid",
            "title": i18n.getString("title", "13"),
            "price": 4999,
            "qty": 0,
            "imageURL": "img/Super_Tactical.png",
            "desc": i18n.getString("desc", "13")
        }
        */
        ];

        return productCatalog;
    }
}


export default products;