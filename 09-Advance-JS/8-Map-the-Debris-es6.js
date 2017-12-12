
function orbitalPeriod(arr) {
    let GM = 398600.4418,
    earthRadius = 6367.4447,
    a = 2 * Math.PI,
    newArr = [];
    let getOrbPeriod = function(obj) {
        let c = Math.pow(earthRadius + obj.avgAlt, 3),
        b = Math.sqrt(c / GM),
        orbPeriod = Math.round(a * b);
        delete obj.avgAlt;
        obj.orbitalPeriod = orbPeriod;
        return obj;
    };

    for (var elem in arr) {
        newArr.push(getOrbPeriod(arr[elem]));
    }
    
    return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
