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
            <img src="./images/logoTemp.png" alt="logo"/>
            <div class="dropDown">
              <button onclick="openNav()" class="menu"><img src="./images/menu.png" alt="menu" /></button>
              
            </div>
            <div class="sectionBar">
              <p href="#">Men</p>
              <p href="#">Women</p>
              <p href="#">New</p>
              <p href="#">Sale</p>
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
              <button onclick="closeNav()" class="x"><img src="./images/x.png" alt="close" class="closeBar"/> </button>
              <li href="#"> Men </li>
              <li href="#"> Women </li>
              <li href="#"> New </li>
              <li href="#"> Sale </li>
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
