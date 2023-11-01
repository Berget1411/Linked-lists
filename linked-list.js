import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }

  append(value) {
    let newNode = new Node(value);
    let currentNode;

    if (!this.head) {
      this.head = newNode;
    } else {
      currentNode = this.head;
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }

      currentNode.nextNode = newNode;
    }
    this.size++;
  }

  getSize() {
    return this.size;
  }
  getHead() {
    return this.head;
  }
  getTail() {
    let currentNode;
    if (this.size < 2) {
      return "No tail exists";
    } else {
      currentNode = this.head;

      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      return currentNode;
    }
  }
  getAt(index) {
    if (this.size < 1) return "There are no nodes";
    else if (index > this.size - 1 || index < 0) return "Index out of range";
    else {
      let currentNode;
      let count = 0;

      if (index === 0) {
        return this.head;
      } else {
        currentNode = this.head;

        while (currentNode.nextNode) {
          currentNode = currentNode.nextNode;
          count++;

          if (count === index) break;
        }
        return currentNode;
      }
    }
  }
  pop() {
    let currentNode = this.head;
    while (currentNode.nextNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = null;
    this.size--;
  }

  contains(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) return count;
      currentNode = currentNode.nextNode;
      count++;
    }
    return null;
  }

  toString() {
    let str = "";
    let currentNode = this.head;

    while (currentNode) {
      str += `(${currentNode.value}) -> `;
      currentNode = currentNode.nextNode;
    }
    str += "null";
    return str;
  }
  insertAt(value, index) {
    if (index < 0) return "Index out of range";
    else if (this.head === null) this.prepend(value);
    else if (index > this.size - 1) this.append(value);
    else {
      let count = 0;
      let currentNode = this.head;

      while (currentNode.nextNode) {
        if (count === index)
          currentNode.nextNode = new Node(value, currentNode.nextNode);
        currentNode = currentNode.nextNode;
        count++;
      }
    }
  }

  removeAt(index) {
    if (this.size < 1) return "There are no nodes";
    else if (index > this.size - 1 || index < 0) return "Index out of range";
    else if (index === this.size - 1) this.pop();
    else {
      let count = 0;
      let currentNode = this.head;

      while (currentNode) {
        if (count === index) {
          currentNode.value = currentNode.nextNode.value;
          currentNode.nextNode = currentNode.nextNode.nextNode;
        }
        currentNode = currentNode.nextNode;
        count++;
      }
    }
  }
}
