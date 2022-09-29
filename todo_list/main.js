let form = document.querySelector('#todo_form')

let doneList = document.querySelector('.finnished')
let toDoList = document.querySelector('.list')

let toDoArr = []





form.addEventListener('submit', (e) => {
    e.preventDefault()
    for (i of e.target) {
        // console.log(i.value)
        if (i.value) {
            let temp = {
                name: i.value,
                done: false
            }
            toDoArr.push(temp)
        }
    }
    renderToDoArr(toDoArr)
})


let renderToDoArr = () => {
    toDoList.innerHTML = ''
    toDoArr?.map((item, index) => {
        toDoList.innerHTML += `     <form class="card ${item.done ? 'done__card' : ''}" id="card_${index}">
          <p><span class="tittle">${item.name}</span></p>
          <input type="checkbox" id="done_${index}" name="  done_${index}" class="done done_${index}" onclick="checkItDone('card_${index}','done_${index}',${index})" ${(item.done) ? 'checked' : ''}/>
          <label for="done_${index}"><i class="fa check fa-check"></i></label>
          <input type="checkbox" id="trash_${index}" name="trash_${index}" class="toDo" onclick="checkDelete('card_${index}','trash_${index}',${index})" />
          <label class="" for="trash_${index}" id="delete"> <i class="fa trash fa-trash-alt"></i></label>
        </form>`

    })



}

let checkDelete = (cardId, deleteId, index) => {
    if (document.querySelector(`#${deleteId}`).checked) {
        document.querySelector(`#${cardId}`).classList.add('hidden')
        toDoArr.splice(index, 1)
    }
}

let checkItDone = (cardId, doneId, index) => {
    if (document.querySelector(`#${doneId}`).checked) {
        document.querySelector(`#${cardId}`).classList.add('done__card')
        toDoArr[index].done = true
    }else { 
        document.querySelector(`#${cardId}`).classList.remove('done__card')
        toDoArr[index].done = false

    }
}