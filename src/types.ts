type Race = 'Humans' | 'Orcs' | 'Peons' | 'Elves'

type WarriorType = 'Knight' | 'Archer' | 'Wizard' | 'Warlock'

type WeaponType = 'Sword' | 'Battle Axe' | 'Club' | 'War Hammer' | 'Bow and Arrow' | 'Crossbow' | 'Valyrian Steel Sword' | 'Staff' | 'Wizard Spells' | 'Warlock Magic'

interface Managing<T> {
    addCharacter(param: T):void
    removeCharacter(param: T):void
}

export  {
    Race,
    WarriorType,
    WeaponType,
    Managing
}