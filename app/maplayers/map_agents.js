// return a mapping from sites => markers
Map.layer_calculators['agents'] = function(){
  var mapping = {};
  $.each(This.agents, function(){
    var id = this.id;
    var marker = new google.maps.Marker({
      icon: 'i/map/' + this.map_icon + '.png',
      position: new google.maps.LatLng(this.lat, this.lng),
      shadow: "i/map/man.shadow.png",
      title: this.title
    });
    google.maps.event.addListener(marker, 'click', function() { go('@' + id); });
    google.maps.event.addListener(marker, 'dblclick', function() { 
      GM.setCenter( marker.getPosition(), 15 ); 
    });
    mapping[this.id] = marker;
  });
  return mapping;
};
