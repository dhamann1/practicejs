
var resolver;
var storedData;
function manualDelay (data) {
  storedData = data;
  return new Promise ((resolve,reject) => resolve(data));
}



// function editData (data ) {
//   return new Promise ((resolve) => )
// }

let dataObject = {
    pList: [],
    addStep: function addStep(func) {
      this.pList.push(func);
    },
    runList: function runList () {
        return this.pList.reduce((prev, curVal) => prev.then(curVal), Promise.resolve({
                content_section: "request-a-quote",
                metrics: "km-raq-shown",
                recipe: "link",
                tda_code: "gst10"
        }))
    }
}


dataObject.addStep(manualDelay);


dataObject.runList().then(data => console.log("results: ", data));