
// ADICIONAR INPUT VALUE DE TAREFA A LISTA AO CLICAR NO BOTÃO ADICIONAR
function addTarefa() {
  let inputTarefa = document.querySelector('#input-tarefa').value;
  let list = document.querySelector('.list');

  if (inputTarefa === "") {
    alert("Escreva alguma tarefa para adicioná-la a lista"); // [M1S07] Ex. 1 - SE A TAREFA É ADICIONADA À LISTA SEM SER PREENCHIDA É GERADO UM ALERT
  } else {
  let li = document.createElement("li");
  li.className = "li-items";
  // [M1S07] Ex. 1 - NOVO ITEM É ADICIONADO À LISTA AO CLICAR NO BOTÃO "ADICIONAR"
  li.innerHTML = `<input type='checkbox' class='input-li'> <span>${inputTarefa}</span> <button class='erase' onclick="removeTarefa(this)"><i class="fa-regular fa-circle-xmark icon"></i></button>`;
  
  list.appendChild(li);
  
  document.querySelector('#input-tarefa').value = ""; // [M1S07] Ex. 1 - TEXTO DE INPUT É APAGADO DEPOIS DE ADICIONADO À LISTA
  }
  quantidadeDeTarefas ();
}

inputTarefa.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTarefa();
  }
});



// [M1S07] Ex. 3 - REMOVER <LI> DA LISTA AO CLICAR NO BOTÃO 'X'
function removeTarefa(button) {
  let removerLi = button.parentElement;
  
  // [M1S07] Ex. 3 - CONFIRMAÇÃO/CANCELAMENTO DA REMOÇÃO DA TAREFA DA LISTA
  let confirmacao = confirm("Você tem certeza que deseja excluir essa tarefa?");
  if (confirmacao) {
    removerLi.remove();
  }
  quantidadeDeTarefas ();
}

// [M1S07] Ex. 4 - CONTADOR DE TAREFAS
function quantidadeDeTarefas() {
  let numeroDeTarefas = document.querySelectorAll('.li-items').length - 1;
  let divNroTarefas = document.getElementById("qtas-tarefas");

  if (divNroTarefas) {
    divNroTarefas.innerHTML = `<em>${numeroDeTarefas} tarefas na lista</em>`;
  } else {
    // Se o elemento não existir, crie um novo
    divNroTarefas = document.createElement("div");
    divNroTarefas.id = "qtas-tarefas";
    divNroTarefas.innerHTML = `<em>${numeroDeTarefas} tarefa na lista</em>`;

    let lista = document.querySelector(".list");
    lista.parentNode.appendChild(divNroTarefas);
  }
}

