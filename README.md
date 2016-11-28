# #PINNING

===========

\#PINNING is a browser extension (currently TamperMonkey script) to improve Pinterest's desktop browsing UX.

## Features
* Removes ads/promoted content
* Hotkeys
	* Use left/right arrow keys to traverse pins (in addition to standard hover)
	* '**L**' to like/heart the selected pin

## Todo
* Hotkeys
	* 'P' (or S?) to save a pin
	* 'F' to forward pin
* When traversing, page should autoscroll to show full pin
* When saving to board (hitting 'P' or **rolling over** 'Save' button), big div should **not** popup, instead a small rollover should display beneath Save button with list of all boards
	* Include typeahead and up/down arrow support
	* Don't show duplicate boards
	* Make the display small so you still see the rest of pins
	* When finally saving, the save should happen in the background so you can immediately continue seeing pins
* When Liking selected pin, show the like button (currently hidden as the pin is not actually in :hover state)  
* Once in a good state, drop into its own extension

## Installation

* Install the [TamperMonkey](https://tampermonkey.net/) browser extension (available for Chrome, Edge, Safari, Firefox & Safari)
* Click the TamperMonkey icon in the browser
* Click "Add new script"
* Paste the contents of [tampermonkey.js](https://raw.githubusercontent.com/samyk/pinning/master/tampermonkey.js)
* Hit the Save button (or Cmd+S/Ctrl+S)
* Reload any pinterest.com pages

## Contact
* [https://samy.pl](https://samy.pl)
* [@SamyKamkar](https://twitter.com/samykamkar/)

