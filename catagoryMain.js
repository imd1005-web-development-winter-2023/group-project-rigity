const { createApp, reactive, computed, ref } = Vue;

const app = createApp({
  setup() {
   
    const cart = ref([]);
    const products = ref([]);
   
    const dataFilePath = "./listItems.json";

    const selected = ref();
    const female = ref();
    const male = ref();
    const unisex = ref();
    const basketball = ref();
    const football = ref();
    const running = ref();
    const tennis = ref();
    const golf = ref();
    const lifestyle = ref();
    const nike = ref();
    const adidas = ref();
    const puma = ref();
    const vans = ref();
    const converse = ref();
    const reebok = ref();
    const sNew = ref();
    //const  = ref();
  
    fetch(dataFilePath)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        products.value = data;
      });
      
          
    // computed(() => {
    //   elp =() =>{
    //     const self = this;
    //     if(self.selected === 'men'){
    //       return self.products;
    //     }
    //     else
    //     {
    //       return self.products.filter(function(products){
    //         return self.currentFilter === Game.genre;
    //       });
    //     }
    //     })
      

      // Functions to show only one varient
    
    const selectedVariantIndex = ref(0);

    function updateSelectedVariant(index) {
       selectedVariantIndex.value = index;
    }
    const imageSrc = computed(() => {
        return product.children[selectedVariantIndex.value].imageSrc;
      });
    
   
      const price = computed(() => {
        return products.value[selectedVariantIndex.value];
      });

      const productTitle = computed(() =>{
        return product.children[selectedVariantIndex.value].type;
      });
    
    function addToCart(index) {
    
      const foundIndex = cart.value.findIndex(
        (element) => element.title === products.value[index].title
      );

     
      if (foundIndex === -1) {
        cart.value.push({
          title: products.value[index].title,
          quantity: 1,
        });
      } else {
       
        cart.value[foundIndex].quantity += 1;
      }
      console.log("Cart contents", cart.value);
    }

    
    const itemsInCart = computed(() => {
     
      if (cart.value.length === 0) {
        return 0;
      }

      let quantity = 0;

      cart.value.forEach((cartItem) => {
        quantity += cartItem.quantity;
      });

      return quantity;

      
    });
    
    const filteredProducts = computed(() => {
      
        if (selected.value) {
         return products.value.filter((element) => element.sale === true);
        
        }
        if (female.value){
          return products.value.filter((element) => element.gender === "female");}
        if (male.value){
         return products.value.filter((element) => element.gender === "male");}
        if (unisex.value){
         return products.value.filter((element) => element.gender === "unisex");}

        if (basketball.value){
          return products.value.filter((element) => element.sport === "basketball");}
        if (football.value){
          return products.value.filter((element) => element.sport === "football");}
        if (running.value){
          return products.value.filter((element) => element.sport === "running");}
        if (tennis.value){
          return products.value.filter((element) => element.sport === "tennis");}
        if (golf.value){
          return products.value.filter((element) => element.sport === "golf");}
        if (lifestyle.value){
          return products.value.filter((element) => element.sport === "lifeStyle");}
      
        if (nike.value){
          return products.value.filter((element) => element.brand === "nike");}
        if (adidas.value){
          return products.value.filter((element) => element.brand === "adidas");}
        if (puma.value){
          return products.value.filter((element) => element.brand === "puma");}
        if (vans.value){
          return products.value.filter((element) => element.brand === "vans");}
        if (converse.value){
          return products.value.filter((element) => element.brand === "converse");}
        if (reebok.value){
          return products.value.filter((element) => element.brand === "reebok");}
        if (sNew.value){
          return products.value.filter((element) => element.sNew === "new");}
                    

          return products.value;
        });
        
    return {
      cart,
      products,
    
      itemsInCart,
      selected,
      male,
      female,
      unisex,
      basketball,
      football,
      running,
      tennis,
      golf,
      lifestyle,
      nike,
      adidas,
      puma,
      vans,
      converse,
      reebok,
      sNew,
      addToCart,
      selectedVariantIndex,
      updateSelectedVariant,
      imageSrc,
      price,
      productTitle, 
      filteredProducts,
      //  elp,
    

    };
  },
});

app.mount("#app");
