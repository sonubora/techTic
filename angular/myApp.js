var myApp= angular.module('myBlogApp',['ngRoute','ngSanitize']);



myApp.controller('singleBlogController',['$http',function($http){


var main=this;
this.baseUrl='https://projectsapi.edwisor.com/api/blogs';




this.getParameterByName = function(name){



     console.log(" 1st value of name "+name);
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");

      results = regex.exec(location.search);
      
      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));


  }// end get parameter by name


    this.blogId = this.getParameterByName('blogId');




this.loadSingleBlog= function(){

$http({

method:'GET',
url:main.baseUrl+'/'+main.blogId


}).then(function successCallback(response){

console.log(response);

main.blog=response.data.data;

console.log(main.blog);

},function errorCallback(response){

 console.log(response);
console.log("error occured please check console");
});
}

this.deleteBlog= function(){

     $http({

      method:'POST',
      url:main.baseUrl+'/'+main.blogId+'/remove'
      


     }).then(function successCallback(response){

    alert("blog successfully deleted");
    window.location='index.html'; 
 


     },function errorCallback(response){ 
     	console.log(response);
        alert("error occured please check console");
 });
 }

this.inputEditBlog= function(){

$http({
method:'GET',
url:main.baseUrl+'/'+main.blogId



}).then(function successCallback(response){
 main.blog=response.data.data;
 
 alert("enter in edit page");


},function errorCallback(response){


alert("check console for error");



});

}


this.editSaveBlog =function(){


var editData={

heading      :    main.editHeading,
subHeading   :    main.editSubHeading,
author       :    main.editAuthor,
bodyHtml     :    main.editBodyHtml

};

$http({

method:'PUT',
url:main.baseUrl+'/'+main.blogId+'/edit',
data:editData
}

).then(function successCallback(response){

alert("blog edited successfully");
console.log(response);
window.location='post.html?blogId='+main.blogId;





},function errorCallback(response){

alert("check console for error");
console.log(response);



});

}





}]);


myApp.controller('createBlogController',['$http',function($http){

var main = this;

 this.baseUrl = 'https://projectsapi.edwisor.com/api/blogs';

this.createNewBlog= function(){


var myData=
{

heading     :  main.heading,
subHeading  :  main.subHeading,
author      :  main.author,
bodyHtml    :  main.bodyHtml
};

$http({
   
   method:'POST',
   url:main.baseUrl+'/create',
   data:myData
     
     }

    ).then(function successCallback(response){

alert("blog created successfully");
console.log(response);
window.location='post.html?blogId='+response.data.data.blogId;




},function errorCallback(response){



alert("error occured please check console");
console.log(response);



});


} // end o f function


}]);

