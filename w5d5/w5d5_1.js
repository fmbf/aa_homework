
const cb = function(){
  alert('HAMMERTIME');
};

window.setTimeout(cb, 5000);


const hammerTime = time => window.setTimeout(cb, 2000);

// const hammerTime = function (time){window.setTimeout(cb, 2000);};
