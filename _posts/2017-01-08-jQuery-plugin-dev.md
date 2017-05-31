---
layout:     post
title:      "jQuery 插件开发"
subtitle:   ""
date:       2017-01-08 12:00:00
author:     "Feng"
header-img: "img/post-bg-nextgen-web-pwa.jpg"
header-mask: 0.3
catalog:    false
tags:
    - jQuery
    - JavaScript
---

开发模式参考 `BootstrapTable`:  [http://bootstrap-table.wenzhixin.net.cn/](http://bootstrap-table.wenzhixin.net.cn/ "BootstrapTable") 

```javascript
;(function($) {
   
    var Grid = function($ele, opt) {

        this.$element = $ele;
        this.defaults = {
            rows: 4,
            cols: 3,
            isParent: false,
            url: '',
            width: 600,
            height: 400
        };
        this.options = $.extend({}, this.defaults, opt);
        this._init();
    };

    Grid.prototype = {
		// methods
    };

    $.fn.gridhandler = function(opt) {
        var value;
        var args = Array.prototype.slice.call(arguments, 1);
        var data = this.data('gridhandler');
        if (typeof opt === 'string') {
            if (!data) {
                console.error('Grid Object not found');
                return;
            }
            value = data[opt].apply(data, args);
        }

        if (!data) {
            this.data('gridhandler', (data = new Grid(this, opt)));
        }
        return typeof value === 'undefined' ? this : value;
    };


    $(function() {
        var gridPage = {

            init: function() {
                $('selector').gridhandler();
                this.render();
                this.bindEvent();
            },
            
            render: function() {
               
            },

            bindEvent: function() {
                
            },

            // other methods

        };

        gridPage.init();
    });

})(jQuery);
```

*参考链接：*
* [http://www.cnblogs.com/Wayou/p/jquery_plugin_tutorial.html](http://www.cnblogs.com/Wayou/p/jquery_plugin_tutorial.html "http://www.cnblogs.com/Wayou/p/jquery_plugin_tutorial.html")