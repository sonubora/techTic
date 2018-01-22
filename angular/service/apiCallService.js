myApp.service('apiService',function($http){
var main =this;
this.baseUrl = 'https://projectsapi.edwisor.com/api/blogs';

this.getAllBlogApi =function(){
return $http.get(main.baseUrl+'/all');
};// end of get all api

this.getSingleBlogApi= function(blogId){
return $http.get(main.baseUrl+'/'+blogId);
}; // end of getSingleBlog function

this.getCreateBlogApi =function(myData){
return $http.post(main.baseUrl+'/create',myData);
};  // end of getCreateBlogApi function

this.getEditBlogApi = function(blogId,editData){
return $http.put(main.baseUrl+'/'+blogId+'/edit',editData);
}; // end of getEditBlogApi function
 
this.deleteBlogApi =function(id){
return $http.post(main.baseUrl+'/'+id+'/remove');
}; // end of delete api function



});  // end of apiServie