# Lab01-GPIO

通常开发板厂商都会提供与开发板相应的教程/例程，初学者可以先根据厂商的文档进行 GPIO 的相关学习。
- [霸天虎: 使用寄存器点亮LED灯](https://doc.embedfire.com/mcu/stm32/f407batianhu/std/zh/latest/book/LED_register.html)
- [指南者: 使用寄存器点亮LED灯](https://doc.embedfire.com/mcu/stm32/f103zhinanzhe/std/zh/latest/book/LED_register.html)
- 其他开发板的教程可以通过搜索引擎获取

根据厂商教程点亮 LED 后，再独立完成实验加深理解。

> [!IMPORTANT]
> 对于入门者来说，亲自动手操作是最重要的环节，只进行理论知识的学习容易感到枯燥，并丧失兴趣。
>
> 在第一次学习时建议只需了解下基本概念，在动手实现并观察到现象之后，再回过头重温理论知识，此时会有更加深刻的理解。

---

在按照厂商教程点亮 LED 后，完成以下实验：

1. 实现灭灯
2. 实现 LED 闪烁
3. 查询原理图上是否有其他的 LED 灯，如果有，实现轮流闪烁/跑马灯

> [!TIP]
> 由于还未学习定时器，还无法实现延时操作，请思考如何实现延时操作。
> 
> (只要求等待一段时间，无需实现精确定时)。

::: details 点我查看答案
```c
void fake_delay(unsigned int n) {
    unsigned int count = 1000 * n;
    while (--count) {
        ;
    }
}
```

若发现无法成功进行延时，可能是编译器将该代码进行了优化，此时可以修改编译优化为 `-O0` 来验证是否该原因。
:::
