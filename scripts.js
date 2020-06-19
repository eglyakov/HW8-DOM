let style = document.createElement('style');
document.head.insertBefore(style, document.querySelector('script'));
style.innerHTML = `
    .mess_font {
        font-family: Arial;
        margin: 20px auto;
        width: 300px;
        height: 100px;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 24px;
        border-radius: 5px;
    }

    .hello {
        color: yellow; 
        background-color: violet;
        box-shadow: 0 0 10px yellow;
    }
    
    .error {
        color: #FB000D; 
        background-color: #FAB9BA;
        box-shadow: 0 0 10px #FB000D;
    }

    .check {
        font-size: 20px;
        color: #028924; 
        background-color: #95FBAF;
        box-shadow: 0 0 10px #028924;
    }
`;

let mess1 = 'Привет Мир!',
    mess2 = 'Ошибка!',
    mess3 = 'Сообщение отправленно!',
    hello = 'hello',
    error = 'error',
    check = 'check';

function sendMess(type, text) {

    let div1 = document.createElement('div'),
        p1 = document.createElement('p');

    div1.classList.add('mess_font', type);
    p1.innerHTML = text;

    document.body.appendChild(div1);
    div1.appendChild(p1);

    setTimeout(close, 5000);

    function close() {
        div1.style.display = 'none';  
    }
}


let paramets = window.location.search;

switch(paramets) {
    case '?alert=hello':
        sendMess(hello, mess1);
    break;
    case '?alert=err':
        sendMess(error, mess2);
    break;
    case '?alert=check':
        sendMess(check, mess3);
    break;
    case '':
        sendMess(hello, mess1);
        sendMess(error, mess2);
        sendMess(check, mess3);
    break;
    default:
        alert('Неправильно введены параметры');
    break;
}



