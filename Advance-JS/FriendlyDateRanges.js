
function makeFriendlyDates(arr) {

  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // console.log(months);

  // return arr;
  console.log(arr);

  var d = new Date();
  var n = d.getUTCFullYear();

  console.log(d);
  console.log(n);


  var startDate = new Date(arr[0]), endDate = new Date(arr[1]);

  let startDay = startDate.getDate(),
      endDay = endDate.getDate(),

      startMonth = startDate.getMonth(),
      endMonth = endDate.getMonth(),

      startYear = startDate.getFullYear(),
      endYear = endDate.getFullYear();

    console.log(startDate);
    console.log(endDay);

    console.log(startDay);
    console.log(endDay);

    console.log(startMonth);
    console.log(endMonth);

    console.log(startYear);
    console.log(endYear);




}

makeFriendlyDates(['2016-07-01', '2016-07-04']);
