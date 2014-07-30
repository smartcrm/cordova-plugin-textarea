// constructor
function TextArea() {

}

TextArea.prototype.openTextView = function(titleString, confirmButtonString, placeHolderString, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "TextArea", "openTextView", [titleString, confirmButtonString, placeHolderString]);
}

TextArea.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.pocketsave = new TextArea();
  return window.plugins.textarea;
};

cordova.addConstructor(TextArea.install);