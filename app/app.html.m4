<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html>
<head>
	<title>Groundcrew Viewer - Tell us what to do</title>
	<link href="viewer.css" media="screen" rel="stylesheet" type="text/css"/>
  
  <script src="http://maps.google.com/maps?file=api&amp;v=2.x&amp;key=ABQIAAAAGqp2ukVwjWFfmC-XmCCZFRRGsPIMf82DrFSwJZKzmHDVn9CoiRSfPwbMs9LeX9Qw4ba2CuYyrEQBZw&amp;hl=" type="text/javascript"></script> 
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.1/jquery.min.js" type="text/javascript"></script>
  <script src="viewer.js" type="text/javascript"></script>
	<!--[if lte IE 6]>
	<script type="text/javascript" src="/javascripts/supersleight-min.js"></script>
	<![endif]-->
	<script> login_by_cookie(); </script>
  <script src="data/vstart.js" type="text/javascript"></script>
</head>
<body id="viewer" class="loading">
<div id="unsupported">
  Internet Explorer has not been tested.  Try <a href="http://getfirefox.com">Firefox</a>.
</div>

<div id="header">
  <div id="header_menubar">
		<img id="load_spinner" src="i/spinner.gif"/>
		<a class="m_item" reveal="help">HELP</a>
		<a class="m_item" target="_" href="http://groups.google.com/group/groundcrew-users">discuss</a>
		<a class="m_item loo" href="/login">log in</a>
		<a class="m_item lio" href="/settings" id="settings">settings</a>
		<a class="m_item lio" href="/logout">sign out</a>
	</div>
	<span id="logo" class="std_click magic">
	  <a reveal="squads_menu #cities_menu_place subm" title="switch squads">
      Groundcrew Demo Squad &#9662;
    </a>
    &nbsp; &nbsp; &nbsp; &nbsp; 
    <img href="#@" src="i/icons/globe.png" height="15" style="position:relative; top:2px"/>
    <a reveal="cities_menu #cities_menu_place subm" title="switch cities">
      <span fill="city_name"></span> &#9662;
    </a>
	</span>
	<span id="cities_menu_place"></span>
</div>
<div id="screen">
  <div id="flexbar_banner">
    <img style="position: absolute; top: 5px; left:  5px" src="i/arrows/lw.png"  scrolll="#flexbar"/>
    <img style="position: absolute; top: 5px; right: 5px" src="i/arrows/rw.png" scrollr="#flexbar"/>
  	<img reveal="people_palette" src="i/icons/people_icon35.png" title="see available agents" style="position: absolute; right: 5px; bottom: 1px"/>
    
    <div id="flexbar">
      <div id="agents">
        <div id="neglected_agents">
          <div id="neglected_agent_thumbs"></div>
          <h2><em>neglected</em></h2>
        </div>
        <div id="ready_agents">
          <div id="ready_agent_thumbs"></div>
          <h2><em>ready</em></h2>
        </div>
        <div id="assigned_agents">
          <div id="assigned_agent_thumbs"></div>
          <h2><em>assigned</em></h2>
        </div>
        <div id="available_agents">
          <div id="available_agent_thumbs"></div>
          <h2><em>available</em></h2>
        </div>
        <div id="inaccessible_agents">
          <div id="inaccessible_agent_thumbs"></div>
          <h2><em>inaccessible</em></h2>
        </div>
      </div>
    </div>
  </div>
  <div id="group_actions" class="divcenter" style="display:none">
    &uarr; 
    <a href="#//ops/:city">DEPLOY SELECTED AGENTS</a>
    (<a href="##clear_selection">x</a>) 
    &uarr;
  </div>
  <div id="map_div"></div>
  <div id="youbox" class="lio magic" href="##go_to_self">
    You've caused
    <b fill="self_posx_pts">0</b>
    <a reveal="about_posx">positive experiences</a> so far.
  </div>
  <div id="mode_tray">
    <div id="plan_tray">
      
      <img reveal="ideas_palette" src="i/icons/lightbulb_icon29.png" title="start something"/>
      <img reveal="wish_palette" src="i/icons/wand30.png" title="make or view wishes"/>
      <img reveal="places_palette" src="i/icons/landmark21.png" title="see local places"/>
      
    </div>
    
    <div id="connect_tray">
      
      <img reveal="share_palette" src="i/icons/gift23.png" title="free stuff"/>
      <img reveal="chat_palette" src="i/icons/chat_icon18.png" title="chat with other organizers"/>
      <img reveal="wish_palette" src="i/icons/wand30.png" title="make or view wishes"/>

    </div>
    
    <div id="mobilize_tray">
      
      <img reveal="places_palette" src="i/icons/landmark21.png" title="see local places"/>      
      <img reveal="recent_content" src="i/icons/scroll.png" title="view recent events"/>
      
    </div>
  </div>
  <div id="console">
    <div id="mode_buttons" style="padding-left: 30px">
      <a class="button" href="#mode=plan">Plan</a>
      <a class="button" href="#mode=connect">Connect</a>
      <a class="button" href="#mode=mobilize">Mobilize</a>
    </div>
  </div>
</div>


<div id="offscreen" style="display:none">
<script>
if($.browser.msie) $('#unsupported').show();
$(function(){App.init()});
</script>

m4_syscmd(`cat app/chrome/*.html app/modes/*/*.html')

<div id="idea_bank" class="hidden">
m4_syscmd(`cat app/ideas.ceml')
</div>

</div>
</body>
</html>
