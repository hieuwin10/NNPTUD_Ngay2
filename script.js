let student = {
    name: "Tung",
    family: "Nguyen",
    age: 18,
    scores: [9, 10, 8],
    birth: {
        year: 2008,
        month: 11,
        day: 1
    },
    getFullName: function () {
        return this.family + " " + this.name;
    },
    getBirthDay: function () {
        return `${this.birth.day}/${this.birth.month}/${this.birth.year}`;
    },
    getAVGScore: function () {
        return this.scores.reduce(function (sum, e) {
            return sum + e;
        }, 0) / this.scores.length;
    }
};

let student2 = {
    name: "Hoa",
    family: "Tran",
    age: 20,
    scores: [8, 7, 9],
    birth: {
        year: 2006,
        month: 5,
        day: 15
    },
    getFullName: function () {
        return this.family + " " + this.name;
    },
    getBirthDay: function () {
        return `${this.birth.day}/${this.birth.month}/${this.birth.year}`;
    },
    getAVGScore: function () {
        return this.scores.reduce(function (sum, e) {
            return sum + e;
        }, 0) / this.scores.length;
    }
};

let student3 = {
    name: "Minh",
    family: "Le",
    age: 19,
    scores: [10, 9, 9],
    birth: {
        year: 2007,
        month: 8,
        day: 20
    },
    getFullName: function () {
        return this.family + " " + this.name;
    },
    getBirthDay: function () {
        return `${this.birth.day}/${this.birth.month}/${this.birth.year}`;
    },
    getAVGScore: function () {
        return this.scores.reduce(function (sum, e) {
            return sum + e;
        }, 0) / this.scores.length;
    }
};

let jsons = '{"name":"Tung","family":"Nguyen","age":18,"scores":[9,10,8],"birth":{"year":2008,"month":11,"day":1}}';
let jsons2 = '{"name":"Hoa","family":"Tran","age":20,"scores":[8,7,9],"birth":{"year":2006,"month":5,"day":15}}';
let jsons3 = '{"name":"Minh","family":"Le","age":19,"scores":[10,9,9],"birth":{"year":2007,"month":8,"day":20}}';

console.log("Student 1 from object:", student.getFullName(), student.getBirthDay(), student.getAVGScore());
console.log("Student 1 from JSON:", JSON.parse(jsons));

console.log("Student 2 from object:", student2.getFullName(), student2.getBirthDay(), student2.getAVGScore());
console.log("Student 2 from JSON:", JSON.parse(jsons2));

console.log("Student 3 from object:", student3.getFullName(), student3.getBirthDay(), student3.getAVGScore());
console.log("Student 3 from JSON:", JSON.parse(jsons3));
