			
			$(document).ready(function(){
				$.getJSON('http://rs.hankyates.com:3000/content', function(data){
    				$.each(data, function(key, value){
						$(".tabs").append("<li><a href= #" + value.name + ">" + value.name + "</a></li>");
						$("body").append("<div id=" + value.name + "><p>" + value.content + "</p></div>");
						$('ul.tabs').each(function(){
					var active;
					var content;
					var links;
					links = $(this).find('a');

					//defaults to the first tab on the loading of the page otherwise it takes the hash value of the tab 
					//that the user clicks on and sets that to the active variable
					active = $(links.filter('[href="'+location.hash+'"]')[0] || links[0]);
					active.addClass('active');

					content = $(active[0].hash);

					// Hides the div content of all hash tags that are not the current active variable
					links.not(active).each(function () {
						$(this.hash).hide();
					});

					$(this).on('click', 'a', function(e){
						// hide the current tab class by removing the tab's active class tag and hiding the div content
						active.removeClass('active');
						content.hide();

						// Change the active varible to the currently clicked tab
						active = $(this);
						content = $(this.hash);

						// Set the currently clicked tab's content to show and the tab's class to active
						active.addClass('active');
						content.show();
						// Avoid launching of the anchor tag
						e.preventDefault();
					}); // end on()
				});

					});
				})
				
			}); //document.ready