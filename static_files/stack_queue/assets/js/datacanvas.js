var stack = document.getElementById("stackAnimation"),
    stack_input_group = document.getElementById("stackInputs"),
    queue = document.getElementById("queueAnimation"),
    queue_input_group = document.getElementById("queueInputs"),
    stack_button = document.getElementById("stackButton"),
    queue_button = document.getElementById("queueButton"),
    container = document.getElementById("container");

var thingsToHide = [stack, stack_input_group, queue, queue_input_group];
var currentTab = "stack";

function clear() {
  for (var i = 0; i < thingsToHide.length; i++) {
    thingsToHide[i].style.display = "none";
  }
}

stack_button.onclick = () => {
  if (currentTab != "stack") {
    currentTab = "stack";
    stack_button.classList.add("active");
    queue_button.classList.remove("active");
    clear();
    stack_input_group.style.display = "flex";
    stack.style.display = "inline-flex";
    // functions below are defined in stack.js
    clearStack();
    drawStack();
  }
}

queue_button.onclick = () => {
  if (currentTab != "queue") {
    currentTab = "queue";
    queue_button.classList.add("active");
    stack_button.classList.remove("active");
    clear();
    queue_input_group.style.display = "flex";
    queue.style.display = "inline-flex";
    // functions below are defined in queue.js
    clearQueue();
    drawQueue();
  }
}

drawStack();
