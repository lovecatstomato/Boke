# C++基础

常量：被定义的量不可以被更改

#define 变量名 7 #define 称为宏常量,定义在入口函数外方便调用

const int 变量名 = 12 const 称为修饰变量,定义在函数内

## 数据类型

数据类型存在的意义：
给变量分配合适的内存空间

数据类型的区别是占用的内存空间不同

> 整型

    short(短整型) 2字节 32767
    int(整型) 4字节
    long(长整型) 4字节
    long long(长长整型) 8字节

> sizeof 关键字

作用：可以统计数据类型所占内存大小
sizeof(数据类型 / 变量)

> 浮点型

默认情况下输出一个小数，会显示出 6 位有效数字

单精度 float 变量名 = 3.14f;

双精度 double 变量名 = 3.14;

    float 4字节 7位有效数字
    double 8字节 15-16位有效数字

> 字符型

不可以使用双引号
只能用一个字符

对应的是 ASCII 编码
a-97、
A-65 等等

作用：字符型变量用于显示单个字符

char 变量名 = '字符'

    char 1字节

cout << (int)变量名 << endl 可以查看变量的 ASCII 吗

> 转义字符

作用：用于表示一些不能显示出来的 ASCII 字符

这样才可以输出换行：
cout << "hello world\n";

这样才可以输出特殊符号：
cout << "\\" << endl;

可以整齐的输出数据：

cout << "aaaa\thelloworld" << endl;

cout << "aaaa\thelloworld" << endl;

cout << "aaaa\thelloworld" << endl;

    \n 换行
    \\ 反斜线字符(特殊符号)
    \t 水平制表

> 字符串型

作用用于表示一个字符串

    两种方式：
    第一种可以直接使用
    char 变量名[] = "字符串值"
    第二种要在头文件映入#include <string>
    string 变量名 = "字符串值"

> 布尔数据类型 bool

作用：布尔数据类型代表真假的值

bool 类型只有两个值

true --- 真（本质为 1）

false --- 假（本质为 0）

> 数据的输入

作用：用于从键盘获取数据

cin >> 变量

    int a = 0;
    cout << "请输入赋值" << endl;
    cin >> a;
    cout << "赋值的整型a="<< a << endl;

布尔类型比较特殊非零的值都会输出 1

## 运算符

执行代码的运算

    算术运算符
    赋值运算符
    比较运算符
    逻辑运算符

> 算术运算符
> 处理四则运算

    + 加法 cout << a + a << endl;
    - 减法 cout << a - a << endl;
    * 乘法 cout << a * a << endl;
    / 除法 cout << a / a << endl; (两个整数相除结果是整数)
    % 取模 cout << a % a << endl; (取模就是取余数,小数不可以进行取模运算)
    ++ 前置递增 (先加在进行表达式运算)
    ++ 后置递增 (先表达式运算在进行加)
    -- 前置递减 (先减在进行表达式运算)
    -- 后置递减 (先表达式运算在进行减)

> 赋值运算符
> 用于将表达式的值赋给变量

    = 赋值
    += 加等于
    -= 减等于
    *= 乘等于
    /= 除等于
    %= 模等于

    int a = 10;
    a += 2
    cout << a << endl;
    a = 12

> 比较运算符
> 用于表达式的比较，并返回一个真值或假值

    == 相等于
    != 不等于
    <  小于
    >  大于
    <= 小于等于
    >= 大于等于

> 逻辑运算符
> 用于根据表达式的值返回真值或假值

    !  非 (a为假，!a为真) (a为真，!a为假)
    (除了0都为真)
    && 与 a与b都为真才为真，否则为假
    || 或 a与b有一个为真才为真，二者为假才为假

## 程序流程结构

顺序结构、选择结构、循环结构

> 选择结构

    多条件if判断
    if(){

    }else if(){

    }...else{

    }

    嵌套if判断
    if(){
        if(){

        }else if(){

        }else{

        }
    }else if(){

    }else{

    }

