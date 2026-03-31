alert ('Szavazz a DUNÁRA!1');
console.log('Szavazz a DUNÁRA!');
console.error('Szerintem nem szavaztál a Dunára...');
console.warn('Szavazz a dunára!');
let szoveg = 'Heló Ez baj';

setInterval(() => {
    const most = new Date();
    document.getElementById("date").innerText = most.toLocaleTimeString();
}, 1000);