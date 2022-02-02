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
// let counter = 0;
let dataId = 1;

tasks.push({
    id: tasks.length + 1,
    task: input.value,
    done: false,
  });
  console.log(tasks);

function renderTask() {
  const item = document.createElement('div');
  item.className = 'todo__list-tasks flex';
  const itemContainer = document.createElement('div');
  itemContainer.className = 'todo__list-tasks-task flex';
  const checkButton = document.createElement('button');
  const task = document.createElement('p');
  const taskValue = (task.innerText = input.value);
  task.setAttribute('data-taskid', `${dataId++}`);
  itemContainer.append(checkButton, task);
  const deleteButton = document.createElement('button');
  const deleteButtonCross = document.createElement('img');
  deleteButtonCross.src = './assets/images/icon-delete.svg';
  deleteButton.appendChild(deleteButtonCross);
  item.append(itemContainer, deleteButton);
  listContainer.prepend(item);
 

  completeTask();
}

function completeTask() {
  const checkButton = document.querySelector('.todo__list-tasks-task button');
  const task = document.querySelector('.todo__list-tasks-task p');

  checkButton.addEventListener('click', (e) => {
    checkButton.classList.toggle('completed-task');
    task.classList.toggle('line-through');
    // const taskId = parseInt(task.dataset.taskId)
    // console.log(taskId);
    const matchedTask = tasks.find(item => String(task.id) === task.dataset.taskid)
    console.log(matchedTask);
    // matchedTask.done = true;
    // const ex = tasks.findIndex(i => i.id === 3)
    // console.log(ex);
    // const checkIfDone = 
    // console.log(tasks.map(item => item[taskId].id))
    // console.log(tasks);
    // checkIfDone.done = true
    // console.log(tasks);

    // const (checkButton.nextElementSibling);
    // const taskDataId =
    // console.log(e.target.nextElementSibling.dataset.taskid)
    // const checkCompleted =
    // console.log(tasks.find(task => task.id === taskDataId))
    // checkCompleted.done = true;
    // console.log(tasks);
  });
}



