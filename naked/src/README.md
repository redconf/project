## 纯前端ui组件解决方案

   组件化、开发目录规范、部署目录规范、环境虚拟化、流程脚本化

### 目录规范
    src为开发目录
    开发人员只需要维护src目录即可
    开发完成后执行build.sh会自动生成dist目录

> src

> > common

> > > static

> > > component

> > page

> > >project1

> > > > component

> > > > static

> > config

> build

> > config

> > static

> > > common

> > > project1

> > template

> > > project1

###开发步骤
    1.拖入vagrant同步目录
    2.在虚拟机里执行fedev.sh后开发
    3.只需要关注src即可，对src做版本管理
    4.开发人员只需要提交src代码即可（如果后台不能做到云端构建，本地构建提交也可）
