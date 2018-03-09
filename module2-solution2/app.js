(function() {
'use strict';

angular.module('App', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

function ShoppingListCheckOffService() {
    var service = this;

    var items = {
        buy:  [
            {
                name: "Milk",
                quantity: "2"
            },
            {
                name: "Donuts",
                quantity: "200"
            },
            {
                name: "Cookies",
                quantity: "300"
            },
            {
                name: "Chocolate",
                quantity: "5"
            }
        ],
        bought: []
    };

    service.itemBought = function (index) {
        var item = items.buy.splice(index, 1)[0];
        items.bought.push(item);
    };
    service.getItems = function () {
        return items;
    }
}

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.list = ShoppingListCheckOffService.getItems().buy;
    toBuy.itemBought = function (index) {
        ShoppingListCheckOffService.itemBought(index);
    }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;

    bought.list = ShoppingListCheckOffService.getItems().bought;
    console.log(bought.list);
}
})();
