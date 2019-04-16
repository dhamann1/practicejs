function getNewHope() {
    fetch("https://swapi.co/api/films/1/").then(
      data => data.status !== 200 ? console.log("Status Code: " + data.status) : data.json().then(data => console.log(data))
    );
  }

  function getLukeSkywalker() {
    fetch("https://swapi.co/api/films/1/").then(
      data => data.status !== 200 ? console.log("Status Code: " + data.status) : data.json().then(data => console.log(data))
    );
  }

  function getWookie() {
    fetch("https://swapi.co/api/species/3/").then(
      data => data.status !== 200 ? console.log("Status Code: " + data.status) : data.json().then(data => console.log(data))
    );
  }

  function getTatooine() {
    fetch("https://swapi.co/api/planets/1/").then(
      data => data.status !== 200 ? console.log("Status Code: " + data.status) : data.json().then(data => console.log(data))
    );
  }

function set10Seconds () {
  return new Promise ((resolve,reject) => setTimeout (()=> resolve('This took 10 seconds'), 10000)).then(data => console.log(data));
}


//   Reduce collapses the array of promises into a single promise chain. Allows to run the promises sequentail as opposed to in parallel with Promise.All()

let dataObject = {
    funcList: [],
    addStep: function addStep(func) {
      this.funcList.push(func);
    },
    runList: function runList () {
        return this.funcList.reduce((promiseChain, currentTask) => {
            return promiseChain.then(chainResults =>
                currentTask.then(currentResult =>
                    [ ...chainResults, currentResult ]
                )
            );
        }, Promise.resolve([])).then(arrayOfResults => {
            console.log(arrayOfResults);
        });
    }
};
