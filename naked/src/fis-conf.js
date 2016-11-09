fis.config.set('project.watch.usePolling', true);

fis.set('project.ignore', [
  'output/**',
  'node_modules/**',
  '.git/**',
  '.svn/**',
  'Vagrantfile',
  '.vagrantfile/**',
  '*.sh',
  'fis-conf.js',
  'package.json',
  '.env',
  '.env.example',
  'artisan',
  'composer.json',
  'gulpfile.js',
  '.gitignore',
  '*.xml',
  '*.yml',
//   'test/**',
]);



// 所有的文件产出到 static/ 目录下
// fis
// .media('build')
// .match('*', {
//     release: '/static/$0'
// })
// .match('*.html:css', {
//   optimizer: fis.plugin('clean-css')
// })
// .match('*.html:js', {
//   optimizer: fis.plugin('uglify-js')
// })
// .match('*.html', {// 所有模板放到 tempalte 目录下
//     release: '/template/$0'
// })
// .match('/widget/**/*', {// widget源码目录下的资源被标注为组件
//     isMod: true
// })
// .match('/widget/**/*.js', {// widget下的 js 调用 jswrapper 进行自动化组件化封装
//     postprocessor: fis.plugin('jswrapper', {
//         type: 'commonjs'
//     })
// })
// .match('/test/**/*', {// test 目录下的原封不动产出到 test 目录下
//     release: '$0'
// })
// .match('*', {
//     //fis3-postpackager-loader 插件进行压缩，已内置
//     deploy: [
//         fis.plugin('skip-packed', {
//         // 配置项
//         }),

//         fis.plugin('local-deliver', {
//             to: '../dist'
//         })
//     ]
// })



fis
.media('fedev')
// .match('/static/**/*', {
//     release: '$0'
// })
.match('::package', {
  postpackager: fis.plugin('loader', {})
})

.match('/conf/**', {
    release: '/resource/common/$0'
})
.match('/^_/', {
    release: false
})
.match('/map.json', {
    release: '/common/conf/$0'
})
.match('/page/(**)',{
    release:'/resource/static/$0',
})
.match('/page/(**/*.html)', {// 所有页面放到 tempalte 目录下
    release: '/tempalte/$1',
})

.match('/static/(**)', {// 所有页面放到 tempalte 目录下
    release: '/resource/common/static/$1',
})

.match('/component/**/*', {// component目录下的子目录所有资源被标注为组件
    isMod: true
})
.match('/component/**/*.js', {// component目录下的 子目录下的js 调用 jswrapper 进行自动化组件化封装
    postprocessor: fis.plugin('jswrapper', {
        type: 'commonjs'
    })
})
.match('/component/(**/*.{css,sass,scss,ts,jsx,js})', {
    release: '/resource/common/$0'
})
.match('/component/**/*.{html,tpl,tmpl}', {
    release: false
})
.match('/component/**/*.{html,css,sass,scss,ts,jsx,tpl,tmpl}', {
    // release: '/static/$0'
})


.match('/test/**/*', {// test 目录下的原封不动产出到 test 目录下
    release: '$0'
})
.match('*', {
    //fis3-postpackager-loader 插件进行压缩，已内置
    deploy: [
        fis.plugin('skip-packed', {
        // 配置项
        }),

        fis.plugin('local-deliver', {
            to: '/home/vagrant/.fis3-tmp/www'
        })
    ]
})
.set('project.ignore', [
  'output/**',
  'node_modules/**',
  '.git/**',
  '.svn/**',
  'Vagrantfile',
  '.vagrantfile/**',
  '*.sh',
  'fis-conf.js',
  'package.json',
  '.env',
  '.env.example',
  'artisan',
  'composer.json',
  'gulpfile.js',
  '.gitignore',
  '*.xml',
  '*.yml',
//   'test/**',
])