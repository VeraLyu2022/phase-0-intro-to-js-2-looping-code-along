// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//  console.log(`I'm ${age} years old. Happy birthday to me!`);   
 

// const gifts = ["teddy bear", "drone", "doll"];
//  function wrapGifts(gifts) {
//      for (let i = 0; i < gifts.length; i++) {
//          console.log(`Wrapped ${gifts[i]} and added a bow!`);
//          debugger;
//      }
   
//     }

// wrapGifts(gifts);
 
// writeCards

const names = [ 'Guadalupe', 'Ollie', 'Aki' ];
const writtenCards = [];
function writeCards(names, events) {
    for (let i = 0 ; i < names.length; i++) {
        
       writtenCards.push("Thank you, " + names[i] + ", for the wonderful " + events + " gift!");
      
    }
    return writtenCards;
 
}

writeCards(names, "birthday")



//  function writeCards(names, event) {
//     let messages = []
//     for (let i = 0; i < names.length - 1; i++) {
//       messages.push("Thank you, " + names[i] + " for the wonderful " + event + " gift!")
//     }
//     return messages;
//   }


 function countDown(i) {
     for (let i = 10; i >=0; i--) {
         console.log(i)
     }
 }