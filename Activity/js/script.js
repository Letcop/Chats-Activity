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






	
