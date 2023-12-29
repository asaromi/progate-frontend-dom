const result = document.getElementById('result')

const button = document.querySelector('input[type="button"]')
button.addEventListener('click', () => {
  const value = document.querySelector('input[type="number"]').value

  console.log(value)
  if (!value || value === '0') {
    result.innerHTML = 'Invalid value'
    result.style.color = 'red'
  } else if (value % 3 === 0 && value % 5 === 0) {
    result.innerHTML += 'FizzBuzz!<br>'
  } else if (value % 3 === 0) {
    result.innerHTML += 'Fizz!<br>'
  } else if (value % 5 === 0) {
    result.innerHTML = 'Buzz!<br>'
  } else {
    result.innerHTML += value + '<br>'
  }
})
