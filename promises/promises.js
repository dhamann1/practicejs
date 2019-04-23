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
    }).then(
      data => data
    );
}

let dataObject = {
    pList: [],
    addStep: function addStep(func) {
      this.pList.push(func);
    },
    runList: function runList () {
        return this.pList.reduce((previousPromise, nextPromise) => previousPromise.then(nextPromise), Promise.resolve())
    }
};


dataObject.addStep(getLukeSkywalker);
dataObject.addStep(passFilmTitle);
dataObject.addStep(getFilmTitle);


dataObject.runList().then(data => console.log("results: ", data));