
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

	// adding event listener to save button
	var saveContent = document.querySelector('#item-save');
		saveContent.addEventListener('click', makeSaveActions);

	var openWindow = document.querySelector('#arrowBlack');
		openWindow.addEventListener('click', makeSaveActions);

	// add event change to drop down menu in quick reports tab
	var changeEvent = document.querySelector('#drop-history');
		changeEvent.addEventListener('change', function(){changeFrame(this)});

//end of window onload
};

function makeSaveActions() {
	//display arrow expand
	var expandArrow = document.querySelector('#arrowBlack');
		expandArrow.style.display = 'block';
		// expandArrow.window.open('url');

		//show menu drop down
	var historyList = document.querySelector('.site-list');
		historyList.style.display = 'block';

		//show menu drop down with name history
	var nameList = document.querySelector('#drop-history');
	var option = document.createElement('option');
		option.text = 'name';
		nameList.add(option);

		//hide form once button save its clicked
	var hideForm = document.querySelector('.qr-form-bottom');
		hideForm.style.display = 'none';

		//add iframe tag to the tab
	var showContainer = document.querySelector('.frame-content');
		showContainer.style.display = 'block';
}

function changeFrame(select) {

    // get value
	var selectedOptionValue = select.options[select.selectedIndex].value;

alert(selectedOptionValue);
   // set value to iframe src
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