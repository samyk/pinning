// ==UserScript==
// @name         #PINNING
// @namespace    https://samy.pl
// @version      0.1
// @description  #PINNING
// @author       Samy Kamkar
// @match        https://www.pinterest.com/
// @grant        none
// @require      https://code.jquery.com/jquery-3.1.1.min.js
// ==/UserScript==

(function() {
  // currently selected item
  var item;

  // setup
  removeAds();   // remove ads
  addHotkeys();  // add hotkeys to the page
  detectHover(); // select pin when hovered over
  selectItem($('.item:first')); // select the first item

  // Remove ads/promoted content
  //
  // XXX this needs to happen when new content is loaded -
  // perhaps overload XHR to detect when this happens
  // or when window size changes
  // also see https://github.com/marcj/css-element-queries
  /*
  var body = document.body,
      html = document.documentElement;
  var height = Math.max(
    body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);
  */
  function removeAds()
  {
    // XXX should add a class (eg 'noAd') so those don't get searched in the future
    for (var x of document.getElementsByClassName('creditName'))
        if (x.innerText.indexOf('Promoted by') === 0)
        {
            var tmp = x.closest('.item');
            if (tmp)
              tmp.style.visibility = 'hidden';
        }
  }

  // Select a pin, add border to pin, remove border from previous
  function selectItem(newItem)
  {
      if (newItem)
      {
          // Remove border from old item
          if (item)
          {
              //item.style.border = '0px';
              item.style.outline = '0px';

              // don't think this really does anything
              item.setAttribute("data-is-hovering", "false");
          }

          // better way to handle this? w/jquery?
          item = newItem.setAttribute ? newItem : newItem[0];

          // XXX if window doesn't have full view of pin, scroll
          // so that window has full view of pin (if pin is below,
          // top of pin should be at top of page, but if pin is
          // above, window should scroll so bottom of pin is at
          // bottom of window to stay closest to current position)
          // window.scroll(0, findPos(item));

          // don't think this really does anything
          item.setAttribute("data-is-hovering", "true");

          //item.style.border = '2px solid #cb2027';
          //item.style.borderRadius = '10px';
          //-webkit-border-radius
          item.style.boxShadow = '0 0 3px #ddd';
          item.style.outlineRadius = '10px';
          item.style.outline = '2px solid #cb2027';

          // don't think this really does anything
          item.focus();
      }
  }

  // Find the current bounds of the image in the page to help scrolling
  function findPos(obj)
  {
      var curtop = 0;
      if (obj.offsetParent)
      {
          do
          {
              obj = obj.offsetParent;
              curtop += obj.offsetTop;
          } while (obj.offsetParent);
          return curtop;//[curtop]
      }
  }

  // Find the item (pin) user is hovering mouse over
  function detectHover()
  {
    window.onmouseover = function(e)
    {
        // Find the closest (parent) .item and select it
        selectItem(e.target.closest('.item'));
    };
  }

  // Hotkey support
  function addHotkeys()
  {
    $(window).focus();
    $(window).keydown(function(e)
    {
        switch (e.keyCode)
        {
            case 76:  // L - like/heart
            case 108: // l
                item.querySelectorAll('.LikeButton')[0].click();
                break;
            case 70:  // F - forward
            case 102: // f
                item.querySelectorAll('.DropdownButton')[0].click();
                break;
            case 83:  // S - save to board (pin)
            case 115: // s
                item.querySelectorAll('.ShowModalButton')[0].click();
                break;
            case 86:  // V - visit in new window
            case 118: // v
                item.querySelectorAll('.NavigateButton')[0].click();
                break;
            case 13: // Enter - expand pin
                item.querySelectorAll('.pinImageWrapper')[0].click();
                break;
            case 37: // left arrow - select previous pin
                selectItem(item.previousElementSibling);
                break;
            case 39: // right arrow - select next pin
                selectItem(item.nextElementSibling);
                break;
        }
    });
  }
})();
