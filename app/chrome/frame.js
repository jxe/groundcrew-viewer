Frame = {
  flexbar_size: 0,
  
  agent_thumb: '<div class="athumb agent_photo #{id}"><img class="th" src="http://groundcrew.us/#{thumb_url}" title="#{title}" href="#@#{id}"/><img src="i/timebadges/5m.png" class="badge"/></div>',
  
  init: function() {
    Frame.set_flexbar_size(1);
    // setInterval(function(){ $('.from_now').update_times(); }, 20000);
    $(window).resize(function(){
      $('.divcenter').center();
      Frame.set_flexbar_size();
    });
    $('.magic').app_paint();
  },
  
  scroll_flexbar: function(pxs) {
    // unimplemented
  },
  
  set_flexbar_size: function(size) {
    if (size) {
      $('body').removeClass('flexbar' + Frame.flexbar_size).addClass('flexbar' + size);
      Frame.flexbar_size = size;
    } else {
      size = Frame.flexbar_size;
    }
    var topbar_height = 48;
    var page_height = window.innerHeight || window.document.body.clientHeight;
    var flexbar_height = (size == 0) ? 24 : 77;
    // var flexbar_height = $('#flexbar').height();
    var map_height = page_height - (topbar_height + flexbar_height);
    $('#map_div').height(map_height);
    if (Map.Gmap) Map.Gmap.checkResize();
  },
  
  set_flexbar_content: function(content) {
    // unimplemented
  },
  
  populate_flexbar_agents: function(agents) {
    if (!agents) return;
    var groups = agents.group_by('availability_status');
    $('#agents > div').hide();
    $.each($keys(groups), function(){
      if (this == null || this == "null") return;
      $('#' + this + '_agents').show();
      $('#' + this + '_agent_thumbs').html(Frame.agent_thumb.tt(groups[this]));
    });
    $('#flexbar').scrollLeft(0).app_paint();
  }
  
};