> 三只小猪体重

    #include <iostream>
    using namespace std;

    int main() {
        int a;
        int b;
        int c;
        cout << "请输入第一只小猪体重" << endl;
        cin >> a;
        cout << "请输入第二只小猪体重" << endl;
        cin >> b;
        cout << "请输入第三只小猪体重" << endl;
        cin >> c;
        cout << "第一只小猪体重" << a << endl;
        cout << "第二只小猪体重" << b << endl;
        cout << "第三只小猪体重" << c << endl;
        if (a > b)
        {
            if (a > c) {
                cout << "第一只小猪体重最重" << endl;
            }
            else //c
            {
                cout << "第三只小猪体重最重" << endl;
            }
        }
        else //b重
        {
            if (b > c) //b
            {
                cout << "第二只小猪体重最重" << endl;
            }
            else //c
            {
                cout << "第三只小猪体重最重" << endl;
            }
        }
    }

> 三目运算符
> 通过三目运算符实现简单的判断

(表达式 1?表达式 2:表达式 3) = a

如果表达式 1 值为真，执行表达式 2，并返回表达式 2 的值

如果表达式 1 值为假，执行表达式 3，并返回表达式 3 的值

> switch 语句
> 执行多条件分支语句

    cout << "请选择你要的难度" << endl;
    cout << "1.你要选择的普通难度" << endl;
    cout << "2.你要选择的中等难度" << endl;
    cout << "3.你要选择的困难难度" << endl;

    int a;
    cin >> a;
    switch (a)
    {
    case 1:
    	cout << "你要选择的普通难度" << endl;
    	break;
    case 2:
    	cout << "你要选择的中等难度" << endl;
    	break;
    case 3:
    	cout << "你要选择的困难难度" << endl;
    	break;
    default:
    	break;
    }

### 循环结构

满足循环条件，执行循环语句

> while(循环条件)(循环语句)

    while (mun < 10){
        cout << << endl;
        num++;
    }

> 猜数字小游戏

    #include <iostream>
    using namespace std;
    #include <ctime>

    int main() {
        //猜数字
        // 添加随机数种子
        //先随机一个自然数
        //随机种子是根据本地时间进行随机，现在的版本不需要引入ctime时间库,以前的需要。
        srand((unsigned int)time(NULL));
        int a = rand() % 100 + 1;
        cout << a << endl;
        //让玩家猜
        int wangjia;
        cout << "请输入你要猜的数字" << endl;

        //判断玩家猜的对不对
        while (1)
        {
            cin >> wangjia;
            if (wangjia > a)
            {
                cout << "猜大了" << endl;

            }
            else if (wangjia < a)
            {
                cout << "猜小了" << endl;
            }
            else
            {
                cout << "你猜对了" << endl;
                break;
            }
        }
    }

> do....while
> 满足循环条件，执行循环语句
> do{循环语句} while(循环条件);

    int num = 1;

    do{
        cout << num << endl;
        num++;
    } while (num < 10);

> for
> 满足循环条件，执行循环语句
> for(起始表达式;条件表达式;末尾循环体){循环语句}

    for(int i = 0 ; i < 10 ; i++){
        cout << i << endl;
    }

敲桌子：

    #include <iostream>
    using namespace std;

    int main() {
        //敲桌子
        //先循环一个1到100的循环数
        //1-100中有7的就输出敲桌子
        for (int i = 1; i <= 100; i++)
        {
            if ( i % 7 == 0 || i % 10 == 7 || i / 10 == 7 )
            {
                cout << "敲桌子" << endl;
            }
            else
            {
                cout << i << endl;
            }
        }
        //
    }

> 嵌套循环

    for (int i = 0; i < 10; i++)
    {
    	//endl是结束换行
    	for (int a = 0; a < 10; a++)
    	{
    		cout << "* ";
    	}
    	cout << endl;
    }

> 跳转语句
> break
> 退出循环

    cout << "请选择你要的难度" << endl;
    cout << "1.你要选择的普通难度" << endl;
    cout << "2.你要选择的中等难度" << endl;
    cout << "3.你要选择的困难难度" << endl;

    int a;
    cin >> a;
    switch (a)
    {
    case 1:
    	cout << "你要选择的普通难度" << endl;
    	break;
    case 2:
    	cout << "你要选择的中等难度" << endl;
    	break;
    case 3:
    	cout << "你要选择的困难难度" << endl;
    	break;
    default:
    	break;
    }

