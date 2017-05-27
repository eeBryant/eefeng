---
layout:     post
title:      "Angular 路由 (1)"
subtitle:   ""
date:       2017-05-13 12:00:00
author:     "Feng"
header-img: "img/post-bg-04.jpg"
header-mask: 0.3
catalog:    false
tags:
    - Angular
---

## Rouer

使用@angular/cli初始化项目时可以加 `--routing` 参数(`ng new pro_name --routing`)为项目自动生成路由模块，并在主模块中导入。

```typescript
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ''
  },
  {
    path: 'my',
    component: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

``` 

<br/>


#### 路由相关对象
* Routes
* RouterOutlet
* RouterLink
* Router
* ActivatedRoute

<br/>

* ##### Routes: 路由配置，定义url与组件的映射关系
```javascript
const routes: Routes = [
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];
```
> path不能以斜杠（/）开头。 路由器会为解析和构建最终的URL，这样当我们在应用的多个视图之间导航时，可以任意使用相对路径和绝对路径。

	1. 路由配置的路径中不能以'/'开头  
	2. 设置通配符路径**路由到指定页面或404page


* ##### RouterOutlet: 插座，子组件在父组件模板中的占位符

	```html
	<router-outlet></router-outlet>
	```

	一个模板中只能有一个未命名的`<router-outlet>`。 但路由器可以支持多个命名的出口（outlet）


* ##### RouterLink: 在模版中声明的路由导航指令

	```html
	<a routerLink="/home">Home</a>
	```
	1. routerLink中url中指定相对路径和绝对路径  
	2. 需要传参时可以绑定routerLink指定到一个数组
	3. RouterLinkActive指令为当前激活路由添加CSS类


* ##### Router: 执行路由的对象，在控制器中可以通过调用其navigate()和 navigateByUrl()方法导航到一个指定的路由
	
	```typescript
	// app.component.ts
	import {Router} from '@angular/router';
	
	export class AppComponent {
	  constructor(private router: Router) {
	  }
	  gotoAbout() {
	    this.router.navigate(['/about']);
	  }
	}
	```
	1. Router from @angular/router
	2. 在构造函数中通过依赖注入声明组件的router
	3. navigate()接收一个数组,第一个元素指定要导航到的路径（与routerLink指令中的参数相同）

* ##### ActivatedRoute: 当前激活的路由对象，保存当前路由地址参数等信息
