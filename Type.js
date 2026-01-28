class Type {
    constructor(typeName, immune, resist, weakTo){
        this.immune = immune ?? [];
        this.resist = resist ?? [];
        this.weakTo = weakTo ?? [];
        this.name = typeName;
    }

    toString() {
        return "Type: " + this.name + "\nImmune:[" + this.immune + "]\nResist:[" + this.resist  + "]\nWeak:[" + this.weakTo +"]";
    }

    // static getWeakTo(typeName){
    //    return Type.typeList.filter((type) => type.weakTo.includes(typeName));
    // }

    
    
    static defaultTypeList = [
        new Type(
            "Normal",
            ["Ghost"],
            [],
            ["Fighting"]
        ),
        new Type(
            "Fire",
            [],
            ["Fire","Grass","Ice","Steel"],
            ["Water","Ground","Rock"]
        ),
        new Type(
            "Water",
            [],
            ["Fire","Water","Steel"],
            ["Grass","Electric",]
        ),
        new Type(
            "Grass",
            [],
            ["Water","Grass","Electric"],
            ["Fire","Ice","Poison","Flying","Bug"]
        ),
        new Type(
            "Electic",
            [],
            ["Electric","Flying","Steel"],
            ["Ground"]
        ),
        new Type(
            "Ice",
            [],
            ["Ice"],
            ["Fire","Fighting","Rock","Steel"]
        ),
        new Type(
            "Fighting",
            [],
            ["Ice"],
            ["Flying","Psychic","Fairy"]
        ),
        new Type(
            "Poison",
            [],
            ["Grass","Fighting","Poison","Bug","Fairy"],
            ["Ground","Psychic"]
        ),
        new Type(
            "Ground",
            ["Electric"],
            ["Poison","Rock"],
            ["Water","Grass","Ice"]
        ),
        new Type(
            "Flying",
            ["Ground"],
            ["Grass","Fighting","Bug"],
            ["Electric","Ice","Rock"]
        ),
        new Type(
            "Psychic",
            [],
            ["Fighting","Psychic"],
            ["Bug","Ghost","Dark"]
        ),
        new Type(
            "Bug",
            [],
            ["Grass","Fighting","Ground"],
            ["Fire","Flying","Rock"]
        ),
        new Type(
            "Rock",
            [],
            ["Normal","Fire","Poison","Flying"],
            ["Water","Grass","Fighting","Ground","Steel"]
        ),
        new Type(
            "Ghost",
            ["Normal","Fighting"],
            ["Poison","Bug"],
            ["Ghost","Dark"]
        ),
        new Type(
            "Dragon",
            [],
            ["Fire","Water","Grass","Electric"],
            ["Ice","Dragon","Fairy"]
        ),
        new Type(
            "Dark",
            [],
            ["Ghost","Dark"],
            ["Fighting","Bug","Fairy"]
        ),
        new Type(
            "Steel",
            ["Poison"],
            ["Normal","Grass","Ice","Flying","Psychic","Bug","Rock","Dragon","Steel","Fairy"],
            ["Fire","Fighting","Ground"]
        ),
        new Type(
            "Fairy",
            ["Dragon"],
            ["Fighting","Bug","Dark"],
            ["Poison","Steel"]
        ),
    ];
}