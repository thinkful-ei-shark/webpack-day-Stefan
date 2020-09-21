import item from './item.js';

const items = []; 
const hideCheckedItems = false;

const findById = function (id) {
  return this.items.find(item => item.id === id);
};

const addItem = function (itemName) {
  try {
    item.validateName(itemName);
    this.items.push(item.create(itemName));
    //item.create(itemName);
  } catch (error) {
    console.log(`Cannot add item: ${error.message}`);
  }
};

const findAndToggleChecked = function(id) {
  const myId = this.findById(id); 
  myId.checked = !myId.checked;
};

const findAndUpdateName = function(id, newName) {
  try {
    item.validateName(newName);
    findById(id); 
  } catch(error) {
    console.log(`Cannot update name: ${error.message}`);
  }
};

const findAndDelete = function (id) {
  const index = this.items.findIndex(item => item.id === id);
  this.items.splice(index, 1);
};

const toggleCheckedFilter = function() {
  this.hideCheckedItems = !this.hideCheckedItems;
};

export default {
  addItem, 
  findById,
  findAndToggleChecked,
  findAndDelete,
  findAndUpdateName,
  items,
  hideCheckedItems,
  toggleCheckedFilter
};