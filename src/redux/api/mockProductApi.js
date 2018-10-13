import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const products = [{
    "id": "Johnnie Walker",
    "name": "Johnnie Walker",
    "image": "http://www.duty-free.lt/out/pictures/generated/product/1/380_340_75/12520copy.png",
    "stockIn": {
        "full": 10,
        "half": 5,
        "quarter": 2,
        "ninty": 1
    },
    "todayPrice": {
        "full": 100,
        "half": 50,
        "quarter": 2,
        "ninty": 1
    },
    "bookmarked": "true",
    "category": "whisky"
},
{
    "name": "White Horse",
    "id": "White Horse",
    "image": "https://www.winershop.com/3545-large_default/whisky-white-horse.jpg",
    "stockIn": {
        "full": 10,
        "half": 5,
        "quarter": 2,
        "ninty": 1
    },
    "todayPrice": {
        "full": 100,
        "half": 50,
        "quarter": 2,
        "ninty": 1
    },
    "bookmarked": "true",
    "category": "brandi"

},
{
    "name": "Buchanan's",
    "id": "Buchanan's",
    "image": "https://media-verticommnetwork1.netdna-ssl.com/wines/buchanans-master-1l-1016248-s250.jpg",
    "stockIn": {
        "full": 10,
        "half": 5,
        "quarter": 2,
        "ninty": 1
    },
    "todayPrice": {
        "full": 100,
        "half": 50,
        "quarter": 2,
        "ninty": 1
    },
    "bookmarked": "true",
    "category": "brandi"

},
{
    "name": "Royal Stag",
    "id": "Royal Stag",
    "image": "https://cheers.com.np/uploads/products/163144745695133328594156807396321049901373985.png",
    "stockIn": {
        "full": 10,
        "half": 5,
        "quarter": 2,
        "ninty": 1
    },
    "todayPrice": {
        "full": 100,
        "half": 50,
        "quarter": 2,
        "ninty": 1
    },
    "bookmarked": "true",
    "category": "rum"

},
{
    "name": "Blenders Pride",
    "id": "Blenders Pride",
    "image": "https://cheers.com.np/uploads/products/396210614012944066915392016262502224925792506.png",
    "stockIn": {
        "full": 10,
        "half": 5,
        "quarter": 2,
        "ninty": 1
    },
    "todayPrice": {
        "full": 100,
        "half": 50,
        "quarter": 2,
        "ninty": 1
    },
    "bookmarked": "true",
    "category": "jin"

},
{
    "name": "Imperial Blue",
    "id": "Imperial Blue",
    "image": "http://www.malco-trading.com/image/beer23.png",
    "stockIn": {
        "full": 10,
        "half": 5,
        "quarter": 2,
        "ninty": 1
    },
    "todayPrice": {
        "full": 100,
        "half": 50,
        "quarter": 2,
        "ninty": 1
    },
    "bookmarked": "true",
    "category": "scotch"

},
{
    "name": "Monkey Shoulder Triple",
    "id": "Monkey Shoulder Triple",
    "image": "https://i.pinimg.com/originals/87/b3/bc/87b3bc44bf28796278816cf7889e5d23.png",
    "stockIn": {
        "full": 10,
        "half": 5,
        "quarter": 2,
        "ninty": 1
    },
    "todayPrice": {
        "full": 100,
        "half": 50,
        "quarter": 2,
        "ninty": 1
    },
    "bookmarked": "false",
    "category": "breezer"

},
{
    "name": "Glenfiddich 12",
    "id": "Glenfiddich 12",
    "image": "https://www.totalwine.com/media/sys_master/twmmedia/h67/haa/8804218929182.png",
    "stockIn": {
        "full": 10,
        "half": 5,
        "quarter": 2,
        "ninty": 1
    },
    "todayPrice": {
        "full": 100,
        "half": 50,
        "quarter": 2,
        "ninty": 1
    },
    "bookmarked": "false",
    "category": "beer"
}
];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (product) => {
    return replaceAll(product.title, ' ', '-');
};

class ProductApi {
    static getAllproducts() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], products));
            }, delay);
        });
    }

    static saveProduct(product) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minProductTitleLength = 1;
                if (product.title.length < minProductTitleLength) {
                    reject(`Title must be at least ${minProductTitleLength} characters.`);
                }

                if (product.id) {
                    const existingProductIndex = products.findIndex(a => a.id == product.id);
                    products.splice(existingProductIndex, 1, product);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new products in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    product.id = generateId(product);
                    product.watchHref = `http://www.pluralsight.com/products/${product.id}`;
                    products.push(product);
                }

                resolve(Object.assign({}, product));
            }, delay);
        });
    }

    static deleteProduct(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfProductToDelete = products.findIndex(product => {
                    return product.id == id;
                });
                debugger;
                products.splice(indexOfProductToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default ProductApi;
