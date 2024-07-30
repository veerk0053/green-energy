// Resources data
let resources = {
    p1: {
        title: 'Government Incentives and Subsidies',
        bodyText: 'Tax Credits reduce the amount of tax you owe based on the cost of installing renewable energy systems. For example, the U.S. federal Investment Tax Credit (ITC) offers a percentage of the installation cost of solar systems as a credit. Direct discounts provided by state or local governments for installing renewable energy systems. These can lower the initial purchase price. Some governments offer grants to help cover the cost of renewable energy projects, often for research or community-based initiatives.',
        image: 'images/tyler-casey-ficbiwfOPSo-unsplash.jpg',
    },
    p2: {
        title: 'Technological Advancements',
        bodyText: 'Innovations like higher efficiency solar panels and more effective wind turbines mean that more energy can be generated from the same amount of sunlight or wind, reducing the cost per unit of energy. Advances in manufacturing processes and materials can lower the cost of producing renewable energy technologies.',
        image: 'images/american-public-power-association-XGAZzyLzn18-unsplash.jpg',
    },
    p3: {
        title: 'Renewable Energy Standards and Mandates',
        bodyText: 'Renewable Portfolio Standards (RPS): These laws require utilities to obtain a certain percentage of their energy from renewable sources. This drives investment in green energy technologies and can lower costs through increased competition. Broader than RPS, these standards may include requirements for reducing greenhouse gas emissions and can incentivize the adoption of various clean technologies.',
        image: 'images/karsten-wurth-UbGYPMbMYP8-unsplash.jpg',
    }
};

// Get references to the active parts of the HTML
let buttons = document.querySelectorAll('#controls button');
let dc = document.getElementById('dynamic-content');

// Event handler
function selectPage(ev) {
    let currentButton = ev.target.closest('button');
    // Remove the 'active' class from all buttons and add it to the current button
    buttons.forEach(btn => btn.classList.remove('active'));
    currentButton.classList.add('active');

    // Update the dynamic-content div with the selected page data
    dc.style.opacity = '0';
    dc.style.transform = 'translateY(20px)';
    setTimeout(() => {
        dc.innerHTML = `
            <h2>${resources[currentButton.id].title}</h2>
            <img src="${resources[currentButton.id].image}"  style="width: 100%; height: auto; margin-bottom: 20px;">
            <p>${resources[currentButton.id].bodyText}</p>
        `;
        dc.style.opacity = '1';
        dc.style.transform = 'translateY(0)';
    }, 300);
}

document.addEventListener('DOMContentLoaded', (event) => {

    // Set default content
    dc.style.opacity = '0';
    dc.style.transform = 'translateY(20px)';
    setTimeout(() => {
        dc.innerHTML = `
            <h2>${resources.p1.title}</h2>
            <img src="${resources.p1.image}"  style="width: 100%; height: auto; margin-bottom: 20px;">
            <p>${resources.p1.bodyText}</p>
        `;
        dc.style.opacity = '1';
        dc.style.transform = 'translateY(0)';
    }, 300);
});
// Register buttons for click event
buttons.forEach(button => {
    button.addEventListener('click', selectPage);
});