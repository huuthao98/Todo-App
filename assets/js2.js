

var data;
var dataName = []; 

var storageKey = 'data';
var storageKeyName = 'dataName'
begin();
function start() {
    var dataString = localStorage.getItem(storageKey);
    if (dataString) {
        data = JSON.parse(localStorage.getItem(storageKey));
    } else {
        data = [];
    }
    callTextEnd();
    render();

    
    var clickAdd = document.getElementById('input-btn')
    clickAdd.onclick = clickAddItem;

    function clickAddItem() {
        var inputText = document.getElementById('input-text')
        if (inputText.value.trim() !== '') {
            create(inputText.value);
        }
        localStorage.setItem(storageKey, JSON.stringify(data));
        inputText.value = '';
        callTextEnd();
    }

    document.onkeydown = function(e) {
        switch(e.which) {
            case 13: clickAddItem();
        }
    }
}
start ();

function render() {

    var groupTask = document.getElementById('group-task');

    var item = '';
    for (var i = 0; i < data.length; i++) {
        item = item + `<div class="task">
        <p class="task-text"> ${data[i].name}</p>
        <button onclick="deleteOneItem('${data[i].id}')" class="task-btn"><i class="icon-btn fas fa-trash"></i></button>
        </div>`;
    }
    groupTask.innerHTML = item;
    
}

function create(action) {
    
    data.push({
        name: action,
        id : indexId(),           
    });
    render();
}

function update() {

}

function deleteItem(){
    JSON.stringify(localStorage.removeItem(storageKey))
    callTextEnd();
    start();  
}


function deleteOneItem(value) {
    for (var i = 0; i < data.length; i++) {
        if (value == data[i].id) {
            data.splice(i, 1);
        }
    }
    localStorage.setItem(storageKey, JSON.stringify(data));
    callTextEnd();
    start();
}

function indexId() {
    const alphabet = 'abcdefghijklmnouptqxyz1234567890';
    return alphabet[Math.floor(Math.random()*alphabet.length)] + alphabet[Math.floor(Math.random()*alphabet.length)] 
    + alphabet[Math.floor(Math.random()*alphabet.length)] + alphabet[Math.floor(Math.random()*alphabet.length)]
}


function callTextEnd() {
    var groupEnd = document.getElementById('group-end');
    
    if (data.length >= 1){
        groupEnd.innerHTML = `<p id="end-text">You have ${data.length} pending tasks</p>
        <button onclick="deleteItem()" id ="end-btn">Clear All</button>`;
    } else { 
        groupEnd.innerHTML = ``;
    };
    
}

function begin() {
    
    var clickAdd = document.getElementById('begin-btn');
    var addClassFormBegin = document.getElementById('form-begin');
    var addClassForm = document.getElementById('form');

    var dataNameString = localStorage.getItem(storageKeyName);
    var textName = document.getElementById('text-name'); 
    if (dataNameString) {
        dataName = JSON.parse(localStorage.getItem(storageKeyName));
        addClassFormBegin.classList.add('hide-class-begin');
        addClassForm.classList.add('show-class-form');

        textName.innerHTML = `<p>hello,</p> <div id="name"> ${dataName[0].name} <i id="icon-change-name" class="far fa-pen"></i></div> `;
        
        var clickChangeName = document.getElementById('name');
        clickChangeName.onclick = function() {
        JSON.stringify(localStorage.removeItem(storageKeyName));
        
        addClassFormBegin.classList.remove('hiden-class-begin');
        addClassForm.classList.remove('show-class-form');
        return begin();
        }
    } else {
        addClassFormBegin.classList.add('show-class-begin');
        addClassForm.classList.add('hide-class-form');

        var inputName = document.getElementById('begin-text');
        
        
        clickAdd.onclick = clickAddName;

        function clickAddName() {
            if (inputName.value.trim() !== '') {
                addClassFormBegin.classList.remove('show-class-begin');
                addClassForm.classList.remove('hide-class-form');
        
                addClassFormBegin.classList.add('hide-class-begin');
                addClassForm.classList.add('show-class-form');
                
                //addName();
                
                dataName.push({
                    name: inputName.value,
                });
                localStorage.setItem(storageKeyName, JSON.stringify(dataName));
                inputName.value = '';

                var textName = document.getElementById('text-name');   
                textName.innerHTML = `<p>hello, </p> <div id="name"> ${dataName[0].name} <i id="icon-change-name" class="far fa-pen"></i></div> `;

                var clickChangeName = document.getElementById('icon-change-name');
                clickChangeName.onclick = function() {
                dataName = [];
                addClassFormBegin.classList.add('show-class-begin');
                addClassForm.classList.add('hide-class-form');

                addClassFormBegin.classList.remove('hiden-class-begin');
                addClassForm.classList.remove('show-class-form');
                
                }
            }
        }
    
        document.onkeyup = function(e) {
            switch(e.which) {
                case 13: clickAddName();
                break;
            }
        }
    } 
}


