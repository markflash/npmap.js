var NPMap = {
  center: {
    lat: 44.32,
    lng: -110.42
  },
  div: 'map',
  hooks: {
    init: function (callback) {
      var bounds = NPMap.config.L.getBounds();

      window.L.npmap.layer.geojson({
        attribution: '<a href="http://www.mapillary.com">Mapillary</a>',
        popup: {
          description: '<img src="{{image}}" style="height:240px;width:320px;">',
          title: function (data) {
            return (data.location || null);
          }
        },
        url: 'https://api.mapillary.com/v1/im/search?min-lat=' + bounds.getSouth() + '&max-lat=' + bounds.getNorth() + '&min-lon=' + bounds.getWest() + '&max-lon=' + bounds.getEast() + '&max-results=100&geojson=true'
      }).addTo(NPMap.config.L);
      callback();
    }
  },
  zoom: 8
};

(function () {
  var s = document.createElement('script');
  s.src = '{{ path }}/npmap-bootstrap.js';
  document.body.appendChild(s);
})();
