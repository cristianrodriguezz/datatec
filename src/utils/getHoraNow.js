export const getHoraNow = () =>  {
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  
  return hour + ":" + minutes + ":" + seconds;
}