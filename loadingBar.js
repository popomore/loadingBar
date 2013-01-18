;(function(exports) {

  exports.loadingBar = loadingBar;

  function loadingBar(config, every, complete) {
    var r = parseConfig(config);
    var percents = r[0];
    var times = r[1];

    function make(index, count) {
      var percent = percents[index];
      var time = times[index];
      var next = (index < percents.length - 1) ? function(count){
        make(index+1, count);
      } : complete;
      interval(count || 0, percent, time, every, next);
    }
    make(0);
  }

  function interval(count, percent, time, every, next) {
    var t = setInterval(function() {
      if (count <= percent) {
        every(count);
        count++; 
      } else {
        clearInterval(t);
        next(count);
      }
    }, time);
  }

  function parseConfig(config) {
    var p = [], t = [];
    for(var i in config) {
      var v = config[i];
      var last = p[p.length-1] || 0;
      if (v[0] > last) {
        p.push(v[0]);
        t.push(v[1]);
      }
    }
    return [p, t];
  }

  // for test
  loadingBar._interval = interval;
  loadingBar._parseConfig = parseConfig;
})(this);
