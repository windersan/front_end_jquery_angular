/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 * 
 * 
 * ******* function p is just some reference code I am leaving in to learn js *
 */




function submit(){
    
    alert("lolololo");
    var p1 = document.getElementById("password1").value;
    var p2 = document.getElementById("password2").value;
    if(p1 !== p2){
        alert("Passwords must be the same");
        return false;     
    }
    
    return true;
}


function p(){
var v = {property1:1, property2:"second"};
var vp1 = v.property1;
var vp2 = v["property2"];
v.p3 = "three";
v["p4"] = 4;
delete v.p4;

var x = new Object();

var y = object(x);

var students = ["x","y","h"];
var s = students[0];}