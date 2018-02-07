
function pokemon (Name, Type, hp, def,atk, legend){
    this.Name = Name;
    this.Type = Type;
    this.hp = hp;
    this.def = def;
    this.atk = atk;
    this.legend = legend;
        everything.push(this.Name,this.Type, this.hp, this.def, this.atk, this.legend)
    
    
    this.attack = function attack(pokemon){
    pokemon.hp -= this.atk;
    return(pokemon.hp)
}  
    this.All = function(pokemon){
        console.log(everything)
            }
        }
        
// for (i=0; i<pokemon.length){
// }
    this.aliveCheck = function(){
        if(this.hp > 0){
            return true
        }
        else{
            return false
        }
    }


        var everything = []
var mew = new pokemon('mew', 'pyschic', 150, 30, 40, true);
var pikachu = new pokemon('pikachu', 'electric', 100, 30, 40, false)
var squirtle = new pokemon('squirtle', 'water', 200, 20, 60, false)
