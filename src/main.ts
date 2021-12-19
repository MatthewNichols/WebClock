import './style.scss'

const minuteHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');

setInterval(() => {
  const nowValue = new Date();
  const minutesPosition = (nowValue.getMinutes() + (nowValue.getSeconds() / 60)) * 6;
  const hourPos = ((nowValue.getHours() % 12) + (nowValue.getMinutes() / 60)) * 30;
  
  minuteHand?.setAttribute("transform", `rotate(${ minutesPosition }, 300, 300)`);
  hourHand?.setAttribute("transform", `rotate(${ hourPos}, 300, 300)`)  
}, 1000);
