## 图床仓库设置

```json
{
  "repo": "", // 仓库名，格式是 username/reponame
  "token": "", // github token
  "path": "", // 自定义存储路径，比如 img/
  "customUrl": "", // 自定义域名，注意要加 http://或者https://
  "branch": "" // 分支名，默认是 main
}
```

1. 首先你得有一个 GitHub 账号。注册 GitHub 就不用我多言。



2. 新建一个仓库



记下你取的仓库名。

3. 生成一个token用于PicGo操作你的仓库：

访问：https://github.com/settings/tokens

然后点击Generate new token。



把repo的勾打上即可。然后翻到页面最底部，点击Generate token的绿色按钮生成token。



**注意：**这个token生成后只会显示一次！你要把这个token复制一下存到其他地方以备以后要用。



4. 配置PicGo

**注意：**仓库名的格式是用户名/仓库，比如我创建了一个叫做test的仓库，在PicGo里我要设定的仓库名就是Molunerfinn/test。一般我们选择main分支即可。然后记得点击确定以生效，然后可以点击设为默认图床来确保上传的图床是GitHub。



至此配置完毕，已经可以使用了。当你上传的时候，你会发现你的仓库里也会增加新的图片了：

