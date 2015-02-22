/*
 * local-time.js
 * https://github.com/savetheinternet/Tinyboard/blob/master/js/local-time.js
 *
 * Released under the MIT license
 * Copyright (c) 2012 Michael Save <savetheinternet@tinyboard.org>
 * Copyright (c) 2013-2014 Marcin Łabanowski <marcin@6irc.net>
 *
 * Usage:
 *   // $config['additional_javascript'][] = 'js/jquery.min.js';
 *   $config['additional_javascript'][] = 'js/local-time.js';
 *
 */

onready(function(){
	var iso8601 = function(s) {
		s = s.replace(/\.\d\d\d+/,""); // remove milliseconds
		s = s.replace(/-/,"/").replace(/-/,"/");
		s = s.replace(/T/," ").replace(/Z/," UTC");
		s = s.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"); // -04:00 -> -0400
		return new Date(s);
	};
	var zeropad = function(num, count) {
		return [Math.pow(10, count - num.toString().length), num].join('').substr(1);
	};

	var do_localtime = function(elem) {	
		var times = elem.getElementsByTagName('time');
	
		for(var i = 0; i < times.length; i++) {
			if(typeof times[i].getAttribute('data-local') == 'undefined')
				continue;
		
			var t = iso8601(times[i].getAttribute('datetime'));
		
		
			times[i].setAttribute('data-local', 'true');
			times[i].innerHTML =
				// date
				zeropad(t.getMonth() + 1, 2) + "/" + zeropad(t.getDate(), 2) + "/" + t.getFullYear().toString().substring(2) +
				" (" + [_("Sun"), _("Mon"), _("Tue"), _("Wed"), _("Thu"), _("Fri"), _("Sat"), _("Sun")][t.getDay()]  + ") " +
				// time
				zeropad(t.getHours(), 2) + ":" + zeropad(t.getMinutes(), 2) + ":" + zeropad(t.getSeconds(), 2);
		};
	};

	do_localtime(document);
	
	if (window.jQuery) {
		// allow to work with auto-reload.js, etc.
		$(document).bind('new_post', function(e, post) {
			do_localtime(post);
		});
	}
});

