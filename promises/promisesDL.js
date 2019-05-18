function getObj () {
  return {
    series_brand: 'Toyota',
    series_year: 2020,
    user_zipcode: 90803
  };
};


// var addUserFacebook = new Promise(function (resolve, reject) {
//   setTimeout(function (x) {
//       x.user_used_facebook = 'true';
//       // console.log('This is Step 2: ', x);
//       resolve(x);
//   }, 3000);
// });


function addUserFacebook(x) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            x.user_used_facebook = 'true';
            // console.log('This is Step 2: ', x);
            resolve(x);
        }, 3000);
    });
};

function changeSeriesYear (x) {
  x.series_year = 2018;
  // console.log('This is Step 3: ', x);
  return x;
};

function addDealerCity(x) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            x.dealer_city = 'Long Beach';
            // console.log('This is Step 4: ', x);
            resolve(x);
        }, 2000);
    })
};

function addUserContactPreference (x) {
  x.user_contact_preference = 'email';
  // console.log('This is Step 5: ', x);
  return x;
};


let dataObject = {
    pList: [],
    addStep: function addStep(func) {
      this.pList.push(func);
    },
    runList: function runList () {
      return this.pList.reduce((accumulator, currentVal) => {
        if (accumulator instanceof Promise) {
          console.log('we will run async function');
          return accumulator.then(currentVal);
        }
        else if (accumulator instanceof Function) {
          console.log('we will run sync function');
          return currentVal(accumulator());
        };
        return currentVal(accumulator);
      })
    }
};


dataObject.addStep(getObj);
dataObject.addStep(changeSeriesYear);
dataObject.addStep(addUserFacebook);
dataObject.addStep(addDealerCity);
dataObject.addStep(addUserContactPreference);

dataObject.runList().then(data => console.log("These are the results: ", data));
