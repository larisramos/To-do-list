const elementoLista = document.querySelector('ul')
const elementoInput = document.querySelector("input")
const botaoAdd = document.querySelector("button")

const tarefa = {
  'Tarefa1',
  'Tarefa2'
}

function addTarefas(){

  for (tarefa of tarefa) {
    const elementoTarefa = document.createElement('li')
    const textoTarefa = document.createTextNode(tarefa)

    elementoTarefa.appendChild(textoTarefa)
    elementoLista.appendChild(elementoTarefa)
    
  }
}

addTarefas()