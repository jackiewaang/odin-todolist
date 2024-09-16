import "./style.css";
import {home} from './home.js';
import {createTodo, createProject} from './todos.js';

const initialLoader = (() => {
    const content = document.querySelector('main');
    const defaultProject = createProject('Default');
    home();
    return {content, defaultProject};
})();

const changePages = (() => {
    const homePage = document.querySelector('#home');
    const notificationsPage = document.querySelector('#notifications');
    const searchPage = document.querySelector('#search');
    const projectsPage = document.querySelector('#projects');
    const content = initialLoader.content;
    const addNewBtn = document.querySelector('#addNewBtn');
    const dialog = document.querySelector('#addNewForm');
    const closeDialog = document.querySelector('#closeDialog');
    const submitForm = document.querySelector('#submitForm');
    const dateChange = document.querySelector('#newDueDate');

    function update(){
        content.textContent = '';
    }

    homePage.addEventListener('click', () => {
        update();
        home(initialLoader.defaultProject);
    })

    notificationsPage.addEventListener('click', () => {
        update();
        notifications();
    })

    searchPage.addEventListener('click', () => {
        update();
        search();
    })

    projectsPage.addEventListener('click', () => {
        update();
        console.log('a');
        projects();
    })

    addNewBtn.addEventListener('click', () => {
        dialog.showModal();
    })

    closeDialog.addEventListener('click', () => {
        dialog.close();
    })

    dateChange.addEventListener('change', () => {
        // make it so that it changes to set date - today date
    })

    submitForm.addEventListener('click', (e) => {
        e.preventDefault();
        dialog.close();
        const title = document.querySelector('#newTitle').value;
        const description = document.querySelector('#newDescription').value;
        const date = document.querySelector('#newDate').value;
        const priority = document.querySelector('input[name="priority"]:checked').value;
        const newTodo = createTodo(title, description, date, priority);
        initialLoader.defaultProject.addTodo(newTodo);
    })
})();