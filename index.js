// Define initial ToDo list and categories
let todoList = []; // Initialize an empty array to store ToDo list items
let categories = {}; // Initialize an empty object to store categories and their tasks

// Function to add task to the ToDo list with specified category
function addTask(task, category) {
    if (!categories[category]) { // Check if the category doesn't exist
        categories[category] = []; // If not, create an empty array for the category
    }
    categories[category].push({ task: task, completed: false }); // Push the task object to the category array
    todoList.push({ task: task, category: category, completed: false }); // Push the task object to the ToDo list array
}

// Function to display tasks grouped by their categories
function displayTasksByCategory() {
    for (let category in categories) { // Loop through each category in the categories object
        console.log(`Category: ${category}`); // Log the category name
        categories[category].forEach(task => { // Loop through each task in the category
            console.log(`${task.task} - Completed: ${task.completed}`); // Log the task name and completion status
        });
        console.log('-------------------'); // Separate categories with a line
    }
}

// Function to mark task as completed
function markTaskAsCompleted(task) {
    todoList.forEach(todo => { // Loop through each task in the ToDo list
        if (todo.task === task) { // Check if the task matches the provided task name
            todo.completed = true; // Mark the task as completed
        }
    });
}

// Function to remove task from the list
function removeTask(task) {
    todoList = todoList.filter(todo => todo.task !== task); // Remove task from the ToDo list
    for (let category in categories) { // Loop through each category in the categories object
        categories[category] = categories[category].filter(todo => todo.task !== task); // Remove task from the category
    }
}

// Example usage
addTask('Do laundry', 'Home');
addTask('Buy groceries', 'Shopping');
addTask('Complete project', 'Work');

console.log('--- Tasks Before Completion ---');
displayTasksByCategory();

markTaskAsCompleted('Do laundry');
removeTask('Buy groceries');

console.log('--- Tasks After Completion and Removal ---');
displayTasksByCategory();
