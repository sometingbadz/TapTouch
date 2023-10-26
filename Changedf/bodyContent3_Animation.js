


let productCarsoluel = document.getElementsByClassName("productCarousel");




function product1Click(){
    console.log("product1Click");
    let b = productCarsoluel[0].children;

    let productInformation = document.createElement('div');

    productInformation.style.backgroundColor = "green";
    productInformation.style.width = "100vw";
    productInformation.style.height = "100vh";
    productInformation.style.position = "fixed";
    productInformation.style.zIndex = "5";
    productInformation.style.top = "0";
    productInformation.style.left = "0";

    productCarsoluel[0].parentNode.parentNode.insertBefore(productInformation,  productCarsoluel[0].parentNode);


    console.log (b[0].id);
}