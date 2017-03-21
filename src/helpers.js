export function formatDate(date) {

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const dd = date.getDay();
  const ddd = date.getDate();
  const mm = date.getMonth(); 
  const yyyy = date.getFullYear();

  return days[dd] + ', ' + months[mm] + ' ' + ddd + ', ' + yyyy; 
}

export function keyDate(date) {
  let ddd = date.getDate();
  let mm = date.getMonth(); 
  let yyyy = date.getFullYear();

  if(ddd < 10){
    ddd = "0" + ddd;
  }

  if(mm < 10){
    mm = "0" + mm;
  }

  return yyyy + '-' + mm + '-' + ddd;
}

export function arrayDate(date) {
  const dateArrString = date.split('-');
  const dateArrNum = dateArrString.map(function(str){
    return parseInt(str, 10);
  })

  return dateArrNum;
}