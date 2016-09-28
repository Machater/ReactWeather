/*
function getTempCallback (location, callback) {

  callback(undefined, 78);
  callback('city not found');
}

getTempCallback('Austin', function(err, temp) {
  if (err) {
    console.log("error", err);
  }
  else {
    console.log('success', temp);
  }
});

function getTempPromise(location) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(79);
      reject('city was not found');
    }, 1000)
  });
}

getTempPromise('Austin').then(function(temp) {
  console.log('promise success', temp);
}, function(err) {
  console.log('promise error', err);
});
console.log("Done here");
*/

function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    }
    else {
    reject("both values not numbers");
  }
  });
}

addPromise(5, 2).then(function(sum) {
  console.log('success', sum);
}, function(err) {
  console.log('error', err);
});

addPromise('brian', 5).then(function(sum) {
  console.log("this should not show");
}, function(err) {
  console.log("the error is: ", err);
});
