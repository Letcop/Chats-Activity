window.addEventListener('load',()=>{

		let confirmationPopup = {
			popup: document.querySelector('.confirmation__popup'),
			confirmationText: document.querySelector('.confirmationText'),
			btnYes: document.querySelector('.confirmationBtnYes'),
			btnNo: document.querySelector('.confirmationBtnNo')
		}		


		let sendProjectContainer = `<div class="sendProjectConteiner"><a class='btn sendProject'>Отправить Работу Для Предварительного Просмотра</a></div>`;
let filter = function(el)
{
	let isThereForbidenWord = false;
	let text = el.value.split(" ");
	let forbidenWords = ["телега","Тг","тг","Телега","телеграм","Телеграм","Вайб","вайб","Вайбер","вайбер","Вотс","Вотсап","вотсап",,"вотс","ватсап","ватс","Ватсап","тел","Тел","телеге","телеграмме","mail.ru","gmail.com","6ля","6лядь","6лять","b3ъeб","cock","cunt","e6aль","ebal","eblan","eбaл","eбaть","eбyч","eбать","eбёт","eблантий","fuck","fucker","fucking","xyёв","xyй","xyя","xуе","xуй","xую","zaeb","zaebal","zaebali","zaebat","архипиздрит","ахуел","ахуеть","бздение","бздеть","бздех","бздецы","бздит","бздицы","бздло","бзднуть","бздун","бздунья","бздюха","бздюшка","бздюшко","бля","блябу","блябуду","бляд","бляди","блядина","блядище","блядки","блядовать","блядство","блядун","блядуны","блядунья","блядь","блядюга","блять","вафел","вафлёр","взъебка","взьебка","взьебывать","въеб","въебался","въебенн","въебусь","въебывать","выблядок","выблядыш","выеб","выебать","выебен","выебнулся","выебон","выебываться","выпердеть","высраться","выссаться","вьебен","гавно","гавнюк","гавнючка","гамно","гандон","гнид","гнида","гниды","говенка","говенный","говешка","говназия","говнецо","говнище","говно","говноед","говнолинк","говночист","говнюк","говнюха","говнядина","говняк","говняный","говнять","гондон","доебываться","долбоеб","долбоёб","долбоящер","дрисня","дрист","дристануть","дристать","дристун","дристуха","дрочелло","дрочена","дрочила","дрочилка","дрочистый","дрочить","дрочка","дрочун","е6ал","е6ут","ебтвоюмать","ёбтвоюмать","ёбaн","ебaть","ебyч","ебал","ебало","ебальник","ебан","ебанамать","ебанат","ебаная","ёбаная","ебанический","ебанный","ебанныйврот","ебаное","ебануть","ебануться","ёбаную","ебаный","ебанько","ебарь","ебат","ёбат","ебатория","ебать","ебать-копать","ебаться","ебашить","ебёна","ебет","ебёт","ебец","ебик","ебин","ебись","ебическая","ебки","ебла","еблан","ебливый","еблище","ебло","еблыст","ебля","ёбн","ебнуть","ебнуться","ебня","ебошить","ебская","ебский","ебтвоюмать","ебун","ебут","ебуч","ебуче","ебучее","ебучий","ебучим","ебущ","ебырь","елда","елдак","елдачить","жопа","жопу","заговнять","задрачивать","задристать","задрота","зае6","заё6","заеб","заёб","заеба","заебал","заебанец","заебастая","заебастый","заебать","заебаться","заебашить","заебистое","заёбистое","заебистые","заёбистые","заебистый","заёбистый","заебись","заебошить","заебываться","залуп","залупа","залупаться","залупить","залупиться","замудохаться","запиздячить","засерать","засерун","засеря","засирать","засрун","захуячить","заябестая","злоеб","злоебучая","злоебучее","злоебучий","ибанамат","ибонех","изговнять","изговняться","изъебнуться","ипать","ипаться","ипаццо","Какдвапальцаобоссать","конча","курва","курвятник","лох","лошарa","лошара","лошары","лошок","лярва","малафья","манда","мандавошек","мандавошка","мандавошки","мандей","мандень","мандеть","мандища","мандой","манду","мандюк","минет","минетчик","минетчица","млять","мокрощелка","мокрощёлка","мразь","мудak","мудaк","мудаг","мудак","муде","мудель","мудеть","муди","мудил","мудила","мудистый","мудня","мудоеб","мудозвон","мудоклюй","нахер","нахуй","набздел","набздеть","наговнять","надристать","надрочить","наебать","наебет","наебнуть","наебнуться","наебывать","напиздел","напиздели","напиздело","напиздили","насрать","настопиздить","нахер","нахрен","нахуй","нахуйник","неебет","неебёт","невротебучий","невъебенно","нехира","нехрен","Нехуй","нехуйственно","ниибацо","ниипацца","ниипаццо","ниипет","никуя","нихера","нихуя","обдристаться","обосранец","обосрать","обосцать","обосцаться","обсирать","объебос","обьебатьобьебос","однохуйственно","опездал","опизде","опизденивающе","остоебенить","остопиздеть","отмудохать","отпиздить","отпиздячить","отпороть","отъебись","охуевательский","охуевать","охуевающий","охуел","охуенно","охуеньчик","охуеть","охуительно","охуительный","охуяньчик","охуячивать","охуячить","очкун","падла","падонки","падонок","паскуда","педерас","педик","педрик","педрила","педрилло","педрило","педрилы","пездень","пездит","пездишь","пездо","пездят","пердануть","пердеж","пердение","пердеть","пердильник","перднуть","пёрднуть","пердун","пердунец","пердунина","пердунья","пердуха","пердь","переёбок","пернуть","пёрнуть","пи3д","пи3де","пи3ду","пиzдец","пидар","пидарaс","пидарас","пидарасы","пидары","пидор","пидорасы","пидорка","пидорок","пидоры","пидрас","пизда","пиздануть","пиздануться","пиздарваньчик","пиздато","пиздатое","пиздатый","пизденка","пизденыш","пиздёныш","пиздеть","пиздец","пиздит","пиздить","пиздиться","пиздишь","пиздища","пиздище","пиздобол","пиздоболы","пиздобратия","пиздоватая","пиздоватый","пиздолиз","пиздонутые","пиздорванец","пиздорванка","пиздострадатель","пизду","пиздуй","пиздун","пиздунья","пизды","пиздюга","пиздюк","пиздюлина","пиздюля","пиздят","пиздячить","писбшки","писька","писькострадатель","писюн","писюшка","похуй","похую","подговнять","подонки","подонок","подъебнуть","подъебнуться","поебать","поебень","поёбываает","поскуда","посрать","потаскуха","потаскушка","похер","похерил","похерила","похерили","похеру","похрен","похрену","похуй","похуист","похуистка","похую","придурок","приебаться","припиздень","припизднутый","припиздюлина","пробзделся","проблядь","проеб","проебанка","проебать","промандеть","промудеть","пропизделся","пропиздеть","пропиздячить","раздолбай","разхуячить","разъеб","разъеба","разъебай","разъебать","распиздай","распиздеться","распиздяй","распиздяйство","распроеть","сволота","сволочь","сговнять","секель","серун","серька","сестроеб","сикель","сила","сирать","сирывать","соси","спиздел","спиздеть","спиздил","спиздила","спиздили","спиздит","спиздить","срака","сраку","сраный","сранье","срать","срун","ссака","ссышь","стерва","страхопиздище","сука","суки","суходрочка","сучара","сучий","сучка","сучко","сучонок","сучье","сцание","сцать","сцука","сцуки","сцуконах","сцуль","сцыха","сцышь","съебаться","сыкун","трахае6","трахаеб","трахаёб","трахатель","ублюдок","уебать","уёбища","уебище","уёбище","уебищное","уёбищное","уебк","уебки","уёбки","уебок","уёбок","урюк","усраться","ушлепок","х_у_я_р_а","хyё","хyй","хyйня","хамло","хер","херня","херовато","херовина","херовый","хитровыебанный","хитрожопый","хуeм","хуе","хуё","хуевато","хуёвенький","хуевина","хуево","хуевый","хуёвый","хуек","хуёк","хуел","хуем","хуенч","хуеныш","хуенький","хуеплет","хуеплёт","хуепромышленник","хуерик","хуерыло","хуесос","хуесоска","хуета","хуетень","хуею","хуи","хуй","хуйком","хуйло","хуйня","хуйрик","хуище","хуля","хую","хуюл","хуя","хуяк","хуякать","хуякнуть","хуяра","хуясе","хуячить","целка","чмо","чмошник","чмырь","шалава","шалавой","шараёбиться","шлюха","шлюхой","шлюшка","ябывает"]
	console.log(text);
	for(let i=0; i<text.length; i++)
	{
		for(let j=0; j<forbidenWords.length; j++)
		{	
			if(text[i]==forbidenWords[j])
			{
				isThereForbidenWord = true;
			}
		}
	}
	let temptext = el.value;
	let numbers = ['1','2','3','4','5','6','7','8','9','0','+','-','(',')'];
	let sovpadenie=0;
	let checkWord;
	let counter = 0;
	for(let i=0; i<temptext.length; i++)
	{
		let checkword = [temptext.slice(i,13),temptext.slice(i,12),temptext.slice(i,9),temptext.slice(i,7)]; 
		for(let k=0; k< checkword.length; k++)
		{	
			let checkingWord = checkword[k];
			for(let l=0; l<checkingWord.length; l++)
			{
				for(let j=0; j<numbers.length; j++)
				{	
					if(checkingWord[l]==numbers[j])
					{
						sovpadenie+=1;
					}
				}
			}
			if(sovpadenie==12 || sovpadenie==9 || sovpadenie==13 || sovpadenie==7 || sovpadenie==16 || sovpadenie==17 )
			{
				isThereForbidenWord = true;
			}
		}
	}
	let linkwords = ['@','mail.ru','gmail.com']
	for(let i=0; i< temptext.length; i++)
	{
		for(let l=0; l<linkwords.length; l++)
		{
			if(linkwords[l]==temptext[i])
			{
				isThereForbidenWord = true;
			}
		}
	}
	return isThereForbidenWord;
}




/************Scroll of page***********/	 
let letters = [" ","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","Й","Ц","У","К","Е","Ё","Н","Г","Ш","Щ","З","Х","Ъ","Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э","Я","Ч","С","М","И","Т","Ь","Б","Ю","ё","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","ф","ы","в","а","п","р","о","л","д","ж","э","я","ч","с","м","и","т","ь","б","ю",".",",","?", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
function lettersWidthDefiner(font)
		{
			let letterLength = {};
			for (let letter of letters) {
			  let span = document.createElement('span');
			  span.style.fontSize = font.fsize;
			  span.style.fontFamily = font.ffamily;
			  span.style.fontWeight = font.fweight;
			  span.append(document.createTextNode(letter));
			  span.style.display = "inline-block";
			  document.body.append(span);
			  letterLength[letter] = span.offsetWidth;
			  span.remove();
			}
			return letterLength;
		}
let font = 
{
	ffamily: 'Monserrat',
	fsize: '14px',
	fweight: '600'
}

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
		if(document.querySelector("#all_chats")!=undefined || document.querySelector("#all_chats")!=null)
		{
			document.querySelector("#all_chats").innerText = 'Чаты';
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
		name: document.querySelector('.user__name'),
		nick: document.querySelector('.user__nick'),
		last__seen: document.querySelector('.tabsDate'),
		mobName: document.querySelectorAll('.subheder__title')
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
		gotMsg: document.querySelectorAll('.messages__number'),
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
			
			if(companions[i].classList.contains('company'))
			{

				currentUserElements.mobName[1].innerText = 'Letcop';		
				currentUserElements.name.innerText ='Letcop';

			}
			else{
				currentUserElements.name.innerText = currentCompanionElements.name[i].innerText;
				currentUserElements.nick.innerText = currentCompanionElements.nick[i].innerText;
				currentUserElements.mobName[1].innerText = currentCompanionElements.name[i].innerText;	
			}			
			messagepblock[activeTabIndex].classList.add('hide__animation');
			setTimeout(()=>{messagepblock[activeTabIndex].classList.remove('hide__animation')},300)

		})
	}




	let companionsList__subheader = document.querySelector('.companionsList__subheader');
	let messenger__subheader = document.querySelector('.messenger__subheader');

	if(document.body.clientWidth <= 768)
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
	let confirmPanel = document.querySelector('.confirmation__panel');
	let payed = true;
	let paymentStatusText =  document.querySelectorAll('.pay__status');
	let sendForCheck = document.querySelector('.sendProject')
	let payConfirmation = false;
	let contractConditions = {
		dedline: document.querySelector('#DateInput'),
		price: document.querySelector('#inputPrice')
	}
	if(document.body.clientWidth <= 820 )
	{
		if(contractConditions.dedline!=null)
		{
			function showPayBtn()
			{
				let input= true;
				for(i in contractConditions)
				{
					if(contractConditions[i].value == null || contractConditions[i].value == undefined || contractConditions[i]==" ")
					{input=false;}
				}
				if(input == true)
				{
					payBtn[1].classList.add('display_flex');
				}
				if(input ==false)
				{
					payBtn[1].classList.remove('display_flex');
				}
			}
			contractConditions.dedline.addEventListener('change',showPayBtn);
			contractConditions.price.addEventListener('change',showPayBtn);

		}

	}

	if(contractConditions.price == "" || contractConditions.price==undefined || contractConditions.price== null)
	{
	}
	else
	{
		contractConditions.price.addEventListener('input',function () {
	    if (this.value.length > 6) {
	        this.value = this.value.slice(0,6); 
		    }
		});		
	}
	let contractorsChat = document.querySelector('.contractor__chats_tab');
	
	for(let i=0; i<payBtn.length; i++)
	{
		payBtn[i].addEventListener('click',()=>{
				if(document.body.clientWidth <= 585 && contractConditions.dedline.value != "" && contractConditions.price.value != "" )
				{
					for(let m=0; m<messagepblock.length; m++)
					{
						messagepblock[m].style.maxHeight = 'calc(100vh - 351px)';
					}
				}
			payed=true;
			if(contractConditions.dedline.value=="" || contractConditions.price.value=="" )
			{
				if(contractConditions.dedline.value=="" )
				{
					document.querySelectorAll('.dedline')[1].classList.add('shakeAnimation');
					setTimeout(()=>{document.querySelectorAll('.dedline')[1].classList.remove('shakeAnimation');},700)
				}
				if(contractConditions.price.value=="" )
				{
					document.querySelectorAll('.price')[1].classList.add('shakeAnimation');
					setTimeout(()=>{document.querySelectorAll('.price')[1].classList.remove('shakeAnimation');},700)
				}

			} 
			else
			{
				if(payed == true)
				{
					let j;
					for (j in paymentStatusText)
					{
						paymentStatusText[j].innerText = 'Зарезервирован';
					}
				}
				let n=0;
				for(;n<payBtn.length;n++)
					{
						payBtn[n].classList.remove('display_flex');
					}
				contractorsChat.querySelector('.messages__block').appendChild(confirmPanel);
				confirmPanel.style.display = 'flex';
				sendForCheck.style.display = 'flex';
				messagepblock[0].classList.add('messageBlockDeform');

				contractConditions.dedline.setAttribute("disabled", "disabled");
				contractConditions.price.setAttribute("disabled","disabled");

				}

		});
	}


	let cover = document.querySelector('.cover');
	let closeConfirmPopup =document.querySelector('.closeConfirmationPopup');
	let confirmationBtnNO = document.querySelector('.confirmationBtnNO')

	if(confirmationBtnNO!=undefined || confirmationBtnNO!= null)
	{
		confirmationBtnNO.addEventListener('click',()=>{
			confirmationBtnNO.style.backgroundColor = 'rgba(0,0,0,0)';
			confirmationBtnNO.style.color = '#12114a';
		})

		if(closeConfirmPopup.popup != null)
		{
			closeConfirmPopup.addEventListener('click',()=>
			{
				confirmationPopup.popup.style.display = 'none';
				cover.style.display = 'none';

			})		
		}
		

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

		alert('Hello world');

		getPaymentBtn.classList.add('display_flex');
		customerSide.style.justifyContent ='center';
	})	
	}

	if(payConfirmation==true)
	{
		documnet.querySelector('.customer__chats_tab').querySelector('.messagepblock').appendChild(sendProjectContainer);
	}





	/***************Popup*******/
	let addFriend = document.querySelectorAll('.add');
	let friendsPopUp = 
	{
		modal: document.querySelector('.add__friend'),
		FriendcloseBtn: document.querySelector('.closeFriendPopup'),
		friend: document.querySelectorAll('.friend')
	}

	let k=0; 
	for(;k<addFriend.length;k++)
	{
		addFriend[k].addEventListener('click',()=>{cover.style.display = 'block';friendsPopUp.modal.style.display = 'flex'})
	}
	friendsPopUp.FriendcloseBtn.addEventListener('click',()=>{cover.style.display = 'none';friendsPopUp.modal.style.display = 'none'})
	cover.addEventListener('click',()=>{
			cover.style.display = 'none';
			if(friendsPopUp.modal!= undefined && friendsPopUp.modal!= "" && friendsPopUp.modal!= null)
			{
				friendsPopUp.modal.style.display = 'none';
			}

			if(forbidenWordsModal!= undefined && forbidenWordsModal!= "" && forbidenWordsModal!= null)
			{
				forbidenWordsModal.style.display = 'none';
			}
		})
	/***************Popup*******/



	let msgTextArea = document.querySelectorAll('.input__message__text');
	let msgSendBtn = document.querySelectorAll('.sendMessageBtn');
	
	for(let i=0; i<msgTextArea.length; i++)
	{
		msgTextArea[i].addEventListener('input',()=>
		{
			msgSendBtn[i].classList.remove('grey__color');
		})
		msgTextArea[i].addEventListener('blur',()=>
		{
			if(msgTextArea[i].value	==""){
				msgSendBtn[i].classList.add('grey__color');
			}
		})
		msgSendBtn[i].addEventListener('click',()=>{
			console.log('Нажата кнопка');
			if(filterW(msgTextArea[i]))
			{
				document.querySelector('.cover').style.display = 'block';
				document.querySelector('.forbidenWords').style.display ='block';
			}

		})

	}


	let forbidenWordsModal = document.querySelector('.forbidenWords');
	forbidenWordsModal.querySelector('.closeConfirmationPopup').addEventListener('click',()=>{forbidenWordsModal.style.display='none'; cover.style.display='none'}); 



	/******************Filter**********/


	function lettersWidthDefiner(font)
		{
			let letterLength = {};
			for (let letter of letters) {
			  let span = document.createElement('span');
			  span.style.fontSize = font.fsize;
			  span.style.fontFamily = font.ffamily;
			  span.style.fontWeight = font.fweight;
			  span.append(document.createTextNode(letter));
			  span.style.display = "inline-block";
			  document.body.append(span);
			  letterLength[letter] = span.offsetWidth;
			  span.remove();
			}
			return letterLength;
		}


	function filter(element,font,lastMsg)
	{	
		
		let lettersWidth = lettersWidthDefiner(font);
		let writableWidth = element.clientWidth;
		let tempText = lastMsg.innerText;
		let textWidth = 0;
		let writeTextWidth=0;
		let writeText ='';
		for(let n=0; n<tempText.length; n++)
		{
			for(let letter in lettersWidth)
			{
				if(letter==tempText[n])
				{
					if(tempText[n]==" ")
					{
						textWidth+=3.5;	
					}
					textWidth+=lettersWidth[letter];
				}
			}
		}
		for(let i=0; i<tempText.length; i++)
		{
			for(let l in lettersWidth)
			{
				if(tempText[i]==l)
				{
					if(writeTextWidth>=writableWidth-17){
					}
					else
					{
						if(tempText[i]==" ")
						{
							writeTextWidth+=3.5;	
						}

						writeTextWidth+=lettersWidth[l];
						writeText+=tempText[i];
					}
				}			
			}
		}

		writeText+='...';
		element.innerText = writeText;
	}

	let sendMsgBtn = document.querySelectorAll('.sendMessageBtn');
	let recieved__messages  = document.querySelectorAll('.recieved__messages__text');
	let lastMessage = recieved__messages[recieved__messages.length-1];

	for(let i=0; i<currentCompanionElements.msgPart.length; i++)
	{
			filter(currentCompanionElements.msgPart[i],font,lastMessage);
	}

	/******************Filter**********/



	/**********Input limitation*****/
	let limitInput= function () {
    if (this.value.length > 4) {
        this.value = this.value.slice(0,4); 
	    }
	}


