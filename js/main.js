//WEB APP jQuery

// Global variables
'use strict';

	// Valid web URL
var	re_weburl = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i;
	/* jshint +W101 */


//functions

//select each tab give color a color if selected and give different color if not selected
var changeContentForActiveTab = function (selectedId, tabBtn) {

	// get all containers elements and add a class to hide tabs
	$('.tab-content').addClass('hidden');

	// show selected tab
	$('#' + selectedId).removeClass('hidden');

	//default color to all tabs - hide NON selected tabs
	$('.plain-tab').css({'background-color':'darkgrey', 'color': '#f0f0f0' });

	//change color to selected tab
	$(tabBtn).css({'background-color':'#ebebeb', 'color': '#000000' });

	 var pos = $(window).scrollTop();
	//hash tag
	window.location.hash = '#' + selectedId;
    $(window).scrollTop(pos);
};

// add option elm to select elm in html
var addSelectOption = function (selectElm, text, value) {


	if (!text || !value) {
		return false;
	}

	 $(selectElm).append($('<option></option>').attr('value', value).text(text));
};

// control iframe
var changeFrame = function (select) {

	// get value
	var selectedOptionValue = select[0].value;
	console.log(selectedOptionValue);

	//set value to iframe src
	$('#qr-iframe-reports, qr-iframe-folders').attr('src', selectedOptionValue );
};

//ajax notification data call
var options = {

	done: function (xhr, res) {

		console.log(xhr);
		//inject the data to my div
		var div = $('#notif-data');
		div.innerHTML = xhr;
	}
};

// validate a row
var validateFormRow = function (name, url) {
		// If one of the inputs is not empty
		if (name || url) {
			// If the name is empty
			if (!name) {
				// name1 is empty
				//
				// UTILS.qs('#name-qr1').style.border='2px solid red';
				$('#name-qr1, #name-qr1-fl').css('border', '2px solid red');

				// UTILS.qs('#name-qr1').focus();
				$('#name-qr1, #name-qr1-fl').focus();

				// UTILS.qs('#name-qr1').setCustomValidity('Please enter name');
				// return false;
				$('#name-qr1, #name-qr1-fl').setCustomValidity('Please enter name');
				return false;
			}

			if (!url) {
				//url1 is empty
				// UTILS.qs('#url-qr1').style.border='2px solid red';
				$('#url-qr1, #url-qr1-fl').css('border', '2px solid red');
				// UTILS.qs('#url-qr1').focus();
				$('#url-qr1, #url-qr1-fl').focus();
				// UTILS.qs('#url-qr1').setCustomValidity('Please enter URL');
				// return false;
				$('#url-qr1, #url-qr1-fl').setCustomValidity('Please enter URL');
				return false;
			}

			// If the URL is not valid
			if (!re_weburl.test(url)) {
				// url1 not valid
				// UTILS.qs('#url-qr1').style.border='2px solid red';
				$('#url-qr1, #url-qr1-fl').css('border', '2px solid red');
				// UTILS.qs('#url-qr1').focus();
				$('#url-qr1, #url-qr1-fl').focus();
				// UTILS.qs('#url-qr1').setCustomValidity('Please enter a URL \n i.e http://www.website.com');
				// return false;
				$('#url-qr1, #url-qr1-fl').setCustomValidity('Please enter a URL \n i.e http://www.website.com');
				return false;
			}

			// name and url are filled
			// url1 is valid, first line from form is valid
			return true;
		}

		// Both are empty, good to go
		return true;
	};


