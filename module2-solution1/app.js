(function() {
'use strict';

angular.module('App', [])
.controller('MainController', MainController)
.provider('ListService', ListServiceProvider)
.config(Config);

Config.$inject = ['ListServiceProvider'];
function Config (ListServiceProvider) {
    ListServiceProvider.list = [
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
    ];
}

MainController.$inject = ['ListService']
function MainController(ListService) {
    var ctrl = this;
    ctrl.items = ListService.getItems();
    ctrl.itemBought = function (index) {
        ListService.itemBought(index);
    }
}

function ListService(items) {
    var service = this;

    var items = {
        buy: [].concat(items),
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


function ListServiceProvider() {
    var provider = this;

    provider.$get = function () {
        var list = new ListService(provider.list);

        return list;
    };
}
})();
