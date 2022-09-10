// 直接使用字面量进行类型声明
let a: 10;
a = 11;

// 可以使用 | 来连接多个类型(联合类型)
let b: "male" | "female";
b = "male"
b = "female"

let c: boolean | string;
c = true;
c = 'hello';

// any表示的是任意类型，一个变量设置类型为any后相当于对该变量关闭了TS类型检测
// 不建议使用any类型 
//let d;
let d: any;
d = 10;
d = 'hello';
d = true;

// unknown 表示未知类型的值
let e: unknown;
e = 10;
e = 'hello';
e = true;

// d的类型是any，可以复制给任意变量，对应变量也不进行类型检查
let s: string;
s = d;

// unknown赋值给别的值时候，会报错
// unknown是一个安全的any，不能直接复制给其他变量
e = 'hello';
s = e;

// 赋值前进行类型检查
if (typeof e == "string") {
    s = e;
}

// 类型断言，可以用来告诉编译器变量的实际类型
s = e as string;
s = <string>e;

function fn(): boolean {
    if (num > 0) {
        return true;
    }
    return false;
}

// void表示没有返回值
function fn2(): void {
    return null;
}

// never 表示永远不会返回结果
function fn3(): never {
    throw new Error("Fail");
}