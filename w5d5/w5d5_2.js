const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const offerTea = () => {
  // console.log("Would you like some Tea?");
  return "Would you like some Tea? ";
};

const offerBiscuits = () => {
  // console.log("Would you like some Biscuits?");
  return "Would you like some Biscuits? ";
};

// reader.question(offerTea(), (cb));

function teaAndBiscuits () {

  reader.question(offerTea(), (res) => {
    console.log(`You replied ${res}.`);

    reader.question(offerBiscuits(), (res2) => {
      console.log(`You replied ${res2}.`);

      const first = (res === 'yes') ? 'do' : 'don\'t';
      const second = (res2 === 'yes') ? 'do' : 'don\'t';

      console.log(`So you ${first} want tea and you ${second} want biscuits.`);
      reader.close();

    });
  });
}

teaAndBiscuits ();
