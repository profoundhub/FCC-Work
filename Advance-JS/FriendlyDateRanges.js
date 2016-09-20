
function makeFriendlyDates(arr) {

  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // console.log(months);

  // return arr;
  console.log(arr);

  var d = new Date();
  var n = d.getUTCFullYear();

  console.log(d);
  console.log(n);

}

makeFriendlyDates(['2016-07-01', '2016-07-04']);
