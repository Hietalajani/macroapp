'use strict';

let date = new Date()
const input = document.createElement('input')
input.classList.add('inputti')
input.setAttribute('type', 'search')
input.setAttribute('placeholder', 'JÄÄPÄLÖÄ:DD')
input.addEventListener('keyup', searchfineli(input.innerText))


document.querySelector('.PVM').innerText = `PVM: ${date.toLocaleDateString("fi-FI")}`

function addfood() {
    const artikel = document.querySelector('.add')
    const table = document.querySelector('.macrotable')
    artikel.innerHTML = ''

    artikel.appendChild(document.createElement('h4')).innerText = 'Mitäs syöt? :)'
    artikel.appendChild(input)
}


function searchfineli(args) {
    fetch(`https://fineli.fi/fineli/api/v1/foods?q=${args}`, {
      method: "GET",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json; charset=utf-8",
          'X-Requested-With': 'XMLHttpRequest'
      },
      mode: 'no-cors'
  })
  .then(res => res.json())
        .then(json => loadLists(json))
  .then(json => {
      console.log(`JSON response ${json}`)
  })
  .catch(error => console.log(error));
}

let loadLists = (json) => {
    let foodnames = "asd"
}