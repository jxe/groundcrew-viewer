Actions = {
  
  event_t:
    '<div class="event #{color}">\
     <span class="time">#{when}</span>\
     <a href="#@#{actor_tag}">#{actor_title}</a>\
     #{what}\
     </div>',

  chat_t:
     '<li title="#{when}"><b>#{actor_title}</b>#{what}</li>',

   event_divs: function(events) {
     var divs = [];
     var prev_time = null;
     $.each(events, function(){
       var time = Actions.relative_time(this.created_at);
       if (time != prev_time) {
         divs.push(tag('div.time.divider', time));
         prev_time = time;
       }
       divs.push(Actions.event_t.t(this));
     });
     return divs.join('');
   },

  relative_time: function(ts) {
    if      (Date.within(ts, 60 * 5))               return "Just now";
    else if (Date.within(ts, 60 * 60))              return "Last hour";
    else if ($is_today(ts))                         return "Today";
    else if ($is_yesterday(ts))                     return "Yesterday";
    else if (Date.within(ts, 60 * 60 * 24 * 7))     return "Last 7 days";
    else if (Date.within(ts, 60 * 60 * 24 * 7 * 2)) return "Last 2 weeks";
    else                                            return "2+ weeks ago";
  }
};

go.push({

  show_events: function(clazz, type) {
    if (This.event_filter_type != type) {
      This.event_filter_type = type;
      $('.view_events_tool .active').removeClass('active');
      $('.view_events_tool a[href*="' + clazz + '"]').addClass('active');
      $('.view_events_tool').app_paint();
    }
  },

  recent_events: function() {
    return Actions.event_divs(Events.events(This.event_filter_type));
  },
  
  latest_chats: function(state) {
    if (Chats.length > 9) Chats = Chats.slice(Chats.length - 9);
    return Actions.chat_t.tt(Chats);
  },
  
  note_form_submitted: function(data, state, form) {
    if (!data.msg || data.msg.length == 0) return "redo";
    var input = $(form).find('input');
    data.type = 'note';
    data.venture = This.item;
    data.city = This.city_id;
    Event.post(data, function(x) {
      input && input.val('');
      $(form).enable();
      $('#op_for_any_mode').app_paint();
    });
    return "redo";
  },

  chat_form_submitted: function(data, state, form) {
    if (!data.msg || data.msg.length == 0) return "redo";
    var input = $(form).find('input');
    data.type = 'chat';
    Event.post(data, function(x) {
      input && input.val('');
      input && input.blur();
      $(form).enable();
      $('#chat_palette').app_paint();      
    });
    return "redo";
  }
  
});
