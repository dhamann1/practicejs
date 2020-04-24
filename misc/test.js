/* Rule Id: 3225850 */
// version 1.0.8
var name = "autoMetrics";
var dependencies = ["location"];
var AutoMetrics = (function() {
  var autoMetricMap = {
    "*": []
  };

  //recipe [page,s ubpage, overlay] 
  function addAutoKeyMetric(recipe, testFunc, keyMetric) {
    autoMetricMap[recipe] = autoMetricMap[recipe] || [];
    if (typeof testFunc === "function") {
      autoMetricMap[recipe].push({
        test: testFunc,
        metric: keyMetric
      });
    } else if (testFunc && typeof testFunc.test === "function") {
      autoMetricMap[recipe].push(testFunc);
    }

  }

  function getAutoMetrics(obj) {
    var eventData = obj.eventData || {};
    var recipe = eventData.recipe || "";
    var metrics = eventData.metrics || "";
    var tests = autoMetricMap[recipe] || [];
    tests = tests.concat(autoMetricMap["*"] || []);
    return tests.reduce(function(prev, item) {
      if (item.test(obj)) {
        if (item.metric) {
          prev.push(item.metric);
        }
      }
      return prev;
    }, []);
  }


  return {
    add: addAutoKeyMetric,
    get: getAutoMetrics
  };

}());
/************************************
Add metrics below
************************************/

AutoMetrics.add("page", function(obj) {
  var loc = obj.location || {};
  return loc.pathname.match(/^\/local-specials\/$/i);
}, "km-offers-search");

AutoMetrics.add("page", function(obj) {
  var step_num = obj.eventData.step_number || "";
  var loc = obj.location || {};
  return loc.pathname.match(/trade-in-value/i) && step_num === "";
}, "km-trade_in-start");

AutoMetrics.add("*", function(obj) {
  var metrics = obj.eventData.metrics || "";
  return metrics.indexOf("km-raq-start") > -1 ||
    metrics.indexOf("km-trade_in-start") > -1;
}, "km-lead-start");

AutoMetrics.add("*", function(obj) {
  var metrics = obj.eventData.metrics || "";
  return metrics.indexOf("km-raq-complete") > -1 || metrics.indexOf("km-cad-complete") > -1 || metrics.indexOf("km-satd-complete") > -1 ||
    metrics.indexOf("km-trade_in-complete") > -1;
}, "km-lead-complete");

/*
Build Your Own Start
Compare Start
Search Inventory Results
Local Specials
Find a Dealer Search
Get a Brochure
RAQ Start
*/
AutoMetrics.add("*", function(obj) {
  var metrics = obj.eventData.metrics || "";
  return metrics.indexOf("km-raq-start") > -1 ||
    metrics.indexOf("km-byo-start") > -1 ||
    metrics.indexOf("km-trade_in-start") > -1 ||
    metrics.indexOf("km-compare-model-complete") > -1 ||
    metrics.indexOf("km-compare-start") > -1 ||
    metrics.indexOf("km-inventory-results") > -1 ||
    metrics.indexOf("km-offers-search") > -1 ||
    metrics.indexOf("km-offers-detail") > -1 ||
    metrics.indexOf("km-dealer-search") > -1 ||
    metrics.indexOf("km-rab-download") > -1 ||
    metrics.indexOf("km-rab-start") > -1;
}, "km-qualified-action");

/* User Actions */
AutoMetrics.add("*", function(obj) {
  var metrics = obj.eventData.metrics || "";
  var linkName = obj.eventData.linkname;

  return metrics.indexOf("ua-nav-click") > -1 && linkName === "Find_A_Dealer";

}, "ua-nav-fad-click");

AutoMetrics.add("*", function(obj) {
  var metrics = obj.eventData.metrics || "";
  var linkName = obj.eventData.linkname;

  return metrics.indexOf("ua-nav-click") > -1 && linkName === "Build_Price";

}, "ua-nav-byo-click");

AutoMetrics.add("*", function(obj) {
  var metrics = obj.eventData.metrics || "";
  var linkName = obj.eventData.linkname;

  return metrics.indexOf("ua-nav-click") > -1 && linkName === "Local_Specials";

}, "ua-nav-offers-click");

AutoMetrics.add("*", function(obj) {
  var recipe = obj.eventData.recipe || {};
  var link_text = obj.eventData.link_text || "";
  return (recipe === "link" && !link_text);
}, "km-error-link_text");

// Add to DataLayer
if (typeof DataLayer !== "undefined" && typeof DataLayer.addProvider === "function") {
  DataLayer.addProvider(name, dependencies, AutoMetrics);
} else {
  console.warn("DataLayer not defined");
}
// trigger RAQ Abandon
AutoMetrics.add("*", (function() {
  var isOpen = false;
  var isComplete = false;
  var metric = "km-raq-abandon";


  function test(obj) {
    var metrics = obj.eventData.metrics || "";
    var triggerMetric = false;
    if (metrics.indexOf("km-raq-start") > -1) {
      isOpen = true;
      isComplete = false;
    }
    if (metrics.indexOf("km-raq-complete") > -1) {
      isOpen = true;
      isComplete = true;
    }
    if (metrics.indexOf("ua-raq-close") > -1) {
      if (isOpen && !isComplete) {
        triggerMetric = true;
      }
    }

    return triggerMetric;
  }

  return {
    test: test,
    metric: metric
  };


}()));