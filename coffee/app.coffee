window.MQA =
  data: []
  common:
    init: ->
      $.each document.styleSheets, (i, sheet) ->
        $.get sheet.href, (data) ->
          re = /\@media(?:[^(]|[^print])*?((?:min|max)-width):\s*([0-9]*.?[0-9]*)(em|px|rem)\)/g
          while matches = re.exec(data)
            i = 0
            while i < matches.length
              mq = matches[i]
              type = matches[i + 1]
              value = matches[i + 2]
              unit = matches[i + 3]
              MQA.data.push
                mq: matches[i]
                type: matches[i + 1]
                value: matches[i + 2]
                unti: matches[i + 3]
              i = i + 4
$(document).ready ->
  MQA.common.init()
