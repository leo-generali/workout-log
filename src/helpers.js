export function formatDate(date) {

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const dd = date.getDay();
  const ddd = date.getDate();
  const mm = date.getMonth(); 
  const yyyy = date.getFullYear();

  return days[dd] + ', ' + months[mm] + ' ' + ddd + ', ' + yyyy; 
}
