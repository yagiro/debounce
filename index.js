import debounce from './debounce.ts';

const e = {};

const maxAscii = 200;
const minAscii = 1;

function addRandomChar(prefix, suffix = '') {
    const randInt = parseInt(Math.random() * (maxAscii-minAscii)) + maxAscii;
    const randChar = String.fromCharCode(randInt);
    const kid = document.createElement('div');
    kid.innerText = `${ prefix } ${ randChar } ${ suffix }`;
    e.out.append(kid);
    return randChar;
};

const addRandomCharDebounced = debounce(addRandomChar, {
    id: 'd1',
    delayMs: 1000,
});

function init() {
    addButton();
    addTextInput();
    addOutput();
};

function addButton() {
    e.btn = document.createElement('button');
    e.btn.innerText = 'Do It!';
    e.btn.onclick = () => {
        addRandomCharDebounced('hi', 'bye')
            .then((c) => console.log('wrote char ' + c))
    }
    document.body.append(e.btn);
}

function addTextInput() {
    e.txt = document.createElement('input');
    e.txt.setAttribute('type', 'text');
    e.txt.addEventListener('input', () => addRandomCharDebounced('txt') );
    document.body.append(e.txt);
}

function addOutput() {
    e.out = document.createElement('div');
    document.body.append(e.out);
}

window.onload = init;