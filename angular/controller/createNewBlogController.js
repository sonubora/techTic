myApp.controller('createNewBlogController',['$http','$location','$routeParams','apiService',function($http,$location,$routeParams,apiService){


var main = this;

 

this.createNewBlog= function(){


var myData=
{
heading     :  main.heading,
subHeading  :  main.subHeading,
author      :  main.author,
bodyHtml    :  main.bodyHtml
};

apiService.getCreateBlogApi(myData).then(function successCallback(response){

       alert("blog created successfully");
       console.log(response);

$location.path("/singleBlog/"+response.data.data.blogId);

},function errorCallback(response){

      alert("error occured please check console");
      console.log(response);



});


} // end of function






}]);