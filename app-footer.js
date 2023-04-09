app.component("app-footer", {
  
    props: ["cart"],
    
    setup(props) {
  
      
          return {
             
          }
      },
      template : 
      `
      <footer>
          <div class="nav-bar">
            <img src="./images/logoTemp.png" alt="Logo" class="logo" />

            <div class="media">
              <img src="/images/twitter.png" alt="twitter logo" class="apps">
              <img src="/images/facebook.png" alt="facebook logo" class="apps"/>
              <img src="/images/insta.png" alt="instagram logo" class="apps"/>
            </div>
            <div class="footerBar">
              <p href="#">Contact Us</p>
              <p href="#">FAQ</p>
              <p href="#">Terms & Conditions</p>
              <p href="#">Privacy Policy</p>
            </div>

            <div class="rightBar">
              
              <button onclick="toTop()" class="topButton"><img src="./images/arrow.png" alt="account" class="backTop"/></button>
              
            </div>
          </div>
         
              
         </footer>
      `,

})


/*
[

  {
    shoe: "NikeAirForce1'07",
    child: [
      {
        // Nike Air Force - 3 colors
        type: "nikeAirForce 1 '07 grey",
        imageSrc: "./images/NikeAirForce1_1.webp",
        selectorImageSrc: "./images/cBlueGrey.png",
        price: 180, stock: 3,
        gender: "male",brand: "nike",sport: "lifeStyle", footwear: "shoe", color: "grey",
      },
      {
        type: "nikeAirForce 1 '07 black",
        imageSrc: "./images/NikeAirForce1_2.webp",
        selectorImageSrc: "./images/cBlack.png",
        price: 190, stock: 55,
        gender: "male",brand: "nike",sport: "lifeStyle", footwear: "shoe", color: "black",
      },
      {
        type: "nikeAirForce 1 '07 white",
        imageSrc: "./images/NikeAirForce1_3.webp",
        selectorImageSrc: "./images/cWhite.png",
        price: 190, stock: 0,
        gender: "male",brand: "nike",sport: "lifeStyle", footwear: "shoe", color: "white",
      }]
  },
  {
    shoe: "nikeDunkHighRetro",
    child: [
      // Nike Dunk High Retro - 2 colors
      {
        type: "nikeDunkHighRetro black",
        imageSrc: "./images/NikeDunkHighRetro1.webp",
        selectorImageSrc: "./images/cBlack.png",
        price: 150, stock: 20,
        gender: "male",brand: "nike",sport: "lifeStyle", footwear: "shoe", color: "black",
      },
      {
        type: "nikeDunkHighRetro red",
        imageSrc: "./images/NikeDunkHighRetro2.webp",
        selectorImageSrc: "./images/cRed.png",
        price: 150, stock: 20,
        gender: "male",brand: "nike",sport: "lifeStyle", footwear: "shoe", color: "red",
      },]
 },
 {
    shoe: "nikeAirForce1",
    child: [
      // Nike Air Foce 1 - 1 color
      {
        type: "nikeAirForce1",
        imageSrc: "./images/NikeAirForce1_3.webp",
        selectorImageSrc: "./images/cWhite.png",
        price: 150, stock: 20,
        gender: "female",brand: "nike",sport: "lifeStyle", footwear: "shoe", color: "white",
      },]
  },
  {
    shoe: "nikeAirForce1",
    child: [
      // Nike Air Max 270 G - 2 color
      {
        type: "nikeAirMax270G white",
        imageSrc: "./images/NikeAirMax270G_1.webp",
        selectorImageSrc: "./images/cWhite.png",
        price: 200, stock: 20,
        gender: "male",brand: "nike",sport: "golf", footwear: "shoe", color: "white",
      },
      {
        type: "nikeAirMax270G black",
        imageSrc: "./images/NikeAirMax270G_2.webp",
        selectorImageSrc: "./images/cBlack.png",
        price: 200, stock: 20,
        gender: "male",brand: "nike",sport: "golf", footwear: "shoe", color: "black",
      },]
  },
  {
    shoe: "nikeInvincible",
    child: [
      // Nike Invincible 3 - 3 color
      {
        type: "nikeInvincible blue",
        imageSrc: "./images/NikeInvincible1_1.jpg",
        selectorImageSrc: "./images/cDarkBlue.png",
        price: 150, stock: 20,
        gender: "male",brand: "nike",sport: "running", footwear: "shoe", color: "blue",
      },
      {
        type: "nikeInvincible white",
        imageSrc: "./images/NikeInvincible1_2.webp",
        selectorImageSrc: "./images/cRed.png",
        price: 150, stock: 20,
        gender: "male",brand: "nike",sport: "running", footwear: "shoe", color: "white",
      },
      {
        type: "nikeInvincible black",
        imageSrc: "./images/NikeInvincible1_3.jpg",
        selectorImageSrc: "./images/cRed.png",
        price: 150, stock: 20,
        gender: "male",brand: "nike",sport: "running", footwear: "shoe", color: "black",
      },]
    },
]
*/
