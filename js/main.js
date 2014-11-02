//initializing
window.onload = function ()
{
	//myFunction('quick-reports');
	document.getElementById('onload-tab').click();
}
// select each tab -table mechanism-
function myFunction(selectedId, tabBtn) {

	// get all tabs elements
	var contentTabs = document.getElementsByClassName('tab-content');

	// hide all tabs
 	for ( var i=0; i<contentTabs.length; i++)
    {
      contentTabs[i].style.display ='none';
    }

	// show selected tab
	var selectedTab = document.getElementById(selectedId);
	selectedTab.style.display = 'block';

	// color to default all tabs
	var defaultTabs = document.getElementsByClassName('plain-tab');

	// hide all tabs
 	for ( var i=0; i<defaultTabs.length; i++)
    {
      defaultTabs[i].style.background = 'darkgrey';
    }

	// color selected tab
	tabBtn.style.background = '#ebebeb';
}

