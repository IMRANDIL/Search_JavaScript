const userCardTemplate = document.querySelector('[data-user-template]');
const userCardContainer = document.querySelector('[data-user-card]');
const searchInput = document.querySelector('[data-search]');

let users = [];

searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    users.forEach((user) => {
        const isVisible = user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value);
        user.element.classList.toggle('hide', !isVisible)
    })
})






fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).then((data) => {
    users = data.map(({ name, email }) => {
        const card = userCardTemplate.content.cloneNode(true).children[0];
        const header = card.querySelector('[data-header]');
        const body = card.querySelector('[data-body]');
        header.textContent = name;
        body.textContent = email;
        userCardContainer.append(card);
        return { name: name, email: email, element: card }
    })

}).catch(err => console.log(err))