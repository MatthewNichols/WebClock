import './style.scss'

const minuteHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');

var lastHourNumber: number = -1;
function adjustTickClasses(currHourNumber: number) {
  if (lastHourNumber === currHourNumber) {
    return;
  }

  const tickNumbers = [3, 6, 9, 12];
  tickNumbers.forEach((tickNum) => {
    const tickElem = document.getElementById(`tick-${tickNum}`) as HTMLElement;
    //something here about dealing with 12
    const diff = Math.abs((tickNum % 12) - (currHourNumber % 12));
    
    let currClass: string | null = null;
    tickElem.classList.forEach((c) => currClass = c.startsWith("distance") ? c : currClass);
    if (currClass) {
      tickElem.classList.replace(currClass, `distance-${diff}`);
    } else {
      tickElem.classList.add(`distance-${diff}`);
    }

    console.log(currHourNumber, tickNum, diff)
  })
  


  lastHourNumber = currHourNumber;
}

const updateTimeDisplay = () => {
  const nowValue = new Date();
  const minutesPosition = (nowValue.getMinutes() + (nowValue.getSeconds() / 60)) * 6;
  const hourPos = ((nowValue.getHours() % 12) + (nowValue.getMinutes() / 60)) * 30;

  minuteHand?.setAttribute("transform", `rotate(${minutesPosition}, 300, 300)`);
  hourHand?.setAttribute("transform", `rotate(${hourPos}, 300, 300)`);

  adjustTickClasses(nowValue.getHours());
};

updateTimeDisplay();

setInterval(updateTimeDisplay, 1000);
