(function(){

var showTabs = function(a){
	var div = a.parentNode.parentNode.parentNode
	var li = a.parentNode

	if (li.classList.contains('active')) {
		return false
	}

	div.querySelector('.tabs .active').classList.remove('active')
	li.classList.add('active')

	div.querySelector('.tab-content.active').classList.remove('active')

	div.querySelector(a.getAttribute('href')).classList.add('active')
}


let tabs = document.querySelectorAll('.tabs a')

for(let i = 0; i < tabs.length; i++){
	tabs[i].addEventListener('click', function(e){
		showTabs(this)
	})
}

var hash = window.location.hash
var a = document.querySelector('a[href="'+hash+'"]')
if (a !== null && !a.classList.contains('active')){
	showTabs(a)
}
})();