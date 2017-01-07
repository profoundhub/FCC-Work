function mutation(arr) {
  var data = arr[1].toLowerCase();
  var result = arr[0].toLowerCase();
  for (i=0;i<data.length;i++) {
    if (result.indexOf(data[i]) < 0)
      return false;
  }
  return true;
 }

mutation(["hello", "hey"]);
