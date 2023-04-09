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
              <img src="./images/twitter.png" alt="twitter logo" class="apps"/>
              <img src="./images/facebook.png" alt="facebook logo" class="apps"/>
              <img src="./images/insta.png" alt="instagram logo" class="apps"/>
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


