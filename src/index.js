import './style.css';
import {
  taskArr, addTask, removeTask, storeTask, getTask,
} from './task.js';
import { clearBtn, update, clearCompleted, edit } from './interaction.js';

const list = document.querySelector('.tasklist');
const listInput = document.querySelector('#listInput');
const addBtn = document.querySelector('.addtask');
const refresh = document.querySelector('.refresh');

function createTaskList() {
  list.innerHTML = '';
  for (let i = 0; i < taskArr.length; i += 1) {
    taskArr[i].index = i;
    const task = document.createElement('li');
    const div = document.createElement('div');
    const taskContent = document.createElement('p');
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    const taskBtn = document.createElement('button');
    taskBtn.setAttribute('type', 'button');
    const delIcon = document.createElement('i');
    delIcon.classList.add('fa-solid', 'fa-trash-can');
    const editIcon = document.createElement('i');
    editIcon.classList.add('fa-solid', 'fa-pen-to-square');

    div.appendChild(input);
    taskContent.innerHTML = `${taskArr[i].description}`;
    div.appendChild(taskContent);

    taskBtn.appendChild(editIcon);
    taskBtn.appendChild(delIcon);

    task.appendChild(div);
    task.appendChild(taskBtn);

    list.appendChild(task);

    delIcon.addEventListener('click', () => {
      removeTask(taskArr[i].index, taskArr);
      createTaskList();
      storeTask(taskArr);
      getTask();
    });

    editIcon.addEventListener('click', () => {
      edit(taskContent, taskArr, i);
    });

    input.addEventListener('change', () => {
      update(i, input, taskArr);
      storeTask(taskArr);
      getTask();
    });
    if (taskArr[i].completed === true) {
      input.checked = true;
      input.parentElement.parentElement.classList.add('completed');
    } else {
      input.checked = false;
      input.parentElement.parentElement.classList.remove('completed');
    }
  }
}

addBtn.addEventListener('click', () => {
  if (listInput.value === '') return;
  addTask(listInput, taskArr);
  storeTask(taskArr);
  getTask();
  createTaskList();
  listInput.value = '';
});

listInput.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    addBtn.click();
  }
});

refresh.addEventListener('click', () => {
  getTask();
  createTaskList();
});

clearBtn.addEventListener('click', () => {
  let result = clearCompleted(taskArr);
  storeTask(result);
  getTask();
  createTaskList();
});

document.addEventListener('DOMContentLoaded', () => {
  getTask();
  createTaskList();
});
