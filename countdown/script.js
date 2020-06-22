const output = document.querySelector('.output');
output.innerHTML = '';

var i = 10

do {
  const para = document.createElement('p'); 

  if (i === 10) {
    para.textContent = `Countdown: ${i}`
  } else if (i > 0) {
    para.textContent = i
  } else {
    para.textContent = 'Launch!'
  }

  output.appendChild(para)
  
  i--
} while (i >= 0)