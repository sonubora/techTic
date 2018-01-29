myApp.directive('blogDirective',function(){


var count=1;
return{

	restrict:'E',
	templateUrl:'views/blogDirectiveTemplate.html',
	scope: {
         blog :"=blogInfo",
         
	   },

    controller: function($scope){
           
       

    },

    link: function(scope,elem,attr){

      


    },




}


});