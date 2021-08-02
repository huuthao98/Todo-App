//đối tượng js
function js(options) {

    function validate (inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector('.form-message')
        var errorMessage = rule.test(inputElement.value);
            if (errorMessage) {
                errorElement.innerText = errorMessage;
                
                //inputElement.parentElement.classList.add('invalid');
            } else {
                errorElement.innerText = '';
                //inputElement.parentElement.classList.remove('invalid')
            }
    }
    

    var formElemnent  = document.querySelector(options.form);
    if (formElemnent) {
        options.rules.map(function (rule) {
            var inputElement = formElemnent.querySelector(rule.selector);
            inputElement.value
            if (inputElement) {
                
            }
        });
    }

    if (formElemnent) {
        options.rules.forEach(function (rule) { 
            var inputElement = formElemnent.querySelector(rule.selector);
            
            if (inputElement) {
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }
            }
        });
    }
}

//định nghĩa các rules

js.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined: 'nhap vào'
        },
        action: function (value) {
            return
        }
    };
}

js.isEmail = function (selector) {
    return {
        selector: selector,
        test: function () {

        }
    };
}





// var listAdded = [];
// var listLength = listAdded.length;
// var clickAdd = document.getElementById('btn-add')

// clickAdd.onclick = addItem;


// function addItem() {
//     //input
//     var inputElement = document.getElementById('input-text');
//     var newItem = inputElement.value;
//     if (newItem !==''){
//         listAdded.push(newItem);
//     }
    
//     render();
//     //call text-end
//     var callText = document.getElementById('text-have');
//     var callBtnClear = document.getElementById('btn-clear-have');
//     callText.innerHTML = 'You have'+' '+listAdded.length+' '+'pending tasks';
//     callBtnClear.innerHTML = '<button id="btn-clear-all" >'+'Clear ALl'+'</button>'
//     //not input none
//     inputElement.value = '';

//     deleteTask();
// }

// function render() {
//     var htmlList = document.getElementById('body-tasks');
//     var contented = listAdded.map(function(item) {
//             return '<div class ="task">'+'<div class="text">'+'<div class = "text-child">'+item.trim() +'</div>'+'</div>'
//             +'<button class = "btn-clear-task">'+'<i class="icon-trash fas fa-trash">'+'</i>'+'</button>'+'</div>';
//      });
  
//    htmlList.innerHTML = contented.join('');
   
// } 

// function deleteTask() {
//     var clickTask = document.getElementsByClassName('.btn-clear-task');
//     for (var i = 0; i < clickTask.length; ++i) {
//         clickTask[i].onclick  = function(e) {
//             e.target.focus()
//         }
//     }
//  }


 