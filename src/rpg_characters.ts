import {v4 as uuidv4} from 'uuid';

//internal imports
import {Managing} from './types'; 
 

export class Character {

    private _id: string;

    constructor(
        protected collectGold$: string, 
        public characterName: string,
        public description: string,
        public race: string,
        public warriorType: string,
        // public weaponsList: Weapon[],
        public weapon: string
    ) {
        this._id = uuidv4()
    }

    get id(): string {
        return this._id
    }
    
    get collectGold():string {
        return this.collectGold$
    }
    
    // public addWeapon(weapon:WeaponType): void {
    //     this.weaponsList.push(weapon);
    // } 

    // public removeWeapon(weaponId: string): void {
    //     const index = this.weaponsList.findIndex( (weapon) => weapon.id === weaponId )

    //     if (index !== -1) {
    //         this.weaponsList.splice(index, 1)
    //     }
    // }

    public stats(): void {
        console.log(`This Character has ${this.collectGold$}`)
    }  
}


export class CharacterManager implements Managing<Character | string> {
    
    public characters: Character[] = []

    public addCharacter(character: Character): void {
        this.characters.push(character);
        this.updateCharacterList();
    }

    public removeCharacter(characterId: string): void {
        const index = this.characters.findIndex( (character) => character.id === characterId)

        if (index !== -1) {
            this.characters.splice(index, 1)
        }

        this.updateCharacterList();
    }

    private updateCharacterList() {
        const container = document.getElementById('characters') as HTMLElement;

        container.innerHTML = "";

        this.characters.forEach( character => {

            const characterCard = `
            
                <div class="card mb-3 rounded">
                    <div class="card-body">
                        <h5 class="card-title">Character Name: ${character.characterName}</h5>
                        <p class="card-text">Description: ${character.description}</p>
                        <p class="card-text">Race: ${character.race}</p>
                        <p class="card-text">Warrior Type: ${character.warriorType}</p>
                        <p class="card-text">Weapon: ${character.weapon}</p>
                        <button type="submit" class="btn btn-danger btn-sm" data-task=${character.id}>Remove</button>
                    </div>
                </div>
            `

            container.insertAdjacentHTML('beforeend', characterCard)

        });

        let allButtons = container.querySelectorAll('.btn-danger')

        allButtons.forEach( button => {
            button.addEventListener('click', () => {
                
                const characterId = button.getAttribute('data-character');
                if (characterId) {
                    this.removeCharacter(characterId);
                }
            })
        })
    }

}


// interface Offense {
//     attack():void
// }

// interface Defense {
//     defense():void
// }



export class Weapon {

    private _id: string;

    constructor(
        public name: string,
        public description: string,
        public damagePoints: number
    ){
        this._id = uuidv4();
    }

    get id(): string {
        return this._id
    }
}



