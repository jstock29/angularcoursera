(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// LIST #1 - controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var tobuy = this;

  tobuy.items = ShoppingListCheckOffService.getItems();

  tobuy.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtlist = this;
  boughtlist.items = ShoppingListCheckOffService.getBoughtItems();
  console.log(boughtlist.items.length)
}


function ShoppingListCheckOffService() {
  var service = this;

  var buyitems = [{name:"oreos",quantity:2}, {name:"fish",quantity:1}, {name:"milk",quantity:9}, {name:"bread",quantity:4}, {name:"candy",quantity:30}];
  var boughtitems=[];

  service.buyItem = function (itemIndex) {
    boughtitems.push(buyitems[itemIndex]);
    buyitems.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return buyitems;
  };
  service.getBoughtItems = function () {
    return boughtitems;
  };
}

})();
