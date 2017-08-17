const Person = require('./person');

module.exports = class Teacher extends Person{
    constructor(name, age, classes){
        super(name, age);
        this.clazzes = classes;
    }

    introduce(){
        if(this.clazzes.length > 0){
            return super.introduce() + " I am a Teacher. I teach Class "+this.clazzes.map( x => x.number).join()+"."
        }else{
            return super.introduce() + " I am a Teacher. I teach No Class."
        }
    }

}