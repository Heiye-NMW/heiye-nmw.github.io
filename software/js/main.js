$(function () {
	var selector = {
		nav: $('#nav'),
		btn: $('#menuBtn'),
		li: $('#nav li'),
		detail: $('#detail'),
		main: $('#main'),
		soft: $('#soft'),
		cha: $("#cha"),
		navBtn: function () {
			if (selector.nav.hasClass('hid')) {
				selector.btn.removeClass('collapsed').addClass('animated');
				selector.nav.removeClass('hid');
			} else {
				selector.btn.removeClass('animated').addClass('collapsed');
				selector.nav.addClass('hid');
			}
		},
		showC: function () {
			if (selector.detail.css('display') == 'block') {
				selector.detail.css('display', 'none');
				selector.main.css('overflowY', 'auto');
			} else {
				selector.detail.css('display', 'block');
				selector.main.css('overflow', 'hidden');
			}
		}
	};

	selector.nav.onePageNav({
		currentClass: 'on',
		extraTop: 60,
		scrollElement: '#main',
		begin: function () {
			//Hack so you can click other menu items after the initial click
			$('body').append('<div id="device-dummy" style="height: 1px;"></div>');
		},
		end: function () {
			$('#device-dummy').remove();
		}
	});

	selector.nav.find('li').click(function (event) {
		selector.navBtn();
	});
	selector.btn.click(function (event) {
		selector.navBtn();
	});
	selector.soft.click(function (event) {
		selector.showC();
	});
	selector.cha.click(function (event) {
		selector.showC();
	});
});



