// function addEventListener(){
//     let button = document.getElementById('button');
//     button.addEventListener('click', (event) => alert('clicked'))
// }

function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', addingEventListener);
}