const UserInput = document.getElementById("Searcher");
const BasePokeURL = "https://pokeapi.co/api/v2/pokemon/"

UserInput.addEventListener('keypress', function(e){
    if(e.key === "Enter"){
        const SearcherURL = BasePokeURL + UserInput.value.toLowerCase();
        fetch(SearcherURL)
            .then(response => response.json())
            .then(allData => {
                const AllDataPick = allData;

                if(SearcherURL != BasePokeURL){
                    PokeContainer.innerHTML = `
                    <div>
                        <div><img src=${AllDataPick.sprites.front_default}></div>
                        <div><h2>${AllDataPick.name.charAt(0).toUpperCase() + AllDataPick.name.slice(1)}</h2></div>
                    </div>
                    `;
                    console.log(SearcherURL);
                    document.getElementById("basePokeContainer").style.justifyContent = "flex-start"
                    document.getElementById("basePokeContainer").style.backgroundColor = "transparent"
                    document.getElementById("LateralInfoBar").style.display = "block"
                    fetchPokeDetails(AllDataPick.id, AllDataPick.name);
                    PokeStats(AllDataPick.id);
                    PokeType(AllDataPick.id);
                }else{
                    PokeContainer.innerHTML = '';
                    
                    ManagePokemonCards(baseUrl);
                }  
                
        })
    }
})
