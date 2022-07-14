/**
 * @jest-environment jsdom
 */

const { addTask, removeTask } = require('../src/task.js');
let taskArr = require('../src/task.js');

describe('addTask', () => {
  test('add item', () => {
    const body = document.querySelector('body');
    const listInput = document.createElement('input');
    listInput.id = 'listInput';
    body.appendChild(listInput);
    taskArr = [];
    listInput.value = 'hello';
    addTask(listInput, taskArr);
    expect(taskArr).toHaveLength(1);
  });
});

describe('removeTask', () => {
  test('remove item', () => {
    const id = 0;
    removeTask(id, taskArr);
    expect(taskArr).toHaveLength(0);
  });
});
