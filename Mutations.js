function mutation(arr) {
  var arrSecond = arr[1].toLowerCase();
  var arrFirst = arr[0].toLowerCase();
  for (i=0; i<arrSecond.length; i++) {
    if (arrFirst.indexOf(arrSecond[i]) < 0)
      return false;
  }
  return true;
}

mutation(["hello", "hey"]);
