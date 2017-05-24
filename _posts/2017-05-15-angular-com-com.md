---
layout:     post
title:      "Angular 组件通讯"
subtitle:   ""
date:       2017-05-15 12:00:00
author:     "Feng"
header-img: "img/post-bg-04.jpg"
header-mask: 0.3
catalog:    false
tags:
    - Angular
---

* 输入属性
* 输出属性
* 中间人模式


### 输入属性

* Input from `@angular/core`
* 属性绑定是单项的： 父组件 => 子组件  （子组件值的变化不会影响父组件的值）

```typescript
// child.component.ts
export class ChildComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  @Input()
  task: string;

  @Input()
  date: string;
}
```


```html
<!-- parent.component.ts -->
<app-child [task]="task" [date]="date"></app-child>
```


<br/>


### 输出属性

EventEmitter对象(Rxjs中的一个类)，通过emit方法发射自定义的事件。在响应式编程中既可以作为观察者（通过subscribe方法订阅由emit方法发射的**事件流**）也可以作为被观察者（通过emit方法发射自定义的事件）。


```typescript
// child.component.ts
export class ChildComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  // 1.define output property
  @Output()
  gradeEvent:EventEmitter<Grade> = new EventEmitter();

  // 2. data to be sent
  grade: Grade = new Grade(99, '999999');
  
  // 3. launch event		
  tell() {
  
    this.gradeEvent.emit(this.grade);
  }

}

export class Grade {
  constructor(public score: number,
              public desc: string) {
  }
}
```




```html
<!-- parent.component.html -->
<app-child (gradeEvent)="recieve($event)"></app-child>
```

* Output,EventEmitter from `@angular/core`



*参考链接：*
* [https://angular.cn/docs/ts/latest/cookbook/component-communication.html](https://angular.cn/docs/ts/latest/cookbook/component-communication.html "https://angular.cn/docs/ts/latest/cookbook/component-communication.html")
* [https://zhuanlan.zhihu.com/p/25119245](https://zhuanlan.zhihu.com/p/25119245 "https://zhuanlan.zhihu.com/p/25119245")
