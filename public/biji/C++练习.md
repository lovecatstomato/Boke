## 它显示你的姓名和地址

    ```c++
    #include <iostream>

    int main()
    {
    std::cout << "姓名：" << "小明 \n";
    std::cout << "地址：" << "中国 \n";
    }
    ```

## 输入一个long为单位的距离，转换成码

    ```C++
    #include <iostream>
    long Longdanwei(long);

    int main()
    {
        long yonh;
        std::cin >> yonh;
        long yonghu = Longdanwei(yonh);
        std::cout << "Enter your age" << yonghu << std::endl;
    }

    long Longdanwei(long danwei) {
        long Danwei = 220 * danwei;
        return Danwei;
    }
    ```

## 使用用户定义的函数调用输出，每个都调用两次

    ```C++
    #include <iostream>
    void yonghu1();
    void yonghu2();

    int main()
    {
        yonghu1();
        yonghu1();
        yonghu2();
        yonghu2();
    }

    void yonghu1() {
        //std::printf("Three blind mice");
        //std::cout << "Three blind mice\n";
    }

    void yonghu2() {
        //std::printf("See how they run");
        //std::cout << "See how they run\n";
    }
    ```

## 用户输入年龄，输出年龄包含多少个月

    ```C++
    #include <iostream>
    int nianling(int n);

    int main() {
    int Nianlian;
    std::cin >> Nianlian;
    int shiru = nianling(Nianlian);
    std::cout << "Enter your age" << shiru;
    }

    int nianling(int n) {
    return n * 12;
    }
    ```

## 用户输入温度进行转换成华氏摄氏度