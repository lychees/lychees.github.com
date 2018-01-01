global-space = if global? then global else window

for key, val of require 'prelude-ls'
  global-space[key] = val

const map-size = 5

rand = (n) ->
  floor Math.random() * n

list-to-str = (path) ->
  s = ""
  for idx in path
    s = s + "[#idx]"
  return s  

class AI
  (@graph) ->

  evaluate: (path) ~>
    cur = 0
    for x, y of path
      cur = cur * 10 + @graph[y[0]][y[1]]
    return [path, @analyzer.analyze("#cur").score]

  find: ->
    x = for i from 1 to 3000
      i
    @analyzer = new NAN.Analyzer
    x
      |> map @find-random-path
      |> map @evaluate
      |> maximum-by (at 1)

  find-random-path: (param) ~>
    while true
      [x, y] = [rand(map-size), rand(map-size)]
      if @graph[x][y] != 0
        break
    ret = [[x, y]]
    dx = [-1, 1, 0, 0]
    dy = [0, 0, 1, -1]
    len = 7 + rand(2)
    path = [x * 10 + y]
    
    for i from 1 to 30
      if ret.length == len
        break
      d = rand(4)
      [nx, ny] = [x + dx[d], y + dy[d]]
      if 0 <= nx and nx < map-size and 0 <= ny and ny < map-size and (nx * 10 + ny) not in path
        ret.push [nx, ny]
        path.push nx * 10 + ny
        [x, y] = [nx, ny]
    return ret

class game-controller
  ->
    @round = 0
    
  get-state: ->
    @G = for i from 0 to 4
      []
    @P = for i from 0 to 4
      []
    for square in $('.square')
      dom = $(square)
      pos = dom.position!
      if pos.top < 110
        continue
      [x, y] = map round, [(pos.top - 110) / 100, (pos.left - 50) / 100]
      @G[x][y] = parse-int dom.children!.text!
      @P[x][y] = $(square)

  start: ->
    $('#welcome-screen').click!

  play: ~>
    @round += 1
    @get-state!
    ai = new AI(@G)
    [path, value] = ai.find!
    @simulate path
    @next!

  simulate: (path) ~>
    [x, y] = head path
    @P[x][y].mousedown!
    for idx, key of path
      [x, y] = key
      @P[x][y].mouseover!

    [x, y] = last path
    @P[x][y].mouseup!
  
  next: ->
    $('#number-show').click!
    set-timeout @play, 1500
  
ui = new game-controller
ui.start!
set-timeout ui.play, 2000
