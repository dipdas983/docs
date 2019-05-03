(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{296:function(t,s,e){"use strict";e.r(s);var a=e(2),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"css-layout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-layout","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS Layout "),e("Badge",{attrs:{text:"field",type:"warn"}})],1),t._v(" "),e("p",[t._v("The CSS Layout extension is a new way to set margins, padding and borders (including radius) all from one field.")]),t._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("Table of Contents")]),t._v(" "),e("p",[e("TOC",{class:"table-of-contents",attrs:{"list-type":"ul","include-level":[2,3]}},[e("template",{slot:"header"}),e("template",{slot:"footer"})],2)],1)]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("Getting Started")]),t._v(" "),e("p",[t._v("To understand how to use extensions, you should read this article on "),e("router-link",{attrs:{to:"/guides/basics-using-extensions.html"}},[t._v("Using Extensions")]),t._v(".\nTo shortcut the process, you can use the "),e("a",{attrs:{href:"http://build.redux.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redux Build"),e("OutboundLink")],1),t._v(" site. Please be aware that a working\nknowledge of PHP and CSS is required to properly use this extension. Should you not be familiar with one or the other\n(or both), please refer to the following guides to get you started:\n"),e("a",{attrs:{href:"http://www.php.net/manual/en/tutorial.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("Getting Started with PHP"),e("OutboundLink")],1),t._v(",\n"),e("a",{attrs:{href:"http://www.w3schools.com/css/css_intro.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS Introduction"),e("OutboundLink")],1),t._v(".")],1)]),t._v(" "),e("h2",{attrs:{id:"arguments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arguments","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[e("code",[t._v("css_layout")])]),t._v(" "),e("td",[t._v("Value identifying the field type.")])]),t._v(" "),e("tr",[e("td",[t._v("id")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Unique ID identifying the field. Must be different from all other field IDs.")])]),t._v(" "),e("tr",[e("td",[t._v("title")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Displays title of the field.")])]),t._v(" "),e("tr",[e("td",[t._v("subtitle")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Subtitle display of the field, situated beneath the title.")])]),t._v(" "),e("tr",[e("td",[t._v("desc")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Description of the field, appearing beneath the field control.")])]),t._v(" "),e("tr",[e("td",[t._v("class")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Appends any number of classes to the field`s class attribute.")])]),t._v(" "),e("tr",[e("td",[t._v("compiler")]),t._v(" "),e("td",[t._v("bool/array")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("Flag to run the compiler hook or array of CSS selectors to pass dynamic CSS to the compiler hook.  More info")])]),t._v(" "),e("tr",[e("td",[t._v("output")]),t._v(" "),e("td",[t._v("array")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Array of CSS selectors to dynamically generate CSS.  More info")])]),t._v(" "),e("tr",[e("td",[t._v("output-shorthand")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("Flag to set whether or not outputted CSS for "),e("code",[t._v("margin")]),t._v(", "),e("code",[t._v("border")]),t._v(", and "),e("code",[t._v("padding")]),t._v(" is in shorthand format.")])]),t._v(" "),e("tr",[e("td",[t._v("units")]),t._v(" "),e("td",[t._v("array")]),t._v(" "),e("td",[e("code",[t._v("%")]),t._v(", "),e("code",[t._v("px")]),t._v(", "),e("code",[t._v("in")]),t._v(", "),e("code",[t._v("cm")]),t._v(", "),e("code",[t._v("mm")]),t._v(", "),e("code",[t._v("em")]),t._v(", "),e("code",[t._v("rem")]),t._v(", "),e("code",[t._v("ex")]),t._v(", "),e("code",[t._v("pt")]),t._v(", "),e("code",[t._v("pc")])]),t._v(" "),e("td",[t._v("Array of permissible units to be used in the CSS layout field.  Units not specified in this array will be rejected and replaced with the default.")])]),t._v(" "),e("tr",[e("td",[t._v("margin-unit")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[e("code",[t._v("px")])]),t._v(" "),e("td",[t._v("Default unit for the margin layout.")])]),t._v(" "),e("tr",[e("td",[t._v("border-unit")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[e("code",[t._v("px")])]),t._v(" "),e("td",[t._v("Default unit for the border layout.")])]),t._v(" "),e("tr",[e("td",[t._v("radius-unit")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[e("code",[t._v("px")])]),t._v(" "),e("td",[t._v("Default unit for the border radius.")])]),t._v(" "),e("tr",[e("td",[t._v("padding-unit")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[e("code",[t._v("px")])]),t._v(" "),e("td",[t._v("Default unit for the padding layout.")])]),t._v(" "),e("tr",[e("td",[t._v("required")]),t._v(" "),e("td",[t._v("array")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Provide the parent, comparison operator, and value which affects the field`s visibility.  More info")])]),t._v(" "),e("tr",[e("td",[t._v("default")]),t._v(" "),e("td",[t._v("array")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Array of default values to appear inside the CSS layout field.  See "),e("code",[t._v("CSS Layout Defaults")]),t._v(" below.")])]),t._v(" "),e("tr",[e("td",[t._v("options")]),t._v(" "),e("td",[t._v("array")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Array of options defining the CSS Layout field.  See "),e("code",[t._v("CSS Layout Options")]),t._v(" below.")])]),t._v(" "),e("tr",[e("td",[t._v("placeholder")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("Text to display in the input fields when no value is present.")])]),t._v(" "),e("tr",[e("td",[t._v("hint")]),t._v(" "),e("td",[t._v("array")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Array containing the "),e("code",[t._v("content")]),t._v(" and optional "),e("code",[t._v("title")]),t._v(" arguments for the hint tooltip. More info")])])])]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("Also See")]),t._v(" "),e("ul",[e("li",[e("router-link",{attrs:{to:"/configuration/argument-compiler.html"}},[t._v("Using the "),e("code",[t._v("compiler")]),t._v(" Argument")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/configuration/argument-hints.html"}},[t._v("Using the "),e("code",[t._v("hints")]),t._v(" Argument")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/guide/the-output-argument.html"}},[t._v("Using the "),e("code",[t._v("output")]),t._v(" Argument")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/configuration/argument-permissions.html"}},[t._v("Using the "),e("code",[t._v("permissions")]),t._v(" Argument")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/configuration/argument-required.html"}},[t._v("Using the "),e("code",[t._v("required")]),t._v(" Argument")])],1)])]),t._v(" "),e("h2",{attrs:{id:"css-layout-defaults"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-layout-defaults","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS Layout Defaults")]),t._v(" "),e("p",[t._v("Margin, border, and padding values may set be in one of two ways.  Via shorthand properties using the "),e("code",[t._v("margin")]),t._v(", "),e("code",[t._v("border")]),t._v(", and "),e("code",[t._v("padding")]),t._v(" arguments, or individually using the "),e("code",[t._v("*-top")]),t._v(", "),e("code",[t._v("*-right")]),t._v(", "),e("code",[t._v("*-bottom")]),t._v(" and "),e("code",[t._v("*-left")]),t._v(" arguments.  While it's possible to set both, it's best to use one or the other, not both.  Individual arguments will override the shorthand arguments.")]),t._v(" "),e("p",[t._v("A shorthand property is expressed using up to four values to set the four value in the following order: "),e("strong",[t._v("top, right, bottom, left")]),t._v(".  Settings a single value using the shorthand method will fill out all inputs for that level.")]),t._v(" "),e("p",[t._v("Arguments may be set with or without a unit value.  Values without a unit value will automatically be assigned it's default value, set in the "),e("code",[t._v("margin-unit")]),t._v(", "),e("code",[t._v("border-unit")]),t._v(", "),e("code",[t._v("padding-unit")]),t._v(" and "),e("code",[t._v("radius-unit")]),t._v(" arguments (see above).  Unit values set in the default will override the default unit value.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("margin")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("String of margin shorthand properties setting the margin values.")])]),t._v(" "),e("tr",[e("td",[t._v("margin-top")]),t._v(" "),e("td",[t._v("string/int")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Margin-top value.  If the unit value is omitted, the margin-unit default will be used.")])]),t._v(" "),e("tr",[e("td",[t._v("margin-right")]),t._v(" "),e("td",[t._v("string/int")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Margin-right value.  If the unit value is omitted, the margin-unit default will be used.")])]),t._v(" "),e("tr",[e("td",[t._v("margin-bottom")]),t._v(" "),e("td",[t._v("string/int")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Margin-bottom value.  If the unit value is omitted, the margin-unit default will be used.")])]),t._v(" "),e("tr",[e("td",[t._v("margin-left")]),t._v(" "),e("td",[t._v("string/int")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Margin-left value.  If the unit value is omitted, the margin-unit default will be used.")])]),t._v(" "),e("tr",[e("td",[t._v("border")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("String of border shorthand properties setting the border values.")])]),t._v(" "),e("tr",[e("td",[t._v("border-top")]),t._v(" "),e("td",[t._v("string/int")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Border-top value.  If the unit value is omitted, the border-unit default will be used.")])]),t._v(" "),e("tr",[e("td",[t._v("border-right")]),t._v(" "),e("td",[t._v("string/int")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Border-right value.  If the unit value is omitted, the border-unit default will be used.")])]),t._v(" "),e("tr",[e("td",[t._v("border-bottom")]),t._v(" "),e("td",[t._v("string/int")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Border-bottom value.  If the unit value is omitted, the border-unit default will be used.")])]),t._v(" "),e("tr",[e("td",[t._v("border-left")]),t._v(" "),e("td",[t._v("string/int")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Border-left value.  If the unit value is omitted, the border-unit default will be used.")])]),t._v(" "),e("tr",[e("td",[t._v("padding")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("String of padding shorthand properties setting padding values.")])]),t._v(" "),e("tr",[e("td",[t._v("padding-top")]),t._v(" "),e("td",[t._v("string/int")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Padding-top value.  If the unit value is omitted, the padding-unit default will be used.")])]),t._v(" "),e("tr",[e("td",[t._v("padding-right")]),t._v(" "),e("td",[t._v("string/int")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Padding-right value.  If the unit value is omitted, the padding-unit default will be used.")])]),t._v(" "),e("tr",[e("td",[t._v("padding-bottom")]),t._v(" "),e("td",[t._v("string/int")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Padding-bottom value.  If the unit value is omitted, the padding-unit default will be used.")])]),t._v(" "),e("tr",[e("td",[t._v("padding-left")]),t._v(" "),e("td",[t._v("string/int")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Padding-left value.  If the unit value is omitted, the padding-unit default will be used.")])]),t._v(" "),e("tr",[e("td",[t._v("border-radius")]),t._v(" "),e("td",[t._v("string/int")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Border-radius value.  If the unit value is omitted, the radius-unit default will be used.")])]),t._v(" "),e("tr",[e("td",[t._v("border-color")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("'#ffffff'")]),t._v(" "),e("td",[t._v("Hex string value settings the border color value.")])]),t._v(" "),e("tr",[e("td",[t._v("border-style")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("'solid'")]),t._v(" "),e("td",[t._v("Border style.  Accepted values:  "),e("code",[t._v("solid")]),t._v(", "),e("code",[t._v("dashed")]),t._v(", "),e("code",[t._v("dotted")]),t._v(", "),e("code",[t._v("double")]),t._v(", "),e("code",[t._v("groove")]),t._v(", "),e("code",[t._v("ridge")]),t._v(", "),e("code",[t._v("inset")]),t._v(", "),e("code",[t._v("outset")]),t._v(", "),e("code",[t._v("none")]),t._v(".")])])])]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[t._v("The "),e("code",[t._v("border-color")]),t._v(", "),e("code",[t._v("border-radius")]),t._v(" and "),e("code",[t._v("border-style")]),t._v(" properties CANNOT be set using shorthand via the "),e("code",[t._v("border")]),t._v(" argument.  They must be set via their own arguments.")])]),t._v(" "),e("h2",{attrs:{id:"css-layout-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-layout-options","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS Layout Options")]),t._v(" "),e("p",[t._v("The margin, border, and padding levels of the CSS layout field may be enabled or disabled, depending on your particular needs.  When a level is disabled, default values (if set) will be displayed, although the user will be unable to edit them.")]),t._v(" "),e("p",[t._v("The radius inputs for value, color and style may also be independently enabled or disabled.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("margin_enabled")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Flag to enable or disable margin inputs.")])]),t._v(" "),e("tr",[e("td",[t._v("border_enabled")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Flag to enable or disable border inputs.")])]),t._v(" "),e("tr",[e("td",[t._v("padding_enabled")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Flag to enable or disable padding inputs.")])]),t._v(" "),e("tr",[e("td",[t._v("radius_enabled")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Flag to enable or disable the radius value input.")])]),t._v(" "),e("tr",[e("td",[t._v("color_enabled")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Flag to enable or disable the radius color selector.")])]),t._v(" "),e("tr",[e("td",[t._v("style_enabled")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Flag to enable or disable the radius style selector.")])])])]),t._v(" "),e("h2",{attrs:{id:"example-declaration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-declaration","aria-hidden":"true"}},[t._v("#")]),t._v(" Example Declaration")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),t._v("        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'opt-css-layout'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'css_layout'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'CSS Layout'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'subtitle'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'CSS layouts'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Any CSS selector set here will have all values indicated")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// in the CSS layout field applied to it.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'output'")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'.navbar'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Default unit values.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'margin-unit'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'px'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'border-unit'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'px'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'padding-unit'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'px'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'radius-unit'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'px'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Default values")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'default'")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Shorthand method to assign values to the margin level.")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Unit values are not required, however, when unit values")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// are set here, they will override the default values")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// indicated above.")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'margin'")]),t._v("        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'5em 10em 20em 3em'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Alternative method to set layout values for the margin level.")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Again, unit values are not required, and will be assigned the")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// default values indicated above.")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'margin-top' => 5,")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'margin-top' => 10,")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'margin-top' => 20,")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'margin-top' => 3,")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Because we indicated a single value, all border inputs will")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// be set to 2.")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'border'")]),t._v("        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'2'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'border-color'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'#ff0000'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'border-style'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'solid'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'border-radius'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'12px'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// CSS Layout options")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// For this example, we are disabling the padding field.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'options'")]),t._v("        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'margin_enabled'")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'border_enabled'")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'radius_enabled'")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'padding_enabled'")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'radius_enabled'")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'color_enabled'")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'style_enabled'")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),e("h2",{attrs:{id:"example-usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-usage","aria-hidden":"true"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),e("p",[t._v("This example in based on the example usage provided above. Be sure to change $redux_demo to the value you specified in your "),e("a",{attrs:{href:"/redux-framework/arguments/opt_name/",title:"opt_name"}},[t._v("opt_name")]),t._v(" argument.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("global")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Margin: '")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'opt-css-layout'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'margin'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Output: 5em 10em 20em 3em")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Margin top: '")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'opt-css-layout'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'margin-top'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Output: 5em")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Margin right: '")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'opt-css-layout'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'margin-right'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Output: 10em")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Margin bottom: '")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'opt-css-layout'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'margin-bottom'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Output: 20em")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Margin left: '")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'opt-css-layout'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'margin-left'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Output: 3em")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Border radius: '")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'opt-css-layout'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'border-radius'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Output: 12px")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Border color: '")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'opt-css-layout'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'border-color'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Output: #ff0000")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Border style: '")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'opt-css-layout'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'border-style'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Output: solid")]),t._v("\n")])])]),e("h2",{attrs:{id:"css-output"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-output","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS Output")]),t._v(" "),e("p",[t._v("The CSS output from the above example would appear as thus:")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".navbar")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-top")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    5em"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-bottom")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1em"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-left")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   3em"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-right")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  4em"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* If the output_shorthand argument is set, the above\n       would appear as the following shorthand:\n\n       margin: 5em 1em 3em 4em; */")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-top")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    2px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 12px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  #ff0000"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-style")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  solid"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=n.exports}}]);