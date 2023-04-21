const form = document.querySelector('form');
const taskInput = document.querySelector('#new-task');
const taskList = document.querySelector('#task-list');

form.addEventListener('submit', function(e) {
	e.preventDefault();
	if (taskInput.value.trim() === '') {
		alert('Please enter a task!');
	} else {
		addTask(taskInput.value);
		taskInput.value = '';
		taskInput.focus();
	}
});

function addTask(taskName) {
	const li = document.createElement('li');
	const span = document.createElement('span');
	const button = document.createElement('button');
	
	span.textContent = taskName;
	button.textContent = 'Delete';

	button.addEventListener('click', function() {
		li.remove();
	});

	li.appendChild(span);
	li.appendChild(button);
	taskList.appendChild(li);
}
