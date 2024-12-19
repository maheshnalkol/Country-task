const showcard = document.getElementById("showcard");

const newCountries=(display = countries)=>{
    let result=``;
    display.forEach((flag)=>{
        result+=`<div class="col-lg-2 col-md-4 col-sm-6 mb-3">
                <div class="card h-100 shadow-sm">
                    <img src="${flag.flag}" alt="${flag.name}"
                        class="img mb-3" title="${flag.name}">
                    <h3 class="text-center">${flag.name}</h3>
                    <p class="mb-0 px"><span style="font-weight: bold;">Capital:</span>${flag.capital}</p>
                    <p class="mb-0 px"><span style="font-weight: bold;">Languages:</span>${flag.languages}</p>
                    <p class="mb-0 px"><span style="font-weight: bold;">Population:</span>${flag.population}</p>
                </div>
            </div>`
    })
    showcard.innerHTML=result;
}
newCountries();



newCountries();
const country = [...new Set(countries.map((flag)=>{
    return flag
}))]

const searchBar=document.getElementById('searchBar');

const searchEvent=(eve)=>{
    const searchData=eve.target.value.toLowerCase();
    const filterData= country.filter((item)=>{
      return(
        item.name.toLowerCase().includes(searchData) || item.capital && item.capital.toLowerCase().includes(searchData) || item.languages.some(lang=>{
            return lang.toLowerCase().includes(searchData);
        })
        )
    })
    newCountries(filterData)
};
searchBar.addEventListener("keyup",searchEvent);


const sortName= document.getElementById('sortName');

const onclickSortName=(eve)=>{
    
    if(eve.target && eve.target.classList.contains("default")){
        country.sort((a,b)=>{
            return a.name.localeCompare(b.name)
        })
        newCountries(country);
        sortName.classList.remove("default");
        sortName.classList.add("a-z");
    }else if(eve.target && eve.target.classList.contains("a-z")){
        country.sort((a,b)=>{
            return b.name.localeCompare(a.name)
        })
        newCountries(country);
        sortName.classList.remove("a-z")
        sortName.classList.add("z-a")
    }else{
        newCountries();
    }
}

sortName.addEventListener('click',onclickSortName);

const sortCapital= document.getElementById('sortCapital');
const onclickSortCapital=(eve)=>{
    console.log(eve.target);
    
    if(eve.target && eve.target.classList.contains("default")){
        country.sort((a,b)=>{
            if(!a.capital || !b.capital ){
                return 0;
            }
            return a.capital.localeCompare(b.capital);
        })
        newCountries(country);
        sortCapital.classList.remove("default");
        sortCapital.classList.add("a-z");
    }else if(eve.target && eve.target.classList.contains("a-z")){
        country.sort((a,b)=>{
            if(!a.capital || !b.capital ){
                return 0;
            }
            return b.capital.localeCompare(a.capital);
        })
        newCountries(country);
        sortCapital.classList.remove("a-z")
        sortCapital.classList.add("z-a")
    }else{
        newCountries();
    }
}
sortCapital.addEventListener('click',onclickSortCapital);

const sortPopulation= document.getElementById('sortPopulation');

const onclickSortPopulation=(eve)=>{
    console.log(eve.target);
    
    if(eve.target && eve.target.classList.contains("default")){
        country.sort((a,b)=>{
            return a.population - b.population
        })
        newCountries(country);
        sortPopulation.classList.remove("default");
        sortPopulation.classList.add("a-z");
    }else if(eve.target && eve.target.classList.contains("a-z")){
        country.sort((a,b)=>{
            return b.population - a.population
        })
        newCountries(country);
        sortPopulation.classList.remove("a-z")
        sortPopulation.classList.add("z-a")
    }else{
        newCountries();
    }
}
sortPopulation.addEventListener('click',onclickSortPopulation);


