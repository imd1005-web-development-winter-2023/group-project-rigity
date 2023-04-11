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
            <a href="index.html"><img src="./images/logoRed.png" alt="logo"/></a>
            <div class="dropDown">
              <button onclick="openNav()" class="menu"><img src="./images/menu.png" alt="menu" /></button>
            
            </div>
            <div class="sectionBar">
              <a href="categoryIndex.html"><p href="#">Men</p></a>
              <a href="categoryIndex.html"><p href="#">Women</p></a>
              <a href="categoryIndex.html"><p href="#">New</p></a>
              <a href="categoryIndex.html"><p href="#">Sale</p></a>
            </div>
            <div class="rightBar">
              <div class="search"><img src="./images/search.png" alt="search icon" /></div>
              
              <a href="checkout.html"><div class="cart">
                <img src="./images/cart.png" alt="cart" />
                <p>
                  <span class="sr-only">Number of items in cart: </span>{{ cart }}
                </p>
              </div></a>
              <div class="account"><img src="./images/account.png" alt="account" /></div>
              
            </div>
          </div>
          <ul class="dropContent" id="sideBar">
              <button onclick="closeNav()" class="x"><img src="./images/x.png" alt="close" class="closeBar"/> </button>
              <a href="categoryIndex.html"><li href="#"> Men </li></a>
              <a href="categoryIndex.html"><li href="#"> Women </li></a>
              <a href="categoryIndex.html"><li href="#"> New </li></a>
              <a href="categoryIndex.html"><li href="#"> Sale </li></a>
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
