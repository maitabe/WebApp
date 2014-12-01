
//initializing
window.onload = function ()
{
	//ajax notification data call
	var options =
	{
		done: function(xhr, res)
		{
			console.log(xhr);
			//inject the data to my div
			var div = document.querySelector('#notif-data');
			div.innerHTML = xhr;
		}
	}

	//UTILS.ajax('../data/notification.txt', options);

	//tabs logic
	// THIS IS THE BASIS OF THE BASIS
	var items = document.querySelectorAll(".tabs li");

	console.log(items);

	for (var i = 0; i < items.length; i++) {
		items[i].addEventListener('click', function() {
			var name = this.getAttribute('data-name');
			changeActiveTab(name, this);
		});
	}

	//initialize the tab to show
	var firstTab =  document.querySelector('#onload-tab');
		firstTab.click();

	// hide iframe once the page initialize
	var hideFrame = document.querySelector('#qr-iframe');
		hideFrame.style.display = "none";

	// adding event listener to save button
	var saveContent = document.querySelector('#item-save');
		saveContent.addEventListener('click', makeSaveActions);

	//show arrow-expand with save button
	var showArrow = document.querySelector('#arrowBlack');
		showArrow.addEventListener('click', makeSaveActions);

	var closeForm = document.querySelector('.qr-form-bottom')
		closeForm.click()

	// add event change to drop down menu in quick reports tab
	var changeEvent = document.querySelector('#drop-history');
		changeEvent.addEventListener('change', function(){changeFrame(this)});

	var openTarget = document.querySelector('#arrowBlack');
		openTarget.addEventListener('click', targetBlank);

	var toggleClose = document.querySelector('#toggle-icon')
		toggleClose.addEventListener('click', toggleHide);



//end of window onload
};

function makeSaveActions() {

	var isValidated = false;

		//get value of input first line
	var  nameForm1 = document.querySelector('#name-qr1').value;
	var  urlForm1 = document.querySelector('#url-qr1').value;

	var  nameForm2 = document.querySelector('#name-qr2').value;
	var  urlForm2 = document.querySelector('#url-qr2').value;

	var  nameForm3 = document.querySelector('#name-qr3').value;
	var  urlForm3 = document.querySelector('#url-qr3').value;


		//show menu drop down with name history
	var nameList = document.querySelector('#drop-history');


	// 1st

		if (nameForm1 != '' && urlForm1 != '') {
			var option = document.createElement('option');
				option.text = nameForm1;
				option.value = urlForm1
				nameList.add(option);
				isValidated = true;
			}

	//2nd

		if (nameForm2 != '' && urlForm2 != '') {
			var option = document.createElement('option');
				option.text = nameForm2;
				option.value = urlForm2;
				nameList.add(option);
				isValidated = true;
			}

	//3rd
		//do not add option element if name and url are not populated
		if (nameForm3 != '' && urlForm3 != '') {
				var option = document.createElement('option');
				option.text = nameForm3;
				option.value = urlForm3;
				nameList.add(option);
				isValidated = true;
			}

		//make sure the screen wont change if the form inputs are not fill
		if (isValidated == true) {

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
				hideFrame.style.display = "block";

			changeFrame(nameList);

		}


}


function changeFrame(select) {

    // get value
	var selectedOptionValue = select.options[select.selectedIndex].value;
	console.log(selectedOptionValue);

   // set value to iframe src
   var  getContFrame = document.querySelector('#qr-iframe');
    	getContFrame.src = selectedOptionValue;
}

function targetBlank(){
	//open window of iframe target blank
	 var  getContFrame = document.querySelector('#qr-iframe');
	 window.open( getContFrame.src,'_blank');
}

	// hide form once toggle is clicked
function toggleHide() {

	var closeContentForm = document.querySelector('.qr-form-bottom');
	var hideBgToggle = document.querySelector('#bkgd-icon');

		//if form is hidden - show it
	if(closeContentForm.style.display == 'none') {
			closeContentForm.style.display = 'block';
				hideBgToggle.style.backgroundColor = '#ffffff';
		//if form show - hide it
	}else if(closeContentForm.style.display == 'block') {
				closeContentForm.style.display = 'none';
				hideBgToggle.style.backgroundColor = 'transparent';
	}


}

// select each tab -table mechanism-
function changeActiveTab(selectedId, tabBtn) {

	// get all containers elements
	var contentTabs = document.querySelectorAll('.tab-content');

	// hide all tabs
 	for ( var i=0; i<contentTabs.length; i++)
    {
      contentTabs[i].style.display ='none';
    }

	// show selected tab
	var selectedTab = document.querySelector('#' + selectedId);
	selectedTab.style.display = 'block';

	// color to default all tabs
	var defaultTabs = document.querySelectorAll('.plain-tab');

	// hide all tabs
 	for ( var i=0; i<defaultTabs.length; i++)
    {
      defaultTabs[i].style.background = 'darkgrey';
    }

	// color selected tab
	tabBtn.style.background = '#ebebeb';
}




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