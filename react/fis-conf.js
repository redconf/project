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
  'test/**',
]);



//前端同学开发完自测没问题后，执行此命令,产出线上代码
fis.media('build')
.hook('relative')
// fis3-hook-relative 插件进行压缩，已内置
.match('**', {
  relative: true
})
.match('*', {
    //对资源引用进行转换
    // domain: ''
})
.match('*.html', {
  optimizer: fis.plugin('html-compress')
})

//配置共用资源单独打包
// .match('/libs/**.js', {
//  packTo: '/pkg/libs.js'
// })


// fis3-deploy-replace 插件进行转换，已内置
//配置文本替换
// .match('**', {
//     deploy: [
//         fis.plugin('replace', {
//             from: /http:\/\/adms\.emao\.com\/fl\/getadcs/,
//             to: '/test/data'
//         }),
//         fis.plugin('local-deliver')
//     ]
// })
.match('::package', {
    postpackager: fis.plugin('loader', {
        allInOne: true
    })
})
.match('*.{css,less,scss}', {
  preprocessor: fis.plugin('autoprefixer', {
    "browsers": ["Android >= 2.1", "iOS >= 4", "ie >= 8", "firefox >= 15"],
    "cascade": true
  })
})
.match('*.js', {
  parser: fis.plugin('jdists', {
    remove: "debug"
  })
})
.match('*.inline.{css，sass,scss,less,js,jsx,ts,es,es6,html,tpl,tmpl}', {
  // 设置 release 为 FALSE，不再产出此文件
  release: false
})
.match('*.js', {
    // fis-optimizer-uglify-js 插件进行压缩，已内置
    optimizer: fis.plugin('uglify-js')
}).match('*.css', {
    // fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css')
}).match('*.png', {
    // fis-optimizer-png-compressor 插件进行压缩，已内置
    optimizer: fis.plugin('png-compressor')
}).match('*.{png,jpg,gif,svg}}', {
    // fis3-optimizer-imagemin 插件进行压缩，已内置
  optimizer: fis.plugin('imagemin', {
                            ".png": {
                                pngquant: {
                                    quality: '65-80',
                                    speed: 1,
                                }
                            }
                        })
}).match('*.{js,css}',{
    useHash:true,
    useSprite:true,
    // optimizer:true
}).match('*.{png}',{
    // useHash:true,
    // useSprite:true,
    // optimizer:true
}).match('*', {
    //fis3-postpackager-loader 插件进行压缩，已内置
    deploy: [
        fis.plugin('skip-packed', {
        // 配置项
        }),

        fis.plugin('local-deliver', {
        to: '../dist'
        })
    ]
});
// .match('*', {
//     //fis3-postpackager-loader 插件进行压缩，已内置
//     deploy: fis.plugin('local-deliver', {
//         to: '../build'
//     })
// });