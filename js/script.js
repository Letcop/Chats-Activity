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
let typing = true;
animatioForTypingIndicator(typing,"Timur");



/***********Анимация перехода между пользователями**********/
	/*************Элементы пользователя которые отображаються в правом верхнем углу мессенджера**********/
	let currentUserElements = 
	{
		name: document.querySelector('.user__name'),
		nick: document.querySelector('.user__nick'),
		last__seen: document.querySelector('.tabsDate')
	}
	/****************************************************************************************************/

	function animationWidthChangingContent(elem)
	{
		elem.classList.add('hide__animation');
		setTimeout(()=>{elem.classList.remove('hide__animation')},200)
	}





	let messageplace = document.querySelectorAll('.message__place');
	let companions__list = document.querySelectorAll('.companions__list');
	let tab = document.querySelector('.tabs');

	let companions = document.querySelectorAll('.companion');
	let activeCompanion = 'active__companion';
	let animationMessagePlace = 'animationForMessageBlock';
	let messagepblock = document.querySelectorAll('.messages__block');
	let currentCompanionElements = 
	{
		name: document.querySelectorAll('.name'),
		nick: document.querySelectorAll('.nick'),
		msgPart: document.querySelectorAll('.message__part'),
		time: document.querySelectorAll('.time'),
		gotMsg: document.querySelectorAll('.messages__number')
	}

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

			currentUserElements.name.innerText = currentCompanionElements.name[i].innerText;
			currentUserElements.nick.innerText = currentCompanionElements.nick[i].innerText;
			messagepblock[activeTabIndex].classList.add('hide__animation');
			setTimeout(()=>{messagepblock[activeTabIndex].classList.remove('hide__animation')},300)

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
			companions__list[activeTabIndex].style.display ='none';
			tab.style.display = 'none';
			messageplace[activeTabIndex].style.display = 'block';
			mobCategories.style.display = 'none';
			companionsList__subheader.style.display = 'none';
			messenger__subheader.style.display = 'block';
			});
		}
		messenger__subheader.onclick = function(){
			companions__list[activeTabIndex].style.display ='block';
			tab.style.display = 'block';
			messageplace[activeTabIndex].style.display = 'none';
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











	let dedlineText = document.querySelectorAll('.dedline__text');

	if(dedlineText[0] != undefined)
	{
		if(document.body.clientWidth <= 820)
		{
			dedlineText[0].innerText = 'до:';
			dedlineText[1].innerText = 'до:';
		}
	}


	let payBtn = document.querySelectorAll('.pay__btn');
	let confirmBtn = document.querySelector('.confirmBtn');
	let payed = false;
	let paymentStatusText =  document.querySelectorAll('.pay__status');
	let sendForCheck = document.querySelector('.sendProject')
	let payConfirmation = false;
	
	for(let i=0; i<payBtn.length; i++)
	{
		payBtn[i].addEventListener('click',()=>{
			payed=true;
			if(payed == true)
			{
				let j;
				for (j in paymentStatusText)
				{
					paymentStatusText[j].innerText = 'Зарезервирован';
				}
				let n=0;
				for(;n<payBtn.length;n++)
				{
					payBtn[n].style.display = 'none';
				}
				confirmBtn.style.display = 'flex';
				sendForCheck.style.display = 'flex';


			}

		});
	}

	let cover = document.querySelector('.cover');
	let closeConfirmPopup =document.querySelector('.closeConfirmationPopup');
	let confirmationBtnNO = document.querySelector('.confirmationBtnNO')
	confirmationBtnNO.addEventListener('click',()=>{
		confirmationBtnNO.style.backgroundColor = 'rgba(0,0,0,0)';
		confirmationBtnNO.style.color = '#12114a';
	})

	closeConfirmPopup.addEventListener('click',()=>
	{
		confirmationPopup.popup.style.display = 'none';
		cover.style.display = 'none';

	})
	
	let confirmationPopup = {
		popup: document.querySelector('.confirmation__popup'),
		confirmationText: document.querySelector('.confirmationText'),
		btnYes: document.querySelector('.confirmationBtnYes'),
		btnNo: document.querySelector('.confirmationBtnNo')
	}



	let customerSide =document.querySelector('.customer__side');
	let getPaymentBtn = document.querySelector('.getPayment');
	if(confirmBtn!=null || confirmBtn!= undefined)
	{
		confirmBtn.addEventListener('click',()=>{
		payConfirmation = true;
		for (j in paymentStatusText)
		{
			paymentStatusText[j].innerText = 'Отправлен';
		}
		confirmationPopup.popup.style.display = 'block';
		cover.style.display = 'block';



		getPaymentBtn.style.display = 'flex';
		customerSide.style.justifyContent ='center';
	})	
	}




	/***************Popup*******/
	let addFriend = document.querySelectorAll('.add');
	let friendsPopUp = 
	{
		modal: document.querySelector('.add__friend'),
		FriendcloseBtn: document.querySelectorAll('.closeFriendPopup'),
		friend: document.querySelectorAll('.friend')
	}

	let k=0; 
	for(;k<addFriend.length;k++)
	{
		addFriend[k].addEventListener('click',()=>{cover.style.display = 'block';friendsPopUp.modal.style.display = 'flex'})
	}
	friendsPopUp.FrinedcloseBtn.addEventListener('click',()=>{cover.style.display = 'none';friendsPopUp.modal.style.display = 'none'})
	cover.addEventListener('click',()=>{cover.style.display = 'none';friendsPopUp.modal.style.display = 'none'})
	/***************Popup*******/




})







	
