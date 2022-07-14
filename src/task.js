const listInput = document.querySelector('#listInput');

export let taskArr = []; //eslint-disable-line

export function addTask(listInput, taskArr) {
   const taskDetail = {
    description: listInput.value,
    completed: false,
    index: taskArr.length,
  };

  taskArr.push(taskDetail);
}

export function removeTask(id, taskArr) {
  taskArr.forEach((task, index) => {
    if (task.index === id) {
      taskArr.splice(index, 1);
    }
  });
}

export function storeTask(taskArr) {
  localStorage.setItem('taskCollection', JSON.stringify(taskArr));
}

export function getTask() {
  taskArr = JSON.parse(localStorage.getItem('taskCollection')) || [];
}
