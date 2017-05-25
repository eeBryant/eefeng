---
layout:     post
title:      "Angular 路由 (2)"
subtitle:   "路由传参"
date:       2017-05-13 12:00:00
author:     "Feng"
header-img: "img/post-bg-09.jpg"
header-mask: 0.3
catalog:    false
tags:
    - Angular
---

* #### 查询参数中传参

	1. 通过a标签中queryParams属性指定参数

		```
		<a routerLink="/user" [queryParams]="{id: 1, name: 'Niki'}">to user</a>
		```

	2. 目标组件中接收: `ActivatedRoute.queryParams["id"]`
	
		```typescript
		import {ActivatedRoute} from '@angular/router';
		// ...
		export class UserComponent implements OnInit {
		  private userId: number;
		
		  constructor(private routeInfo: ActivatedRoute) { }
		
		  ngOnInit() {
		    this.userId = this.routeInfo.snapshot.queryParams['id'];
		  }
		
		}
		```
	3. url:  `.../user/?id=1&name=Niki`
	

* #### 路由路径中传参

	1. 定义路由路径: `{path: "user/:id"}`
	2. 通过a标签中routerLink属性指定参数(这时routerLink绑定到一个数组上)

		```
		<a [routerLink]="['/user', 1]">to user</a>
		```

	3. 目标组件中接收: `ActivatedRoute.queryParams["id"]`
	
		```typescript
		import {ActivatedRoute} from '@angular/router';
		// ...
		export class UserComponent implements OnInit {
		  private userId: number;
		
		  constructor(private routeInfo: ActivatedRoute) { }
		
		  ngOnInit() {
		    this.userId = this.routeInfo.snapshot.params['id'];
		  }
		
		}
		```
	4. url:  `.../user/1`

	
	

