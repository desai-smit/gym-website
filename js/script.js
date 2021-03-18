$(".inner .fa").click(function(){
    $(".inner ul").slideToggle(1000);

});

var a = document.getElementById('img1');
var b = document.getElementById('img2');
var c = document.getElementById('img3');
var d = document.getElementById('img4');


function box1(){
    a.style.display = ('block');
    b.style.display = ('none');
    c.style.display = ('none');
    d.style.display = ('none');
}

function box2(){
    a.style.display = ('none');
    b.style.display = ('block');
    c.style.display = ('none');
    d.style.display = ('none');   
}

function box3(){
    a.style.display = ('none');
    b.style.display = ('none');
    c.style.display = ('block');
    d.style.display = ('none');
}

function box4(){
    a.style.display = ('none');
    b.style.display = ('none');
    c.style.display = ('none');
    d.style.display = ('block'); 
}

var t1 = document.getElementById('t1');
var t2 = document.getElementById('t2');
var t3 = document.getElementById('t3');
var t4 = document.getElementById('t4');
var t5 = document.getElementById('t5');
var t6 = document.getElementById('t6');
var t7 = document.getElementById('t7');
var t8 = document.getElementById('t8');
var t9 = document.getElementById('t9');
var t10 = document.getElementById('t10');

function day1(){
    t1.style.display = ('block');
    t2.style.display = ('none');
    t3.style.display = ('none');
    t4.style.display = ('none');
    t5.style.display = ('none');
    t6.style.display = ('block');
    t7.style.display = ('none');
    t8.style.display = ('none');
    t9.style.display = ('none');
    t10.style.display = ('none');  
}

function day2(){
    t1.style.display = ('none');
    t2.style.display = ('block');
    t3.style.display = ('none');
    t4.style.display = ('none');
    t5.style.display = ('block');
    t6.style.display = ('none');
    t7.style.display = ('none');
    t8.style.display = ('none');
    t9.style.display = ('none');
    t10.style.display = ('none');  
}

function day3(){
    t1.style.display = ('none');
    t2.style.display = ('none');
    t3.style.display = ('none');
    t4.style.display = ('none');
    t5.style.display = ('none');
    t6.style.display = ('none');
    t7.style.display = ('block');
    t8.style.display = ('none');
    t9.style.display = ('none');
    t10.style.display = ('block');  
}

function day4(){
    t1.style.display = ('none');
    t2.style.display = ('none');
    t3.style.display = ('none');
    t4.style.display = ('block');
    t5.style.display = ('none');
    t6.style.display = ('none');
    t7.style.display = ('none');
    t8.style.display = ('none');
    t9.style.display = ('block');
    t10.style.display = ('none');  
}

function day5(){
    t1.style.display = ('none');
    t2.style.display = ('none');
    t3.style.display = ('block');
    t4.style.display = ('none');
    t5.style.display = ('none');
    t6.style.display = ('none');
    t7.style.display = ('none');
    t8.style.display = ('block');
    t9.style.display = ('none');
    t10.style.display = ('none');  
}


var k = document.getElementById('preloder');

function pre(){
    k.style.display = 'none';
}
