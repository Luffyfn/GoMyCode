
                          /* Les likes de l'objet*/
    /*Lorsqu'on appuye sur le heart:
          *Le heart se remplit
    */ 
   
    var emptyHeart = document.querySelectorAll('.bi-heart-fill');
    for(let i = 0 ; i < emptyHeart.length ; i++){
      emptyHeart[i].addEventListener('click', function(e){
        console.log(e);  
        this.classList.toggle('fill');
      }) 
    }

                         /* Le compteur de l'objet*/  
    /*Lorsque'on appuye sur le bouton + :
          *Le compteur incremente 1 */  
 
    var buttonPlus = document.querySelectorAll('.plus');
    var priceDisplayed = document.querySelectorAll('.span-object-price');
    for(let i = 0 ; i < buttonPlus.length ; i++){
      buttonPlus[i].addEventListener('click', function(e,){
        console.log(e); 
        buttonPlus[i].nextElementSibling.value++;    
        totalPrice();
      })
    }
   
    /* Lorsqu'on appuye sur le bouton - :
          *Le compteur decriment 1 */
  
    var buttonMinus = document.querySelectorAll('.minus');
    for(let i = 0 ; i < buttonMinus.length ; i++){
      buttonMinus[i].addEventListener('click', function(e){
        console.log(e);
        if(buttonMinus[i].previousElementSibling.value > 1){   
          buttonMinus[i].previousElementSibling.value--;
          totalPrice();
        }
      })
    }

                          /* L'image de l'objet */  
      /* Lorsqu'on fait passer la sourie sur l'image elle grandi */

      var imageBig = document.querySelectorAll('img');
      for(let i = 0 ; i < imageBig.length ; i++){
        imageBig[i].addEventListener('mouseenter', function(){
          imageBig[i].style.width = "280px";
          imageBig[i].style.height = "242px";
        })
      }

      /* Lorsqu'on retire la sourie de l'image elle retrouve sa taille normale*/  

      var image = document.querySelectorAll('img');
      for(let i = 0 ; i < imageBig.length ; i++){
        image[i].addEventListener('mouseleave', function(){
          image[i].style.width = "120px";
          image[i].style.height = "95px";
        })
      }
      
                          /* Features de l'objet */
       /* Lorsqu'on appuye sur features le texte apparait et disparait quand on appuye une seconde fois*/                   
      function totalPrice(){
        var objectQuantity = document.querySelectorAll(".form-control");
        var objectPrice = document.querySelectorAll(".span-object-price");
        var object = document.querySelectorAll(".object");
        var tab = [];
        var total = 0;
        for(let i = 0 ; i < (object.length) ; i++){
          tab.push(Number(objectPrice[i].innerHTML.replace("TND", "")) * (Number(objectQuantity[i].value)));
          total += tab[i];
              document.querySelector(".span-total-price").innerHTML = total + " TND";
        }
        document.querySelector(".span-total-price").innerHTML = total + " TND";
        console.log(total);
      }

                            /* Affichage du text descriptif de features */
      /* Lorsqu'on appuye sur le bouton features le text apparait et disparait quand on appuye une seconde fois */

      var featuresButton = document.querySelectorAll('.btn-outline-warning');
      for(let i = 0 ; i < featuresButton.length ; i++){
        featuresButton[i].addEventListener('click', function(e){
          console.log(e);  
          featuresButton[i].nextElementSibling.classList.toggle('visible');
        }) 
      } 

                          /* Bouton supprimer objet */
     /* Lorsqu'on appuye sur le bouton supprimer l'objet disparrait de la liste */
     
      var buttonX = document.querySelectorAll('.bi-x-circle-fill')
      for(let i = 0 ; i < buttonX.length ; i++){
        buttonX[i].addEventListener('click', function(e){
          console.log(e);
        buttonX[i].parentNode.remove();
          totalPrice();
      })
    }

         
      
  

      
   
   
   