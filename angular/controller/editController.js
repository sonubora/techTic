
myApp.controller('editBlogController',['$http','$routeParams','$location','apiService',function($http,$routeParams,$location,apiService){

var main = this;

this.blogId = $routeParams.blogId;
 console.log(this.blogId);

this.inputEditBlog= function(){
apiService.getSingleBlogApi(main.blogId).then(function successCallback(response){
                    main.blog=response.data.data;
                    console.log(main.blog);

                    },
                    function errorCallback(response){
                       alert("check console for error");
                    }
               );

}; // end of function

this.inputEditBlog();

this.editSaveBlog =function(){

var editData={

heading      :    main.editHeading,
subHeading   :    main.editSubHeading,
author       :    main.editAuthor,
bodyHtml     :    main.editBodyHtml

};

apiService.getEditBlogApi(main.blogId,editData).then(function successCallback(response){

alert("blog edited successfully");
console.log(response);
$location.path('/singleBlog/'+main.blogId);

},function errorCallback(response){
 
 alert("check console for error");
 console.log(response);
});

}; // end of function


}]);  // end of controller