const item1 = document.querySelector('.it-1');
const item2 = document.querySelector('.it-2');
const item3 = document.querySelector('.it-3');
const list = document.querySelector('.header__hidden__list');
const list2 = document.querySelector('.list-2');
const list3 = document.querySelector('.list-3');
const head = document.querySelector('.header__content');
const bottomarrow = document.getElementById('bottomarrow');
const toparrow = document.getElementById('toparrow');











item1.addEventListener ('click' , () =>{

    list2.classList.remove('open');
    list3.classList.remove('open');


})
item2.addEventListener ('click' , () =>{

    list.classList.remove('open');
    list3.classList.remove('open');

})
item3.addEventListener ('click' , () =>{
    
    list.classList.remove('open');
    list2.classList.remove('open');

})






item1.addEventListener ('click' , () =>{

    list.classList.toggle('open');
    
})
item2.addEventListener ('click' , () =>{

    list2.classList.toggle('open');

})
item3.addEventListener ('click' , () =>{

    list3.classList.toggle('open');

})
head.addEventListener ('click' , () =>{

    list.classList.remove('open');
    list2.classList.remove('open');
    list3.classList.remove('open');

})


const opener = document.querySelector('.open');
const closer = document.querySelector('.close');

opener.addEventListener ('click' , () =>{

    closer.classList.add('show');
    opener.classList.add('delete');

})
closer.addEventListener ('click' , () =>{

    closer.classList.remove('show');
    opener.classList.remove('delete');

})


const link1 = document.querySelector('.item-1');
const link2 = document.querySelector('.item-2');
const link3 = document.querySelector('.item-3');
const menu1 = document.querySelector('.nodisplay-1');
const menu2 = document.querySelector('.nodisplay-2');
const menu3 = document.querySelector('.nodisplay-3');

link1.addEventListener ('click' , () =>{

    menu1.classList.toggle('show');
    

})
link2.addEventListener ('click' , () =>{

    menu2.classList.toggle('show');
    

})
link3.addEventListener ('click' , () =>{

    menu3.classList.toggle('show');
    

})
const sidebar = document.querySelector('.sidebar');


opener.addEventListener ('click' , () =>{

    sidebar.classList.add('show');

})
closer.addEventListener ('click' , () =>{

    sidebar.classList.remove('show');

})
