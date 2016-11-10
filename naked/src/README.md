## 纯前端ui组件解决方案

   组件化、开发目录规范、部署目录规范、环境虚拟化、流程脚本化

### 目录规范
    src为开发目录
    开发人员只需要维护src目录即可
    开发完成后执行build.sh会自动生成dist目录

> src 源码
> > common通用静态资源
> > > static非组件
> > > component组件
> > page页面以及非通用资源
> > > component非通用组件
> > > static非通用非组件
> > config全局配置

> build 生产代码
> > config全局配置
> > static静态资源
> > > common通用资源
> > > projectName非通用独立项目
> > template模板文件
