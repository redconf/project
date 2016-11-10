## 纯前端ui组件解决方案

   组件化、开发目录规范、部署目录规范、环境虚拟化、流程脚本化

### 目录规范
    src为开发目录
    开发人员只需要维护src目录即可
    开发完成后执行build.sh会自动生成dist目录

> src <源码>
> > common <通用静态资源>
> > > static <非组件>
> > > component <组件>
> > page <页面以及非通用资源>
> > > component <非通用组件>
> > > static <非通用非组件>
> > config <全局配置>

> build  <生产代码>
> > config <全局配置>
> > static <静态资源>
> > > common <通用资源>
> > > projectName <非通用独立项目>
> > template <模板文件>