continue
循环语句中，跳过本次循环中余下尚未执行的语句，继续执行下一次循环

可以筛选条件

    for (int i = 1; i < 100; i++)
    {
    	if (i % 2 == 0)
    	{
    		continue;
    	}
    	cout << i << endl;
    }

goto
可以无条件的跳转我们的代码

goto 标记;

## 数组

> 一维数组

    数据类型 数组名[ 数组长度 ];
    数据类型 数组名[ 数组长度 ] = {数值,数值.....};
    数据类型 数组名[ ] = {数值,数值.....};

## 函数

函数的定义：将一段经常使用的代码封装起来，减少重复的代码。

    1.返回值类型
    2.函数名
    3.参数表列
    4.函数体语句
    5.return表达式
    int add(int num1,int num2){
        int num1+num2=sum;
        return sum;
    }

> 函数的调用
> 使用定义好的函数
> 不需要返回值可以使用 void 进行声明

    //定义一个函数
    int buxvyao(int num1,int num2){
        int dingying = num1;
        num1 = num2
        num2 = dingying

    }

    int main(){
        int a = 10;
        int b = 20;
        //函数的调用
        int c = buxvyao(a,b);
        cout<< c << endl;
    }

什么是实参
有实际的参数就是实参
什么是形参
没有真实的数据就是形参

> 值传递
> 形参不会影响实参

> 函数的常见样式 1.无参无返

    void test(){
        cout<< "" << endl;
    }

2.有参无返

    void test(int a){
        cout << "" << endl;
    }

3.无参有返

    void test(){
        cout << "" << endl;
        return 1000;
    }

    int main(){
        int st = test();
        cout << "" << st << endl;
    }

4.有参有返

    void test(int a){
        cout << "" << endl;
        return a;
    }

    int main(){
        int st = test(1000);
        cout << "" << st << endl;
    }

> 函数的声明
> 作用: 提前告诉编译器函数的存在
> 声明可以有多次,定义只能有一次

    <!-- 提前声明 -->
    int add(int num1,int num2);

    int main(){
        int a = 10;
        int b = 20;
        //函数的调用
        int c = buxvyao(a,b);
        cout<< c << endl;
    }

    //定义一个函数
    int add(int num1,int num2){
        int num1+num2=sum;
        return sum;
    }

> 函数分文件编写 1.在头文件中创建一个.h 后缀的文件 2.在源文件中创建一个.cpp 后缀的文件 3.在头文件中

    写一个函数声明
    头文件都要写上

4.在源文件中
写一个函数的定义
在源文件中头文件要定义
#include "刚刚创建的.h 后缀的文件"
怎么使用
在想用的这个函数定义就在
头文件中使用:  
 #include "刚刚创建的.h 后缀的文件"

## 指针

> 什么是指针

    通过指针间接访问内存

    int main(){
        <!-- 定义一个指针 -->
        int a = 10;//

        //指针的语法 数据类型 * 变量名;
        int * p;

        <!-- 指针赋值 -->
        p = &a //指针指向a变量的地址

        <!-- 怎么使用指针 -->
        // 在要使用的变量前使用*
        <!-- *p =  -->

    }

> 指针占的内存空间
> 在 32 位操作系统下：占用 4 个字节
> 在 64 位操作系统下：占用 8 个字节

> 空指针和野指针
>
> > 什么是空指针

    指针变量指向内存中编号为0的空间

空指针就是初始化指针变量
// 没有指向的时候就要初始化
int \* p = NULL;
空指针指向的内存是不可以访问的,0 - 255 之间的内存编号是系统占用的的我们访问是被禁止的

> > 什么是野指针

    指针变量指向非法的内存空间

> const 修饰指针
> 1.const 修饰指针: 常量指针

    int a = 1;
    int b = 2;
    const int * p = &a;
    指针指向的值不可以修改，指针的指向可以修改
    *p = 20 错误不可以修改
    p = &b 正确可以修改

2.const 修饰常量: 指针常量
int * const p = &a;
指针指向不可以修改，指针指向的值可以修改
*p = 20 正确可以修改
p = &b 错误不可以修改

