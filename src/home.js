import classNames from 'classnames';

export const home = (defaultProject) => {
    const content = document.querySelector('main');

    content.innerHTML = `
        <div class="bg-white h-full">
            <div id='defaultContainer'>
                
            </div>
        </div>
    `

    if(defaultProject !== undefined){
        defaultProject.todoArray.forEach(todo => {
            const todoElement = document.createElement('div');
            todoElement.textContent = todo.todoTitle; 
        
        })
    }


    document.querySelector('#defaultContainer')
}