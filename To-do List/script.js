
// ADICIONAR INPUT VALUE DE TAREFA A LISTA AO CLICAR NO BOTÃO ADICIONAR
function addTarefa() {
  let inputTarefa = document.querySelector('#input-tarefa').value;
  let list = document.querySelector('.list');

  let li = document.createElement("li");
  li.className = "li-items";
  li.innerHTML = `<input type='checkbox' class='input-li'> <span>${inputTarefa}</span> <button class='erase' onclick="removeTarefa(this)"><i class="fa-regular fa-circle-xmark icon"></i></button>`;
  
  list.appendChild(li);
  
  document.querySelector('#input-tarefa').value = "";
}

// REMOVER <LI> DA LISTA AO CLICAR NO BOTÃO 'X'
function removeTarefa(button) {
  let liToRemove = button.parentElement;
  
  liToRemove.remove();
}
