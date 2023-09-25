// Create class below

// Attributes
class Tamagotchi{
    constructor (name) {
        this.name = name
        this.energy = 9
        this.full = 8
        this.mood = 6
        this.sick = false
        this.rehomed = false
    }

    // greet: Tamagotchi console logs Hello, I'm <name>!
    greet(){
        console.log(`Hello, I'm ${this.name}`)
    }

    // status: Tamogotchi console logs energy, full, mood, and sick values (see below for sample message)
    status(){
        console.log(`********************
My mood is: ${this.mood}
I am full: ${this.full}
My energy is: ${this.energy}
I am ${this.sick ? "" : "not"} sick
        ********************`)
        // console.log(`My energy is: ${this.energy}`)
        // console.log(`I am this full: ${this.full}`)
        // console.log(`My mood is ${this.mood}`)
        // console.log(`I am ${this.sick ? "not": ''} sick`)
    }
    
    // eat: increases fullness by two, decreases energy by 1
    // if eat method makes fullness more than 10, tamagotchi becomes sick (sick = true)
    eat (){
        this.full += 2
        this.energy -=1
        if (this.full > 10){
            this.sick = true
        }
    }

// if tamagotchi is sick - set full to 9 - decrease energy by 3
    medicate(){
        if (this.sick){
            this.full = 9
            this.energy -= 3
            this.sick = false
        }
// if tamagotchi is not sick: console log refusal to take medicine
// reduce energy by 1
        else{
            console.log(`refusal to take medicine`)
            this.energy --;
        }
    }

    // if asked to play when sick, reduce mood and energy by 1
    play (){
        if (this.sick){
            this.mood--
            this.energy--
        }
    // will not play if mood is above 9, reduce energy by 2 and full by 1
        else if (this.mood > 9){
            this.energy -=2
            this.full --
        }
    // will not play if energy is less than or equal to 3
        else if(this.energy <= 3){
    // console log "I am too tired to play" - reduce energy by 1
            console.log("I am too tired to play")
            this.energy -- 
        }
    // increases mood by 2, reduces energy and full by 1,
        else{
            this.mood += 2
            this.energy --
            this.full --
        }
    }

    sleep(){
// increases energy by 4 and decreases full by 3
        this.energy += 4
        this.full -= 3
    }

    timePasses(){
// if tamagotchi is not sick - mood decreases by 2, fullness and energy decrease by 1
        if (!this.sick){
            this.mood -= 2
            this.full --
            this.energy --
        }
        else{
// if tamagotchi is sick - mood decreases by 3, fullness and energy decrease by 2
            this.mood -= 3
            this.full -= 2
            this.energy -=2
        }
    }

    badGuardian(){
// logs a message that the tamagotchi has been rehomed
        console.log(`tamagotchi has been rehomed`)

// if enrgy is less than or equal to 0 set rehomed to true
        if (this.energy <= 0){
            this.rehomed = true
        }
// if mood is less than or equal to 0 set rehomed to true
        if (this.mood <= 0){
            this.rehomed = true
        }
// if full is less than or equal to true set rehomed to true
        if (this.full <= true){
            this.rehomed = true
        }
    }

}

// Do not edit below this line
module.exports = Tamagotchi;
