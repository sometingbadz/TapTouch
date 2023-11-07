
    logoListener();

    /* Menu Animations */

    let productmenu = document.getElementById("submenu");                   
    let triangle = document.getElementById("triangle");
    let subitem = document.getElementsByClassName("subitem1");
    let subitem2 = document.getElementsByClassName("subitem2");
    let product = document.getElementById("product");
    let submenuArea = document.getElementById("submenuArea");
    var productHover = false;
    var submenuHover = false; 
    product.addEventListener("mouseenter", ()=> {   hoverOn(product); } );
    product.addEventListener("mouseleave", () =>{ hoverLeave(product);});




    submenuArea.addEventListener("mouseenter", () => { submenuHover = true; 
    } );

    submenuArea.addEventListener("mouseleave", () => { 
               submenuHover = false;     
               hoverLeave(product);
    });


    function hoverLeave(element) {
        var rect = element.getBoundingClientRect(); //element location
        // console.log(rect.top, rect.right, rect.bottom, rect.left);
        // console.log("mouse location x,y : " + event.pageX + "," + event.pageY);
        // console.log("pageoffset is : " + window.pageYOffset);
        switch (element.getAttribute("id"))
        {
              case "product":
             productHover = false;
              if ( ( ( event.pageX < rect.left) || ((event.pageX > rect.right)) || (event.pageY - window.pageYOffset) < rect.top ) || ( (event.pageY - window.pageYOffset)  > rect.bottom+100 )  )
                 proc();
              else
                 waitFunc(proc, 500);

              function proc(){
                if (productHover == false && submenuHover == false)
                {
                  product.style.borderBottom = "none";
                  productmenu.style.background = "rgba(255, 255, 255, 0)";
                  productmenu.style.height = "0px";
                  triangle.style.opacity = "0";
                  triangle.style.left = "calc(100% - 60px)"; 
                  submenuArea.style.visibility = "hidden";
                  
                  for(let i =0; i < subitem.length;i++){                           
                       var h = subitem[i].clientHeight;
                       subitem[i].style.animation =  "none";
                       var b = 3;
                       subitem[i].style.height = h;
                    
                       function item1CollapseAnimation(h){
                             subitem[i].style.height = 0;
                             subitem[i].style.transition = "0.05s"; 
                             subitem2[i].style.transition = "opacity 0.2s";
                             subitem2[i].style.opacity = "0";
                       }
                       waitFunc(item1CollapseAnimation, 0);
                    }
                }

              }
            
               
                 
            break;
        }

    }



 
    function hoverOn(element)
    {
        switch ( element.getAttribute("id"))
        {
            case "product" :
                
                productHover = true;
                var positionInfo = productmenu.getBoundingClientRect();

                console.log(positionInfo.width);
                productmenu.style.height = positionInfo.width/2.5 + "px";
                productmenu.style.background = "rgba(255, 255, 255, 1)";

                submenuArea.style.visibility = "visible";


                /** 
                 *   event listener for transition --> (https://www.w3schools.com/jsref/event_animationend.asp) 
                 *   async func --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function 
                **/
                productmenu.addEventListener("transitionend", async function(){        
                    await new Promise(resolve => setTimeout(resolve, 200));
                    if (productHover || submenuHover == true)
                    {
                        product.style.borderBottom = "solid";

                        triangle.style.transition ="left 1s ease-out";
                        triangle.style.opacity = "1";
                        triangle.style.left = "15px";
                        for(let i =0; i < subitem.length;i++)
                        {
                            subitem[i].style.animation =  "itemAnimation 1.5s normal forwards ease";
                            subitem2[i].style.transition = "opacity 2s";
                            subitem2[i].style.opacity = "1";

                        }
                        
                    }

        
                });

            
                
            break;
        }
    }

    async function waitFunc(func, waittime){        
         await new Promise(resolve => setTimeout(resolve, waittime));
         func();
    };
  

    function logoListener()
    {
        let logoHeader = document.getElementById("logo");
        logoHeader.addEventListener("mouseover", function(event){ 
            event.target.style.backgroundPosition = "150px";
            event.target.style.letterSpacing= "3px";



        }, true);

        logoHeader.addEventListener("mouseout", function(event){
            event.target.style.backgroundPosition = "-50px";
            event.target.style.letterSpacing= "0";

        }, false);
    }
  



    // MOBILE VIEW

    checkbox = document.getElementById('check');
    
    checkbox.addEventListener('change', e => {
    
        if(e.target.checked) 
            document.getElementById("nBarPhonecontent").style.height = "100vh";
        else
            document.getElementById("nBarPhonecontent").style.height = "0";
    
        
    });