var textarea = document.querySelector('textarea');

textarea.addEventListener('keyup', function(){
  if(this.scrollTop > 0){
    this.style.height = this.scrollHeight + "px";
  }
});


	function file(name,size,type,fileWay){
	let message = document.createElement('div');
	message.classList.add('file__block');
	message.innerHTML = `
                        <div class="file__container">
                            <div class="acted__time"><i class="fas fa-clock"></i> <span class="textTime">18:19</span></div>
                            <div class="file-img-container">
                                <div class="file-img">
                                    <i class="fas fa-file"></i>
                                </div>                              
                            </div>
                            <div class="file-discription">
                                <a class="file-name" href="${fileWay}"><span class='file-name-text'>${name}</span><span>...</span><span class='extention'>${type}</span></a>
                                <div class="props">
                                    <span class="file__size">${size}</span>                                  
                                </div>
                            </div>
                        </div>  					`

							return message;
	}

	let inputFile= document.querySelector('#input__file');
	inputFile.addEventListener('change', ()=>{
        let temp = inputFile.value;
        let tempname = new Array();
        let j = 0;
        let i = temp.length - 1;
        while (i >= 0) {
            if (temp[i] == "\\") {
                break;
            }

            tempname[j] = temp[i];


            i--;
            j++;
        }
        let rightArr = new Array();
        let k = 0;
        let l = tempname.length - 1;
        while (k < tempname.length) {
            rightArr[k] = tempname[l];
            k++;
            l--;

        }
        let name = "";
        let extention ="";
        let dotIndex;
        for(let i=0; i<rightArr.length; i++)
        {
        	if(rightArr[i]=='.')
        	{
        		dotIndex = i;
        	}
        }
        for(let i=0; i<rightArr.length; i++)
        {
        	if(i<dotIndex)
        	{
        		name+=rightArr[i];
        	}
        	else
        	{
        		extention+=rightArr[i];
        	}
        }

    console.log(extention);    
		console.log(activeTabIndex);
		let fileMessage = file(name,'12',extention,'##');
		console.log(fileMessage);
		messagepblock[activeTabIndex].appendChild(fileMessage);

	})


	function closeModal()
	{
		let closeIcons = document.querySelectorAll('.closeIcon');
		let cover = document.querySelectorAll('.cover');
		let modals = document.querySelectorAll('.modal');
		function close(el,modal)
		{
			for(let i=0; i<el.length; i++)
			{
				el[i].addEventListener('click',()=>{
					for(let j=0; j<modal.length; j++)
					{
						modal[j].style.display = 'none';
						modal[j].classList.remove('display_flex');
					}
					cover[0].style.display = 'none';
				})
			}
		}
		close(closeIcons,modals);
		close(cover,modals);

}
closeModal();

