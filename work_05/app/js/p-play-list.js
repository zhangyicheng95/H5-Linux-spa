var $playListPanel = (function() {
  function show(config) {
    $(app.config.panelContainer).html('');
    $(app.config.panelContainer).append('<h1>$playListPanel</h1>');
  }
  return {show: show};
})();