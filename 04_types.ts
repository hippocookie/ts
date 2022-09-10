// object表示一个js对象

let a: object;

a = {}
a = function () {

};

// {} 用来指定对象中可以包含哪些属性
// 语法：{属性名：属性值}
// ? 表示属性可选
let b: { name: string, age?: number };
b = { name: "abc" };

// [propName: string]: any 表示任意类型的属性
let c: { name: string, [propName: string]: any };
c = { name: 'def', age: 18, gender: 'male' };

// d是一个函数，两个参数是number，返回也是number
let d: (a: number, b: number) => number

d = function (n1: number, n2: number): number {
    return n1 + n2;
}

let e: string[];
e = ['a', 'b', 'c'];

let f: number[];

// 元组，固定长度的数组，类型和长度都需与定义一致
let h: [string, number];
h = ['hello', 123];

// enum枚举
enum Gender {
    Male = 0, Female = 1
}
let i: { name: string, gender: Gender }
i = {
    name: 'abc',
    gender: Gender.Male
}

// & 表示同时满足, j既有name，也有age
let j: { name: string } & { age: number };
j = { name: 'abc', age: 18 }

// 类型的别名, 给string起个别名叫myType
type myType = 1 | 2 | 3 | 4 | 5;
let k: 1 | 2 | 3 | 4 | 5;
let l: 1 | 2 | 3 | 4 | 5;
let m: myType;



