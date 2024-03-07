let input = document.getElementById("pokeName");
let submit = document.getElementById("submit");
let imgDiv = document.getElementById("image");

submit.onclick = async () => {
    const inputVal = input.value;

    try{

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputVal}`);

        if(!response.ok){
            throw new Error("something went wrong");
        }

        const jsonData = await response.json();

        console.log(jsonData);

        imgDiv.innerHTML = `<img src = "${jsonData.sprites.front_default}" id="pokeImg" alt="${inputVal}'s image">`

    }
    catch(error){
        console.error(error);
    }

}
