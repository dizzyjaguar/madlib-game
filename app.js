function revealMadLib() {
    //word 1
    const inputAdjective1 = document.getElementById('input-adjective1');
    const outputAdjective1 = inputAdjective1.value;
    const adjective1 = document.getElementById('adjective1');
    adjective1.textContent = outputAdjective1;
    //word 2 
    const inputFantasySpecies1 = document.getElementById('input-species1');
    const outputFantasySpecies1 = inputFantasySpecies1.value;
    const fantasySpecies1 = document.getElementById('fantasySpecies1');
    fantasySpecies1.textContent = outputFantasySpecies1;
    //word 3
    const inputAdjective2 = document.getElementById('input-adjective2');
    const outputAdjective2 = inputAdjective2.value;
    const adjective2 = document.getElementById('adjective2');
    adjective2.textContent = outputAdjective2;
    //word 4
    const inputPastTenseVerb1 = document.getElementById('input-past-tense-verb1');
    const outputPastTenseVerb1 = inputPastTenseVerb1.value;
    const pastTenseVerb1 = document.getElementById('pastTenseVerb1');
    pastTenseVerb1.textContent = outputPastTenseVerb1;
    //word 5
    const inputNaturalMaterial1 = document.getElementById('input-natural-material1');
    const outputNaturalMaterial1 = inputNaturalMaterial1.value;
    const naturalMaterial1 = document.getElementById('naturalMaterial1');
    naturalMaterial1.textContent = outputNaturalMaterial1;
    //word 6
    const inputNaturalMaterial2 = document.getElementById('input-natural-material2');
    const outputNaturalMaterial2 = inputNaturalMaterial2.value;
    const naturalMaterial2 = document.getElementById('naturalMaterial2');
    naturalMaterial2.textContent = outputNaturalMaterial2;
    //word 7
    const inputMarijuanaStrain1 = document.getElementById('input-marijuana-strain-1');
    const outputMarijuanaStrain1 = inputMarijuanaStrain1.value;
    const weedStrain1 = document.getElementById('weedStrain1');
    weedStrain1.textContent = outputMarijuanaStrain1;
    //word 8
    const inputAdjective3 = document.getElementById('input-adjective3');
    const outputAdjective3 = inputAdjective3.value;
    const adjective3 = document.getElementById('adjective3');
    adjective3.textContent = outputAdjective3;
    //word 9
    const inputFamousPerson1 = document.getElementById('input-name-of-famous-person');
    const outputFamousPerson1 = inputFamousPerson1.value;
    const famousPerson = document.getElementById('famousPerson');
    famousPerson.textContent = outputFamousPerson1;
    //word 10
    const inputFantasyCountry = document.getElementById('input-fantasy-country');
    const outputFantasyCountry = inputFantasyCountry.value;
    const fantasyCountry = document.getElementById('fantasyCountry');
    fantasyCountry.textContent = outputFantasyCountry;

    
}



//get the Element Id of the button and add an Event Listener for when
// the user clicks the fucntion revealMadlib triggers
document.getElementById("display-madlib").addEventListener("click", revealMadLib);