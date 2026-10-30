# 霜雪大肥鱼 · DSH Web 皮肤

给 DeepSeek Harness Web GUI 做的一套冬日皮肤。霜白、雾蓝、墨蓝压暗，角落里点一盏暖灯。

![预览](art/snowfish-girl.svg)

## 装

```bash
dsh plugin --profile <你的profile> add github:6jv6j5nn5g-ui/dsh-skin-fatfish
```

装完在侧栏「插件」页打开 `skin-fatfish` 开关，HMR 开着的话立即生效，不用重启。

## 它做了什么

- **色板**：霜白 `#eff5fa`、雾蓝、深墨 `#20303d`，加一点暖灯琥珀 `#c08a5a`
- **装饰层**：飘雪、窗口边缘的霜、右上角暖灯、左下角「雪景球」头像
- **深色模式**：雪夜是独立的一整套 token，不是简单反色
- **零残留**：只通过官方主题扩展点 `ctx.theme.overrideTokens()` 叠加，关掉插件立刻复原，不碰内建主题

装饰层是独立的一层，`pointer-events: none`，不挡任何点击。

## 兼容

- DSH `0.2.1-rc.3` 实测可用
- 纯客户端插件，没有宿主侧代码

## 想要自己的风格

可以接定制：配色、角色、装饰层都可以改。联系方式见仓库主页。

## License

MIT
