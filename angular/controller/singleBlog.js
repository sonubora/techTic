
myApp.controller('singleBlogController',['$http','$routeParams','$location','apiService',function($http,$routeParams,$location,apiService){

  var main=this;
 
 this.blogId = $routeParams.blogId;

 
 this.loadSingleBlog= function(){

apiService.getSingleBlogApi(main.blogId).then(function successCallback(response){

console.log(response);

main.blog=response.data.data;
console.log(main.blog);

},function errorCallback(response){

 console.log(response);
console.log("error occured please check console");
});
};

this.loadSingleBlog();


this.toEditPage =function(){

$location.path('/editBlog/'+main.blogId);

};




}]);