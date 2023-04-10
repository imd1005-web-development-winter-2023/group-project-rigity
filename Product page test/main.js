const { createApp, reactive, computed, ref } = Vue;

const app = createApp({
  setup() {
   
    const cart = ref([]);
    const products = ref([]);
   
    const dataFilePath = "./listItems.json";





  



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
    
      // Only focusing on Price for now
      const price = computed(() => {
        return products.value[selectedVariantIndex.value];
      });


      const inStock = computed(() => {
        return product.children[selectedVariantIndex.value].stock;
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

 
      products.value[index].stock -= 1;

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

  
    return {
      cart,
      products,
      
     
      itemsInCart,

      addToCart,
      selectedVariantIndex,

      updateSelectedVariant,
      imageSrc,
      price,
      inStock,
      productTitle,

      //  elp,
     

    };
  },
});

app.mount("#app");