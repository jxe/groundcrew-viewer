AllWishes = [
  {
    thumb_url: 'http://groundcrew.us//system/0000/0043/thomas.jpg',
    type:      'Citizen investigations',
    title:     'Document the upcoming town meeting',
    agent:     'Thomas Goorden',
    posx:      21,
    req:       20
  },
  
  {
    thumb_url: 'http://groundcrew.us//uploads/avatars/thumb_1.jpg?1227490104',
    type:      'Neighborhood improvement',
    title:     'Bike path plantings',
    agent:     '3oe',
    posx:      48,
    req:       30
  },
  
  {
    thumb_url: 'http://groundcrew.us//system/0000/0030/facebook_003.jpg',
    type:      'Brainstorm',
    title:     'Discuss improving the town water supply',
    agent:     'Molly427',
    posx:      120,
    req:       40
  },
  
  {
    thumb_url: 'http://groundcrew.us//uploads/avatars/thumb_1.jpg?1227490104',
    type:      'Adventures and games',
    title:     'Teens and elders hillside FLASHMOB',
    agent:     '3oe',
    posx:      48,
    req:       1000
  },
  
  {
    thumb_url: 'http://groundcrew.us//uploads/avatars/thumb_1.jpg?1227490104',
    type:      'Adventures and games',
    title:     'Capture the Flag at Pulaski Park',
    agent:     '3oe',
    posx:      48,
    req:       200
  }
  
];

Wishes = {
  t: '<div class="wish"><div class="thumb"><img src="#{thumb_url}" /></div>\
      <div class="info">#{type}<br/> <strong>#{title}</strong><div class="xtra_info">from agent <b>#{agent}</b> (#{posx} POSX); requires <b>#{req}</b> people.</div></div>\
      <div class="actions"> <button class="primary">Approve</button><button>Reject</button></div></div><hr class="clear spacer" />'
};

QuestionAnswers = {
  t: '<div class="wish"><div class="thumb"><img src="#{thumb_url}" /></div>\
      <div class="info"><strong><a href="#mode=Dispatch;item=#{guy}">#{answer}</a></strong><div class="xtra_info">from agent <b>#{agent}</b> at #{time}</div></div><hr class="clear spacer" />'
};

LiveHTML.widgets.push({

  wishes_to_approve: function() {
  
    return Wishes.t.tt(AllWishes);
    
  }
  

});
