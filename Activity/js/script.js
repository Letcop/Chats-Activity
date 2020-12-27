window.addEventListener('load',()=>{



	let activeTabIndex = 0;




	let tabItem = document.querySelectorAll('.tabs__item');
	let tabActive = 'active__tab'; 
	let activity = document.querySelectorAll('.activity');
	let active__activity = 'active__activity';

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


	for(let i=0; i<tabItem.length; i++)
	{

		tabItem[i].addEventListener('click',()=>{


			for(let j=0; j<tabItem.length; j++)
			{
				if(tabItem[j].classList.contains(tabActive) && activity[j].classList.contains(active__activity))
				{
					if(j==i){

					}
					else{
						activity[j].classList.remove('display__block');
						activity[j].classList.remove(active__activity);
					}
					
					tabItem[j].classList.remove(tabActive);
					
				}
			}
			activity[i].classList.add('display__block');
			setTimeout(()=>{activity[i].classList.add(active__activity);},300);
			tabItem[i].classList.add(tabActive);
			activeTabIndex = i;
		})
	}


})







	
