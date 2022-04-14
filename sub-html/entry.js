const render = $ => {
  $('#purehtml').html('Hello,');
  return Promise.resolve();
};

(global => {
  global['html'] = {
    bootstrap: () => {
      console.log('purehtml bootstrap');
      return Promise.resolve();
    },
    mount: () => {
      console.log('purehtml mount              111111111111111');
      return render($);
    },
    unmount: () => {
      console.log('purehtml unmount');
      return Promise.resolve();
    },
  };
})(window);
