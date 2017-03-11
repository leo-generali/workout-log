export function formatDate(date) {

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const dd = date.getDay();
  const ddd = date.getDate();
  const mm = date.getMonth() + 1; 
  const yyyy = date.getFullYear();

  return days[dd - 1] + ', ' + months[mm] + ' ' + ddd + ' ' + yyyy; 

}
