
const formData = {
    email: '',
    message: '',
};

const form = document.querySelector('.feedback-form');

const saveToLocalStorage = () => {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const loadFromLocalStorage = () => {
    const saveData = localStorage.getItem('feedback-form-state');
    if (saveData) {
        return JSON.parse(saveData);
    }
    return null;
};

document.addEventListener('DOMContentLoaded', () => {
    const savedData = loadFromLocalStorage();

    if (savedData) {
        formData.email = savedData.email;
        formData.message = savedData.message;
        formData.elements.email.value = savedData.email;
        formData.elements.message.value = savedData.message;
    }
});

form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value.trim();
    saveToLocalStorage();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }
    console.log('Form Data:', formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
    formData.email = '';
    formData.message = '';
});