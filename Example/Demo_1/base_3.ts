let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: { suit: string; card: number; }[]): number;
function pickCard(x: number): { suit: string; card: number; };
function pickCard(x): any {
  // Check to see if we're working with an object/array
  // if so, they gave us the deck and we'll pick the card
  if (typeof x == "object") {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  }
  // Otherwise just let them pick the card
  else if (typeof x == "number") {
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);


// class Handler {
//   info: string;
//   onClickGood(this: void, e: Event) {
//     // can't use this here because it's of type void!
//     console.log('clicked!');
//   }
// }
// let h = new Handler();
// uiElement.addClickListener(h.onClickGood);

// interface Card {
//   suit: string;
//   card: number;
// }
// interface Deck {
//   suits: string[];
//   cards: number[];
//   createCardPicker(this: Deck): () => Card;
// }
// let deck: Deck = {
//   suits: ["hearts", "spades", "clubs", "diamonds"],
//   cards: Array(52),
//   // NOTE: The function now explicitly specifies that its callee must be of type Deck
//   createCardPicker: function (this: Deck) {
//     return () => {
//       let pickedCard = Math.floor(Math.random() * 52);
//       let pickedSuit = Math.floor(pickedCard / 13);

//       return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
//     }
//   }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// alert("card: " + pickedCard.card + " of " + pickedCard.suit);


// let deck = {
//   suits: ["hearts", "spades", "clubs", "diamonds"],
//   cards: Array(52),
//   createCardPicker: function () {
//     // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
//     return () => {
//       let pickedCard = Math.floor(Math.random() * 52);
//       let pickedSuit = Math.floor(pickedCard / 13);

//       return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
//     }
//   }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// alert("card: " + pickedCard.card + " of " + pickedCard.suit);


// let deck = {
//   suits: ["hearts", "spades", "clubs", "diamonds"],
//   cards: Array(52),
//   createCardPicker: function () {
//     return function () {
//       let pickedCard = Math.floor(Math.random() * 52);
//       let pickedSuit = Math.floor(pickedCard / 13);

//       return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
//     }
//   }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// alert("card: " + pickedCard.card + " of " + pickedCard.suit);

// function buildName(firstName: string, ...restOfName: string[]) {
//   return firstName + " " + restOfName.join(" ");
// }

// let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

// function f() {
//   return "hello";
// }


// function buildName(firstName = "Will", lastName: string) {
//   return firstName + " " + lastName;
// }

// let result1 = buildName("Bob");                  // error, too few parameters
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result3 = buildName("Bob", "Adams");         // okay and returns "Bob Adams"
// let result4 = buildName(undefined, "Adams");     // okay and returns "Will Adams"


// function buildName(firstName: string, lastName = "Smith") {
//   return firstName + " " + lastName;
// }

// let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
// let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
// let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result4 = buildName("Bob", "Adams");         // ah, just right


// function buildName(firstName: string, lastName?: string) {
//   if (lastName)
//     return firstName + " " + lastName;
//   else
//     return firstName;
// }

// let result1 = buildName("Bob");  // works correctly now
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result3 = buildName("Bob", "Adams");  // ah, just right


// let myAdd: (baseValue: number, increment: number) => number =
//   function (x: number, y: number): number { return x + y; };