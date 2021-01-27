## PicGo 图床 Github 仓库设置

```js
{
  "repo": "", // 仓库名，格式是 username/reponame
  "token": "", // github token
  "path": "", // 自定义存储路径，比如 img/
  "customUrl": "", // 自定义域名，注意要加 http:// 或者 https://
  "branch": "" // 分支名，默认是 main
}
```

首先你得有一个 GitHub 账号。注册 GitHub 就不用我多言。

新建一个仓库

![create_new_repo](https://raw.githubusercontent.com/chuenwei0129/my-picgo-repo/master/2021/create_new_repo.png?token=AEIZJZK43AOLDW6QPNBEFHDACFVWI)

记下你取的仓库名。

生成一个 token 用于 PicGo 操作你的仓库：

**访问：** https://github.com/settings/tokens

然后点击 `Generate new token`。

![generate_new_token.png](https://raw.githubusercontent.com/chuenwei0129/my-picgo-repo/master/2021/generate_new_token.png?token=AEIZJZO4UTD3SRRQY736TCTACFV4E)

把 `repo` 的勾打上即可。然后翻到页面最底部，点击 `Generate token` 的绿色按钮生成`token`。

![generate_token_repo](https://raw.githubusercontent.com/chuenwei0129/my-picgo-repo/master/2021/generate_token_repo.png?token=AEIZJZNOM2BVF5P743O3PH3ACFWG6)

**注意：** 这个 `token` 生成后只会显示一次！你要把这个 `token` 复制一下存到其他地方以备以后要用。

![copy_token](https://raw.githubusercontent.com/chuenwei0129/my-picgo-repo/master/2021/copy_token.png?token=AEIZJZKX73AYOUZJ5DH6KXDACFWKQ)

配置 PicGo

**注意：** 仓库名的格式是用户名/仓库，比如我创建了一个叫做 `test` 的仓库，在 PicGo 里我要设定的仓库名就是 `Molunerfinn/test`。一般我们选择 `main` 分支即可。然后记得点击确定以生效，然后可以点击`设为默认图床`来确保上传的图床是 GitHub。

![setup_github](https://raw.githubusercontent.com/chuenwei0129/my-picgo-repo/master/2021/setup_github.png?token=AEIZJZK6PR3T3GNTAQBBWA3ACFWM4)

至此配置完毕，已经可以使用了。当你上传的时候，你会发现你的仓库里也会增加新的图片了。

![success](https://raw.githubusercontent.com/chuenwei0129/my-picgo-repo/master/2021/success.png?token=AEIZJZMVTENNROXLQRLFQUTACFWP2)

**更多功能设置：** https://picgo.github.io/PicGo-Doc/