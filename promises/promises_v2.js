function getNewHope(cfg) {
    console.log('New Hope - cfg ', cfg)
    return fetch(cfg.newHope).then(
      data => {
        console.log(data);
        return data.status !== 200 ? console.log("Status Code: " + data.status) : data.json().then(data => {
          cfg.newHopeResult = data
          return cfg
        })
      }
    );

  }

  function getLukeSkywalker(cfg) {
    console.log('Luke Skywalker - cfg ', cfg)
    fetch("https://swapi.co/api/people/1/").then(
      data => data.status !== 200 ? console.log("Status Code: " + data.status) : data.json().then(data => console.log(data))
    );
  }

var resolver;
var storedData;
function manualDelay (data) {
  storedData = data;
  return new Promise ((resolve) => resolver = resolve)
}
// return just the data, get rid of cfg

let dataObject = {
    pList: [],
    addStep: function addStep(func) {
      this.pList.push(func);
    },
    runList: function runList () {
        return this.pList.reduce((prev, curVal) => prev.then(curVal), Promise.resolve({
          newHope: "https://swapi.co/api/films/1/"
        }))
    }
}

dataObject.addStep(getNewHope);
dataObject.addStep(manualDelay);
dataObject.addStep(getLukeSkywalker);

dataObject.runList().then(data => console.log("results: ", data));