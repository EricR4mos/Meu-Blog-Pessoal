
const button = document.querySelector('.enviar');

function apagaForm() {
    document.querySelector('form').reset();
    
}



const addloading = () => {
    button.innerHTML = '<img class="loading"src = "./Imagens/kisspng-computer-icons-loader-scalable-vector-graphics-png-vector-load-5ab0967a596d20.2333115515215222983663.png"> ';
}

const removeloading = () => {
    button.innerHTML = 'Send';

}

const handleSubmit = (event) => {
    event.preventDefault();
    addloading();
    
    

    const email = document.querySelector('input[name=email]').value;
    // const name = document.querySelector('input[name=name]').value;



    fetch('https://api.sheetmonkey.io/form/dAUcX3eiyFNfbsZmDX3tqv', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
    }).then(() => removeloading(),).then (() => apagaForm());

    

}


document.querySelector('form').addEventListener('submit', handleSubmit);