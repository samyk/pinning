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

var item;
(function() {
    // Remove ads/promoted content
    for (var x of document.getElementsByClassName('creditName'))
        if (x.innerText.indexOf('Promoted by') === 0)
        {
            var tmp = x.closest('.item');
            if (tmp) tmp.style.visibility = 'hidden';
        }

    // Add border to selected pin, remove border on previous
    function setBorders(i, newItem)
    {
        if (newItem)
        {
            if (i) i.style.border='0px';
            item = newItem;
            console.log(findPos(item), item);
           // window.scroll(0, findPos(item));
            item.focus();
            item.style.border='3px solid #cb2027';
            item.style.borderRadius='10px';
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
        setBorders(item, e.target.closest('.item'));
    };

    // Hotkey support
    $(window).keydown(function(e) {
        switch (e.keyCode) {
            case 76: // l
            case 108: // L
                item.querySelectorAll('.LikeButton')[0].click();
                break;
            case 37: // left arrow
                setBorders(item, item.previousElementSibling);
                break;
            case 39: // right arrow
                setBorders(item, item.nextElementSibling);
                break;
        }
    });

})();
