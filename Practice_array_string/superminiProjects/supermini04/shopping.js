/**
 * @param {array} items
 * @param {string} item
 */
function addItem(itemValue) {
  console.log(itemValue)
  items.push(itemValue)
  // return itemsArr.push(itemValue)
}

/**
 * @param {array} items
 */
function exportLowerCasedCSV(newItem) {
  return newItem.join(', ')
}

// Sample usage - do not modify
let form = document.querySelector('#shopping-list-form');
let itemName = document.querySelector('#item-name');
let list = document.querySelector('#shopping-list');
const exportedJson = document.querySelector('#exported-json');

let items = [];

function render(items) {
  list.innerHTML = '';
  items.forEach(function (item) {
    list.insertAdjacentHTML(
      'beforeend',
      `<li><div class="card">${item}</div></li>`
    );
  });
  exportedJson.textContent = exportLowerCasedCSV(items);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addItem(itemName.value)
  itemName.value = '';
  render(items);
});

render(items);
