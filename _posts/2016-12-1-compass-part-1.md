---
layout:     post
title:      "Compass Part 1"
subtitle:   ""
date:       2016-12-01 12:00:00
author:     "Feng"
header-img: "img/post-bg-04.jpg"
header-mask: 0.3
catalog:    false
tags:
    - CSS
---
> Compass is an open-source CSS Authoring Framework.
> 
> Brilliant people use Compass☺

### 1. install
	gem install compass
    compass create <pro_name>
	cd pro_name
	compass compile

watch: `compass watch`

with  parameters:

	compass compile --output-style compressed
	compass compile --force
	

### 2. import normalize.css

By default, Compass will import `reset.css`, but usually `normalize.css` is more suitable for us.


 **install:** `gem install compass-normalize`


config.rb:
```javascript
require('compass-normalize')
```
screen.scss:
```scss
// drop reset and import normalize
@import "normalize";
```


screen.css:
<pre>
<code style="max-height:350px">
/* Welcome to Compass.
 * In this file you should write your main styles. (or centralize your imports) */
/*! normalize.css v3.0.0 | MIT License | git.io/normalize */
/*! normalize.css v3.0.0 | HTML5 Display Definitions | MIT License | git.io/normalize */
/* line 9, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_html5.scss */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section,
summary {
  display: block;
}

/* line 29, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_html5.scss */
audio,
canvas,
progress,
video {
  display: inline-block;
  vertical-align: baseline;
}

/* line 40, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_html5.scss */
audio:not([controls]) {
  display: none;
  height: 0;
}

/* line 47, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_html5.scss */
[hidden],
template {
  display: none;
}

/*! normalize.css v3.0.0 | Base | MIT License | git.io/normalize */
/* line 11, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_base.scss */
html {
  font-family: sans-serif;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

/* line 19, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_base.scss */
body {
  margin: 0;
}

/*! normalize.css v3.0.0 | Links | MIT License | git.io/normalize */
/* line 9, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_links.scss */
a {
  background: transparent;
}

/* line 15, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_links.scss */
a:active,
a:hover {
  outline: 0;
}

/*! normalize.css v3.0.0 | Typography | MIT License | git.io/normalize */
/* line 9, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_typography.scss */
abbr[title] {
  border-bottom: 1px dotted;
}

/* line 15, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_typography.scss */
b,
strong {
  font-weight: bold;
}

/* line 22, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_typography.scss */
dfn {
  font-style: italic;
}

/* line 29, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_typography.scss */
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* line 36, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_typography.scss */
mark {
  background: #ff0;
  color: #000;
}

/* line 43, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_typography.scss */
small {
  font-size: 80%;
}

/* line 49, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_typography.scss */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

/* line 57, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_typography.scss */
sup {
  top: -0.5em;
}

/* line 61, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_typography.scss */
sub {
  bottom: -0.25em;
}

/*! normalize.css v3.0.0 | Embedded Content | MIT License | git.io/normalize */
/* line 9, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_embeds.scss */
img {
  border: 0;
}

/* line 15, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_embeds.scss */
svg:not(:root) {
  overflow: hidden;
}

/*! normalize.css v3.0.0 | Figures | MIT License | git.io/normalize */
/* line 9, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_groups.scss */
figure {
  margin: 1em 40px;
}

/* line 15, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_groups.scss */
hr {
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  height: 0;
}

/* line 23, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_groups.scss */
pre {
  overflow: auto;
}

/* line 29, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_groups.scss */
code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

/*! normalize.css v3.0.0 | Forms | MIT License | git.io/normalize */
/* line 15, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_forms.scss */
button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}

/* line 27, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_forms.scss */
button {
  overflow: visible;
}

/* line 36, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_forms.scss */
button,
select {
  text-transform: none;
}

/* line 47, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_forms.scss */
button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}

/* line 57, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_forms.scss */
button[disabled],
html input[disabled] {
  cursor: default;
}

/* line 64, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_forms.scss */
button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

/* line 73, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_forms.scss */
input {
  line-height: normal;
}

/* line 83, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_forms.scss */
input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

/* line 93, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_forms.scss */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/* line 102, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_forms.scss */
input[type="search"] {
  -webkit-appearance: textfield;
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}

/* line 113, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_forms.scss */
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/* line 120, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_forms.scss */
fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

/* line 129, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_forms.scss */
legend {
  border: 0;
  padding: 0;
}

/* line 136, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_forms.scss */
textarea {
  overflow: auto;
}

/* line 143, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_forms.scss */
optgroup {
  font-weight: bold;
}

/*! normalize.css v3.0.0 | Tables | MIT License | git.io/normalize */
/* line 9, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_tables.scss */
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* line 14, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_tables.scss */
td,
th {
  padding: 0;
}

</code>
</pre>
In some circumstances, we don't need the whole `normalize`. We can also import part of it. 

`Normalize` can be devide into 8 modules(as screen.css shows): `html5`, `base`, `links`, `typography`, `embeds`, `groups`, `forms`, `tables`.


screen.scss:

```scss
@import "normalize-version"; // normalize-version should be imported before the modules
@import "normalize/base";
@import "normalize/links";
```


screen.css:
```css
/* Welcome to Compass.
 * In this file you should write your main styles. (or centralize your imports) */
/*! normalize.css v3.0.0 | Base | MIT License | git.io/normalize */
/* line 11, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_base.scss */
html {
  font-family: sans-serif;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

/* line 19, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_base.scss */
body {
  margin: 0;
}

/*! normalize.css v3.0.0 | Links | MIT License | git.io/normalize */
/* line 9, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_links.scss */
a {
  background: transparent;
}

/* line 15, H:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/compass-normalize-1.5/stylesheets/normalize/_links.scss */
a:active,
a:hover {
  outline: 0;
}

```

