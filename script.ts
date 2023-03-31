const clockLineSecond = document.querySelector('.clock-line-seconds') as HTMLElement; 
const clockLineMinute = document.querySelector('.clock-line-minutes') as HTMLElement; 
const clockLineHour = document.querySelector('.clock-line-hours') as HTMLElement; 

function setDate(){
  const now = new Date();
  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();
  const secondDegree = ((second / 60) * 360) + 90;
  const minuteDegree = ((minute / 60) * 360) + 90;
  const hourDegree = ((hour / 24) * 360) + 90;
  console.log(hour + " " + minute + " " + second);
  console.log(hourDegree + " " + minuteDegree + " " + secondDegree);
  clockLineSecond.style.transform = `rotate(${secondDegree}deg)`;
  clockLineMinute.style.transform = `rotate(${minuteDegree}deg)`;
  clockLineHour.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);