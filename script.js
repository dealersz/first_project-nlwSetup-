const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener("change", save)

function add() {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

    if (dayExists) {
      alert("Dia já incluso")
      return
    }

    alert('Adicionado com sucesso')

    nlwSetup.addDay(today)

}

function save(){
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
    
    
}

// const data = {
//    studies: ['02-01', '02-02', '02-03', '02-04'],
//    cook:['02-01', '02-02', '02-03', '02-04'],
//    exercises:['02-01', '02-03'],
//    shower:['02-01', '02-02', '02-03', '02-04', '02-05', '02-06'],
//    games:['02-01', '02-02', '02-03', '02-04']
// }

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()