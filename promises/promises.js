function doMath () {
  return 5 + 5;
};



function getLukeSkywalker() {
    return fetch("https://swapi.co/api/films/1/").then(data => data.json()).then(data => data.title);
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
  x = x + " is a great movie.";
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
          return accumulator.then(currentVal);
        }
        else {
          return accumulator(currentVal);
        };
      })
    }
};

dataObject.addStep(doMath);
dataObject.addStep(getLukeSkywalker);
dataObject.addStep(changeFilmTitle);
dataObject.addStep(passFilmTitle);
dataObject.addStep(getFilmTitle);




console.log(getLukeSkywalker() instanceof Promise);

dataObject.runList().then(data => console.log("results: ", data));
