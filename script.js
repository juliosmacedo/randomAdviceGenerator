const app = document.getElementById('root')
var request = new XMLHttpRequest()
const container = document.createElement('div')
const card = document.getElementById('card')
container.setAttribute('class', 'container')
app.appendChild(container)
const bar = document.getElementById('bar')
const loading = document.getElementById('loading')

request.open('GET', 'https://api.adviceslip.com/advice', true)



// request.onload = function () {
//     let data = JSON.parse(this.response)

//     data.forEach(quote => {
//         const card = document.createElement('div')
//         card.setAttribute('class', 'card')
//         const h1 = document.createElement('h1')
//         h1.textContent = quote
//         container.appendChild(card)
//         card.appendChild(h1)
//     })

//     if (request.status >= 200 && request.status < 400) {
//         data.forEach(quote => {
//           console.log(quote)
//         })
//       } else {
//         console.log('error')
//       }


// }

request.onload = function () {
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        const h1 = document.createElement('h1')
        const h2 = document.createElement('h2')
        h1.textContent = '"' + data.slip.advice + '"';
        h2.textContent = 'ADVICE #'+data.slip.id;
        container.appendChild(card)
        card.insertBefore(h2, bar)
        card.insertBefore(h1, bar)
        loading.style.display = 'none';
    } else {
      const errorMessage = document.createElement('marquee')
      errorMessage.textContent = `Gah, it's not working!`
      app.appendChild(errorMessage)
    }
  }
  
  


request.send()