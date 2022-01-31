const input = document.querySelector('[data-input]');
const listContainer = document.querySelector('[data-list-container]');

input.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    if (input.value) {
      renderTask();
      input.value = '';
    }
  }
});

let tasks = [];
let counter = 0;

function renderTask() {
  const item = document.createElement('div');
  item.className = 'todo__list-tasks flex';
  const itemContainer = document.createElement('div');
  itemContainer.className = 'todo__list-tasks-task flex';
  const checkButton = document.createElement('button');
  const task = document.createElement('p');
  const taskValue = (task.innerText = input.value);
  itemContainer.append(checkButton, task);
  const deleteButton = document.createElement('button');
  const deleteButtonCross = document.createElement('img');
  deleteButtonCross.src = './assets/images/icon-delete.svg';
  deleteButton.appendChild(deleteButtonCross);
  item.append(itemContainer, deleteButton);
  listContainer.prepend(item);

  tasks.push({
    task: taskValue,
    done: false,
  });
}
