---
layout:     post
title:      "Angular Form （2）"
subtitle:   "form validation"
date:       2017-05-08 12:00:00
author:     "Feng"
header-img: "img/post-bg-03.jpg"
tags:
    - Angular
---


### 表单校验
* 校验器
* 校验响应式表单校验
* 校验板式表单校验

##### 校验器：一个方法
* 必须返回一个对象，这个对象有一个`string`类型的`key`属性
* 方法接收一个AbstractControl类型的参数
	

	```
	check(control: AbstractControl): { [key: string]: any } {
        return {
            'key': 'info'
        };
    }
	```

hasError的参数： (校验器返回的key, 字段名)

    return valid ? null : {'mobile': true};

hasError('mobile')


异步校验器

状态字段

touched & untouched: 用户是否访问过该字段（获取过焦点）
pristine & dirty: 用户是否修改过该字段

任何一个字段是touched或者dirty，则真个表单就是touched或dirty

pending： 异步校验中

![Alt text](./1494431683971.png)
![Alt text](./1494431712767.png)


模板表单校验

通过指令：`ng g d directives/mobileValidator`

指令相当于没有模板的组件，可作为html属性使用

`(ngSubmit)` or `(submit)`

adding appEqual:
![Alt text](./1494482801306.png)

模板式表单中不能在模板中使用表单的状态属性

