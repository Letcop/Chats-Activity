window.addEventListener('load',()=>{

	let categories = document.querySelectorAll('.category');
	let activeCategory = 'active__category';


	for(let i=0; i<categories.length; i++)
	{
		categories[i].addEventListener('click', ()=>{
			for(let j=0; j<categories.length; j++)
			{
				if(categories[j].classList.contains(activeCategory))
				{
					categories[j].classList.remove(activeCategory);
					
				}
			}

			categories[i].classList.add(activeCategory);
		})
	}


	let activeTabIndex = 0;




	let tabItem = document.querySelectorAll('.tabs__item');
	let tabActive = 'active__tab'; 
	let chats = document.querySelectorAll('.chats');
	let general__chats = document.querySelector('.general__chats');
	let friends__chats = document.querySelector('.friends__chats');
	let feedback__chats = document.querySelector('.friends__chats');
	let active_chat = 'active__chat';




	for(let i=0; i<tabItem.length; i++)
	{

		tabItem[i].addEventListener('click',()=>{


			for(let j=0; j<tabItem.length; j++)
			{
				if(tabItem[j].classList.contains(tabActive) && chats[j].classList.contains(active_chat))
				{
					if(j==i){

					}
					else{
						chats[j].classList.remove('display__block');
						chats[j].classList.remove(active_chat);
					}
					
					tabItem[j].classList.remove(tabActive);
					
				}
			}
			chats[i].classList.add('display__block');
			setTimeout(()=>{chats[i].classList.add(active_chat);},300);
			tabItem[i].classList.add(tabActive);
			activeTabIndex = i;
		})
	}



	let messageplace = document.querySelectorAll('.message__place');
	let companions__list = document.querySelectorAll('.companions__list');
	let tab = document.querySelector('.tabs');

	let companions = document.querySelectorAll('.companion');
	let activeCompanion = 'active__companion';
	let animationMessagePlace = 'animationForMessageBlock';
	let messagepblock = document.querySelectorAll('.messages__block');

	for(let i=0; i<companions.length; i++)
	{
		companions[i].addEventListener('click',()=>{
			messagepblock[activeTabIndex].classList.add(animationMessagePlace);

			for(let j=0; j<companions.length; j++)
			{
				if(companions[j].classList.contains(activeCompanion))
				{
					companions[j].classList.remove(activeCompanion);
					
				}
			}
			setTimeout(()=>{messagepblock[activeTabIndex].classList.remove(animationMessagePlace)},300);
			companions[i].classList.add(activeCompanion);
		})
	}



	let companionsList__subheader = document.querySelector('.companionsList__subheader');
	let messenger__subheader = document.querySelector('.messenger__subheader');

	if(document.body.clientWidth <= 560)
	{

		for(let i=0; i<companions.length; i++)
		{
			companions[i].addEventListener('click',()=>{
				
				for(let j=0; j<tabItem.length; j++)
				{
					if(tabItem[j].classList.contains(tabActive))
					{
						activeTabIndex = j;
					}
				}
				

				companions__list[activeTabIndex].classList.add('companions__list_opacity');
				setTimeout(()=>{
					companions__list[activeTabIndex].classList.add('display__none');
					tab.classList.add('display__none');
				},150)
				setTimeout(()=>{messageplace[activeTabIndex].classList.add('display__block');},180);
				setTimeout(()=>{messageplace[activeTabIndex].classList.add('animationMessagePlace');},200)

				mobTabs.classList.add('display__none');
				messenger__subheader.classList.add('display__block');
				companionsList__subheader.classList.add('display__none');



			});
		}

		messenger__subheader.addEventListener('click', ()=>{
			messageplace[activeTabIndex].classList.remove('animationMessagePlace');
			setTimeout(()=>{messageplace[activeTabIndex].classList.remove('display__block');},50);
			
			messageplace[activeTabIndex].classList.remove('animationMessagePlace');
			setTimeout(()=>{messageplace[activeTabIndex].classList.remove('display__block');},50);

			setTimeout(()=>{companions__list[activeTabIndex].classList.remove('display__none');},70);
			tab.classList.remove('display__none');
			companions__list[activeTabIndex].classList.remove('companions__list_opacity');

			
			mobTabs.classList.remove('display__none');
			messenger__subheader.classList.remove('display__block');

			companionsList__subheader.classList.remove('display__none');

		});




		let contract__bar__spans = document.querySelectorAll('.contract__status_bar__text');
		let payemnt__status = document.querySelector('.payment__status__value');
		let payment__btn = document.querySelector('.pay__btn');

		if(payment__btn!=undefined)
		{	
			payment__btn.innerText = 'Оплатить';
			payment__btn.style.width = '100px';

			payemnt__status.style.display = 'none';


			contract__bar__spans[0].innerText = 'до';
			contract__bar__spans[1].style.display = 'none';
			contract__bar__spans[2].style.display = 'none'; 

		}		
	}



	let mobTabs = document.querySelector('.mobile__categories');
	let mobCategory = document.querySelectorAll('.mob__category');
	let mobCategoryChevron = document.querySelector('.categoryChevron');

	mobTabs.addEventListener('click', ()=>{
		if(mobTabs.classList.contains("activeDropdown")){
			mobTabs.classList.remove('activeDropdown');
			mobCategoryChevron.classList.remove('ChevronAnimation');
		}
		else{
			mobCategoryChevron.classList.add('ChevronAnimation');
			mobTabs.classList.add('activeDropdown');
		}
	})


	let mobCategories = document.querySelectorAll('.mob__category');


})







	
