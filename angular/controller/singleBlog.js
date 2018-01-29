
myApp.controller('singleBlogController',['$http','$routeParams','$location','apiService','$sce',function($http,$routeParams,$location,apiService,$sce){

  var main=this;
 
 this.blogId = $routeParams.blogId;

 
 this.loadSingleBlog= function(){

apiService.getSingleBlogApi(main.blogId).then(function successCallback(response){

console.log(response);

main.blog=response.data.data;
console.log(main.blog);


main.bodyContent = $sce.trustAsHtml(main.blog.bodyHtml);



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