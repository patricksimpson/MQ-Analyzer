(function() {
  window.MQA = {
    data: [],
    common: {
      init: function() {
        return $.each(document.styleSheets, function(i, sheet) {
          return $.get(sheet.href, function(data) {
            var matches, mq, re, type, unit, value, _results;
            re = /\@media(?:[^(]|[^print])*?((?:min|max)-width):\s*([0-9]*.?[0-9]*)(em|px|rem)\)/g;
            _results = [];
            while (matches = re.exec(data)) {
              i = 0;
              _results.push((function() {
                var _results1;
                _results1 = [];
                while (i < matches.length) {
                  mq = matches[i];
                  type = matches[i + 1];
                  value = matches[i + 2];
                  unit = matches[i + 3];
                  MQA.data.push({
                    mq: matches[i],
                    type: matches[i + 1],
                    value: matches[i + 2],
                    unti: matches[i + 3]
                  });
                  _results1.push(i = i + 4);
                }
                return _results1;
              })());
            }
            return _results;
          });
        });
      }
    }
  };

  $(document).ready(function() {
    return MQA.common.init();
  });

}).call(this);
