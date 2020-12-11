window.addEventListener('load',()=>{


/************Анимация перехода категорий************/
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
/************Анимация перехода категорий************/


	
/***********Анимация перехода между вкладками**********/
	let activeTabIndex = 0;
	let tabItem = document.querySelectorAll('.tabs__item');
	let tabActive = 'active__tab'; 
	let tabs = document.querySelector('.tabs');



	let chats = document.querySelectorAll('.chats');
	let general__chats = document.querySelector('.general__chats');
	let friends__chats = document.querySelector('.friends__chats');
	let feedback__chats = document.querySelector('.friends__chats');
	let active_chat = 'active__chat';

	if(document.body.clientWidth <=650)
	{
		tabItem[0].querySelector(".tab__title").innerText = 'Чаты';
		if(tabItem[2]!=undefined)
		{
			tabItem[2].querySelector(".tab__title").innerText = 'Под-ка';
		}
	}




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
/***********Анимация перехода между вкладками**********/




let animatioForTypingIndicator = function(typing, name)
{
	let typing__indicator = document.querySelector('.typing__indicator');
	typing__indicator.innerText = `Пишет ${name} `;	
	let i = 0;

	if(typing == true)
	{

		setInterval(()=>{
			typing__indicator.innerText += '.';
			i++;
			if(i==4)
			{
				i=0;
				typing__indicator.innerText = `Пишет ${name} `;	
			}
		},500)
	}
}	
let typing = false;
animatioForTypingIndicator(typing,"Timur");



/***********Анимация перехода между пользователями**********/
	/*************Элементы пользователя которые отображаються в правом верхнем углу мессенджера**********/
	let currentUserElements = 
	{
		name: document.querySelector('#user__name'),
		nick: document.querySelector('.user__nick'),
		last__seen: document.querySelector('.last__seen')
	}
	
	/****************************************************************************************************/




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


	if(document.body.clientWidth <= 768)
	{
		let contract__bar__spans = document.querySelectorAll('.contract__status_bar__text');
		let payemnt__status = document.querySelector('.payment__status__value');
		let payment__btn = document.querySelectorAll('.pay__btn');

		if(payment__btn!=undefined)
		{	
			payment__btn[0].style.display = 'none'



			contract__bar__spans[0].innerText = 'до';
			contract__bar__spans[1].style.display = 'none';
			contract__bar__spans[2].style.display = 'none'; 

		}	
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
			companions__list[activeTabIndex].style.display ='none';
			tab.style.display = 'none';
			messageplace[0].style.display = 'block';
			mobCategories.style.display = 'none';
			companionsList__subheader.style.display = 'none';
			messenger__subheader.style.display = 'block';
			});
		}
		messenger__subheader.onclick = function(){
			companions__list[activeTabIndex].style.display ='block';
			tab.style.display = 'block';
			messageplace[0].style.display = 'none';
			mobCategories.style.display = 'block';
			companionsList__subheader.style.display = 'block';
			messenger__subheader.style.display = 'none';
		}

/***********Анимация перехода между пользователями**********/
	
	}



	let mobCategories = document.querySelector('.mobile__categories');
	let mobCategory = document.querySelectorAll('.mob__category');
	let mobCategoryChevron = document.querySelector('.categoryChevron');

	mobCategories.addEventListener('click', ()=>{
		if(mobCategories.classList.contains("activeDropdown")){
			mobCategories.classList.remove('activeDropdown');
			mobCategoryChevron.classList.remove('ChevronAnimation');
		}
		else{
			mobCategoryChevron.classList.add('ChevronAnimation');
			mobCategories.classList.add('activeDropdown');
		}
	})



})







	
