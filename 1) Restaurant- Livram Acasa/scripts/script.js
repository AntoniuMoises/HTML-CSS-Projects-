// Data controler 
let dataController = (function() {

  return {
    
  };  

}) ();



 // UI controller
let UIController = (function(){
     //Private functions
     let displayElement = function(){
        document.querySelector('.login_box').classList.toggle('hideElement');
     }

    
    // Display element on click
      // a) Variables
       let itemBox = document.querySelectorAll('.style-box');
       let resultFilter = document.querySelector('.mesaj-filter');
       let eachItem = document.querySelectorAll('.each-box');
    return {
        publicMethod: function(){
            displayElement();
        },
        filterItems: function(id){
            
            for(let i = 0; i < itemBox.length; i++){
                let titleItem = itemBox[i].querySelector('h4').textContent.toLowerCase();
               if(itemBox[i].classList.contains(id)){
                   itemBox[i].style.display = 'flex';
                   itemBox[i].classList.add('active');
                   resultFilter.textContent = `Există ${itemBox[i].querySelectorAll('.each-box').length} produse din categoria ${titleItem}`;
               }else{
                   itemBox[i].style.display = 'none';
               }
            }
        },
        showAllItem: function(){
            let itemBox = document.querySelectorAll('.style-box');
            console.log(eachItem.length);
            for(let i = 0; i < itemBox.length;i++){
                itemBox[i].style.display = 'flex';
                resultFilter.textContent = `Arată toate cele ${eachItem.length} de produse`;
            }
        }
    };
        
})();

//  App Controller 
let appController = (function(dataCtrl, UICtrl){

  
    // Variables: 
    let loginBox = document.querySelector('#login_box');
    let loginBtn = document.querySelector('#login');

   //1) Show/Hide Login Box
   loginBtn.addEventListener('click',function(e){
    UIController.publicMethod();
    e.preventDefault();
   });

   //2) Close login box window when click outside 
   window.addEventListener('click',function(e){
       if(e.target !== loginBtn && e.target.parentNode !== loginBox && e.target !== loginBox){
           loginBox.classList.add('hideElement');   
       }
       if(!e.target.classList.contains('btns-filter')){
          UIController.showAllItem();
       }
   });

   //3) Filter btns
   document.querySelector('.menu-btns-filter').addEventListener('click',function(e){
      if(e.target.classList.contains('btns-filter')){
        UIController.filterItems(e.target.id);
      }else{
          UIController.showAllItem();
      }
   });
   

   UIController.showAllItem();
})(dataController,UIController);












