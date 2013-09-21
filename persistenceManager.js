/*
* This part makes still more sense when it acts as facade to make cross-browser compatible solutions.
*/

var persistenceManager = (function () {

  return {

    getValue : function (key) {
      if (key) {
        return localStorage[key];
      } else {
        return null;
      }
    },

    setValue : function (key, value) {
      if (key && value) {
        localStorage[key] = value;
      }
    }
 
  };

}());