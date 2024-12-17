# win11怎么重置密码

<p>在使用win11的时候我自己有时候常常忘记密码。今天就记录下自己怎么修改密码的思路</p>

<p>先开机，在登录页面先确认自己使用的是本机的账号密码</p>
<P>还是使用的是微软的账号密码登录</P>

<P>如果使用的是本机的账号密码才适用于今天记录的这个方法</P>

<P>我们要先进入恢复模式中</P>

<p>怎么进入恢复模式中</p>

<p>在登录页面中按重启按钮的同时，按住shift键到重新启动完成就可以进入恢复模式了</p>

<P>进入到恢复模式后，点击进入疑难解答 -> 高级选项 -> 命令提示符</P>

<p>后我们在命令行中打入输入以下代码</p>

```
<!-- 先备份exe这个文件，防止我们丢失 -->
// 备份Utilman.exe
copy c:\windows\system32\Utilman.exe c:\windows\system32\Utilman.exe.bak /y
<!-- 然后对exe这个文件进行覆盖 -->
// 用cmd.exe覆盖Utilman.exe 
copy c:\windows\system32\cmd.exe c:\windows\system32\Utilman.exe /y  
```

<p>然后退出来，这样就完成了前提条件。退出来后点击继续</p>

<p>重新启动成功后，在右下角点击辅助功能，就可以进到命令提示符。在其中输入以下代码</p>

```
<!-- 看一下我们要重新重置的账号是哪一个 -->
// 列举管理员用户组的用户
net localgroup administrators   
<!-- 这个代码直接会弹出用户管理窗口 -->
// 重置密码 
control userpasswords2  
```

<p>弹出窗口后，直接选择你要重置的用户，选择完成后，点击下面的重置密码重新输入密码就可以了</p>

如果下面的重置密码是灰色的，那就表示你的账号是微软的账号密码，直接到[微软官网](https://www.microsoft.com/zh-cn/)重置密码就可以了

<p>接着是怎么恢复这个问题。</p>

<p>其实这个跟之前一样。在次进入到恢复模式中的命令提示符中输入以下代码。</p>

```
<!-- 将我们之前复制的文件恢复回来 -->
// 恢复Utilman.exe 
copy c:\windows\system32\Utilman.exe.bak c:\windows\system32\Utilman.exe /y
```