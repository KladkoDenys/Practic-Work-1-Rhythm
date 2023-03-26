document.addEventListener('DOMContentLoaded', ()=>{ 

	const logo = document.querySelector('.menu-row__top-logo');
//--Обновлення сторінки при натиску на лого
	logo.addEventListener('click',()=>{
		location.reload()
	})


//--Доданання ховерів на меню
	const hederMenuLinkCollections = document.querySelector('#menu__link-collectons'),
			hederMenuLinkSupprot = document.querySelector('#menu__link-support'),
			hederMenuLinkStore = document.querySelector('#menu__link-store'),
			hederMenuLinkAll = document.querySelectorAll('.text__menu__link'),
			storeBlock = document.querySelector('.main__store'),
			collectionsBlock = document.querySelector('.main__categories'),
			footerBlock = document.querySelector('.footer');

	hederMenuLinkCollections.addEventListener('click',(e)=>{
		e.preventDefault();
		collectionsBlock.scrollIntoView();
	})

	hederMenuLinkSupprot.addEventListener('click',(e)=>{
		e.preventDefault();
		footerBlock.scrollIntoView();
	})

	hederMenuLinkStore.addEventListener('click',(e)=>{
		e.preventDefault();
		storeBlock.scrollIntoView();
	})

	
	for (const node of hededMenuLinkAll) {
		node.addEventListener('mouseenter',(e) =>{
			
		})
	}

//--










})