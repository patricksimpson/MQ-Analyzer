(function() {
  window.MQA = { 
    data: [],
    common: {
      init: function() {
        $.each(document.styleSheets, function(i, sheet) {
          console.log(sheet.href);
          $.get(sheet.href, function(data) {
            var re, matches;
            re = /\@media(?:[^(]|[^print])*?((?:min|max)-width):\s*([0-9]*.?[0-9]*)(em|px|rem)\)/gi
            while(matches = re.exec(data)){
              for(var i = 0; i < matches.length; i++) {
                mq = matches[i];
                type = matches[i+1];
                value = matches[i+2];
                unit = matches[i+3];
                MQA.data.push({
                  mq: matches[i],
                  type: matches[i+1],
                  value: matches[i+2],
                  unti: matches[i+3]
                });
                i = i + 3;
              }
            }
          });
        });
      }
    }
  };
  $(document).ready(function(){
    return MQA.common.init();
  });
}).call(this);
