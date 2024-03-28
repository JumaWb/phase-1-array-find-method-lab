// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
  function superbowlWin(record){
    let item = record.find((list) => list.result === "W");
    if (item) {
      return item.year;
    }
    return undefined;
  }
  console.log(superbowlWin(record));
  
  