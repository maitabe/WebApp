
//initializing
window.onload = function () {
	'use strict';
	var makeSaveActions,
		changeFrame,
		targetBlank,
		toggleHide,
		changeContentForActiveTab,
		changeActiveTab,
		cancelAction;



	cancelAction = function () {

		var closeContentForm = document.querySelector('.qr-form-bottom');
		var hideBgToggle = document.querySelector('#bkgd-icon');

		//hide form once cancel buttonis clicked
		if (closeContentForm.style.display === 'block') {
			closeContentForm.style.display = 'none';
			hideBgToggle.style.backgroundColor = 'transparent';
		}
	};

	makeSaveActions = function () {

		// vars declaration
		var addSelectOption;
		var isValidated = false;

		//show menu drop down with name history
		var nameList = document.querySelector('#drop-history');

		//clear all options from select elm
		nameList.innerHTML = '';


		//get value of input first line
		var  nameForm1 = document.querySelector('#name-qr1').value;
		var  urlForm1 = document.querySelector('#url-qr1').value;

		var  nameForm2 = document.querySelector('#name-qr2').value;
		var  urlForm2 = document.querySelector('#url-qr2').value;

		var  nameForm3 = document.querySelector('#name-qr3').value;
		var  urlForm3 = document.querySelector('#url-qr3').value;



		addSelectOption = function (text, value) {
			var option = document.createElement('option');

			option.text = text;
			option.value = value;
			nameList.add(option);

		};


if( nameForm1 	 !== '' ||  urlForm1 !== '' ){

		if(nameForm1 !== undefined && nameForm1 !== '') {
			//nameForm1 was filled
			if(urlForm1 !== undefined && urlForm1 !== '') {
				//urlForm1 was filled
				if(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(urlForm1)){
					//url1 is valid, first line from form is valid
					isValidated = true;
					addSelectOption(nameForm1, urlForm1);
				}else {
					//url1 not valid
					document.querySelector('#url-qr1').style.border='2px solid red';
					document.querySelector('#url-qr1').focus();
					document.querySelector('#url-qr1').setCustomValidity('Please enter a URL \n i.e http://www.website.com');
					return false;
				}
			}else {
				//url1 is empty
				document.querySelector('#url-qr1').style.border='2px solid red';
				document.querySelector('#url-qr1').focus();
				document.querySelector('#url-qr1').setCustomValidity('Please enter URL');
				return false;
			}
		}else {
			//name1 is empty
			document.querySelector('#name-qr1').style.border='2px solid red';
			document.querySelector('#name-qr1').focus();
			document.querySelector('#name-qr1').setCustomValidity('Please enter name');
			return false;
		}
}
if( nameForm2 	 !== '' ||  urlForm2 !== '' ){

		if(nameForm2 !== undefined && nameForm2 !== '') {
			//nameForm1 was filled
			if(urlForm2 !== undefined && urlForm2 !== '') {
				//urlForm1 was filled
				if(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(urlForm2)){
					//url1 is valid, first line from form is valid
					isValidated = true;
					addSelectOption(nameForm2, urlForm2);
				}else {
					//url1 not valid
					document.querySelector('#url-qr2').style.border='2px solid red';
					document.querySelector('#url-qr2').focus();
					document.querySelector('#url-qr2').setCustomValidity('Please enter a URL \n i.e http://www.website.com');
					return false;
				}
			}else {
				//url1 is empty
				document.querySelector('#url-qr2').style.border='2px solid red';
				document.querySelector('#url-qr2').focus();
				document.querySelector('#url-qr2').setCustomValidity('Please enter URL');
				return false;
			}
		}else {
			//name1 is empty
			document.querySelector('#name-qr1').style.border='2px solid red';
			document.querySelector('#name-qr2').focus();
			document.querySelector('#name-qr2').setCustomValidity('Please enter name');
			return false;
		}
}
if( nameForm3 	 !== '' ||  urlForm3 !== '' ){

		if(nameForm3 !== undefined && nameForm3 !== '') {
			//nameForm1 was filled
			if(urlForm3 !== undefined && urlForm3 !== '') {
				//urlForm1 was filled
				if(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(urlForm3)){
					//url1 is valid, first line from form is valid
					isValidated = true;
					addSelectOption(nameForm3, urlForm3);
				}else {
					//url1 not valid
					document.querySelector('#url-qr3').style.border='2px solid red';
					document.querySelector('#url-qr3').focus();
					document.querySelector('#url-qr3').setCustomValidity('Please enter a URL \n i.e http://www.website.com');
					return false;
				}
			}else {
				//url1 is empty
				document.querySelector('#url-qr3').style.border='2px solid red';
				document.querySelector('#url-qr3').focus();
				document.querySelector('#url-qr3').setCustomValidity('Please enter URL');
				return false;
			}
		}else {
			//name1 is empty
			document.querySelector('#name-qr3').style.border='2px solid red';
			document.querySelector('#name-qr3').focus();
			document.querySelector('#name-qr3').setCustomValidity('Please enter name');
			return false;
		}
}


		// // 1st
		// if (nameForm1 && urlForm1 !== undefined && urlForm1 !== '' ) {
		// 	addSelectOption(nameForm1, urlForm1);

		// 	//check if the URL contain http://www.
		// 	if(!/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(urlForm1)){
		// 		document.querySelector('#url-qr1').setCustomValidity('Please enter a URL \n i.e http://www.website.com');
		// 		//false avoid form to submit if url is not correct
		// 		return false;
		// 	}else if(urlForm1 === '') {
		// 		document.querySelector('#url-qr1').setCustomValidity('Please enter URL');
		// 		//false avoid form to submit if url is not correct
		// 		return false;
		// 	}
		// }

		// //2nd
		// if (nameForm2 && nameForm2 !== '' &&  urlForm2 !== undefined && urlForm2 !== '' ) {
		// 	 if (!nameForm2 && nameForm2 === '')
		// 	addSelectOption(nameForm2, urlForm2);

		// 	if(nameForm2 && nameForm2 ==='') {
		// 		document.querySelector('#name-qr2').setCustomValidity('Please enter name');
		// 		//false avoid form to submit if url is not correct
		// 		return false;
		// 	}
		// 	//check if the URL contain http://www.
		// 	else if(urlForm2 && urlForm2 === '') {
		// 		document.querySelector('#url-qr2').setCustomValidity('Please enter URL');
		// 		//false avoid form to submit if url is not correct
		// 		return false;
		// 	}
		// 	else if(!/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(urlForm2)){
		// 		document.querySelector('#url-qr2').setCustomValidity('Please enter a URL \n i.e http://www.website.com');
		// 		//false avoid form to submit if url is not correct
		// 		return false;
		// 	}
		// }

		// //3rd
		// //do not add option element if name and url are not populated
		// if (nameForm3 && urlForm3 !== undefined && urlForm3 !== '') {
		// 	addSelectOption(nameForm3, urlForm3);

		// 	//check if the URL contian http://www.
		// 	if(!/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(urlForm3)){
		// 		document.querySelector('#url-qr3').setCustomValidity('Please enter a URL \n i.e http://www.website.com');
		// 		//false avoid form to submit if url is not correct
		// 		return false;
		// 	}else if(urlForm3 === '') {
		// 	document.querySelector('#url-qr3').setCustomValidity('Please enter URL');
		// 		//false avoid form to submit if url is not correct
		// 		return false;
		// 	}
		// }

		//make sure the screen wont change if the form inputs are not fill
		if (isValidated === true) {

			//hide form once button save its clicked
			var hideForm = document.querySelector('.qr-form-bottom');
			hideForm.style.display = 'none';

			var hideBgToggle = document.querySelector('#bkgd-icon');
			hideBgToggle.style.backgroundColor = 'transparent';

			//show menu drop down
			var historyList = document.querySelector('.site-list');
			historyList.style.display = 'block';

			//display arrow expand
			var expandArrow = document.querySelector('#arrowBlack');
			expandArrow.style.display = 'block';

			//add iframe tag to the tab
			var showContainer = document.querySelector('.qr-content-body');
			showContainer.style.display = 'block';

			// hide iframe once the page initialize
			var hideFrame = document.querySelector('#qr-iframe');
			hideFrame.style.display = 'block';

			changeFrame(nameList);
		}
	};


	changeFrame = function (select) {

		// get value
		var selectedOptionValue = select.options[select.selectedIndex].value;
		console.log(selectedOptionValue);

		// set value to iframe src
		var  getContFrame = document.querySelector('#qr-iframe');

		getContFrame.src = selectedOptionValue;
	};

	targetBlank = function (){
		//open window of iframe target blank
		var  getContFrame = document.querySelector('#qr-iframe');

		window.open( getContFrame.src,'_blank');
	};

	// hide form once toggle is clicked
	toggleHide = function () {

		var closeContentForm = document.querySelector('.qr-form-bottom');
		var hideBgToggle = document.querySelector('#bkgd-icon');


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
		var contentTabs = document.querySelectorAll('.tab-content');

		// hide all tabs
		for ( i = 0; i < contentTabs.length; i++) {
			// Hide all tab contents
			UTILS.addClass(contentTabs[i], 'hidden');
		}

		// show selected tab
		var selectedTab = document.querySelector('#' + selectedId);
		UTILS.removeClass(selectedTab, 'hidden');

		// color to default all tabs
		var defaultTabs = document.querySelectorAll('.plain-tab');

		// hide all tabs
		for ( i = 0; i < defaultTabs.length; i++) {
		 	defaultTabs[i].style.background = 'darkgrey';
		}

		// color selected tab
		tabBtn.style.background = '#ebebeb';
	};





	//end of the basis

	// var li = document.querySelector('#onload-tab');
	// var stop = document.querySelector('stop');

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

console.log('message');
console.log('message');
	//ajax notification data call
	var options = {
		done: function (xhr, res) {
			console.log(xhr);
			//inject the data to my div
			var div = document.querySelector('#notif-data');
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

	var items = document.querySelectorAll('.tabs li');

	for (var i = 0; i < items.length; i++) {
		items[i].addEventListener('click', changeActiveTab);
	}

	//initialize the tab to show
	var firstTab =  document.querySelector('#onload-tab');
	firstTab.click();

	// hide iframe once the page initialize
	var hideFrame = document.querySelector('#qr-iframe');
	hideFrame.style.display = 'none';

	//adding event to cancel button in the form
	document.querySelector('#cancelButton').addEventListener('click', cancelAction);


	// adding event listener to save button
	var saveContent = document.querySelector('#item-save');
	saveContent.addEventListener('click', makeSaveActions);

	//show arrow-expand with save button
	var showArrow = document.querySelector('#arrowBlack');
	showArrow.addEventListener('click', makeSaveActions);

	var closeForm = document.querySelector('.qr-form-bottom');
	closeForm.click();

	// add event change to drop down menu in quick reports tab
	var changeEvent = document.querySelector('#drop-history');

	changeEvent.addEventListener('change', function () {
		changeFrame(this);
	});
	//open  iframe in a new tab when clicking the arrow
	var openTarget = document.querySelector('#arrowBlack');
	openTarget.addEventListener('click', targetBlank);
	//open form once the toggle is clicked
	var toggleCloseOpen = document.querySelector('#toggle-icon');
	toggleCloseOpen.addEventListener('click', toggleHide);




	UTILS.addEvent(window, 'hashchange', function (e) {
		// console.log(e.newURL);
	});

	// end of window onload
};