//initizialize code and event listeners
$(document).ready(function(){

	//listeners
	//click event to select active tab (change tabs on click)
	$('.tabs li').on('click', function(e){
		var name = $(this).attr('data-name');
		console.log(name);
		changeContentForActiveTab(name, e.currentTarget);
	});



	//click event for cancel button - hide the form and bg of icon
	$('#cancelButton').on('click', function(){
		$('.qr-form-bottom[form-name="reports"]').hide();
		$('#bkgd-icon').hide();
	});

	$('#cancelButton1').on('click', function(){
		$('.qr-form-bottom[form-name="folders"]').hide();
		$('#bkgd-icon').hide();
	});

	//click event to save button
	$('#qr-save, #item-save').on('click', function(e){
		var target = $(e.target);
		var tabId = $(target).attr('data-tab');
		//var tabElm = $('#' + tabId);


		var nameList = $('#' + tabId + ' select');
		//var rows = $('#' + tabId + ' fieldset');
		var currName;
		var curUrl;

		// clear all options from select elm
		nameList.html('');

		//loop through each form row
		$('#' + tabId + ' fieldset').each(function(i, elm) {

			currName = $(elm).find('input[type="text"]').val();
			curUrl = $(elm).find('input[type="url"]').val();

			// If not valid, stop here
			if (!validateFormRow(currName, curUrl)) {
				return false;

			}


			addSelectOption(nameList, currName, curUrl);
		});

		// if all empty - dont do the rest
		var emptyFields = $('#' + tabId + ' :input').filter(function() {
            // remove the $.trim if whitespace is counted as filled
            return $.trim(this.value) === '';
        });

		if(emptyFields.length === 7)
		{
			$('#name-qr1').css('border', '2px solid red');
			$('#name-qr1').focus();
			$('#name-qr1').setCustomValidity('Please enter name');
			return false; // leave function
		}

		// show select and iframe
			//TODO the below dynamic to work in the two existent forms
			//hide form once button save its clicked
			var saveOneForm = $(this).attr('data');

			if(saveOneForm === 'save-reports')
				{
					if($('.qr-form-bottom').is(':visible')){
						$('.qr-form-bottom[form-name="reports"]').hide();
					}
				}else if(saveOneForm === 'save-folders') {

					if($('.qr-form-bottom').is(':visible')){
						$('.qr-form-bottom[form-name="folders"]').hide();

					}
			}

				if($('#bkgd-icon').css('background-color', 'white')){
					$(this).css('background-color', 'transparent');
				}
				//the below can be simplified since it has the same css???
				//show menu drop down
				$('.site-list').css('display', 'block');
				//display arrow expand
				$('#arrowBlack').css('display', 'block');
				//add iframe tag to the tab
				$('.qr-content-body').css('display', 'block');
				// hide iframe once the page initialize
				$('#qr-iframe-reports, qr-iframe-folders').css('display', 'block');

				changeFrame(nameList);

		});

	//});

	//show arrow-expand with save button
	//maybe REAPEAT ALRADY TWICE, CHECK ABOVE $('#arrowBlack')?????
	// $('#arrowBlack').on('click', function(){

	// });

	//add change event to drop down menu
	$('#drop-history-reports, #drop-history-folders').on('change', function(){
		var url = $( this ).val();
		$('#qr-iframe-reports, qr-iframe-folders').attr('src', url );
	});

	//click event to arrow in order to open iframe in a new tab
	$('#arrowBlack').on('click', function(){
		//get the current url
		var url = $(this).parent().parent().find('iframe').attr('src');
		//open a new tab with current url
		window.open(url,'_blank');
	});

	//click event to hide/show the form
	$('#toggle-icon-reports').on('click', function(){
		if($('.qr-form-bottom').is(':visible')){
			$('.qr-form-bottom[form-name="reports"]').hide();
			$('#bkgd-icon').css('background-color', 'transparent');
		}
		else{
			$('.qr-form-bottom[form-name="reports"]').show();
			$('#bkgd-icon').css('background-color', 'white');
		}
	});

	$('#toggle-icon-folders').on('click', function(){
		if($('.qr-form-bottom').is(':visible')){
			$('.qr-form-bottom[form-name="folders"]').hide();
			$('#bkgd-icon-folders').css('background-color', 'transparent');
			$('select').css('display', 'none');
		}
		else{
			$('.qr-form-bottom[form-name="folders"]').show();
			$('#bkgd-icon-folders').css('background-color', 'white');
		}
	});

	//initialize code
	$('#onload-tab').click();

});


