myApp.config(['$routeProvider',function($routeProvider){

$routeProvider
.when('/',{
  
  templateUrl: 'views/mainBlog.html',
  controller:'mainBlogController',
  controllerAs :'mainBlogCtrl'

})
.when('/singleBlog/:blogId',{

templateUrl  : 'views/singleBlog.html',
controller   : 'singleBlogController',
controllerAs : 'singleCtrl'

})
.when('/editBlog/:blogId',{

templateUrl  :'views/editBlog.html',
controller   : 'editBlogController',
controllerAs : 'editCtrl'

})

.when('/createNewBlog',{

templateUrl   : 'views/createNewBlog.html',
controller    : 'createNewBlogController',
controllerAs  : 'createNewCtrl'

})
.otherwise({

template: '<h1> 404 Error Page Not Found </h1>'

});



}]);