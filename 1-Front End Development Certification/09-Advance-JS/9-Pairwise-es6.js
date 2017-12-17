/* 
    let source = Rx.Observable.range(arr, arg).pairwise();
    let subscription = source.subscribe(

        function pairwise(arr, arg) {
            console.log('Next: ' + JSON.stringify(arr));
        },
        function (err) {
            console.log('Error: ' + err);
        },
        function () {
            console.log('Completed');
        return arg;
        }); 
*/

let pairwise = (arr, arg) => {
    let TOC = [];

    for (let a in arr) {
        let temp1 = arr[a];
    
        for (let i = 1; i < arr.length; i++) {
            let temp2 = arr[i];
    
            if (
                temp1 + temp2 === arg &&
                i > a &&
                TOC.indexOf(+a) === -1 &&
                TOC.indexOf(+i) === -1
            ) {
                TOC.push(+a, +i);
                break;
            }
        }
    }

    // return arg;
    if (TOC.length >= 1) {
        let sumAll = function(a, b) {
            return a + b;
        };
        return TOC.reduce(sumAll);
    } else {
        return 0;
    }
}    
pairwise([1, 4, 2, 3, 0, 5], 7);
