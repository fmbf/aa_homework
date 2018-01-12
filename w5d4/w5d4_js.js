///////////////////////////////////////////

function madLib(verb, adjective, noun) {
  return `We shall ${verb.to_uppercase()} the ${adjective.to_uppercase()} ${noun.to_uppercase()}`;
}
// madLib('make', 'best', 'guac');

///////////////////////////////////////////


function isSubstring(string, substr) {
  return string.includes(substr);
}

///////////////////////////////////////////


function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

///////////////////////////////////////////

function nPrimes(n) {
  var primes = [];

  for (var i = 2; primes.length < n; i++) {
    if(isPrime(i)){
      primes.push(i);
    }
  }

  return primes;
}


///////////////////////////////////////////

// sumOfNPrimes

function sumOfNPrimes(n) {
  var sum = 0;
  var primes = nPrimes(n);

  for(var i = 0; i < primes.length; i++) {
    sum += primes[i];
  }
  return sum;
}

///////////////////////////////////////////


// > titleize(["Mary", "Brian", "Leo"], printCallback);
// Mx. Mary Jingleheimer Schmidt
// Mx. Brian Jingleheimer Schmidt
// Mx. Leo Jingleheimer Schmidt
// undefined

function titleize(names, callback) {
  let titleized = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);
  callback(titleized);
};

titleize(["Mary", "Brian", "Leo"], (names) => {
  names.forEach(name => console.log(name));
});

///////////////////////////////////////////

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function () {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
};

// Elephant.prototype.grow: should increase the elephant's height by 12 inches

Elephant.prototype.grow = function () {
  this.height += 12;
}

Elephant.prototype.addTrick = function (trick) {
  this.tricks.push(trick);
};

Elephant.prototype.play = function() {
  console.log(this.tricks[ Math.floor(Math.random() * this.tricks.length) ]);
}

tim = new Elephant('Tim', 5.4, ['jumps', 'runs', 'juggles']);

///////////////////////////////////////////
