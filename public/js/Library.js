function Library(){};
Library.prototype.instruments = {
  'acoustic-grand-piano': new Instrument({
    name: 'Grand Piano',
    id: 'acoustic-grand-piano',
  }),
  'drums-julio-kick': new Instrument({
    name: 'Julio Kick',
    id: 'drums-julio-kick',
    monophonic: true
  }),
  'drums-julio-clap': new Instrument({
    name: 'Julio Clap',
    id: 'drums-julio-clap',
    monophonic: true
  }),
  'drums-julio-hh': new Instrument({
    name: 'Julio Hi-hat',
    id: 'drums-julio-hh',
    monophonic: true
  }),
  'bass-julio': new Instrument({
    name: 'Julio Bass',
    id: 'bass-julio',
  }),
  'sub-julio': new Instrument({
    name: 'Julio Sub Bass',
    id: 'sub-julio',
  }),
  'lead-julio': new Instrument({
    name: 'Julio Lead',
    id: 'lead-julio',
  }),
  'vocal-julio': new Instrument({
    name: 'Julio Vocal',
    id: 'vocal-julio',
  })
};
Library.prototype.songs = {
  'julio': {"bpm":120,"nrMeasures":2,"subdivision":8,"indexLastLocation":16,"intervalDuration":250,"tracks":[{"instrument":{"name":"Grand Piano","id":"acoustic-grand-piano","volume":80,"monophonic":false},"name":"Grand Piano","volume":80,"muted":false,"color":"color-2","notes":{},"id":0},{"instrument":{"name":"Julio Kick","id":"drums-julio-kick","volume":80,"monophonic":true},"name":"Julio Kick","volume":80,"muted":false,"color":"color-1","notes":{"0":{"value":60,"velocity":80,"location":0},"2":{"value":60,"velocity":80,"location":2},"4":{"value":60,"velocity":80,"location":4},"6":{"value":60,"velocity":80,"location":6},"8":{"value":60,"velocity":80,"location":8},"10":{"value":60,"velocity":80,"location":10},"12":{"value":60,"velocity":80,"location":12},"14":{"value":60,"velocity":80,"location":14},"length":null},"id":1},{"instrument":{"name":"Julio Clap","id":"drums-julio-clap","volume":80,"monophonic":true},"name":"Julio Clap","volume":80,"muted":false,"color":"color-1","notes":{"2":{"value":60,"velocity":80,"location":2},"6":{"value":60,"velocity":80,"location":6},"10":{"value":60,"velocity":80,"location":10},"14":{"value":60,"velocity":80,"location":14}},"id":2},{"instrument":{"name":"Julio Hi-hat","id":"drums-julio-hh","volume":80,"monophonic":true},"name":"Julio Hi-hat","volume":80,"muted":false,"color":"color-4","notes":{"1":{"value":60,"velocity":80,"location":1},"3":{"value":60,"velocity":80,"location":3},"5":{"value":60,"velocity":80,"location":5},"9":{"value":60,"velocity":80,"location":9},"11":{"value":60,"velocity":80,"location":11},"13":{"value":60,"velocity":80,"location":13},"length":null},"id":3},{"instrument":{"name":"Julio Bass","id":"bass-julio","volume":80,"monophonic":false},"name":"Julio Bass","volume":80,"muted":false,"color":"color-3","notes":{"2":{"value":30,"velocity":80,"location":2},"4":{"value":30,"velocity":80,"location":4},"6":{"value":31,"velocity":80,"location":6},"8":{"value":33,"velocity":80,"location":8},"10":{"value":33,"velocity":80,"location":10},"length":null},"id":4},{"instrument":{"name":"Julio Sub Bass","id":"sub-julio","volume":80,"monophonic":false},"name":"Julio Sub Bass","volume":80,"muted":false,"color":"color-4","notes":{"13":{"value":30,"velocity":80,"location":13},"14":{"value":28,"velocity":80,"location":14},"15":{"value":30,"velocity":80,"location":15},"length":null},"id":5},{"instrument":{"name":"Julio Lead","id":"lead-julio","volume":80,"monophonic":false},"name":"Julio Lead","volume":80,"muted":false,"color":"color-3","notes":{"2":{"value":42,"velocity":80,"location":2},"4":{"value":42,"velocity":80,"location":4},"6":{"value":40,"velocity":80,"location":6},"8":{"value":37,"velocity":80,"location":8},"10":{"value":37,"velocity":80,"location":10},"length":null},"id":6},{"instrument":{"name":"Julio Vocal","id":"vocal-julio","volume":80,"monophonic":false},"name":"Julio Vocal","volume":80,"muted":false,"color":"color-3","notes":{"0":{"value":61,"velocity":80,"location":0},"2":{"value":60,"velocity":80,"location":2},"6":{"value":60,"velocity":80,"location":6},"10":{"value":60,"velocity":80,"location":10},"14":{"value":60,"velocity":80,"location":14},"length":null},"id":7}]},
  'first-song': {"bpm":120,"nrMeasures":2,"subdivision":8,"indexLastLocation":16,"intervalDuration":250,"tracks":[{"instrument":{"name":"Grand Piano","id":"acoustic-grand-piano","volume":80,"monophonic":false},"name":"Grand Piano","volume":80,"muted":false,"color":"color-3","notes":{"0":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"value":64,"velocity":80,"location":0},null,null,{"value":67,"velocity":80,"location":0},null,null,null,null],"2":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"value":60,"velocity":80,"location":2},null,null,null,{"value":64,"velocity":80,"location":2},null,null,{"value":67,"velocity":80,"location":2},null,null,null,null,null,null,{"value":74,"velocity":80,"location":2},null,null,null,null,null,null,null],"4":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"value":67,"velocity":80,"location":4},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"value":86,"velocity":80,"location":4}],"5":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"value":64,"velocity":80,"location":5}],"6":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"value":72,"velocity":80,"location":6},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"value":88,"velocity":80,"location":6}],"8":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"value":76,"velocity":80,"location":8},null,null,null,null,null,null,null,null,null,null,null,{"value":88,"velocity":80,"location":8}],"9":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"10":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"value":69,"velocity":80,"location":10},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"value":86,"velocity":80,"location":10}],"11":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"12":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"value":72,"velocity":80,"location":12}],"14":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"value":59,"velocity":80,"location":14},null,null,null]},"id":0}]}
};