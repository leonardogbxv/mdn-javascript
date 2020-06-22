const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce']
    
const admitted = document.querySelector('.admitted')
const refused = document.querySelector('.refused')

admitted.textContent = 'Admit: '
refused.textContent = 'Refuse: '

for (i = 0; i < people.length; i++) {

  if (people[i] === 'Phil' || people[i] === 'Lola' ) {
    refused.textContent += `${people[i]} ,`
  } else {
    admitted.textContent += `${people[i]} ,`
  }
}

refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.'
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.'
