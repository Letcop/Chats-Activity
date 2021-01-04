window.addEventListener('load',()=>{
	
	let isCurrentChatsIsGeneral = false;
	

	let companions = document.querySelectorAll('.companion');
	let modals = document.querySelectorAll('.modal');
	let cover= document.querySelector('.cover');
	let message = 
	{
		textarea: document.querySelectorAll('textarea'),
		sendBtn: document.querySelectorAll('.sendMessageBtn')
	}


	let generalChats =
	{
		all: document.querySelector('.all__chats_tab'),
		support: document.querySelector('.FeedBack__chats_tab')
	}
	var externalMobInterface = 
	{
	tabs: document.querySelector('.tabs'),
	subheader: document.querySelector('.companionsList__subheader'),
	categoriesPanel: document.querySelector('.mobile__categories')
	}
	var internalMobInterface = 
	{
	subheader: document.querySelector('.messenger__subheader')
	}


	if(generalChats.all != null || generalChats.all != undefined)
	{

		isCurrentChatsIsGeneral=true;
		var addChat = document.querySelector('.adding-new-chat'); 
		var tabs = 
		{
			all: document.querySelector('.allChats-js'),
			support: document.querySelector('.supportChats-js')
		}
		var allChats = generalChats.all.querySelector('.messages__block');
		var supportChats = generalChats.support.querySelector('.messages__block');	
		var GenCompanions = 
		{
			all: generalChats.all.querySelector('.companions__list'),
			Support: generalChats.support.querySelector('.companions__list')
		}
		var messagePlace =
		{
			all: generalChats.all.querySelector('.message__place'),
			support: generalChats.support.querySelector('.message__place'),
		}

	}
	else
	{

		var workTabs = 
		{
			customer: document.querySelector('.customers-js'),
			contractor: document.querySelector('.contractors-js')
		} 
		var workChats = 
		{
			customer: document.querySelector('.customer__chats_tab'),
			contractor: document.querySelector('.contractor__chats_tab')			
		}
		var WoCompanions = 
		{
			customer: workChats.customer.querySelector('.companions__list'),
			contractor: workChats.contractor.querySelector('.companions__list') 
		}
		var payment = 
		{
			status: false,
			btn: workChats.contractor.querySelectorAll('.pay__btn'),
			price: {
							block: workChats.contractor.querySelector('.price'), 
							text: workChats.contractor.querySelector('.price__text'),
							inputBlock: workChats.contractor.querySelector('.price__input'),
							input: workChats.contractor.querySelector('#inputPrice')
						},
			dedline: {
								text: workChats.contractor.querySelector('.dedline__text'),
								block: workChats.contractor.querySelector('.dedline'),
								input: workChats.contractor.querySelector('.dedline__input')
							},
		}


	}





	function editContract(el)
	{
		el.addEventListener('click',()=>{
			payment.price.input.removeAttribute('disabled');
			payment.dedline.input.removeAttribute('disabled');
			if(window.screen.width>820)
				{
					payment.btn[0].style.display = 'flex';
				}
		})
	}



	function fromExternToIntern(messagePlace,external,internal,anchor,compList)
	{
		for(let i=0; i<anchor.length; i++)
		{
			anchor[i].addEventListener('click',()=>{
				compList.style.display = 'none';
				external.subheader.style.display ='none';
				external.tabs.style.display = 'none';
				external.categoriesPanel.style.display ='none';
				internal.subheader.style.display = 'flex';
				messagePlace.style.display = 'block';
				document.querySelector('body').style.overflow = 'hidden';
			})
		}
		internal.subheader.addEventListener('click',()=>{
				compList.style.display = 'block';
				external.subheader.style.display ='flex';
				external.tabs.style.display = 'block';
				external.categoriesPanel.style.display ='block';
				internal.subheader.style.display = 'none';
				messagePlace.style.display = 'none';
				document.querySelector('body').style.overflow = 'scroll';
		})
	}






	function disactiveForObjects(elements,active,currentElement)
	{
		for(let el in elements)
		{
			if(elements[el].classList.contains(active))
			{
				if(el == currentElement)
				{

				}
				else
				{
					elements[el].classList.remove(active);
				}
			}
		}
	}
	function disactiveForArrays(el,active,currentIndex)
	{
		for(let i=0; i<el.length; i++)
		{
			if(el[i].classList.contains(active))
			{
				if(i==currentIndex)
				{

				}
				else
				{
					el[i].classList.remove(active);
				}
			}
		}
	}
	function switchTabs(chats,tabs,activeChat,activeTab)
	{
		for(let tab in tabs)
		{
			tabs[tab].addEventListener('click',()=>{
				disactiveForObjects(tabs,activeTab,tab);
				disactiveForObjects(chats,activeChat,tab)
				if(tabs[tab].classList.contains(activeTab) && chats[tab].classList.contains(activeChat))
				{
				}
				else
				{
					tabs[tab].classList.add(activeTab);
					chats[tab].classList.add(activeChat);
				}
			})
		}

	}
	function switchCompanions(el,active)
	{
		for(let i=0; i<el.length; i++)
		{
			el[i].addEventListener('click',()=>{
				disactiveForArrays(el,active,i);
				el[i].classList.add(active);
			})
		}
	}

	function keyModalShow(activator,modal)
	{
			let cover = document.querySelector('.cover');
			activator.addEventListener('click',()=>{
				cover.classList.add('display__block');
				modal.classList.add('display__flex');
			})
	}
	function modalShow(modal)
	{
		cover.classList.add('display__block');
		modal.classList.add('display__flex');
	}
	function hideModal()
	{
		let modals = document.querySelectorAll('.modal');
		let cover =document.querySelector('.cover');
		for(let i=0; i<modals.length; i++)
		{
			modals[i].classList.remove('display__flex');
			cover.classList.remove('display__block');
		}
	}
	function standartHideTriggers()
	{
		for(let i=0; i<modals.length; i++)
		{
			modals[i].querySelector('.closeIcon').addEventListener('click',hideModal);
		}
		cover.addEventListener('click',hideModal);
	}
	function filter(el)
	{
		let isThereForbidenWord = false;
		let text = el.value.split(" ");
		let forbidenWords = ["телега","Тг","тг","Телега","телеграм","Телеграм","Вайб","вайб","Вайбер","вайбер","Вотс","Вотсап","вотсап","вотс","ватсап","ватс","Ватсап","тел","Тел","телеге","телеграмме","телегу","фейсбук","vk","vkontakte","facebook","вконтакте","Вконтакте","ВКонтакте","mail.ru","gmail.com","6ля","6лядь","6лять","b3ъeб","cock","cunt","e6aль","ebal","eblan","eбaл","eбaть","eбyч","eбать","eбёт","eблантий","fuck","fucker","fucking","xyёв","xyй","xyя","xуе","xуй","xую","zaeb","zaebal","zaebali","zaebat","архипиздрит","ахуел","ахуеть","бздение","бздеть","бздех","бздецы","бздит","бздицы","бздло","бзднуть","бздун","бздунья","бздюха","бздюшка","бздюшко","бля","блябу","блябуду","бляд","бляди","блядина","блядище","блядки","блядовать","блядство","блядун","блядуны","блядунья","блядь","блядюга","блять","вафел","вафлёр","взъебка","взьебка","взьебывать","въеб","въебался","въебенн","въебусь","въебывать","выблядок","выблядыш","выеб","выебать","выебен","выебнулся","выебон","выебываться","выпердеть","высраться","выссаться","вьебен","гавно","гавнюк","гавнючка","гамно","гандон","гнид","гнида","гниды","говенка","говенный","говешка","говназия","говнецо","говнище","говно","говноед","говнолинк","говночист","говнюк","говнюха","говнядина","говняк","говняный","говнять","гондон","доебываться","долбоеб","долбоёб","долбоящер","дрисня","дрист","дристануть","дристать","дристун","дристуха","дрочелло","дрочена","дрочила","дрочилка","дрочистый","дрочить","дрочка","дрочун","е6ал","е6ут","ебтвоюмать","ёбтвоюмать","ёбaн","ебaть","ебyч","ебал","ебало","ебальник","ебан","ебанамать","ебанат","ебаная","ёбаная","ебанический","ебанный","ебанныйврот","ебаное","ебануть","ебануться","ёбаную","ебаный","ебанько","ебарь","ебат","ёбат","ебатория","ебать","ебать-копать","ебаться","ебашить","ебёна","ебет","ебёт","ебец","ебик","ебин","ебись","ебическая","ебки","ебла","еблан","ебливый","еблище","ебло","еблыст","ебля","ёбн","ебнуть","ебнуться","ебня","ебошить","ебская","ебский","ебтвоюмать","ебун","ебут","ебуч","ебуче","ебучее","ебучий","ебучим","ебущ","ебырь","елда","елдак","елдачить","жопа","жопу","заговнять","задрачивать","задристать","задрота","зае6","заё6","заеб","заёб","заеба","заебал","заебанец","заебастая","заебастый","заебать","заебаться","заебашить","заебистое","заёбистое","заебистые","заёбистые","заебистый","заёбистый","заебись","заебошить","заебываться","залуп","залупа","залупаться","залупить","залупиться","замудохаться","запиздячить","засерать","засерун","засеря","засирать","засрун","захуячить","заябестая","злоеб","злоебучая","злоебучее","злоебучий","ибанамат","ибонех","изговнять","изговняться","изъебнуться","ипать","ипаться","ипаццо","Какдвапальцаобоссать","конча","курва","курвятник","лох","лошарa","лошара","лошары","лошок","лярва","малафья","манда","мандавошек","мандавошка","мандавошки","мандей","мандень","мандеть","мандища","мандой","манду","мандюк","минет","минетчик","минетчица","млять","мокрощелка","мокрощёлка","мразь","мудak","мудaк","мудаг","мудак","муде","мудель","мудеть","муди","мудил","мудила","мудистый","мудня","мудоеб","мудозвон","мудоклюй","нахер","нахуй","набздел","набздеть","наговнять","надристать","надрочить","наебать","наебет","наебнуть","наебнуться","наебывать","напиздел","напиздели","напиздело","напиздили","насрать","настопиздить","нахер","нахрен","нахуй","нахуйник","неебет","неебёт","невротебучий","невъебенно","нехира","нехрен","Нехуй","нехуйственно","ниибацо","ниипацца","ниипаццо","ниипет","никуя","нихера","нихуя","обдристаться","обосранец","обосрать","обосцать","обосцаться","обсирать","объебос","обьебатьобьебос","однохуйственно","опездал","опизде","опизденивающе","остоебенить","остопиздеть","отмудохать","отпиздить","отпиздячить","отпороть","отъебись","охуевательский","охуевать","охуевающий","охуел","охуенно","охуеньчик","охуеть","охуительно","охуительный","охуяньчик","охуячивать","охуячить","очкун","падла","падонки","падонок","паскуда","педерас","педик","педрик","педрила","педрилло","педрило","педрилы","пездень","пездит","пездишь","пездо","пездят","пердануть","пердеж","пердение","пердеть","пердильник","перднуть","пёрднуть","пердун","пердунец","пердунина","пердунья","пердуха","пердь","переёбок","пернуть","пёрнуть","пи3д","пи3де","пи3ду","пиzдец","пидар","пидарaс","пидарас","пидарасы","пидары","пидор","пидорасы","пидорка","пидорок","пидоры","пидрас","пизда","пиздануть","пиздануться","пиздарваньчик","пиздато","пиздатое","пиздатый","пизденка","пизденыш","пиздёныш","пиздеть","пиздец","пиздит","пиздить","пиздиться","пиздишь","пиздища","пиздище","пиздобол","пиздоболы","пиздобратия","пиздоватая","пиздоватый","пиздолиз","пиздонутые","пиздорванец","пиздорванка","пиздострадатель","пизду","пиздуй","пиздун","пиздунья","пизды","пиздюга","пиздюк","пиздюлина","пиздюля","пиздят","пиздячить","писбшки","писька","писькострадатель","писюн","писюшка","похуй","похую","подговнять","подонки","подонок","подъебнуть","подъебнуться","поебать","поебень","поёбываает","поскуда","посрать","потаскуха","потаскушка","похер","похерил","похерила","похерили","похеру","похрен","похрену","похуй","похуист","похуистка","похую","придурок","приебаться","припиздень","припизднутый","припиздюлина","пробзделся","проблядь","проеб","проебанка","проебать","промандеть","промудеть","пропизделся","пропиздеть","пропиздячить","раздолбай","разхуячить","разъеб","разъеба","разъебай","разъебать","распиздай","распиздеться","распиздяй","распиздяйство","распроеть","сволота","сволочь","сговнять","секель","серун","серька","сестроеб","сикель","сила","сирать","сирывать","соси","спиздел","спиздеть","спиздил","спиздила","спиздили","спиздит","спиздить","срака","сраку","сраный","сранье","срать","срун","ссака","ссышь","стерва","страхопиздище","сука","суки","суходрочка","сучара","сучий","сучка","сучко","сучонок","сучье","сцание","сцать","сцука","сцуки","сцуконах","сцуль","сцыха","сцышь","съебаться","сыкун","трахае6","трахаеб","трахаёб","трахатель","ублюдок","уебать","уёбища","уебище","уёбище","уебищное","уёбищное","уебк","уебки","уёбки","уебок","уёбок","урюк","усраться","ушлепок","х_у_я_р_а","хyё","хyй","хyйня","хамло","хер","херня","херовато","херовина","херовый","хитровыебанный","хитрожопый","хуeм","хуе","хуё","хуевато","хуёвенький","хуевина","хуево","хуевый","хуёвый","хуек","хуёк","хуел","хуем","хуенч","хуеныш","хуенький","хуеплет","хуеплёт","хуепромышленник","хуерик","хуерыло","хуесос","хуесоска","хуета","хуетень","хуею","хуи","хуй","хуйком","хуйло","хуйня","хуйрик","хуище","хуля","хую","хуюл","хуя","хуяк","хуякать","хуякнуть","хуяра","хуясе","хуячить","целка","чмо","чмошник","чмырь","шалава","шалавой","шараёбиться","шлюха","шлюхой","шлюшка","ябывает"]
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
	function checkingInput()
	{
		for(let i=0; i< message.textarea.length; i++)
		{
			message.sendBtn[i].addEventListener('click',()=>{
				if(filter(message.textarea[i]))
				{
					modalShow(document.querySelector('.forbidenWords'));
				}
			})	
		}
	}
	function switchBtnColor(activator,btn,color)
	{
		activator.addEventListener('keydown',()=>{
			btn.classList.remove(color);
		})
		activator.addEventListener('blur',()=>{
			if(activator.value=='')
			{
				btn.classList.add(color);
			}
		})
	}
	function swicthSendBtnColor()
	{
		for(let i=0; i<message.textarea.length; i++)
		{
			switchBtnColor(message.textarea[i],message.sendBtn[i],'grey__color');
		}
	}
	function createMessage(text,)
	{
		let date = new Date();
		let hours = addzero(String(date.getHours()));
		let minutes =addzero(String(date.getMinutes()));
		function addzero(number)
		{
			if(number.length == 1)
			{
				let temp ='0';
					temp+= number;
			}
			return number;
		}

		let messageTamplate = 
		`					
								<div class="acted__time"><i class="fas fa-clock"></i> <span class="textTime">${hours}:${minutes}</span></div>
								<div class="sended__messages__text">
									${text}
								</div>
								<div class="double__symbol">
									<div class="checked__symbol">
										<i class="fas fa-check up"></i>
										<i class="fas fa-check down"></i>
									</div> 
								</div>
							`
		let message = document.createElement('div');
		message.classList.add('sended__messages');
		message.classList.add('message');
		message.innerHTML = messageTamplate;
		return message;
	}
	function sendMessage(messageblock,sender,textarea)
	{

		for(let i=0; i<sender.length; i++)
		{
			sender[i].addEventListener('click',()=>{
				if(filter(textarea))
				{

				}
				else
				{
					messageblock.appendChild(createMessage(textarea.value));
					textarea.value ="";
					messageblock.scrollTop = messageblock.scrollHeight;
				}
			})
		}
	}
	function createFileTamplate(name,size,type,fileWay){
		let messageTemp = document.createElement('div');
		let date = new Date();
		messageTemp.classList.add('file__block');
		messageTemp.innerHTML = `
	                        <div class="file__container">
	                            <div class="acted__time"><i class="fas fa-clock"></i> <span class="textTime">${date.getHours()}:${date.getMinutes()}</span></div>
	                            <div class="double__symbol">
																<div class="checked__symbol">
																	<i class="fas fa-check up"></i>
																	<i class="fas fa-check down"></i>
																</div> 
															</div>
	                            <div class="file-img-container">
	                                <div class="file-img">
	                                    <i class="fas fa-file"></i>
	                                </div>                              
	                            </div>
	                            <div class="file-discription">
	                                <a class="file-name" href="${fileWay}"><span class='file-name-text'>${name}</span><span style='margin-left: 3px'>...</span><span class='extention'>${type}</span></a>
	                                <div class="props">
	                                    <span class="file__size">${size}</span>                                  
	                                </div>
	                            </div>
	                        </div>  					`

		return messageTemp;
	}
	function defineFile(inputFile)
	{
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

		let fileMessage = createFileTamplate(name,'12',extention,'##');
		return fileMessage;		
	}
	function sendFiles(fileInput,messagesBlock)
	{

		for(let i=0; i<fileInput.length; i++)
		{
			fileInput[i].addEventListener('change',()=>{
				console.log("input:"+fileInput[i].id);
				console.log("file:"+fileInput[i].value);
				let fileHtml =  defineFile(fileInput[i]);
				messagesBlock.appendChild(fileHtml);
				messagesBlock.scrollTop = messagesBlock.scrollHeight;

			})
		}
	}
	function periodAnimation(animation,el)
	{
		if(el.status == false)
		{
  		el.price.block.classList.add(animation);
  		el.dedline.block.classList.add(animation);
  		setTimeout(()=>{
  			el.price.block.classList.remove(animation);
  			el.dedline.block.classList.remove(animation);
  		},300)
		}	
	}
	function checkInputs(el)
	{

		function parseDate(string)
		{
			let date = 
			{
				year: "",month:"",day:""
			}
			let j=0;
			for(let i=0; i<string.length; i++)
			{
				if(string[i]=="-")
				{
					j++;
				}
				else
				{
					if(j==0)
						{date.year+= string[i]}
					if(j==1)
						{date.month+= string[i]}
					if(j==2)
						{date.day +=string[i]}
				}
			}
			for(let k in date)
			{
				date.k = Number(date.k);
			}
			return date;
		}
		let money = Number(el.price.input.value);
		console.log(money);
		let date = parseDate(el.dedline.input.value);

		if(el.price.input.value =="" || el.dedline.input.value =="" || date.year<2021 ||  date.year>2030 || money==0)
		{
			console.log("not filled");
			el.status = false;	
		}
		else
		{
			el.status = true;
		}
		console.log(el.status)
		return el.status;
	}

	function createElement(elClass,htmlPart,element)
	{
		let el = document.createElement(element);
		el.classList.add(elClass);
		el.innerHTML = htmlPart;
		return el;
	}
	function triggerBtn(status)
	{
		if(status)
		{
			let sendWorkForCheckPannel = createElement('send_for_check','<a href="##" class="btn sendForCheck">Отправить работу</a>','div');
			workChats.customer.querySelector('.customers__chat__block').appendChild(sendWorkForCheckPannel);
			showCheckResult(document.querySelector('.contractors__chat__block'));
		}
	}

	function fromAtoBanimation(el,pos,adding,interval,decrase)
	{
		if(decrase)
		{
			tempHeight = el.offsetHeight;
			let add = adding;
			let heightAdder = setInterval(()=>{
			tempHeight+=add;
			el.style.height = tempHeight + 'px';
			console.log(tempHeight);
			if(tempHeight>=pos){clearInterval(heightAdder)}
			},interval)		
		}
		else
		{
			tempHeight = el.offsetHeight;
			let add = adding;
			let heightAdder = setInterval(()=>{
			tempHeight-=add;
			el.style.height = tempHeight + 'px';
			console.log(tempHeight);
			if(tempHeight<=pos){clearInterval(heightAdder)}
			},interval)
		}
	}
	function subHeaderAnimation(el,active,additionalEL = false,additinalClass = false)
	{
		el.addEventListener('click',()=>{
			if(el.classList.contains(active))
			{
				el.classList.remove(active);
				if(additionalEL==false || additinalClass==false)
				{

				}
				else
				{
					additionalEL.classList.remove(additinalClass);
				}
			}
			else
			{
				el.classList.add(active);
				if(additionalEL==false || additinalClass==false)
				{

				}
				else
				{
					additionalEL.classList.add(additinalClass);
				}
			}
			
			// if(el.clientHeight>=60)
			// {
			// 	document.querySelector('.categoryChevron').classList.remove('chevronAnimation');
			// 	fromAtoBanimation(el,28,25,1,false);
			// }
			// else
			// {
			// 	document.querySelector('.categoryChevron').classList.add('chevronAnimation');
			// 	fromAtoBanimation(el,60,25,1,true);
			// }
		})
	}
	function payBtn(el)
	{
		for(let i=0; i<el.btn.length; i++)
		{
			el.btn[i].addEventListener('click',()=>{
				el.status = checkInputs(el);
				periodAnimation("shakeAnimation",el);
				triggerBtn(el.status);
				if(el.status)
				{
					el.btn[i].style.display = 'none';
					document.querySelector('.editContract').classList.add('display__flex')
					workChats.customer.querySelector('#date').innerText = payment.dedline.input.value;
					workChats.customer.querySelector('#price__text').innerText =  payment.price.input.value;
					document.querySelector('.payment__status__value').innerText = 'Зарезервирован';
					document.querySelector('.pay__status').innerText =  'Зарезервирован';
					payment.price.input.setAttribute('disabled','disabled');
					payment.dedline.input.setAttribute('disabled','disabled');
				}
			})			
		}
	}

	function showCheckResult(block)
	{
		let showCheckResult = createElement('checing__result',`<div class="title">Работа выполнена?</div>
							<div class="btns">
								<a href="##" class="btn done">выполнено</a>
								<a href="##" class="btn notDone red--btn">не выполнено</a>
							</div>`,'div');
		let btn = document.querySelector('.sendForCheck');
		let request = 0;
		btn.addEventListener('click',()=>{
			document.querySelector('.send_for_check').remove();
			block.appendChild(showCheckResult);
			keyModalShow(document.querySelector('.done'),document.querySelector('.transaction-confirm'));
			workChats.customer.querySelector('.customers__chat__block').appendChild(createElement('TikTokSymbol',`<a href="#" class="btn"><i class="fas fa-check"></i></a>`,'div'));
		})
	}
	function triggerGetPayment(el,elToShow,block)
	{
			el.addEventListener('click',()=>{
				elToShow.style.display = 'flex';
				hideModal();
				block.appendChild(elToShow);
			})
	}
	function limit()
	{
		let element = payment.price.input; 
	 	let max_chars = 6;

	 if(element.value.length > max_chars) {
	     element.value = element.value.substr(0, max_chars);
	 }
	}

	function defineUserSubheader(comps,subheader)
	{
		for(let i=0; i<comps.length; i++)
		{
			comps[i].addEventListener('click',()=>{
				subheader.querySelector('.subheder__title').innerText = comps[i].querySelector('.name').innerText;
			})
		}		
	}
	function userTyping(el,name,typing)
	{
		let dots = "";
		let i = 0;
		if(typing)
		{
			let timer = setInterval(()=>{
				dots +='.';
				el.innerText = `Пишет ${name}`+dots;
				i++;
				if(i==3)
				{
					i=0;
					dots="";
				}
			},300)
		}
	}

	function checkScreen(elements)
	{
		let element;
		if(window.screen.width<=820)
		{
			element =  elements[1]; 
		}
		else
		{
			element = elements[0]
		}
		return element;
	}

	function showBtnMob()
	{
		payment.dedline.input.addEventListener('change',()=>{
			if(checkInputs(payment))
			{
				document.querySelector('.mobPayBtn').style.display = 'flex';
			}
			else
			{
				document.querySelector('.mobPayBtn').style.display = 'none';
				periodAnimation("shakeAnimation",payment);

			}

		})
		payment.price.input.addEventListener('change',()=>
		{
			if(checkInputs(payment))
			{
				document.querySelector('.mobPayBtn').style.display = 'flex';
			}
			else
			{
			}
		})

	}
	function triggering(el,className)
	{
		el.addEventListener('click',()=>{
			if(el.classList.contains(className))
			{
				el.classList.remove(className);
			}
			else
			{
				el.classList.add(className);
			}
		})
	}






	if(isCurrentChatsIsGeneral)
	{
		userTyping(document.querySelector('.typing__indicator'),'Тимур',true);
		sendFiles(generalChats.all.querySelectorAll('.allChatsFileInput'),document.querySelector('.all__chats__block'));
		sendFiles(generalChats.support.querySelectorAll('.supportChatsFileInput'),document.querySelector('.support__chats__block'));
		defineUserSubheader(generalChats.all.querySelectorAll('.companion'),internalMobInterface.subheader);
		defineUserSubheader(generalChats.support.querySelectorAll('.companion'),internalMobInterface.subheader);

		sendMessage(generalChats.all.querySelector('.messages__block'),generalChats.all.querySelectorAll('.sendMessageBtn'),checkScreen(generalChats.all.querySelectorAll('textarea')));
		sendMessage(generalChats.support.querySelector('.messages__block'),generalChats.support.querySelectorAll('.sendMessageBtn'),checkScreen(generalChats.support.querySelectorAll('textarea')));
		swicthSendBtnColor();
		checkingInput();
		standartHideTriggers();
		switchTabs(generalChats,tabs,'active__chat','active__tab');
		switchCompanions(companions,'active__companion');
		keyModalShow(document.querySelector('.add'),addChat);
	}
	else
	{
		defineUserSubheader(workChats.customer.querySelectorAll('.companion'),internalMobInterface.subheader);
		defineUserSubheader(workChats.contractor.querySelectorAll('.companion'),internalMobInterface.subheader);
		
		payBtn(payment);
		switchTabs(workChats,workTabs,'active__chat','active__tab');
		switchCompanions(companions,'active__companion');
		checkingInput();
		standartHideTriggers();
		swicthSendBtnColor();
		sendMessage(workChats.customer.querySelector('.messages__block'),workChats.customer.querySelectorAll('.sendMessageBtn'),checkScreen(workChats.customer.querySelectorAll('textarea')));
		sendMessage(workChats.contractor.querySelector('.messages__block'),workChats.contractor.querySelectorAll('.sendMessageBtn'),checkScreen(workChats.contractor.querySelectorAll('textarea')));
		
		
		sendFiles(workChats.customer.querySelectorAll('.customersFileInput'),document.querySelector('.customers__chat__block'));
		sendFiles(workChats.contractor.querySelectorAll('.contractorFileInput'),document.querySelector('.contractors__chat__block'));
		triggerGetPayment(document.querySelector('.confirmBtn'),createElement('getPayment',`<a href="#" class="btn">Получить платеж</a>`,'div'),document.querySelector('.customers__chat__block'));
		payment.price.input.addEventListener('keydown',limit)
		editContract(document.querySelector('.editContract'));
	}


	if(window.screen.width<821)
	{
		if(isCurrentChatsIsGeneral){

		}
		else
		{
			showBtnMob();
		}
	}
	if(window.screen.width<768)
	{
	if(isCurrentChatsIsGeneral)
	{


		fromExternToIntern(generalChats.all.querySelector('.message__place'),externalMobInterface,internalMobInterface,generalChats.all.querySelectorAll('.companion'),generalChats.all.querySelector('.companions__list'));
		fromExternToIntern(generalChats.support.querySelector('.message__place'),externalMobInterface,internalMobInterface,generalChats.support.querySelectorAll('.companion'),generalChats.support.querySelector('.companions__list'));
	}
	else
	{
		fromExternToIntern(workChats.customer.querySelector('.message__place'),externalMobInterface,internalMobInterface,workChats.customer.querySelectorAll('.companion'),workChats.customer.querySelector('.companions__list'));
		fromExternToIntern(workChats.contractor.querySelector('.message__place'),externalMobInterface,internalMobInterface,workChats.contractor.querySelectorAll('.companion'),workChats.contractor.querySelector('.companions__list'));

	}
	subHeaderAnimation(document.querySelector('.mobile__categories'),'mobile__categories__active',document.querySelector('.categoryChevron'),'chevronAnimation');
	}
	triggering(document.querySelector('.yesho'),'active__yesho')
















})