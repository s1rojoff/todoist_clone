function mainDate() {
  const mainDate = new Date();
  let day = mainDate.getDate();
  let monthNum = mainDate.getMonth() + 1;
  let weekNum = mainDate.getDay();
  let month = "";
  let week = "";
  function getDate() {

    switch (monthNum) {
      case 1:
        month = "Jan";
        break;
      case 2:
        month = "Feb";
        break;
      case 3:
        month = "Mar";
        break;
      case 4:
        month = "Apr";
        break;
      case 5:
        month = "May";
        break;
      case 6:
        month = "June";
        break;
      case 7:
        month = "July";
        break;
      case 8:
        month = "Aug";
        break;
      case 9:
        month = "Sept";
        break;
      case 10:
        month = "Oct";
        break;
      case 11:
        month = "Nov";
        break;
      case 12:
        month = "Dec";
        break;
    }

    switch (weekNum) {
        case 1:
        week = "Mon";
        break;
      case 2:
        week = "Tues";
        break;
      case 3:
        week = "Weds";
        break;
      case 4:
        week = "Thurs";
        break;
      case 5:
        week = "Fri";
        break;
      case 6:
        week = "Sat";
        break;
      case 7:
        week = "Sun";
        break;
    }
  }
  getDate()
  return {week, month, day}
}

export default mainDate