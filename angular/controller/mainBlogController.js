

myApp.controller('mainBlogController',['$http','$location','apiService',function($http,$location,apiService){

//
this.blogName="TechTic";
this.subBlogName="A place for all Latest Tech News";

var main=this;
this.blogs=[];

this.loadAllBlogs = function(){

apiService.getAllBlogApi().then(function  successCallback(response){

console.log(response);
main.blogs=response.data.data;

},function errorCallback(response){

	console.log(response);
	alert("some error occured please chech console");

});

} //end of load function

this.loadAllBlogs();


this.deleteBlog= function(id){

 apiService.deleteBlogApi(id).then(function successCallback(response){

     alert("blog successfully deleted");
     console.log(id);

     main.loadAllBlogs();
    },function errorCallback(response){ 
     	console.log(response);
        alert("error occured please check console");
       });
 };


}]);// end of main controller

