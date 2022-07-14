/**
 * @jest-environment jsdom
 */
const {update, clearCompleted} = require('../src/interaction.js');
let taskArr = require('../src/task.js');
// Object.defineProperty(taskArr, { writable: true});

test('should update to true', ()=>{
  const body = document.querySelector('body');
  const input = document.createElement('input');
  body.appendChild(input);
  taskArr = [{
    description: 'test',
    completed: false,
    index: 0,
  }];
  const x = 0;
  update(x, input, taskArr);
  expect(taskArr[x].completed).toBeTruthy();
});

test('should update to false', ()=>{
  const body = document.querySelector('body');
  const input = document.createElement('input');
  body.appendChild(input);
  taskArr = [{
    description: 'test',
    completed: true,
    index: 0,
  }];
  const x = 0;
  update(x, input, taskArr);
  expect(taskArr[x].completed).toBeFalsy();
});

test('should remove the completed task', ()=>{
  taskArr = [{
    description: 'remove',
    completed: true,
    index: 0,
  }, {
    description: 'stay',
    completed: false,
    index: 0,
  }];
  const result = clearCompleted(taskArr);
  expect(result).toHaveLength(1);
  expect(result[0].completed).toBeFalsy();
  expect(result[0].description).toMatch(/stay/);
}); 
