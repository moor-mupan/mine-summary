
### Git简明指南 
	
[http://rogerdudler.github.io/git-guide/index.zh.html](http://rogerdudler.github.io/git-guide/index.zh.html)

###Git的奇技淫巧
[https://github.com/521xueweihan/git-tips](https://github.com/521xueweihan/git-tips)

- git init  // 创建本地仓库
- git add . //添加到暂存区
- git commit -m '提交信息'  //提交到本地仓库
- git pull // 取回远程某个分支上的更新，再与本地分支合并
- git push origin master  // 推送到远程仓库

----------

- git clone // 克隆仓库
- git remote add origin <server> //将本地仓库推送到远程服务器

----------

- git checkout -b xxx  // 创建xxx分支并切换到xxx分支
- git checkout master // 切换到主分支
- git branch -d xxx  // 删除xxx分支
- git push origin <branch> // 将分支推送到远程仓库
- git merge <branch>  // 将指定分支合并到当前分支上
- git diff <source_branch> <target_branch> // 合并前查看文件差异

----------

#### 注：
	使用 git merge / git pull 时，git会尝试自动去合并改动。 但可能出现冲突，这是需要手动合并这些冲突。修改完成后执行 git add <filename> 命令将其标记为合并成功

----------

git tag 1.0.0 id // 创建标签 1.0.0  
git log // 获取提交id 仓库历史记录
git log --author=bob // 查看bob的提交记录

----------

git checkout -- <filename> 将本地仓库中最新的替换到工作目录中的文件

   
