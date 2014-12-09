
//initializing
window.onload = function () {
	'use strict';

	var init,
		addSelectOption,
		validateFormRow,
		makeSaveActions,
		changeFrame,
		targetBlank,
		toggleHide,
		changeContentForActiveTab,
		changeActiveTab,
		cancelAction,
		re_weburl;

	// Regular Expressions
	/* jshint -W101 */

	// Valid web URL (https://gist.github.com/dperini/729294)
	re_weburl = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i;
	/* jshint +W101 */


	cancelAction = function () {

		var closeContentForm = UTILS.qs('.qr-form-bottom');
		var hideBgToggle = UTILS.qs('#bkgd-icon');

		//hide form once cancel buttonis clicked
		if (closeContentForm.style.display === 'block') {
			closeContentForm.style.display = 'none';
			hideBgToggle.style.backgroundColor = 'transparent';
		}
	};

	addSelectOption = function (selectElm, text, value) {
		if (!text || !value) {
			return false;
		}

		var option = document.createElement('option');

		option.text = text;
		option.value = value;
		selectElm.add(option);
	};

	validateFormRow = function (name, url) {
		// If one of the inputs is not empty
		if (name || url) {
			// If the name is empty
			if (!name) {
				// name1 is empty
				UTILS.qs('#name-qr1').style.border='2px solid red';
				UTILS.qs('#name-qr1').focus();
				UTILS.qs('#name-qr1').setCustomValidity('Please enter name');
				return false;
			}

			if (!url) {
				//url1 is empty
				UTILS.qs('#url-qr1').style.border='2px solid red';
				UTILS.qs('#url-qr1').focus();
				UTILS.qs('#url-qr1').setCustomValidity('Please enter URL');
				return false;
			}

			// If the URL is not valid
			if (!re_weburl.test(url)) {
				// url1 not valid
				UTILS.qs('#url-qr1').style.border='2px solid red';
				UTILS.qs('#url-qr1').focus();
				UTILS.qs('#url-qr1').setCustomValidity('Please enter a URL \n i.e http://www.website.com');
				return false;
			}

			// name and url are filled
			// url1 is valid, first line from form is valid
			return true;
		}

		// Both are empty, good to go
		return true;
	};

	makeSaveActions = function (e) {
		var target = e.target;
		var tabId = target.getAttribute('data-tab');
		var tabElm = UTILS.qs('#' + tabId);

		var nameList = tabElm.querySelector('select');
		var rows = tabElm.querySelectorAll('fieldset');
		var currName;
		var curUrl;

		// clear all options from select elm
		nameList.innerHTML = '';

		// Loop through each form row
		for (var i = 0; i < rows.length; i++) {
			currName = rows[i].querySelector('input[type="text"]').value;
			curUrl = rows[i].querySelector('input[type="url"]').value;

			// If not valid, stop here
			if (!validateFormRow(currName, curUrl)) {
				return false;
			}

			addSelectOption(nameList, currName, curUrl);
		}

		// TODO All stuff below should be dynamic, supporting 2 forms
		// Use tabElm

		// hide form once button save its clicked
		var hideForm = UTILS.qs('.qr-form-bottom');
		hideForm.style.display = 'none';

		var hideBgToggle = UTILS.qs('#bkgd-icon');
		hideBgToggle.style.backgroundColor = 'transparent';

		//show menu drop down
		var historyList = UTILS.qs('.site-list');
		historyList.style.display = 'block';

		//display arrow expand
		var expandArrow = UTILS.qs('#arrowBlack');
		expandArrow.style.display = 'block';

		//add iframe tag to the tab
		var showContainer = UTILS.qs('.qr-content-body');
		showContainer.style.display = 'block';

		// hide iframe once the page initialize
		var hideFrame = UTILS.qs('#qr-iframe');
		hideFrame.style.display = 'block';

		changeFrame(nameList);
	};


	changeFrame = function (select) {

		// get value
		var selectedOptionValue = select.options[select.selectedIndex].value;
		console.log(selectedOptionValue);

		// set value to iframe src
		var  getContFrame = UTILS.qs('#qr-iframe');

		getContFrame.src = selectedOptionValue;
	};

	targetBlank = function (){
		//open window of iframe target blank
		var  getContFrame = UTILS.qs('#qr-iframe');

		window.open( getContFrame.src,'_blank');
	};

	// hide form once toggle is clicked
	toggleHide = function () {

		var closeContentForm = UTILS.qs('.qr-form-bottom');
		var hideBgToggle = UTILS.qs('#bkgd-icon');


		//if form is hidden - click toggle to show it
		if(closeContentForm.style.display === 'none') {
			closeContentForm.style.display = 'block';
			hideBgToggle.style.backgroundColor = '#ffffff';
			UTILS.qs('#name-qr1').focus();
		//if form show - click toggle to hide it
		}else if(closeContentForm.style.display === 'block') {
			closeContentForm.style.display = 'none';
			hideBgToggle.style.backgroundColor = 'transparent';

		}
	};

	// select each tab -tab mechanism-
	changeContentForActiveTab = function (selectedId, tabBtn) {
		var i;

		// get all containers elements
		var contentTabs = UTILS.qsa('.tab-content');

		// hide all tabs
		for ( i = 0; i < contentTabs.length; i++) {
			// Hide all tab contents
			UTILS.addClass(contentTabs[i], 'hidden');
		}

		// show selected tab
		var selectedTab = UTILS.qs('#' + selectedId);
		UTILS.removeClass(selectedTab, 'hidden');

		// color to default all tabs
		var defaultTabs = UTILS.qsa('.plain-tab');

		// hide all tabs
		for ( i = 0; i < defaultTabs.length; i++) {
		 	defaultTabs[i].style.background = 'darkgrey';
		 	defaultTabs[i].style.color = '#f0f0f0';
		}

		// color selected tab
		tabBtn.style.background = '#ebebeb';
		tabBtn.style.color = '#000000';
		window.location.hash = '#' + selectedId;
	};





	//end of the basis

	// var li = UTILS.qs('#onload-tab');
	// var stop = UTILS.qs('stop');

	// UTILS.addEvent(li, 'click', function(e) {
	// 	var target = e.target;

	// 	console.log(target);
	// 	console.log(this);
	// 	console.log(e.currentTarget);
	// 	console.log(this === e.currentTarget);
	// 	console.log(e.preventDefault);
	// 	console.log(e.stopPropagation);
	// });

	// UTILS.addEvent(stop, 'click', function(e) {
	// 	//var target = e.target;

	// 	e.preventDefault();

	// 	UTILS.removeEvent(li, 'click', function);

	// });

	//ajax notification data call
	var options = {
		done: function (xhr, res) {
			console.log(xhr);
			//inject the data to my div
			var div = UTILS.qs('#notif-data');
			div.innerHTML = xhr;
		}
	};

	// FIXME Commented out just for testing
	// UTILS.ajax('../data/notification.txt', options);

	//tabs logic
	// THIS IS THE BASIS OF THE BASIS

	//console.log(items);

	changeActiveTab = function (e) {
		var name = e.currentTarget.getAttribute('data-name');
		console.log(name);
		changeContentForActiveTab(name, e.currentTarget);
	};

	init = function () {
		var items = UTILS.qsa('.tabs li');

		for (var i = 0; i < items.length; i++) {
			items[i].addEventListener('click', changeActiveTab);
		}

		//initialize the tab to show
		var firstTab =  UTILS.qs('#onload-tab');
		firstTab.click();

		// hide iframe once the page initialize
		var hideFrame = UTILS.qs('#qr-iframe');
		hideFrame.style.display = 'none';

		//adding event to cancel button in the form
		UTILS.qs('#cancelButton').addEventListener('click', cancelAction);


		// adding event listener to save button
		var saveContent = UTILS.qs('#qr-save');
		saveContent.addEventListener('click', makeSaveActions);

		// TODO add the same even listene for the second form save butt

		//show arrow-expand with save button
		var showArrow = UTILS.qs('#arrowBlack');
		showArrow.addEventListener('click', makeSaveActions);

		var closeForm = UTILS.qs('.qr-form-bottom');
		closeForm.click();

		// add event change to drop down menu in quick reports tab
		var changeEvent = UTILS.qs('#drop-history');

		changeEvent.addEventListener('change', function () {
			changeFrame(this);
		});
		//open  iframe in a new tab when clicking the arrow
		var openTarget = UTILS.qs('#arrowBlack');
		openTarget.addEventListener('click', targetBlank);
		//open form once the toggle is clicked
		var toggleCloseOpen = UTILS.qs('#toggle-icon');
		toggleCloseOpen.addEventListener('click', toggleHide);


		// TODO make this work instead of click handlers on the tabs
		UTILS.addEvent(window, 'hashchange', function (e) {
			// console.log(e.newURL);
		});
	};

	init();

	// end of window onload
};
