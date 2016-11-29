# #PINNING

\#PINNING is a browser extension (currently TamperMonkey script) to improve Pinterest's desktop browsing UX.

## Features
* Removes ads/promoted content
* Hotkeys
	* '**S**' to Save pin
	* '**L**' to Like/heart pin
	* '**F**' to Forward pin
	* '**V**' to Visit pin URL in new window
	* '**Enter**' to Expand pin
	* '**Escape**' to Escape expanded pin
	* Use left/right arrow keys to traverse pins (in addition to standard hover)

## Todo
* Add [Computer Vision API](https://www.microsoft.com/cognitive-services/en-us/Computer-Vision-API/documentation/DescribingImages) to automatically detect which board to pin to
* Fix bug where you must click on the page before being able to use hotkeys
* When traversing via arrowkeys, page should autoscroll to display full pin
* When hovering over pin, page should autoscroll to display full pin
* When saving to board (hitting 'S' or **rolling over** 'Save' button), big modal should **not** popup, instead a small rollover should display beneath Save button with list of all boards
  * Clicking Save can still open modal for backwards compatibility, though unnecessary as rolling over should expose all boards to save to
	* Include typeahead and up/down arrow support for board selection
	* Don't show duplicate boards
	* Display last saved board, or perhaps last 3 saved to boards on top
	* Make the display small so you still see the rest of pins
	* When finally saving, the save should happen in the background so you can immediately continue browsing pins
* When a pin is selected, show the buttons (currently hidden as the pin is not actually in :hover state)
* Once in a good state, drop into its own extension
* Remove the width from border around pins (outline vs border?)
* Select the first item on the page by default

## Installation

* Install the [TamperMonkey](https://tampermonkey.net/) browser extension (available for Chrome, Edge, Safari, Firefox & Safari)
* Click the TamperMonkey icon in the browser
* Click "Add new script"
* Paste the contents of [pinning.js](https://raw.githubusercontent.com/samyk/pinning/master/pinning.js)
* Hit the Save button (or Cmd+S/Ctrl+S)
* Reload any pinterest.com pages

## Contact
* [https://samy.pl](https://samy.pl)
* [@SamyKamkar](https://twitter.com/samykamkar/)
* [https://pinterest.com/samyk](https://pinterest.com/samyk)

