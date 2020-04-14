// function stevenName () {
//   return 'Steven Speilberg directed '; 
// };

let x = 'Steven Speilberg directed '; 

function getLukeSkywalker(x) {
    return fetch("https://swapi.co/api/films/1/").then(data => data.json()).then(data => x + data.title);
}

function passFilmTitle(x) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('This is Step 2: ', x);
            resolve(x);
        }, 3000);
    });
}

function getFilmTitle(x) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('This is Step 3: ', x);
            resolve(x);
        }, 2000);
    })
}

function changeFilmTitle (x) {
  x = x + " and it's a great movie.";
  return x;
}

let dataObject = {
    pList: [],
    addStep: function addStep(func) {
      this.pList.push(func);
    },
    runList: function runList () {
      return this.pList.reduce((accumulator, currentVal) => {
        if (accumulator instanceof Promise) {
          console.log('we are in an async function');
          return accumulator.then(currentVal);
        }
        else {
          console.log('we are in a sync function');
          return currentVal(accumulator());
        };
      })
    }
};

// dataObject.addStep(stevenName);
dataObject.addStep(getLukeSkywalker);
dataObject.addStep(changeFilmTitle);
dataObject.addStep(passFilmTitle);
dataObject.addStep(getFilmTitle);




// console.log(getLukeSkywalker() instanceof Promise);

dataObject.runList().then(data => console.log("results: ", data));
