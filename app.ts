//http://blog.miniasp.com/post/2015/06/07/Using-Visual-Studio-Code-with-AngularJS.aspx
//https://dotblogs.com.tw/clark/2015/07/02/151701
/// <reference path="typings/tsd.d.ts" />
namespace  Kim{
    export class MyApp{
        Foo:string;
        constructor(private $scope:angular.IScope){
            
        }
        
        Init(){
         this.Foo="Boo2";
        }
    }
    
     /**
     * name
     */ 
   export class MyController {
        constructor(private $scope:angular.IScope) {
         
        }
        
        Name:string;
        NewModel(){
            this.Name="Hello";
         
        }
    }
}