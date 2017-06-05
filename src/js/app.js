angular
  .module('practiceAPI', ['ui.bootstrap', 'ui.router'])
  .controller('ApiCtrl', ApiCtrl);

ApiCtrl.$inject = ['$http'];
function ApiCtrl($http) {
  const vm = this;
  vm.all = [];

  function apiIndex() {
    $http.get(`https://api.punkapi.com/v2/beers?per_page=50`)
      .then((response) => {
        vm.all = response.data;
      });
  }
  apiIndex();
}
