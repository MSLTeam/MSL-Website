import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,a as n,o as r}from"./app-D_onKj16.js";const o="/assets/server_interface-DPYCFkZf.png",i="/assets/serve_.interface1-Cx0VIvJs.png",c="/assets/image-20250412212214304-DDnDmyal.png",s="/assets/d1f16ed35e44cb8097efe132096d4cfc_720-D-7VdQB1.png",p="/assets/3fdc2666bfda090fc24f235a081dacd3-DupBuxLI.png",f="/assets/f71ea21ecda8fd4c5053519559ee0dca-CocjhcP2.png",g="/assets/cc5f3ba612712ef8a357420aa482e8f7-DySMLM8B.png",d={};function l(m,e){return r(),t("div",null,e[0]||(e[0]=[n('<h1 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h1><h2 id="内网穿透" tabindex="-1"><a class="header-anchor" href="#内网穿透"><span>内网穿透</span></a></h2><p>如果内网穿透日志输出提示以下文字:</p><p><strong>无法建立连接，因为计算机主动进绝了它。</strong></p><p><strong>请检查服务器是否开启或内网映射本地端口和服务器本地端口是否匹配！</strong></p><p>这时候需要看服务器设置的端口： <img src="'+o+'" alt="" loading="lazy"> 这里的服务器ip就是端口号，你需要去设置内网穿透需要映射的端口号或者修改服务器的端口号： <strong>通过修改服务器端口号解决：</strong><img src="'+i+'" alt="serve_.interface1" loading="lazy"> 在更多功能里往下翻能找到这个界面，其中有个服务器端口设置，将这里的数值修改为内网穿透需要映射的端口，也就是内网穿透创建界面的本地端口。 <strong>通过修改内网穿透要映射的端口号解决：</strong> 在映射界面，删除原来创建的隧道，点击添加隧道，在创建隧道界面你能在右边看到本地端口号，如下图：</p><figure><img src="'+c+'" alt="image-20250412212214304" tabindex="0" loading="lazy"><figcaption>image-20250412212214304</figcaption></figure><p><strong>蓝色方框内</strong>要填写的数值修改它并保证与服务器的端口保持一致，你还能看到kcp协议，默认关闭，这时候开启服务器并开启你的游戏，这时候你应该能进入游戏，如果遇到连接超时可尝试开启kcp协议或尝试切换其他节点。</p><p><strong>如果出现内网映射失败并且翻译为登陆失败或者超时等情况，请关闭kcp协议加速！</strong></p><h2 id="neoforge-forge安装失败导致无法开启服务器的解决办法" tabindex="-1"><a class="header-anchor" href="#neoforge-forge安装失败导致无法开启服务器的解决办法"><span>neoforge/forge安装失败导致无法开启服务器的解决办法</span></a></h2><p>第一重新创建服务器，第二在安装neoforge/forge界面有下载源选项，可尝试修改下载源为官方解决（由于下载源为官方，部分情况下会出现下载较慢等情况，可以尝试修改并发数来加快下载速度，请耐心等待），第三通过安装界面点击改用命令行安装（注意：这里采用的是官方原始的办法，可能会出现下载缓慢情况），第四你可以尝试切换网络环境解决（这里不便多说，请前往百度自行搜索）。</p><h2 id="fabric端一直显示下载服务端" tabindex="-1"><a class="header-anchor" href="#fabric端一直显示下载服务端"><span>fabric端一直显示下载服务端</span></a></h2><p>你能做的只能等待或者尝试切换网络环境。</p><h2 id="如何启动猿神" tabindex="-1"><a class="header-anchor" href="#如何启动猿神"><span>如何启动猿神</span></a></h2><p>请自行查询下载办法，比如百度，bing</p><h2 id="服务器崩溃-持续更新" tabindex="-1"><a class="header-anchor" href="#服务器崩溃-持续更新"><span>服务器崩溃（持续更新）</span></a></h2><p>第一种：neoforge/forge服务端崩溃后可能输出这些字样，我们可以观察到这里有灰色字样，灰色字样上面一串红色文字是你要删除的模组，你搜索这些括号内的文字并把它们删除，删除完毕你可以再次开启服务器，这时候正常情况下应该不会出现崩溃了。</p><figure><img src="'+s+'" alt="d1f16ed35e44cb8097efe132096d4cfc_720" tabindex="0" loading="lazy"><figcaption>d1f16ed35e44cb8097efe132096d4cfc_720</figcaption></figure><p>还有一个非常常见的情况，控制台输出未找到主类：</p><figure><img src="'+p+'" alt="3fdc2666bfda090fc24f235a081dacd3" tabindex="0" loading="lazy"><figcaption>3fdc2666bfda090fc24f235a081dacd3</figcaption></figure><p>看到client字样的都是客户端的端用在了服务端，这是行不通的，你可以去寻找关于该整合包的服务端，或者尝试自己手搓服务端（说白了就是资源同步），比如1.20.1fabric，你客户端和服务端都必须是这个版本，然后是模组，也就是mods文件夹，里面模组同步，还有config也要同步（不一定要），这里是因为任务系统等文件都在config文件夹里面，你可以理解为模组的配置文件，如果要跟着任务走自然也要同步config文件夹，然后就是按照上面写的崩溃类型进行排查模组。</p><p>第二种：<img src="'+f+'" alt="f71ea21ecda8fd4c5053519559ee0dca" loading="lazy"></p><p>在这张图上我们能看到libraries的一些路径，这是neoforge/forge安装失败了，重新创建即可</p><p>第三种：这种情况少见</p><figure><img src="'+g+'" alt="cc5f3ba612712ef8a357420aa482e8f7" tabindex="0" loading="lazy"><figcaption>cc5f3ba612712ef8a357420aa482e8f7</figcaption></figure><p>这里提到了ssl，这个可能是证书问题，在服务器设置往下翻找到jvm参数，输入-Djavax.net.ssl.trustStoreType=Windows-ROOT，然后点击保存并尝试开启服务器</p>',26)]))}const u=a(d,[["render",l],["__file","faq.html.vue"]]),b=JSON.parse('{"path":"/docs/faq.html","title":"常见问题","lang":"zh-CN","frontmatter":{"description":"常见问题 内网穿透 如果内网穿透日志输出提示以下文字: 无法建立连接，因为计算机主动进绝了它。 请检查服务器是否开启或内网映射本地端口和服务器本地端口是否匹配！ 这时候需要看服务器设置的端口： 这里的服务器ip就是端口号，你需要去设置内网穿透需要映射的端口号或者修改服务器的端口号： 通过修改服务器端口号解决： serve_.interface1 在更多...","head":[["meta",{"property":"og:url","content":"https://www.mslmc.cn/docs/faq.html"}],["meta",{"property":"og:site_name","content":"Minecraft Server Launcher - MSL开服器"}],["meta",{"property":"og:title","content":"常见问题"}],["meta",{"property":"og:description","content":"常见问题 内网穿透 如果内网穿透日志输出提示以下文字: 无法建立连接，因为计算机主动进绝了它。 请检查服务器是否开启或内网映射本地端口和服务器本地端口是否匹配！ 这时候需要看服务器设置的端口： 这里的服务器ip就是端口号，你需要去设置内网穿透需要映射的端口号或者修改服务器的端口号： 通过修改服务器端口号解决： serve_.interface1 在更多..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-12T18:07:29.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-12T18:07:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常见问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-04-12T18:07:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MSLDev\\",\\"url\\":\\"https://github.com/MSLTeam/\\"}]}"]]},"headers":[{"level":2,"title":"内网穿透","slug":"内网穿透","link":"#内网穿透","children":[]},{"level":2,"title":"neoforge/forge安装失败导致无法开启服务器的解决办法","slug":"neoforge-forge安装失败导致无法开启服务器的解决办法","link":"#neoforge-forge安装失败导致无法开启服务器的解决办法","children":[]},{"level":2,"title":"fabric端一直显示下载服务端","slug":"fabric端一直显示下载服务端","link":"#fabric端一直显示下载服务端","children":[]},{"level":2,"title":"如何启动猿神","slug":"如何启动猿神","link":"#如何启动猿神","children":[]},{"level":2,"title":"服务器崩溃（持续更新）","slug":"服务器崩溃-持续更新","link":"#服务器崩溃-持续更新","children":[]}],"git":{"createdTime":1744472243000,"updatedTime":1744481249000,"contributors":[{"name":"GuHanDuRen","email":"wtc2778318425@163.com","commits":2},{"name":"guming66","email":"wtc2778318425@163.com","commits":1}]},"readingTime":{"minutes":3.41,"words":1022},"filePathRelative":"docs/faq.md","localizedDate":"2025年4月12日","autoDesc":true,"excerpt":"\\n<h2>内网穿透</h2>\\n<p>如果内网穿透日志输出提示以下文字:</p>\\n<p><strong>无法建立连接，因为计算机主动进绝了它。</strong></p>\\n<p><strong>请检查服务器是否开启或内网映射本地端口和服务器本地端口是否匹配！</strong></p>\\n<p>这时候需要看服务器设置的端口：\\n\\n这里的服务器ip就是端口号，你需要去设置内网穿透需要映射的端口号或者修改服务器的端口号：\\n<strong>通过修改服务器端口号解决：</strong>\\n\\n在更多功能里往下翻能找到这个界面，其中有个服务器端口设置，将这里的数值修改为内网穿透需要映射的端口，也就是内网穿透创建界面的本地端口。\\n<strong>通过修改内网穿透要映射的端口号解决：</strong>\\n在映射界面，删除原来创建的隧道，点击添加隧道，在创建隧道界面你能在右边看到本地端口号，如下图：</p>"}');export{u as comp,b as data};
