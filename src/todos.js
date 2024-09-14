function createTodo(title, description, dueDate, priority){

    const title = title;
    const description = description;
    const dueDate = dueDate;
    let priority = priority;
    let isCompleted = false;

    const changePriority = () => priority + 1 % 3; // 0 for low, 1 for medium, 2 for high
    const getPriority = () => priority;
    const toggleCompleted = () => (isCompleted) ? false : true;

    return {title, description, dueDate, changePriority, getPriority, toggleCompleted};
}

function createProject(title, ...args){

    const projectTitle = title;helloguys
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

    return {addTodo, removeTodo};
}