## 创建仓库
git add . 
git commit -m '0.1.4'
git push

wianx2016..

git add . (添加到暂存区)
git branch （查看所有分支）
git branch xx（创建分支）
git commit （提交）
git commit -m "备注"（这个是提交并中间可以写备注信息）
git help （帮助）
git init （版本库初始化）
git merge （合并分支）
git push （推送远程仓库，后面还以跟源码库地址 源码库等）


## 下载项目到本地
git clone 仓库地址

合并看一下冲突
git pull
git add .
git commit -m '备注'
git push

## 切换分支
git checkout branchName

## 上传新的代码去仓库
>先声明自己的用户，声明过就可以不用声明了
git config --global user.name "您的用户名"  
git config --global user.email "您的邮箱地址"

>本地初始化仓库
git init

>添加当前目录下的所有文件和子目录
git add .  

>添加备注
git commit -m "您的提交信息"

>添加远程仓库：
git remote add origin git@gitee.com:您的用户名/您的仓库名.git

>推送本地仓库到远程仓库
git push -u origin master  # 推送 master 分支到远程仓库

## 已经有仓库了
>检查现有的远程仓库引用：
git remote -v

>更改远程仓库的URL：
git remote set-url origin 新的Git仓库URL

>验证更改：
git remote -v

>推送和拉取：
git push -u origin 替换为相应的分支名
