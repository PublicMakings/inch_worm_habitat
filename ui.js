function getGesturePointFromEvent(evt) {
  var point = {};

  if (evt.targetTouches) {
    // Prefer Touch Events
    point.x = evt.targetTouches[0].clientX;
    point.y = evt.targetTouches[0].clientY;
  } else {
    // Either Mouse event or Pointer Event
    point.x = evt.clientX;
    point.y = evt.clientY;
  }

  return point;
}

// Helper function to get an element's exact position
// from https://www.kirupa.com/snippets/move_element_to_click_position.html
// for dragging
// https://stackoverflow.com/questions/54158088/move-dynamically-created-svg-with-mouse
// https://www.petercollingridge.co.uk/tutorials/svg/interactive/dragging/

function getPosition(el) {
  var xPos = 0;
  var yPos = 0;

  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;

      xPos += el.offsetLeft - xScroll + el.clientLeft;
      yPos += el.offsetTop - yScroll + el.clientTop;
    } else {
      // for all other non-BODY elements
      xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
      yPos += el.offsetTop - el.scrollTop + el.clientTop;
    }

    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos,
  };
}

export { getPosition, getGesturePointFromEvent };
