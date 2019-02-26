<template>
  <div>
    <h1>Draggable DIV Element</h1>

    <p>https://www.w3schools.com/howto/howto_js_draggable.asp
      <br>Click and hold the mouse button down while moving the DIV element</p>

    <div id="mydiv">
      <div id="mydivheader">Click here to move</div>
      <p>Move</p>
      <p>this</p>
      <p>DIV</p>
    </div>
  </div>
</template>

<script>

var pos1 = 0,
  pos2 = 0,
  pos3 = 0,
  pos4 = 0;
let elmnt = null;
export default {
  methods: {
    dragElement(element) {
      elmnt = element;
      if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(
          elmnt.id + "header"
        ).onmousedown = this.dragMouseDown;
      } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = this.dragMouseDown;
      }
    },
    dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = this.closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = this.elementDrag;
    },
    elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    },
    closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  },
  mounted() {
    // //Make the DIV element draggagle:
    this.dragElement(document.getElementById("mydiv"));
  }
};
</script>    

<style>
#mydiv {
  position: absolute;
  z-index: 9;
  background-color: #f1f1f1;
  text-align: center;
  border: 1px solid #d3d3d3;
}

#mydivheader {
  padding: 10px;
  cursor: move;
  z-index: 10;
  background-color: #2196f3;
  color: #fff;
}
</style>