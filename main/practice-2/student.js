const Person = require('./person');

module.exports = class Student extends Person{
    constructor(name, age, clazz){
        super(name, age);
        this.clazz = clazz;
    }

    introduce(){
        let str = super.introduce() + " I am a Student.";
        if(this.clazz.leader == this){
            return str + " I am Leader of Class "+this.clazz.number+".";
        }else{
            return str + " I am at Class "+this.clazz.number+".";;
        }
    }
}