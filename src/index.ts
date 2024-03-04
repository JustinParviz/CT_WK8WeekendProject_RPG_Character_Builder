//internal imports
import { Race, WarriorType, WeaponType} from './types';
import { Character, CharacterManager } from './rpg_characters';


let characterForm = document.getElementById('characterForm') as HTMLFormElement;

const characterManager = new CharacterManager()

characterForm.addEventListener('submit', (event) => {
    event.preventDefault(); //Prevents the default behavior for our event
    
    
    // Grabbing all of our form data
    // whole html page is our document object.
    const characterNameInput = document.getElementById('characterName') as HTMLInputElement;
    const descriptionInput = document.getElementById('description') as HTMLInputElement;
    const raceInput = document.getElementById('race') as HTMLInputElement;
    const warriorTypeInput = document.getElementById('warriorType') as HTMLInputElement;
    const weaponInput = document.getElementById('weapon') as HTMLInputElement;


    // grab the values
    let characterName = characterNameInput.value;
    let description = descriptionInput.value;
    let race = raceInput.value;
    let warriorType = warriorTypeInput.value;
    let weaponType = weaponInput.value;

    console.log( characterName, description, race, warriorType, weaponType);

    //Come back & add capabilities to add Tasks & store them to our TaskManager
    const newCharacter = new Character("150 gold", characterName, description, race as Race, warriorType as WarriorType, weaponType as WeaponType);

    characterManager.addCharacter(newCharacter);
    
    characterForm.reset(); 

})



