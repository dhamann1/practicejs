function getLukeSkywalker() {
    return fetch("https://swapi.co/api/films/1/").then(data => data.json()).then(data => data.title);
}

function passFilmTitle(x) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(console.log('This is Step 2: ', x));
        }, 10000);
    });
}

function getFilmTitle(x) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(x);
        }, 1);
    }).then(
      data => console.log(data)
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


(dataObject.runList());
