// ==UserScript==
// @name         #PINNING
// @namespace    https://samy.pl
// @version      0.1
// @description  PINNING
// @author       Samy Kamkar
// @match        https://www.pinterest.com/
// @grant        none
// @require https://code.jquery.com/jquery-3.1.1.min.js
// ==/UserScript==

// On hover, data-is-hovering="true"

(function() {
    // currently selected item
    var item;
    
    // Remove ads/promoted content
    for (var x of document.getElementsByClassName('creditName'))
        if (x.innerText.indexOf('Promoted by') === 0)
        {
            var tmp = x.closest('.item');
            if (tmp) tmp.style.visibility = 'hidden';
        }

    // Add border to selected pin, remove border on previous
    function setBorders(newItem)
    {
        if (newItem)
        {
            // Remove border from old item
            if (item)
            {
                item.style.border = '0px';
                item.setAttribute("data-is-hovering", "false");
            }

            item = newItem;
            item.setAttribute("data-is-hovering", "true");
            console.log(findPos(item), item);
            // window.scroll(0, findPos(item));
            item.focus();
            item.style.border = '2px solid #cb2027';
            item.style.borderRadius = '10px';
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
    window.onmouseover = function(e)
    {
        setBorders(e.target.closest('.item'));
    };

    // Hotkey support
    $(window).keydown(function(e)
    {
        switch (e.keyCode)
        {
            case 76:  // L
            case 108: // l
                item.querySelectorAll('.LikeButton')[0].click();
                break;
            case 70:  // F
            case 102: // f
                item.querySelectorAll('.DropdownButton')[0].click();
                break;
            case 83:  // S
            case 115: // s
                item.querySelectorAll('.ShowModalButton')[0].click();
                break;
            case 86:  // V
            case 118: // v
                item.querySelectorAll('.NavigateButton')[0].click();
                break;
            case 13: // Enter
                item.querySelectorAll('.pinImageWrapper')[0].click();
                break;
            case 37: // left arrow
                setBorders(item.previousElementSibling);
                break;
            case 39: // right arrow
                setBorders(item.nextElementSibling);
                break;
        }
    });

})();