3.const 即修饰指针，又修饰常量
const int * const p = &a;  
 指针指向和指针指向的值都不可以修改
*p = 20 错误不可以修改
p = &b 错误不可以修改

> 指针和数组
> 作用：利用指针访问数组中的元素

    int arr[10] = {1,2,3,4,5,6,7,8,9,10};
    // 访问的是数组中的第一个元素
    int * p = arr;
    // 要想访问第二个元素就直接偏移4个字节就可以了
    p++;

    //要想访问数组中的每一个元素直接使用for循环就可以了
    for (int i = 0;i<10;i++){
        cout << *p << endl;
        p++;
    }

> 指针和函数
> 函数中又值传递和地址传递

    值传递中不可以修改实参的
    地址传递时可以修改实参的

    //地址传递函数
    void swp(int * p1,int * p2){
        //这样就可以将实参的值进行转换
        int tem = *p1;
        *p1 = *p2;
        *p2 = tem;
    }
    int main(){
        int a = 10;
        int b = 20;
        swp(&a,&b)
    }

> 指针数组函数

    // 排序函数
    void swp(int * arr,int len){
        for(int i = 0;i < len - 1;i++){
            for(int j = 0;j < len - i - 1;j++){
                if (arr[j] > arr[j+1]){
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }
    // 打印排序后的数组
    void prin(int * arr,int len){
        for(int i=0;i<len;i++){
            cout << arr[i] << endl;
        }
    }

    int main(){
        int arr[10] = {3,1,2,6,5,4,9,7,8,10};
        int len = sizeof(arr) / sizeof(arr[0]);
        swp(arr, len);
        prin(arr, len);
    }

## 结构体

什么是结构体
用户自己定义数据类型，允许用户储存不同的数据类型

> 结构体定义和使用
> 语法：struct 结构体名{结构体成员列表}

    <!-- 结构体也可以称为对象 -->
    struct student{
        <!-- 姓名 -->
        string name;
        <!-- 年龄 -->
        int age;
        <!-- 分数 -->
        int score;
    }s3;//顺便创建一个结构体变量

    int main(){
        // 方法一：
        // 创建结构体变量
        //在主函数中struct可以不用写
        struct student s1;
        <!-- 属性后面加上一个.就可以访问结构体 -->
        s1.name = '张三'
        <!-- 要使用字符串需要在头文件哪里包含头文件 -->
        <!-- #include<string> 头文件-->

        //方法二：
        //只有x86可以使用
        struct student s2 = {"李氏",19,80};

        //方法三：
        //顺便创建一个结构体变量s3
        s3.name = '张三'
    }

> 结构体数组
> 将自定义的结构体放入到数组中
> 语法：struct 结构体名 数组名[元素个数] = {{},{},{}}

    <!-- 定义一个结构体 -->
    struct student {
        <!-- 姓名 -->
        string name;
        <!-- 年龄 -->
        int age;
        <!-- 分数 -->
        int score;
    }

    int main(){
        student arr[3]={
            {"上的分布",11,100},
            {"设定覅",11,100},
            {"的说法是",11,100}
        }

        for(int i = 0;i<3;i++){
            cout << arr[i].name << endl;
            cout << arr[i].age << endl;
            cout << arr[i].score << endl;
        }
    }

> 结构体指针
> 通过指针访问结构体中的成员属性

    <!-- 定义一个结构体 -->
    struct student {
        <!-- 姓名 -->
        string name;
        <!-- 年龄 -->
        int age;
        <!-- 分数 -->
        int score;
    }

    int main(){
        struct student s2 = {"李氏",19,80};
        student * p = &s2;
        // 指针要通过→访问结构体中的成员属性
        cout << p→name << endl;
    }

> 结构体嵌套结构体

    <!-- 定义学生结构体 -->
    struct student {
        <!-- 姓名 -->
        string name;
        <!-- 年龄 -->
        int age;
        <!-- 分数 -->
        int score;
    }

    <!-- 定义老师结构体 -->
    struct teacher {
        int id; //教师编号
        <!-- 姓名 -->
        string name;
        <!-- 年龄 -->
        int age;
        <!-- 学生结构体 -->
        struct student stu;
    }

    int main(){
        teacher t = {1000,"李氏",19,80};
        // 学生结构体
        t.stu.name = '小王'
    }

> 结构体做函数参数
> 将结构体作为参数向函数中传递

    <!-- 定义学生结构体 -->
    struct student {
        <!-- 姓名 -->
        string name;
        <!-- 年龄 -->
        int age;
        <!-- 分数 -->
        int score;
    }

    // 第一种方法:值传递
    void prin(struct student t){
        //这样就可以使用结构体中的参数了
        //t.name
    }
    // 第二种方法:地址传递
    void prin2(struct student * t){
        //这样就可以使用结构体中的参数了
        //指针需要使用→访问值
        cout << p→name << endl;
    }

    int main(){
        student t = {"李氏",19,80};
        prin(t)
        prin2(&t)
    }

> 结构体中 const 使用

    <!-- 定义学生结构体 -->
    struct student {
        <!-- 姓名 -->
        string name;
        <!-- 年龄 -->
        int age;
        <!-- 分数 -->
        int score;
    }

    // 值传递占用空间太多
    void prin(student s){

    }

    // 地址传递占用空间少，只占用4个字节，不会复制新的副本
    void prin(<!-- const --> student * s){
        // 在student * s中加const就可以防止修改误操作，只读
        // 地址传递是可以修改实参的
        cout << p→name << endl;
    }

    int main(){
        student t = {"李氏",19,80};
        prin(s)
    }

## C++核心编程

1.代码区
在程序运行前，
存放 cpu 的机器指令
共享
只读 2.全局区
在程序运行前，
有全局变量和静态变量
还有常量
只能有操作系统来释放

    // 没有部分的变量在内存中的地址都不一样
    // 全局变量
    int a_a = 10;
    int v_a = 20;

    const int v_a = 20;

    int main(){
        // 局部变量
        int a = 10;
        int v = 20;

        const int v = 20;


        // 静态变量 在普通变量前面加static，属于静态变量
        static int a_k = 10;
        static int a_c = 20;

        //怎么查看他们的地址 十二进制位
        (int)&a_k
        (int)&a_c

        //常量
        //字符串常量
        (int)&"shsdnf"

        //const修饰全局变量，const修饰局部变量
    }

    除了局部变量其他变量的地址都是比较接近的
    常量和变量有点远

3.栈区
在程序运行后，
自动释放，存放函数的参数值，局部变量
注意：不要返回局部变量的地址

    void func(){
        int a = 10; //存放在栈区，栈区的数据在函数执行完后自动释放
        return &a; // 不要返回局部变量的地址
    }

4.堆区
由我们自己分配释放，若不释放，在程序结束是由操作系统回收

    int * func(){
        // 使用new可以创建一个堆区的数据
        int * p = new int(10);
        return p;
    }

不同区域中存放的数据，赋予不同的生命周期

> new 操作符
> new 是在堆区开辟数组
> 使用 delete 进行释放

    int * func(){
        // 使用new可以创建一个堆区的数据
        // new 返回的是，该数据类型的指针
        int * p = new int(10);
        return p;
    }

    void test(){
        int * p = func();
        //释放堆区的数据利用关键字delete
        delete p;//这样就可以释放数据，释放之后不可以访问他了，
    }

    //怎么使用new堆区开辟数组
    void tests(){
        //使用new在堆区开辟一个数组
        int * arr = new int[10];

        //赋值给arrs数组值
        for(int i = 0;i<10;i++){
            arr[i] = i;
        }

        for(int i = 0;i<10;i++){
            cout << arr[i] << endl
        }

        //对数组进行释放一定要加一个[]
        delete[] arr;
    }

    int main(){
        test()
        tests()
    }

## 引用

作用：给变量取别名
语法：数据类型 &别名 = 原名

    int main(){
        int a = 10;
        int &p = a;
        //这样就可以 通过修改b内存就可以修改a内存
        //他们两个的内存都是一样的，都是一个地方
    }

> 引用的注意事项
> 引用必须初始化

    //必须赋值
    int &p = a;

初始化后就不可以修改了

    //必须赋值
    int &p = a;
    //赋值给a别名后就不可以赋值给其他数据别名了
    int &p = b; // 非法的操作

> 引用做函数参数
> 利用引用的技术让形参修饰实参
> 地址传递形参可以修饰实参
> 值传递形参不可以修饰实参

    //引用传递
    void yingr(int &a,int &b){
        int te = a;
        a = b;
        b = te;
    }

    int main(){
        int a = 10;
        int b = 20;
        //这样就可以用形参修饰实参
        yingr(a, b)
    }

> 引用做函数返回值
> 注意：不要返回局部变量的引用

    int& test(){
        //局部变量是存放在内存中堆的，程序执行完后就，直接释放了
        int a = 10;
        return a;
    }

    int& test01(){
        //静态变量存放在全局区，系统释放
        static int a = 10;
        return a;
    }

    int main(){
        int &ref2 = test01();
        //可以为左值
        test01() = 1000;
        cout << ref2 << endl;
    }

## C++核心 封装、继承、多态

> 封装
> 封装的意义：

    -将属性和行为作为一个整体，表现成生活中的事物
    -将属性和行为加以权限控制

语法：class 类名{ 访问权限: 属性 / 行为 }

    ```C++
    //zhidingyi这个是自己自定义的
    class zhidingyi{
        //这个是权限类内类外都可以使用
        public:
        //属性
        //半径
        int m_r;

        //行为
        //获取园的周长
        double cls(){
            return 2 * PI * m_r;
        }
    };

    int main(){
        //通过园类 创建具体的园（对象）
        zhidingyi cl;
        //赋值
        cl.m_r = 10;
        //进行调用就可以使用了输出结果是62.8
        // 2*3.14*10
        cout << cl.cls() << endl;
    }
    ```

在封装中的权限有三种：
1.public 公共权限
2.protected 保护权限 儿子可以访问父亲中的保护内容
3.private 私有权限 儿子不可以访问父亲中的私有内容
这三种权限类内都是可以互相访问的，但是，类外的就只用公共权限可以访问
其他的权限类外是不可以访问的。

    ```C++
    class person{
        //公共权限类内类外都可以访问
        public:
            string m_name; //姓名
        //保护权限类内的可以访问但是类外的不可以访问
        protected:
            string m_car;//汽车
        //私有权限类内的可以访问但是类外的不可以访问
        private:
            int m_password;//银行密码
        //公共函数
        public:
            void func(){
                //这个就是类内都可以使用
                m_name = 'ling';
                m_car = 'baoshijie';
                m_password = '1234';
            }
    }

    int main(){
        person s1;
        //这个是可以访问的不会报错
        s1.m_name = 'slihd';
        //后面这两个是会报错的，公共函数也是可以访问的
        //但是换成其他的权限都是不可以访问的。
        s1.m_car = 'baoshijie';
        s1.m_password = '1234';
    }
    ```

> struct 和 class 的区别
> 默认的访问权限是不同的
> struct 默认权限是公共的
> class 默认权限是私有的

    ```C++
    class v1{
        //什么权限都不写默认就是私有的
        int m_b;
    }
    struct c1{
        //什么权限都不写默认就是公共的
        int m_a;
    }

    ```

> 成员属性设置为私有 1.可以自己控制读写权限

    ```C++
    class paerson{
        public:
            // 可读可写
            void Nname(string name){
                m_name = name;
            }
            string duname(){
                return m_name;
            }
            // 只写
            string duage(){
                return m_age;
            }
            // 只写
            void Nm_dol(string dol){
                return m_dol = dol;
            }
        private:
            string m_name;//姓名 可读可写
            int m_age  = 20;//年龄 只读
            string m_dol;//偶像 只写
    }
    int main(){
        paerson c1;
        // 这样就可以进行写入操作了
        c1.Nname('zheng');
        // 这样就可以进行只读的操作了
        cout << c1.duname << endl;
        // 其他的只读都是直接使用cout来调用函数就可以了
    }
    ```

## 构造函数和析构函数

主要是对程序进行初始化
构造函数语法：类名(){} -构造函数，没有返回值也不写 void -函数名称与类名相同 -构造函数可以有参数，因此可以发生重载 -在调用对象时候自动调用构造，无须手动调用，而且只会调用一次
析构函数语法：~类名(){} -析构函数，没有返回值也不写 void -函数名称与类名相同，在名称前加上符号~ -析构函数不可以有参数，因此不可以发生重载 -在对象销毁前会自动调用析构，无须手动调用，而且只会调用一次

    ```C++
    class pa{
        public:
            //这个是一个构造函数
            pa(){
                //只调用一次
            }
            // 析构函数
            ~pa(){
                //只调用一次
            }
    }

    void test(){
        pa pa1;
    }

    int main(){
        test();
    }
    ```

## 构造函数的分类及调用

两种分类方式：
按参数分为：有参构造和无参构造
按类型分为：普通构造和拷贝构造

## 五子棋

    ```C++
    // 键盘事件头文件
    #include <conio.h>
    #include <stdio.h>
    // 字符串头文件
    #include <string.h>
    // 窗体头文件
    #include <windows.h>
    // 媒体头文件
    #include <mmsystem.h>
    // 音乐库
    #pragma comment(lib,'winmm.lib')
    // 棋盘大小
    #define qipaidaxiao 30 30
    // 落子
    int Put()
    /*
    0:空白
    1:黑子
    2:白子
    */
    // 棋盘数据
    int g_checkboard[qipaidaxiao][qipaidaxiao];
    // 当前玩家是谁
    /*
    1:黑子
    2:白子
    */
    int g_dangqianwangjia
    // 当前光标位置X和Y轴
    int g_cursorX, g_cursorY;
    // 当前的回合数
    int g_count;

    // 初始化函数
    void IntGame(){
        // 清空棋盘数据
        memset(g_checkboard, 0,sizeof(g_checkboard))
        // 重置光标位置
        g_cursorX = qipaidaxiao / 2;
        g_cursorY = qipaidaxiao / 2;
        // 重置当前玩家
        g_dangqianwangjia = 1;
        // 初始化回合数
    }
    // 打印棋盘
    void qipan(){
        system("cls");
        for
        printf();
    }
    // 运行游戏
    void RunGame(){
        // 初始化
        IntGame()
        // 游戏胜利退出
        while(1){
            // 打印棋盘
            // 在打印棋盘中要进行一个清屏，来打印每次移动你移动的位置
            // system("cls");
            // 子的颜色会要绘制棋盘的时候要一起绘制上去
            qipan()
            // 使用for循环来进行绘制棋盘
            // 使用图形化工具比较好不要使用for循环，比较麻烦
            int ch = getch();
            switch(ch)
            {
                case 32:
                if(1 == Put())
                {
                    g_dangqianwangjia = 3 - g_dangqianwangjia;
                }
                    break;
                case 224:
                    ch = getch();
                /**
                32 空格
                72 上键
                80 下键
                75 左键
                77 右键
                 */
                    switch(ch)
                    {
                        case 72:
                            g_cursorX--;
                            break;
                        case 80:
                            g_cursorX++;
                            break;
                        case 75:
                            g_cursorY--;
                            break;
                        case 77:
                            g_cursorY++;
                            break;
                    }
                    if(g_cursorX < 0)
                        g_cursorX = qipaidaxiao - 1;
                    if(g_cursorX > qipaidaxiao - 1)
                        g_cursorX = 0;
                    break;
            }
        }
    }
    int Put()
    {
        if(g_checkboard[g_cursorX][g_cursorY] == 0)
            g_checkboard[g_cursorX][g_cursorY] = g_dangqianwangjia
        else
            return 0;
    }
    int main(){
        // 设置窗口标题
        SetConsoleTitle(L'自己写标题');
        // 修改窗口大小
        // cols是列，lines是行
        system('mode con cols=31 lines=31')
        // 修改背景颜色
        system('color E0')
        // 这个是打开音乐不是播放 音乐文件要在项目内
        mciSendString(L'open bkmusic.mp3 alias bkmusic',NULL,0,NULL);
        mciSendString(L'open bkmusic repeat',NULL,0,NULL);

        while(1){
            RunGame()
        }

        return 0;
    }
    ```
