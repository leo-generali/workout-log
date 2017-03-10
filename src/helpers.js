export function formatDate(date) {

  const dd = date.getDate();
  const ddd = date.getDate();
  const mm = date.getMonth() + 1; 
  const yyyy = date.getFullYear();

  return ddd + '/' + mm + '/' + yyyy

}
