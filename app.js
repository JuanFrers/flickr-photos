/*
* This is the application that coerces th favorite button and persistence manager.
*/

function persistButtonState (event) {
  persistenceManager.setValue(event.key, event.state);
}

function decorateImages () {
  var i, photos = document.getElementById('photos').children, button;
  for (i = 0; i < photos.length; i += 1) {
    button = favoriteButton(photos[i], persistenceManager.getValue(photos[i].firstChild.getAttribute('src')));
    $(button).on("button-state-changed", persistButtonState);
  }
}
