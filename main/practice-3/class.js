// Write your code here
module.exports = class Class {
    constructor(number){
        this.number = number;
        this.leader = null;
        this.student_list = [];
        this.teacher = null;
    }

    assignTeacher(teacher){
        this.teacher = teacher;
    }

    appendMember(student){
        if(!this.hasStudent(student)){
            if(this.teacher){
                let str = student.name + " has joined Class " + this.number;
                this.teacher.notifyStudentAppended(str);
            }
            this.student_list.push(student);
        }
    }

    assignLeader(student){
        if(this.hasStudent(student)){
            if(this.teacher){
                let str = student.name + " become Leader of Class " + this.number;
                this.teacher.notifyLeaderAssigned(str);
            }
            this.leader = student;
            return "Assign team leader successfully.";
        }else{
            return "It is not one of us.";
        }

    }

    hasStudent(student){
        if(this.student_list.includes(student)){
            return true;
        }else{
            return false;
        }
    }
}