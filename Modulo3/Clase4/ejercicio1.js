var cuadrado1=document.getElementsByClassName('cuadrado')[0];
var body=document.getElementById('body');
var rojo = document.getElementsByClassName('rojo')[0];
var cuadrado2=document.getElementsByClassName('cuadrado')[1]
var azul= document.getElementsByClassName('azul')[0]
var cuadrado3=document.getElementsByClassName('cuadrado')[2]
var verde= document.getElementsByClassName('verde')[0]


cuadrado1.onclick=function(event){
    body.classList.add('rojo');
    body.classList.remove('azul');
    body.classList.remove('verde');
};
cuadrado2.onclick=function(event){
    body.classList.add('azul');
    body.classList.remove('rojo');
    body.classList.remove('verde');
};
cuadrado3.onclick=function(event){
    body.classList.add('verde');
    body.classList.remove('rojo');
    body.classList.remove('azul');
};
