/*
* This is the favorite button component.
*/

var favoriteButton = (function($) {
  var favoritePhotoClass = 'icon-heart', nonFavoritePhotoClass = 'icon-heart-empty', favoriteState = 'favorite', notFavoriteState = 'not-favorite',
  button, icon;

  function render (container, state) {
    icon = document.createElement('i');
    setButtonLikedState(state || notFavoriteState);
    
    button = document.createElement('button');
    button.className = "favorite-button";
    button.appendChild(icon);
    
    container.insertBefore(button, container.firstChild);
  }

  function setButtonLikedState (state) {
    if (state === favoriteState) {
      icon.className = favoritePhotoClass;
    } else if (state === notFavoriteState) {
      icon.className = nonFavoritePhotoClass;
    }
  }

  function toggleButtonLikedState () {
    this.firstChild.className = this.firstChild.className === favoritePhotoClass ? nonFavoritePhotoClass : favoritePhotoClass;
    var state = this.firstChild.className === favoritePhotoClass ? favoriteState : notFavoriteState;
    $(this).trigger({type : "button-state-changed", state : state, key : this.parentElement.children[1].getAttribute('src')});
  }
 
  return function favoriteButton (container, state) {
    render(container, state);
    button.onclick = toggleButtonLikedState;
    return button;
  };

}(jQuery));