let add  = document.querySelector('.add');
let addModal = document.querySelector('.add__friend');
if(add!=null)
{
	add.addEventListener('click',()=>{
		addModal.classList.add('display_flex');
		cover.style.display = 'block';
	})
}





let header__dropDowns = document.querySelectorAll(".header__dropDowns");
let active ='active__header__dropdown';

function widthAnim(el,width)
{
	let temp = el.offsetWidth;
	let timer = setInterval(()=>{
		temp+=10;
		el.style.width = temp+'px';
		console.log(el.offsetWidth);
		if(temp>=width)
		{
			clearInterval(timer);
		}
	},1)

}

function widthAnim1(el,width)
{
	let temp = el.offsetWidth;
	let timer = setInterval(()=>{
		temp-=10;
		el.style.width = temp+'px';
		console.log(el.offsetWidth);
		if(temp<=width)
		{
			clearInterval(timer);
		}
	},1)

}

function dropDown(el,active)
{
	for(let i=1; i<el.length; i++)
	{
		el[i].addEventListener('click',()=>{
			for(let j=0; j<el.length; j++)
			{
				if(i==j)
				{

				}
				else{
					el[j].classList.remove(active);
				}
			}
			if(el[i].classList.contains(active))
			{
				el[i].classList.remove(active);
				if(i==0)
				{
					widthAnim1(el[0],68);
					el[1].style.display = 'flex';	
				}
			}
			else
			{
				el[i].classList.add(active);
				if(i==0)
				{
					widthAnim(el[i],180);
					el[1].style.display = 'none';
				}
			}
			
		})
	}
}

dropDown(header__dropDowns,active);



})