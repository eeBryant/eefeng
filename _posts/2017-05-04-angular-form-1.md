---
layout:     post
title:      "Angular Form （1）"
subtitle:   ""
date:       2017-05-04 12:00:00
author:     "Feng"
header-img: "img/post-bg-03.jpg"
tags:
    - Angular
---

Angular中表单的定义分为**模板式表单**与**响应式表单**： 两种表单的数据模型都是由angular/forms模块中特定的类(`FormControl`, `FormGroup`, `FormArray`)的实例。模板表单中，不能直接访问到这些类; 响应式表单中通过访问这些类的实例实现对数据模型的操作。




### 模版式表单

表单的数据模型由组件模板中的相关指令定义，受限与HTML语法，一般只用于一些简单的场景。


三个指令： `ngForm`, `ngModel`, `ngMdodelGroup`  (from  FormsModel模块)分别创建不同的实例。

ngForm => FormGroup

ngModel => FormControl

ngModelGroup => FormGroup

##### ngForm

* angular会默认给表单加一个`ngForm`指令，自动接管表单，mothod， action等默认属性无效，并且拦截默认submit事件，用`(ngSubmit)`事件代替
*  `ngForm` 指令隐式创建一个FormGroup类实例，这个类即表单的数据模型，存储表单数据。
*  标有`ngForm`指令的html标签会寻找其所有带有`ngModel`指令的子元素，并且将他们的值添加到表单的数据模型中
* 取消自动接管： 添加`ngNoForm`指令
* form可以被一个模板本地变量引用： `<form #f="ngForm" (ngSubmit)="onSubmit(f.value)">`， 以便在模板中访问： `<div>{ {f.value | json}}</div>`


##### ngModel
* `ngModel`隐式创建FormControl实例，这个类存储表单字段的值  
* 需要添加`name`属性，`name`属性的值就是`f.value`对象中的一个`key`
* `ngModel`创建的对象也可以通过模版本地变量来引用：
`<input #username="ngModel" />`  引用： `<div>{ {username.value}}</div>`






### 响应式表单

在组件的TypeScript代码中创建数据模型，再通过指令将模板上的html元素与数据模型绑定在一起。



* 响应式表单使用的指令来自 `ReactiveFormModule` 模块,指令都以`form`开头, 需要在主模块中引入:
```
imports: [
    BrowserModule,
    FormsModule,  
    HttpModule,
    ReactiveFormsModule
],
```

* 响应式表单的数据不能通过模板变量引用，不能在模板中操作数据模型。
* 数据模型：由`FormControl`, `FromGroup`, `FormArray`三个定义在angular/forms模块中的类组成
<br/>
<br/>

##### FormControl
* 构成表单的基本单位
* 保存着与其关联的html元素当前的值、校验状态、是否被修改过等信息
* 创建： `username: FormControl = new FormControl('Niki')`， FormControl的构造函数可以接收一个参数指定该formControl的初始值
* `formControl`指令不能用在`formGroup`的内部

##### FormGroup
* FormGroup一般代表整个表单或表单字段的一个固定子集：
			`<form [formGroup]="myForm" (submit)="onSubmit()">`
* 创建
	```typescript
	   myForm: FormGroup = new FormGroup({
	
	        username: new FormControl('Niki'),
	        dateRange:  new FormGroup({
	            start: new FormControl(),
	            end: new FormControl()
	        }),
	
	        emails:  new FormArray([
	            new FormControl('123@qq.com'),
	            new FormControl('456@qq.com'),
	            new FormControl('789@qq.com'),
	        ]),
	        1: new FormControl('world')
	    });
	
	```


##### FormArray
* 用来代表一个可以增长的表单字段集合

	```
	<ul formArrayName="emails">
	     <li *ngFor="let e of this.myForm.get('emails').controls; let i = index;">
		    <input type="text" class="form-control" [formControlName]="i"> <!-- 这里需要使用属性绑定  [formontrolName] -->
	    </li>
	</ul>
	```



<table width="90%">
    <tr>
        <td>类名</td>
        <td colspan="" align="center">指令</td>
        <td colspan="" align="center">指令(可以使用属性的名字来连接MV)</td>
    </tr>
    <tr>
        <td>FromGroup</td>
        <td>formGroup</td>
        <td>formGroupName</td>
    </tr>
    <tr>
        <td>FormControl</td>
        <td>formControl</td>
        <td>formControlName</td>
    </tr>
    <tr>
        <td>FormArray</td>
        <td></td>
        <td>formArrayName</td>
    </tr>
</table>

##### tips:

* `(submit)`事件绑定在`form`元素上：
`<form [formGroup]="myForm" (submit)="onSubmit()">`
* ngModel:
	1.  `[(ngModel)]`: 双向数据绑定
	2.  `(ngModel)`: 单向数据绑定
	3.  `ngModel`： 标记一个html元素成为表单数据模型的一部分


*参考链接：*
* [https://angular.cn/docs/ts/latest/guide/forms.html](https://angular.cn/docs/ts/latest/guide/forms.html)
* [https://angular.cn/docs/ts/latest/guide/reactive-forms.html](https://angular.cn/docs/ts/latest/guide/reactive-forms.html "https://angular.cn/docs/ts/latest/guide/reactive-forms.html")
*  [http://www.jianshu.com/p/0f9edcd7d6c3](http://www.jianshu.com/p/0f9edcd7d6c3)
