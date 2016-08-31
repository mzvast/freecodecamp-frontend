/**
 * Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.

Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, the year should not be displayed at the beginning of the friendly range.

If the range ends in the same month that it begins, do not display the ending year or month.

Examples:

makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]

makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"].
 */


function makeFriendlyDates(arr) {

  var m_arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  var d_arr = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'];

  var y1 = arr[0].substring(0,4)
  var m1 = m_arr[parseInt(arr[0].substring(5,7))-1]
  var d1 = parseInt(arr[0].substring(8,11))
      d1 = (arr[0].substr(8,1))==1?d1+'th':d1+d_arr[d1%10]
  var y2 = arr[1].substring(0,4)
  var m2 = m_arr[parseInt(arr[1].substring(5,7))-1]
  var d2 = parseInt(arr[1].substring(8,11))
      d2 = (arr[1].substr(8,1))==1?d2+'th':d2+d_arr[d2%10]

  if (y1 == y2&&m1==m2&&d1==d2) {
    y2=m2=d2=''
  }
  if (y1 == (y2-1)&&m1==m2&&d1==d2) {
    return ret()
  }
  if ((y1 == (y2-1))) {
    if (y1==2016) {
      y1 = y2 = ''
    }else{
      y2 = ''
    }
      return ret();

  }

  if ((y1 == y2)&& (y1 == 2016)) {
    y1=y2=''
    if (m1 == m2) {
      m2 = ''
    }
    return ret();
  }
  if ((y1 == y2)&& (y1 !== 2016)) {
    y2 = ''
    return ret();
  }
  return ret();

  // return y1
  function ret() {
    if(y2||m2||d2){
      return [m1+' '+d1+(y1?(', '+y1):''),((m2?m2+' ':'')+d2+(y2?(', '+y2):''))]
    }else{
      return [m1+' '+d1+(y1?(', '+y1):'')]
    }
  }

}

// console.log(makeFriendlyDates(['2016-07-01', '2016-07-04']));
// console.log(makeFriendlyDates(["2016-12-01", "2017-02-03"]));
// console.log(makeFriendlyDates(["2016-12-01", "2018-02-03"]));
// console.log(makeFriendlyDates(["2017-03-01", "2017-05-05"]));
// console.log(makeFriendlyDates(["2018-01-13", "2018-01-13"]));
// console.log(makeFriendlyDates(["2022-09-05", "2023-09-04"]));
console.log(makeFriendlyDates(["2022-09-05", "2023-09-05"]));
