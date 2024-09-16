export const createTodo = (title, description, dueDate, priority) => {
    const todoTitle = title;
    const todoDescription = description;
    const todoDate = dueDate;
    let todoPriority = priority;
    let isCompleted = false;

    const changePriority = () => todoPriority + 1 % 3; // 0 for low, 1 for medium, 2 for high
    const getPriority = () => todoPriority;
    const toggleCompleted = () => (isCompleted) ? false : true;

    return {todoTitle, todoDescription, todoDate, changePriority, getPriority, toggleCompleted};
}

export const createProject = (title, ...args) => {
    
    const projectTitle = title;
    let todoArray = [];
    
    if(args.length > 0){
        todoArray.push(...args);
    }
    
    const addTodo = (todo) => todoArray.push(todo);
    const removeTodo = (todo) => {
        let index = todoArray.indexOf(todo);
        if(index >= 0){
            todoArray.splice(index, 1);
        }
    }

    return {projectTitle, todoArray, addTodo, removeTodo};
} 