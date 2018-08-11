(function($) {
	'use strict';

	$('document').ready(function() {
		var information = $('.section').hide();
		information.eq(0).show();
		var item = $('.list__item').eq(0).addClass('list__item--on');
		
		$('.list__item').on('click', function(evt){
			evt.preventDefault();

			$('.list .list__item').removeClass('list__item--on');
			$(this).addClass('list__item--on');
			$('.section').hide(1000);
			$('.section').eq($(this).index()).show(1000);
		});
	});
})($)




// 1. скрыть текстовые описания акардиона
		// кроме первого
		/*var list = $('.list');
		var listDescriptions = list.find('li');
		listDescriptions.eq(0).addClass('list__item--on');



		var article = $('.article');
		var sectionDescriptions = article.find('section');
		sectionDescriptions.hide();
		sectionDescriptions.eq(0).show();
		
		// 2. нужно повесить обработчик события на список
		// элементов аккордеонов, который будет отлавлевать 
		// клики по шапкам и показывать соседнее с шапкой описание 
		// а остальные открытые сворачевать
		
		list.on ('click', '.list__item', function(evt){
			evt.preventDefault();

			var listItem = $(this);
			var listDescription = listItem.addClass('list__item--on');
			if (listDescription.find('list__item--on') === 'true');
				listDescriptions.remClass('list__item--of');
		});
*/

		/*accordion.on('click', '.item', function(evt){
			evt.preventDefault();

			var accordionHeader = $(this);
			var accordionDescription = accordionHeader.next('p');

			if (accordionDescription.css('display') === 'none') {
			accordionDescriptions.slideUp(600);
			accordionDescriptionS.slideDown(600);
			}
		});*/