// use local storage to manage cart data

const addToDb = id => {
  let shoppingCart = {}; // খালি শপিং কার্ট অবজেক্ট তৈরি করা

  
  // এখন, আপনি কিভাবে একটি নতুন আইটেম যোগ করবেন তা দেখাবো
  const storedCart = localStorage.getItem('shopping-cart');
  if(storedCart){
    // console.log(JSON.parse(storedCart));
    shoppingCart = JSON.parse(storedCart);
  }
  else{
    shoppingCart = {};
  }
  
  const quantity = shoppingCart[id]; // শপিং কার্টে আইটেমের পরিমাণ পরীক্ষা করা
  
  if (quantity) {
      const newQuantity = quantity + 1; // যদি আইটেম ইতিমধ্যে থাকে, তাহলে পরিমাণ বাড়ানো
      shoppingCart[id] = newQuantity;
  } else {
      shoppingCart[id] = 1; // আইটেম নতুন যোগ করা হল
  }
  
  console.log(shoppingCart); // আপডেট শপিং কার্ট প্রিন্ট করা
  
  // localStorage-এ শপিং কার্ট সেট করা
  localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
  
}

const removeFromDb = id => {
  const storedCart = localStorage.getItem('shopping-cart');
  if(storedCart){
    const shoppingCart = JSON.parse(storedCart);
    if(id in shoppingCart){
        //  console.log('exists')
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
    }
  }
}

export {
  addToDb,
  removeFromDb
}







/* 1st part

// const addToDb = id => {
//     const quantity = localStorage.getItem(id);
//     if(quantity){
//       console.log('already have')
//       const newQuantity = +quantity + 1; // parseInt(quantity) anyone
//       localStorage.setItem(id, newQuantity)
//     }
//     else{
//         localStorage.setItem(id, 1)
//     }
    
// }
// export {addToDb}


*/