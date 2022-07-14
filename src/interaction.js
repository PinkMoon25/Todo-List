import { taskArr } from './task.js';

export const clearBtn = document.querySelector('.clear');

export function update(x, input, taskArr) {
  if (taskArr[x].completed === false) {
    taskArr[x].completed = true;
    input.checked = true;
    input.parentElement.parentElement.classList.add('completed');
  } else {
    taskArr[x].completed = false;
    input.checked = false;
    input.parentElement.parentElement.classList.remove('completed');
  }
};

export function clearCompleted (taskArr) {
  taskArr = taskArr.filter((task) => task.completed === false);
  return taskArr;
};
