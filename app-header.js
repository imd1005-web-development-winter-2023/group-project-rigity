app.component("app-header", {
  
    props: ["cart"],
    
    setup(props) {
  
      
          return {
             
          }
      },
      template : 
      `
      <header>
          <div class="nav-bar">
            <img src="./images/logoRed.png" alt="logo" class="mainLogo" />
            <div class="dropDown">
              <button onclick="openNav()" class="menu"><img src="./images/menu.png" alt="menu" /></button>
              
            </div>
            <div class="sectionBar">
              <a href="#">Men</a>
              <a href="#">Women</a>
              <a href="#">New</a>
              <a href="#">Sale</a>
              
            </div>

            <div class="rightBar">
              <div class="search"><img src="./images/search.png" alt="search icon" /></div>
              
              <div class="cart">
                <img src="./images/cart.png" alt="cart" />
                <p>
                  <span class="sr-only">Number of items in cart: </span>{{ cart }}
                </p>
              </div>
              <div class="account"><img src="./images/account.png" alt="account" /></div>
              
            </div>
          </div>
          <ul class="dropContent" id="sideBar">
              <button onclick="closeNav()" class="x"><img src="./images/x.png" class="closeBar"> </button>
              <a href="productIndex.html"><li>Home</li></a>
              <a href="#"><li>Men</li></a>
              <a href="#"><li>Women</li></a>
              <a href="#"><li>New</li></a>
              <a href="#"><li>Sale</li></a>
              </ul>
              
        </header>
      `,

})
const overlay = document.getElementById('overlay');
      function openNav(){
        document.getElementById("sideBar").style.width = "350px";
        
        document.getElementById("overlay").style.display="block";
        
      }
      function closeNav(){
        document.getElementById("sideBar").style.width = "0";
        
        document.getElementById("overlay").style.display="none";
        
      }
