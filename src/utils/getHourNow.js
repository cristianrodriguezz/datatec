export const getHourNow = () =>  {
  let now = new Date();
  let hour = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let seconds = now.getSeconds().toString().padStart(2, '0');
  
  return hour + ":" + minutes + ":" + seconds;

}