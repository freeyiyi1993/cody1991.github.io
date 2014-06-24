(function($){
	// Settings
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'false',
		continous = true,
		autoplay = true,
		playlist = [
		{
title: '明明就',
artist: '周杰伦',
album: '十二新作',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1.mp3'
},
{
title: '我不配',
artist: '周杰伦',
album: '我很忙',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (1).mp3'
},
{
title: '烟花易冷',
artist: '周杰伦',
album: '跨时代',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (2).mp3'
},
{
title: '夜曲',
artist: '周杰伦',
album: '十一月的肖邦',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (3).mp3'
},
{
title: '最长的电影',
artist: '周杰伦',
album: '我很忙',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (4).mp3'
},
{
title: '爱你没差',
artist: '周杰伦',
album: '十二星座',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (5).mp3'
},
{
title: '安静',
artist: '周杰伦',
album: '范特西',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (6).mp3'
},
{
title: '彩虹',
artist: '周杰伦',
album: '我很忙',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (7).mp3'
},
{
title: '稻香',
artist: '周杰伦',
album: '魔杰座',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (8).mp3'
},
{
title: '断了的弦',
artist: '周杰伦',
album: '寻找周杰伦',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (9).mp3'
},
{
title: '发如雪',
artist: '周杰伦',
album: '十一月的肖邦',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (10).mp3'
},
{
title: '枫',
artist: '周杰伦',
album: '十一月的肖邦',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (11).mp3'
},
{
title: '搁浅',
artist: '周杰伦',
album: '七里香',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (12).mp3'
},
{
title: '给我一首歌的时间',
artist: '周杰伦',
album: '魔杰座',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (13).mp3'
},
{
title: '黑色毛衣',
artist: '周杰伦',
album: '十一月的肖邦',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (14).mp3'
},
{
title: '红尘客栈',
artist: '周杰伦',
album: '十二新作',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (15).mp3'
},
{
title: '花海',
artist: '周杰伦',
album: '魔杰座',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (16).mp3'
},
{
title: '画沙',
artist: '周杰伦、袁咏琳',
album: '',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (17).mp3'
},
{
title: '回到过去',
artist: '周杰伦',
album: '八度空间',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (18).mp3'
},
{
title: '简单爱',
artist: '周杰伦',
album: '范特西',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (19).mp3'
},
{
title: '借口',
artist: '周杰伦',
album: '七里香',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (20).mp3'
},
{
title: '菊花台',
artist: '周杰伦',
album: '依然范特西',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (21).mp3'
},
{
title: '哪里都是你',
artist: '周杰伦',
album: '十二新作',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (23).mp3'
},
{
title: '你好吗',
artist: '周杰伦',
album: '惊叹号',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (24).mp3'
},
{title: '牛仔很忙',
artist: '周杰伦',
album: '我很忙',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (25).mp3'
},
{title: '蒲公英的约定',
artist: '周杰伦',
album: '我很忙',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (26).mp3'
},
{title: '七里香',
artist: '周杰伦',
album: '七里香',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (27).mp3'
},
{title: '青花瓷',
artist: '周杰伦',
album: '我很忙',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (28).mp3'
},
{title: '珊瑚海',
artist: '周杰伦、梁心颐',
album: '十一月的肖邦',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (29).mp3'
},
{title: '手语',
artist: '周杰伦',
album: '十二新作',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (31).mp3'
},
{title: '说好的幸福呢',
artist: '周杰伦',
album: '魔杰座',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (32).mp3'
},
{title: '天堂的月光',
artist: '周杰伦',
album: '',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (33).mp3'
},
{title: '甜甜的',
artist: '周杰伦',
album: '我很忙',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (34).mp3'
},
{title: '退后',
artist: '周杰伦',
album: '依然范特西',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (35).mp3'
},
{title: '明明就',
artist: '周杰伦',
album: '十二新作',
cover:'http://cdn.duitang.com/uploads/item/201203/11/20120311085629_sZsze.jpeg',
mp3: 'http://cody1991.github.io/source/zhoujielun_1 (36).mp3'
}
];

	// Load playlist
	for (var i=0; i<playlist.length; i++){
		var item = playlist[i];
		$('#playlist').append('<li>'+item.artist+' - '+item.title+'</li>');
	}

	var time = new Date(),
		currentTrack = shuffle === 'true' ? time.getTime() % playlist.length : 0,
		trigger = false,
		audio, timeout, isPlaying, playCounts;

	var play = function(){
		audio.play();
		$('.playback').addClass('playing');
		timeout = setInterval(updateProgress, 500);
		isPlaying = true;
	}

	var pause = function(){
		audio.pause();
		$('.playback').removeClass('playing');
		clearInterval(updateProgress);
		isPlaying = false;
	}

	// Update progress
	var setProgress = function(value){
		var currentSec = parseInt(value%60) < 10 ? '0' + parseInt(value%60) : parseInt(value%60),
			ratio = value / audio.duration * 100;

		$('.timer').html(parseInt(value/60)+':'+currentSec);
		$('.progress .pace').css('width', ratio + '%');
		$('.progress .slider a').css('left', ratio + '%');
	}

	var updateProgress = function(){
		setProgress(audio.currentTime);
	}

	// Progress slider
	$('.progress .slider').slider({step: 0.1, slide: function(event, ui){
		$(this).addClass('enable');
		setProgress(audio.duration * ui.value / 100);
		clearInterval(timeout);
	}, stop: function(event, ui){
		audio.currentTime = audio.duration * ui.value / 100;
		$(this).removeClass('enable');
		timeout = setInterval(updateProgress, 500);
	}});

	// Volume slider
	var setVolume = function(value){
		audio.volume = localStorage.volume = value;
		$('.volume .pace').css('width', value * 100 + '%');
		$('.volume .slider a').css('left', value * 100 + '%');
	}

	var volume = localStorage.volume || 0.5;
	$('.volume .slider').slider({max: 1, min: 0, step: 0.01, value: volume, slide: function(event, ui){
		setVolume(ui.value);
		$(this).addClass('enable');
		$('.mute').removeClass('enable');
	}, stop: function(){
		$(this).removeClass('enable');
	}}).children('.pace').css('width', volume * 100 + '%');

	$('.mute').click(function(){
		if ($(this).hasClass('enable')){
			setVolume($(this).data('volume'));
			$(this).removeClass('enable');
		} else {
			$(this).data('volume', audio.volume).addClass('enable');
			setVolume(0);
		}
	});

	// Switch track
	var switchTrack = function(i){
		if (i < 0){
			track = currentTrack = playlist.length - 1;
		} else if (i >= playlist.length){
			track = currentTrack = 0;
		} else {
			track = i;
		}

		$('audio').remove();
		loadMusic(track);
		if (isPlaying == true) play();
	}

	// Shuffle
	var shufflePlay = function(){
		var time = new Date(),
			lastTrack = currentTrack;
		currentTrack = time.getTime() % playlist.length;
		if (lastTrack == currentTrack) ++currentTrack;
		switchTrack(currentTrack);
	}

	// Fire when track ended
	var ended = function(){
		pause();
		audio.currentTime = 0;
		playCounts++;
		if (continous == true) isPlaying = true;
		if (repeat == 1){
			play();
		} else {
			if (shuffle === 'true'){
				shufflePlay();
			} else {
				if (repeat == 2){
					switchTrack(++currentTrack);
				} else {
					if (currentTrack < playlist.length) switchTrack(++currentTrack);
				}
			}
		}
	}

	var beforeLoad = function(){
		var endVal = this.seekable && this.seekable.length ? this.seekable.end(0) : 0;
		$('.progress .loaded').css('width', (100 / (this.duration || 1) * endVal) +'%');
	}

	// Fire when track loaded completely
	var afterLoad = function(){
		if (autoplay == true) play();
	}

	// Load track
	var loadMusic = function(i){
		var item = playlist[i],
			newaudio = $('<audio>').html('<source src="'+item.mp3+'"><source src="'+item.ogg+'">').appendTo('#player');
		
		$('.cover').html('<img src="'+item.cover+'" alt="'+item.album+'">');
		$('.tag').html('<strong>'+item.title+'</strong><span class="artist">'+item.artist+'</span><span class="album">'+item.album+'</span>');
		$('#playlist li').removeClass('playing').eq(i).addClass('playing');
		audio = newaudio[0];
		audio.volume = $('.mute').hasClass('enable') ? 0 : volume;
		audio.addEventListener('progress', beforeLoad, false);
		audio.addEventListener('durationchange', beforeLoad, false);
		audio.addEventListener('canplay', afterLoad, false);
		audio.addEventListener('ended', ended, false);
	}

	loadMusic(currentTrack);
	$('.playback').on('click', function(){
		if ($(this).hasClass('playing')){
			pause();
		} else {
			play();
		}
	});
	$('.rewind').on('click', function(){
		if (shuffle === 'true'){
			shufflePlay();
		} else {
			switchTrack(--currentTrack);
		}
	});
	$('.fastforward').on('click', function(){
		if (shuffle === 'true'){
			shufflePlay();
		} else {
			switchTrack(++currentTrack);
		}
	});
	$('#playlist li').each(function(i){
		var _i = i;
		$(this).on('click', function(){
			switchTrack(_i);
		});
	});

	if (shuffle === 'true') $('.shuffle').addClass('enable');
	if (repeat == 1){
		$('.repeat').addClass('once');
	} else if (repeat == 2){
		$('.repeat').addClass('all');
	}

	$('.repeat').on('click', function(){
		if ($(this).hasClass('once')){
			repeat = localStorage.repeat = 2;
			$(this).removeClass('once').addClass('all');
		} else if ($(this).hasClass('all')){
			repeat = localStorage.repeat = 0;
			$(this).removeClass('all');
		} else {
			repeat = localStorage.repeat = 1;
			$(this).addClass('once');
		}
	});

	$('.shuffle').on('click', function(){
		if ($(this).hasClass('enable')){
			shuffle = localStorage.shuffle = 'false';
			$(this).removeClass('enable');
		} else {
			shuffle = localStorage.shuffle = 'true';
			$(this).addClass('enable');
		}
	});
})(jQuery);