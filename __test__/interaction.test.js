/**
 * @jest-environment jsdom
 */
const { update, clearCompleted, edit } = require('../src/interaction.js');
let taskArr = require('../src/task.js');

describe('update', () => {
  test('should update to true', () => {
    const body = document.querySelector('body');
    const input = document.createElement('input');
    body.appendChild(input);
    taskArr = [
      {
        description: 'test',
        completed: false,
        index: 0,
      },
    ];
    const x = 0;
    update(x, input, taskArr);
    expect(taskArr[x].completed).toBeTruthy();
  });

  test('should update to false', () => {
    const body = document.querySelector('body');
    const input = document.createElement('input');
    body.appendChild(input);
    taskArr = [
      {
        description: 'test',
        completed: true,
        index: 0,
      },
    ];
    const x = 0;
    update(x, input, taskArr);
    expect(taskArr[x].completed).toBeFalsy();
  });
});

describe('clearCompleted', () => {
  test('should remove the completed task', () => {
    taskArr = [
      {
        description: 'remove',
        completed: true,
        index: 0,
      },
      {
        description: 'stay',
        completed: false,
        index: 0,
      },
    ];
    const result = clearCompleted(taskArr);
    expect(result).toHaveLength(1);
    expect(result[0].completed).toBeFalsy();
    expect(result[0].description).toMatch(/stay/);
  });
});

describe('edit', () => {
  test('content should be editable', () => {
    const body = document.querySelector('body');
    const taskContent = document.createElement('p');
    body.appendChild(taskContent);

    edit(taskContent);

    expect(taskContent.getAttribute('contentEditable')).toBeTruthy();
  });
});
