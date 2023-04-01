document.addEventListener('DOMContentLoaded', ()=>{ 

	const logo = document.querySelector('.menu-row__top-logo');
//--Обновлення сторінки при натиску на лого
	logo.addEventListener('click',(e)=>{
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

	
	// for (const node of hededMenuLinkAll) {
	// 	node.addEventListener('mouseenter',(e) =>{
			
	// 	})
	// }

//-- Дооавання карток в магазині

	class StoreCard {
		constructor (nameGuitar, price, srcImgGuitar, parentSelector){
			this.nameGuitar  = nameGuitar;
			this.price = price; 
			this.srcImgGuitar = srcImgGuitar; 
			this.parent = document.querySelector(parentSelector);
		}

		showCard () {
			const element = document.createElement('div');
			
			element.innerHTML = `
				<div class="store__colums">
					<a href="">
						<img src=${this.srcImgGuitar} alt="">
					</a>
					<a href="">
						${this.nameGuitar}
					</a>
					<p>
						$${this.price}.00
					</p>
				</div>
			`;
			this.parent.append(element);
		}
	}

	new StoreCard(
		'The Essential Les Paul',
		1.299,
		"./img/guitar1.png",
		'.store__row'
	).showCard();

	new StoreCard(
		'J-45 Standard',
		1.699,
		"./img/guitar2.png",
		'.store__row'
	).showCard();

	new StoreCard(
		'Hummingbird Standard',
		2.099,
		"./img/guitar3.png",
		'.store__row'
	).showCard();

	new StoreCard(
		'Active Precision Bass® PH V',
		4.199,
		"./img/guitar4.png",
		'.store__row-2'
	).showCard();

	new StoreCard(
		'Redondo Special',
		2.800,
		"./img/guitar5.png",
		'.store__row-2'
	).showCard();

	new StoreCard(
		'Professional II Stratocaster®',
		3.199,
		"./img/guitar6.png",
		'.store__row-2'
	).showCard();





















})