/*
------------------------------------------- START OF THIRD PARTY NOTICE -----------------------------------------

This file is based on or incorporates material from the projects listed below (Third Party IP). The original copyright notice and the license under which Microsoft received such Third Party IP, are set forth below. Such licenses and notices are provided for informational purposes only. Microsoft licenses the Third Party IP to you under the licensing terms for the Microsoft product. Microsoft reserves all other rights not expressly granted under this agreement, whether by implication, estoppel or otherwise. 

//-----------------------------------------------------------------------------
twbs-bootstrap-sass (3.3.0)
//-----------------------------------------------------------------------------

The MIT License (MIT)

Copyright (c) 2013 Twitter, Inc

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

Provided for Informational Purposes Only
MIT License 
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the Software), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: 
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

//-----------------------------------------------------------------------------
GFX
//-----------------------------------------------------------------------------
Copyright (c) 2011 Alex MacCaw (info@eribium.org)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
""Software""), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED ""AS IS"", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
/* ========================================================================
 * Bootstrap: affix.js v3.3.0
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function($){"use strict";
// AFFIX PLUGIN DEFINITION
// =======================
function Plugin(option){return this.each(function(){var $this=$(this),data=$this.data("bs.affix"),options="object"==typeof option&&option;data||$this.data("bs.affix",data=new Affix(this,options)),"string"==typeof option&&data[option]()})}
// AFFIX CLASS DEFINITION
// ======================
var Affix=function(element,options){this.options=$.extend({},Affix.DEFAULTS,options),this.$target=$(this.options.target).on("scroll.bs.affix.data-api",$.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",$.proxy(this.checkPositionWithEventLoop,this)),this.$element=$(element),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};Affix.VERSION="3.3.0",Affix.RESET="affix affix-top affix-bottom",Affix.DEFAULTS={offset:0,target:window},Affix.prototype.getState=function(scrollHeight,height,offsetTop,offsetBottom){var scrollTop=this.$target.scrollTop(),position=this.$element.offset(),targetHeight=this.$target.height();if(null!=offsetTop&&"top"==this.affixed)return offsetTop>scrollTop?"top":!1;if("bottom"==this.affixed)return null!=offsetTop?scrollTop+this.unpin<=position.top?!1:"bottom":scrollHeight-offsetBottom>=scrollTop+targetHeight?!1:"bottom";var initializing=null==this.affixed,colliderTop=initializing?scrollTop:position.top,colliderHeight=initializing?targetHeight:height;return null!=offsetTop&&offsetTop>=colliderTop?"top":null!=offsetBottom&&colliderTop+colliderHeight>=scrollHeight-offsetBottom?"bottom":!1},Affix.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(Affix.RESET).addClass("affix");var scrollTop=this.$target.scrollTop(),position=this.$element.offset();return this.pinnedOffset=position.top-scrollTop},Affix.prototype.checkPositionWithEventLoop=function(){setTimeout($.proxy(this.checkPosition,this),1)},Affix.prototype.checkPosition=function(){if(this.$element.is(":visible")){var height=this.$element.height(),offset=this.options.offset,offsetTop=offset.top,offsetBottom=offset.bottom,scrollHeight=$("body").height();"object"!=typeof offset&&(offsetBottom=offsetTop=offset),"function"==typeof offsetTop&&(offsetTop=offset.top(this.$element)),"function"==typeof offsetBottom&&(offsetBottom=offset.bottom(this.$element));var affix=this.getState(scrollHeight,height,offsetTop,offsetBottom);if(this.affixed!=affix){null!=this.unpin&&this.$element.css("top","");var affixType="affix"+(affix?"-"+affix:""),e=$.Event(affixType+".bs.affix");if(this.$element.trigger(e),e.isDefaultPrevented())return;this.affixed=affix,this.unpin="bottom"==affix?this.getPinnedOffset():null,this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace("affix","affixed")+".bs.affix")}"bottom"==affix&&this.$element.offset({top:scrollHeight-height-offsetBottom})}};var old=$.fn.affix;$.fn.affix=Plugin,$.fn.affix.Constructor=Affix,
// AFFIX NO CONFLICT
// =================
$.fn.affix.noConflict=function(){return $.fn.affix=old,this},
// AFFIX DATA-API
// ==============
$(window).on("load",function(){$('[data-spy="affix"]').each(function(){var $spy=$(this),data=$spy.data();data.offset=data.offset||{},null!=data.offsetBottom&&(data.offset.bottom=data.offsetBottom),null!=data.offsetTop&&(data.offset.top=data.offsetTop),Plugin.call($spy,data)})})}(jQuery),/* ========================================================================
 * Bootstrap: alert.js v3.3.0
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function($){"use strict";
// ALERT PLUGIN DEFINITION
// =======================
function Plugin(option){return this.each(function(){var $this=$(this),data=$this.data("bs.alert");data||$this.data("bs.alert",data=new Alert(this)),"string"==typeof option&&data[option].call($this)})}
// ALERT CLASS DEFINITION
// ======================
var dismiss='[data-dismiss="alert"]',Alert=function(el){$(el).on("click",dismiss,this.close)};Alert.VERSION="3.3.0",Alert.TRANSITION_DURATION=150,Alert.prototype.close=function(e){function removeElement(){
// detach from parent, fire event then clean up data
$parent.detach().trigger("closed.bs.alert").remove()}var $this=$(this),selector=$this.attr("data-target");selector||(selector=$this.attr("href"),selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,""));var $parent=$(selector);e&&e.preventDefault(),$parent.length||($parent=$this.closest(".alert")),$parent.trigger(e=$.Event("close.bs.alert")),e.isDefaultPrevented()||($parent.removeClass("in"),$.support.transition&&$parent.hasClass("fade")?$parent.one("bsTransitionEnd",removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION):removeElement())};var old=$.fn.alert;$.fn.alert=Plugin,$.fn.alert.Constructor=Alert,
// ALERT NO CONFLICT
// =================
$.fn.alert.noConflict=function(){return $.fn.alert=old,this},
// ALERT DATA-API
// ==============
$(document).on("click.bs.alert.data-api",dismiss,Alert.prototype.close)}(jQuery),/* ========================================================================
 * Bootstrap: button.js v3.3.0
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function($){"use strict";
// BUTTON PLUGIN DEFINITION
// ========================
function Plugin(option){return this.each(function(){var $this=$(this),data=$this.data("bs.button"),options="object"==typeof option&&option;data||$this.data("bs.button",data=new Button(this,options)),"toggle"==option?data.toggle():option&&data.setState(option)})}
// BUTTON PUBLIC CLASS DEFINITION
// ==============================
var Button=function(element,options){this.$element=$(element),this.options=$.extend({},Button.DEFAULTS,options),this.isLoading=!1};Button.VERSION="3.3.0",Button.DEFAULTS={loadingText:"loading..."},Button.prototype.setState=function(state){var d="disabled",$el=this.$element,val=$el.is("input")?"val":"html",data=$el.data();state+="Text",null==data.resetText&&$el.data("resetText",$el[val]()),
// push to event loop to allow forms to submit
setTimeout($.proxy(function(){$el[val](null==data[state]?this.options[state]:data[state]),"loadingText"==state?(this.isLoading=!0,$el.addClass(d).attr(d,d)):this.isLoading&&(this.isLoading=!1,$el.removeClass(d).removeAttr(d))},this),0)},Button.prototype.toggle=function(){var changed=!0,$parent=this.$element.closest('[data-toggle="buttons"]');if($parent.length){var $input=this.$element.find("input");"radio"==$input.prop("type")&&($input.prop("checked")&&this.$element.hasClass("active")?changed=!1:$parent.find(".active").removeClass("active")),changed&&$input.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));changed&&this.$element.toggleClass("active")};var old=$.fn.button;$.fn.button=Plugin,$.fn.button.Constructor=Button,
// BUTTON NO CONFLICT
// ==================
$.fn.button.noConflict=function(){return $.fn.button=old,this},
// BUTTON DATA-API
// ===============
$(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(e){var $btn=$(e.target);$btn.hasClass("btn")||($btn=$btn.closest(".btn")),Plugin.call($btn,"toggle"),e.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){$(e.target).closest(".btn").toggleClass("focus","focus"==e.type)})}(jQuery),/* ========================================================================
 * Bootstrap: carousel.js v3.3.0
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function($){"use strict";
// CAROUSEL PLUGIN DEFINITION
// ==========================
function Plugin(option){return this.each(function(){var $this=$(this),data=$this.data("bs.carousel"),options=$.extend({},Carousel.DEFAULTS,$this.data(),"object"==typeof option&&option),action="string"==typeof option?option:options.slide;data||$this.data("bs.carousel",data=new Carousel(this,options)),"number"==typeof option?data.to(option):action?data[action]():options.interval&&data.pause().cycle()})}
// CAROUSEL CLASS DEFINITION
// =========================
var Carousel=function(element,options){this.$element=$(element),this.$indicators=this.$element.find(".carousel-indicators"),this.options=options,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",$.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",$.proxy(this.pause,this)).on("mouseleave.bs.carousel",$.proxy(this.cycle,this))};Carousel.VERSION="3.3.0",Carousel.TRANSITION_DURATION=600,Carousel.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},Carousel.prototype.keydown=function(e){switch(e.which){case 37:this.prev();break;case 39:this.next();break;default:return}e.preventDefault()},Carousel.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval)),this},Carousel.prototype.getItemIndex=function(item){return this.$items=item.parent().children(".item"),this.$items.index(item||this.$active)},Carousel.prototype.getItemForDirection=function(direction,active){var delta="prev"==direction?-1:1,activeIndex=this.getItemIndex(active),itemIndex=(activeIndex+delta)%this.$items.length;return this.$items.eq(itemIndex)},Carousel.prototype.to=function(pos){var that=this,activeIndex=this.getItemIndex(this.$active=this.$element.find(".item.active"));// yes, "slid"
return pos>this.$items.length-1||0>pos?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){that.to(pos)}):activeIndex==pos?this.pause().cycle():this.slide(pos>activeIndex?"next":"prev",this.$items.eq(pos))},Carousel.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&$.support.transition&&(this.$element.trigger($.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},Carousel.prototype.next=function(){return this.sliding?void 0:this.slide("next")},Carousel.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},Carousel.prototype.slide=function(type,next){var $active=this.$element.find(".item.active"),$next=next||this.getItemForDirection(type,$active),isCycling=this.interval,direction="next"==type?"left":"right",fallback="next"==type?"first":"last",that=this;if(!$next.length){if(!this.options.wrap)return;$next=this.$element.find(".item")[fallback]()}if($next.hasClass("active"))return this.sliding=!1;var relatedTarget=$next[0],slideEvent=$.Event("slide.bs.carousel",{relatedTarget:relatedTarget,direction:direction});if(this.$element.trigger(slideEvent),!slideEvent.isDefaultPrevented()){if(this.sliding=!0,isCycling&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var $nextIndicator=$(this.$indicators.children()[this.getItemIndex($next)]);$nextIndicator&&$nextIndicator.addClass("active")}var slidEvent=$.Event("slid.bs.carousel",{relatedTarget:relatedTarget,direction:direction});// yes, "slid"
// force reflow
return $.support.transition&&this.$element.hasClass("slide")?($next.addClass(type),$next[0].offsetWidth,$active.addClass(direction),$next.addClass(direction),$active.one("bsTransitionEnd",function(){$next.removeClass([type,direction].join(" ")).addClass("active"),$active.removeClass(["active",direction].join(" ")),that.sliding=!1,setTimeout(function(){that.$element.trigger(slidEvent)},0)}).emulateTransitionEnd(Carousel.TRANSITION_DURATION)):($active.removeClass("active"),$next.addClass("active"),this.sliding=!1,this.$element.trigger(slidEvent)),isCycling&&this.cycle(),this}};var old=$.fn.carousel;$.fn.carousel=Plugin,$.fn.carousel.Constructor=Carousel,
// CAROUSEL NO CONFLICT
// ====================
$.fn.carousel.noConflict=function(){return $.fn.carousel=old,this};
// CAROUSEL DATA-API
// =================
var clickHandler=function(e){var href,$this=$(this),$target=$($this.attr("data-target")||(href=$this.attr("href"))&&href.replace(/.*(?=#[^\s]+$)/,""));// strip for ie7
if($target.hasClass("carousel")){var options=$.extend({},$target.data(),$this.data()),slideIndex=$this.attr("data-slide-to");slideIndex&&(options.interval=!1),Plugin.call($target,options),slideIndex&&$target.data("bs.carousel").to(slideIndex),e.preventDefault()}};$(document).on("click.bs.carousel.data-api","[data-slide]",clickHandler).on("click.bs.carousel.data-api","[data-slide-to]",clickHandler),$(window).on("load",function(){$('[data-ride="carousel"]').each(function(){var $carousel=$(this);Plugin.call($carousel,$carousel.data())})})}(jQuery),/* ========================================================================
 * Bootstrap: collapse.js v3.3.0
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function($){"use strict";function getTargetFromTrigger($trigger){var href,target=$trigger.attr("data-target")||(href=$trigger.attr("href"))&&href.replace(/.*(?=#[^\s]+$)/,"");// strip for ie7
return $(target)}
// COLLAPSE PLUGIN DEFINITION
// ==========================
function Plugin(option){return this.each(function(){var $this=$(this),data=$this.data("bs.collapse"),options=$.extend({},Collapse.DEFAULTS,$this.data(),"object"==typeof option&&option);!data&&options.toggle&&"show"==option&&(options.toggle=!1),data||$this.data("bs.collapse",data=new Collapse(this,options)),"string"==typeof option&&data[option]()})}
// COLLAPSE PUBLIC CLASS DEFINITION
// ================================
var Collapse=function(element,options){this.$element=$(element),this.options=$.extend({},Collapse.DEFAULTS,options),this.$trigger=$(this.options.trigger).filter('[href="#'+element.id+'"], [data-target="#'+element.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};Collapse.VERSION="3.3.0",Collapse.TRANSITION_DURATION=350,Collapse.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},Collapse.prototype.dimension=function(){var hasWidth=this.$element.hasClass("width");return hasWidth?"width":"height"},Collapse.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var activesData,actives=this.$parent&&this.$parent.find("> .panel").children(".in, .collapsing");if(!(actives&&actives.length&&(activesData=actives.data("bs.collapse"),activesData&&activesData.transitioning))){var startEvent=$.Event("show.bs.collapse");if(this.$element.trigger(startEvent),!startEvent.isDefaultPrevented()){actives&&actives.length&&(Plugin.call(actives,"hide"),activesData||actives.data("bs.collapse",null));var dimension=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[dimension](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var complete=function(){this.$element.removeClass("collapsing").addClass("collapse in")[dimension](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!$.support.transition)return complete.call(this);var scrollSize=$.camelCase(["scroll",dimension].join("-"));this.$element.one("bsTransitionEnd",$.proxy(complete,this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])}}}},Collapse.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var startEvent=$.Event("hide.bs.collapse");if(this.$element.trigger(startEvent),!startEvent.isDefaultPrevented()){var dimension=this.dimension();this.$element[dimension](this.$element[dimension]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var complete=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return $.support.transition?void this.$element[dimension](0).one("bsTransitionEnd",$.proxy(complete,this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION):complete.call(this)}}},Collapse.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},Collapse.prototype.getParent=function(){return $(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each($.proxy(function(i,element){var $element=$(element);this.addAriaAndCollapsedClass(getTargetFromTrigger($element),$element)},this)).end()},Collapse.prototype.addAriaAndCollapsedClass=function($element,$trigger){var isOpen=$element.hasClass("in");$element.attr("aria-expanded",isOpen),$trigger.toggleClass("collapsed",!isOpen).attr("aria-expanded",isOpen)};var old=$.fn.collapse;$.fn.collapse=Plugin,$.fn.collapse.Constructor=Collapse,
// COLLAPSE NO CONFLICT
// ====================
$.fn.collapse.noConflict=function(){return $.fn.collapse=old,this},
// COLLAPSE DATA-API
// =================
$(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(e){var $this=$(this);$this.attr("data-target")||e.preventDefault();var $target=getTargetFromTrigger($this),data=$target.data("bs.collapse"),option=data?"toggle":$.extend({},$this.data(),{trigger:this});Plugin.call($target,option)})}(jQuery),/* ========================================================================
 * Bootstrap: dropdown.js v3.3.0
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function($){"use strict";function clearMenus(e){e&&3===e.which||($(backdrop).remove(),$(toggle).each(function(){var $this=$(this),$parent=getParent($this),relatedTarget={relatedTarget:this};$parent.hasClass("open")&&($parent.trigger(e=$.Event("hide.bs.dropdown",relatedTarget)),e.isDefaultPrevented()||($this.attr("aria-expanded","false"),$parent.removeClass("open").trigger("hidden.bs.dropdown",relatedTarget)))}))}function getParent($this){var selector=$this.attr("data-target");selector||(selector=$this.attr("href"),selector=selector&&/#[A-Za-z]/.test(selector)&&selector.replace(/.*(?=#[^\s]*$)/,""));var $parent=selector&&$(selector);return $parent&&$parent.length?$parent:$this.parent()}
// DROPDOWN PLUGIN DEFINITION
// ==========================
function Plugin(option){return this.each(function(){var $this=$(this),data=$this.data("bs.dropdown");data||$this.data("bs.dropdown",data=new Dropdown(this)),"string"==typeof option&&data[option].call($this)})}
// DROPDOWN CLASS DEFINITION
// =========================
var backdrop=".dropdown-backdrop",toggle='[data-toggle="dropdown"]',Dropdown=function(element){$(element).on("click.bs.dropdown",this.toggle)};Dropdown.VERSION="3.3.0",Dropdown.prototype.toggle=function(e){var $this=$(this);if(!$this.is(".disabled, :disabled")){var $parent=getParent($this),isActive=$parent.hasClass("open");if(clearMenus(),!isActive){"ontouchstart"in document.documentElement&&!$parent.closest(".navbar-nav").length&&
// if mobile we use a backdrop because click events don't delegate
$('<div class="dropdown-backdrop"/>').insertAfter($(this)).on("click",clearMenus);var relatedTarget={relatedTarget:this};if($parent.trigger(e=$.Event("show.bs.dropdown",relatedTarget)),e.isDefaultPrevented())return;$this.trigger("focus").attr("aria-expanded","true"),$parent.toggleClass("open").trigger("shown.bs.dropdown",relatedTarget)}return!1}},Dropdown.prototype.keydown=function(e){if(/(38|40|27|32)/.test(e.which)){var $this=$(this);if(e.preventDefault(),e.stopPropagation(),!$this.is(".disabled, :disabled")){var $parent=getParent($this),isActive=$parent.hasClass("open");if(!isActive&&27!=e.which||isActive&&27==e.which)return 27==e.which&&$parent.find(toggle).trigger("focus"),$this.trigger("click");var desc=" li:not(.divider):visible a",$items=$parent.find('[role="menu"]'+desc+', [role="listbox"]'+desc);if($items.length){var index=$items.index(e.target);38==e.which&&index>0&&index--,// up
40==e.which&&index<$items.length-1&&index++,// down
~index||(index=0),$items.eq(index).trigger("focus")}}}};var old=$.fn.dropdown;$.fn.dropdown=Plugin,$.fn.dropdown.Constructor=Dropdown,
// DROPDOWN NO CONFLICT
// ====================
$.fn.dropdown.noConflict=function(){return $.fn.dropdown=old,this},
// APPLY TO STANDARD DROPDOWN ELEMENTS
// ===================================
$(document).on("click.bs.dropdown.data-api",clearMenus).on("click.bs.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.bs.dropdown.data-api",toggle,Dropdown.prototype.toggle).on("keydown.bs.dropdown.data-api",toggle,Dropdown.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',Dropdown.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',Dropdown.prototype.keydown)}(jQuery),/* ========================================================================
 * Bootstrap: tab.js v3.3.0
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function($){"use strict";
// TAB PLUGIN DEFINITION
// =====================
function Plugin(option){return this.each(function(){var $this=$(this),data=$this.data("bs.tab");data||$this.data("bs.tab",data=new Tab(this)),"string"==typeof option&&data[option]()})}
// TAB CLASS DEFINITION
// ====================
var Tab=function(element){this.element=$(element)};Tab.VERSION="3.3.0",Tab.TRANSITION_DURATION=150,Tab.prototype.show=function(){var $this=this.element,$ul=$this.closest("ul:not(.dropdown-menu)"),selector=$this.data("target");if(selector||(selector=$this.attr("href"),selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,"")),!$this.parent("li").hasClass("active")){var $previous=$ul.find(".active:last a"),hideEvent=$.Event("hide.bs.tab",{relatedTarget:$this[0]}),showEvent=$.Event("show.bs.tab",{relatedTarget:$previous[0]});if($previous.trigger(hideEvent),$this.trigger(showEvent),!showEvent.isDefaultPrevented()&&!hideEvent.isDefaultPrevented()){var $target=$(selector);this.activate($this.closest("li"),$ul),this.activate($target,$target.parent(),function(){$previous.trigger({type:"hidden.bs.tab",relatedTarget:$this[0]}),$this.trigger({type:"shown.bs.tab",relatedTarget:$previous[0]})})}}},Tab.prototype.activate=function(element,container,callback){function next(){$active.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),element.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),transition?(element[0].offsetWidth,// reflow for transition
element.addClass("in")):element.removeClass("fade"),element.parent(".dropdown-menu")&&element.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),callback&&callback()}var $active=container.find("> .active"),transition=callback&&$.support.transition&&($active.length&&$active.hasClass("fade")||!!container.find("> .fade").length);$active.length&&transition?$active.one("bsTransitionEnd",next).emulateTransitionEnd(Tab.TRANSITION_DURATION):next(),$active.removeClass("in")};var old=$.fn.tab;$.fn.tab=Plugin,$.fn.tab.Constructor=Tab,
// TAB NO CONFLICT
// ===============
$.fn.tab.noConflict=function(){return $.fn.tab=old,this};
// TAB DATA-API
// ============
var clickHandler=function(e){e.preventDefault(),Plugin.call($(this),"show")};$(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',clickHandler).on("click.bs.tab.data-api",'[data-toggle="pill"]',clickHandler)}(jQuery),/* ========================================================================
 * Bootstrap: transition.js v3.3.0
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function($){"use strict";
// CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
// ============================================================
function transitionEnd(){var el=document.createElement("bootstrap"),transEndEventNames={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var name in transEndEventNames)if(void 0!==el.style[name])return{end:transEndEventNames[name]};return!1}
// http://blog.alexmaccaw.com/css-transitions
$.fn.emulateTransitionEnd=function(duration){var called=!1,$el=this;$(this).one("bsTransitionEnd",function(){called=!0});var callback=function(){called||$($el).trigger($.support.transition.end)};return setTimeout(callback,duration),this},$(function(){$.support.transition=transitionEnd(),$.support.transition&&($.event.special.bsTransitionEnd={bindType:$.support.transition.end,delegateType:$.support.transition.end,handle:function(e){return $(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.0
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function($){"use strict";
// SCROLLSPY CLASS DEFINITION
// ==========================
function ScrollSpy(element,options){var process=$.proxy(this.process,this);this.$body=$("body"),this.$scrollElement=$($(element).is("body")?window:element),this.options=$.extend({},ScrollSpy.DEFAULTS,options),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",process),this.refresh(),this.process()}
// SCROLLSPY PLUGIN DEFINITION
// ===========================
function Plugin(option){return this.each(function(){var $this=$(this),data=$this.data("bs.scrollspy"),options="object"==typeof option&&option;data||$this.data("bs.scrollspy",data=new ScrollSpy(this,options)),"string"==typeof option&&data[option]()})}ScrollSpy.VERSION="3.3.0",ScrollSpy.DEFAULTS={offset:10},ScrollSpy.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},ScrollSpy.prototype.refresh=function(){var offsetMethod="offset",offsetBase=0;$.isWindow(this.$scrollElement[0])||(offsetMethod="position",offsetBase=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var self=this;this.$body.find(this.selector).map(function(){var $el=$(this),href=$el.data("target")||$el.attr("href"),$href=/^#./.test(href)&&$(href);return $href&&$href.length&&$href.is(":visible")&&[[$href[offsetMethod]().top+offsetBase,href]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){self.offsets.push(this[0]),self.targets.push(this[1])})},ScrollSpy.prototype.process=function(){var i,scrollTop=this.$scrollElement.scrollTop()+this.options.offset,scrollHeight=this.getScrollHeight(),maxScroll=this.options.offset+scrollHeight-this.$scrollElement.height(),offsets=this.offsets,targets=this.targets,activeTarget=this.activeTarget;if(this.scrollHeight!=scrollHeight&&this.refresh(),scrollTop>=maxScroll)return activeTarget!=(i=targets[targets.length-1])&&this.activate(i);if(activeTarget&&scrollTop<offsets[0])return this.activeTarget=null,this.clear();for(i=offsets.length;i--;)activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(!offsets[i+1]||scrollTop<=offsets[i+1])&&this.activate(targets[i])},ScrollSpy.prototype.activate=function(target){this.activeTarget=target,this.clear();var selector=this.selector+'[data-target="'+target+'"],'+this.selector+'[href="'+target+'"]',active=$(selector).parents("li").addClass("active");active.parent(".dropdown-menu").length&&(active=active.closest("li.dropdown").addClass("active")),active.trigger("activate.bs.scrollspy")},ScrollSpy.prototype.clear=function(){$(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var old=$.fn.scrollspy;$.fn.scrollspy=Plugin,$.fn.scrollspy.Constructor=ScrollSpy,
// SCROLLSPY NO CONFLICT
// =====================
$.fn.scrollspy.noConflict=function(){return $.fn.scrollspy=old,this},
// SCROLLSPY DATA-API
// ==================
$(window).on("load.bs.scrollspy.data-api",function(){$('[data-spy="scroll"]').each(function(){var $spy=$(this);Plugin.call($spy,$spy.data())})})}(jQuery),/* ========================================================================
 * Bootstrap: modal.js v3.3.0
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function($){"use strict";
// MODAL PLUGIN DEFINITION
// =======================
function Plugin(option,_relatedTarget){return this.each(function(){var $this=$(this),data=$this.data("bs.modal"),options=$.extend({},Modal.DEFAULTS,$this.data(),"object"==typeof option&&option);data||$this.data("bs.modal",data=new Modal(this,options)),"string"==typeof option?data[option](_relatedTarget):options.show&&data.show(_relatedTarget)})}
// MODAL CLASS DEFINITION
// ======================
var Modal=function(element,options){this.options=options,this.$body=$(document.body),this.$element=$(element),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,$.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};Modal.VERSION="3.3.0",Modal.TRANSITION_DURATION=300,Modal.BACKDROP_TRANSITION_DURATION=150,Modal.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},Modal.prototype.toggle=function(_relatedTarget){return this.isShown?this.hide():this.show(_relatedTarget)},Modal.prototype.show=function(_relatedTarget){var that=this,e=$.Event("show.bs.modal",{relatedTarget:_relatedTarget});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',$.proxy(this.hide,this)),this.backdrop(function(){var transition=$.support.transition&&that.$element.hasClass("fade");that.$element.parent().length||that.$element.appendTo(that.$body),that.$element.show().scrollTop(0),transition&&that.$element[0].offsetWidth,that.$element.addClass("in").attr("aria-hidden",!1),that.enforceFocus();var e=$.Event("shown.bs.modal",{relatedTarget:_relatedTarget});transition?that.$element.find(".modal-dialog").one("bsTransitionEnd",function(){that.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(Modal.TRANSITION_DURATION):that.$element.trigger("focus").trigger(e)}))},Modal.prototype.hide=function(e){e&&e.preventDefault(),e=$.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),$(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),$.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",$.proxy(this.hideModal,this)).emulateTransitionEnd(Modal.TRANSITION_DURATION):this.hideModal())},Modal.prototype.enforceFocus=function(){$(document).off("focusin.bs.modal").on("focusin.bs.modal",$.proxy(function(e){this.$element[0]===e.target||this.$element.has(e.target).length||this.$element.trigger("focus")},this))},Modal.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",$.proxy(function(e){27==e.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},Modal.prototype.hideModal=function(){var that=this;this.$element.hide(),this.backdrop(function(){that.$body.removeClass("modal-open"),that.resetScrollbar(),that.$element.trigger("hidden.bs.modal")})},Modal.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},Modal.prototype.backdrop=function(callback){var that=this,animate=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate;if(this.$backdrop=$('<div class="modal-backdrop '+animate+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",$.proxy(function(e){e.target===e.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),doAnimate&&this.$backdrop[0].offsetWidth,// force reflow
this.$backdrop.addClass("in"),!callback)return;doAnimate?this.$backdrop.one("bsTransitionEnd",callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callback()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var callbackRemove=function(){that.removeBackdrop(),callback&&callback()};$.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callbackRemove()}else callback&&callback()},Modal.prototype.checkScrollbar=function(){this.scrollbarWidth=this.measureScrollbar()},Modal.prototype.setScrollbar=function(){var bodyPad=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",bodyPad+this.scrollbarWidth)},Modal.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},Modal.prototype.measureScrollbar=function(){// thx walsh
if(document.body.clientWidth>=window.innerWidth)return 0;var scrollDiv=document.createElement("div");scrollDiv.className="modal-scrollbar-measure",this.$body.append(scrollDiv);var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth;return this.$body[0].removeChild(scrollDiv),scrollbarWidth};var old=$.fn.modal;$.fn.modal=Plugin,$.fn.modal.Constructor=Modal,
// MODAL NO CONFLICT
// =================
$.fn.modal.noConflict=function(){return $.fn.modal=old,this},
// MODAL DATA-API
// ==============
$(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(e){var $this=$(this),href=$this.attr("href"),$target=$($this.attr("data-target")||href&&href.replace(/.*(?=#[^\s]+$)/,"")),option=$target.data("bs.modal")?"toggle":$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data());$this.is("a")&&e.preventDefault(),$target.one("show.bs.modal",function(showEvent){showEvent.isDefaultPrevented()||// only register focus restorer if modal will actually get shown
$target.one("hidden.bs.modal",function(){$this.is(":visible")&&$this.trigger("focus")})}),Plugin.call($target,option,this)})}(jQuery),/* ========================================================================
 * Bootstrap: tooltip.js v3.3.0
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function($){"use strict";
// TOOLTIP PLUGIN DEFINITION
// =========================
function Plugin(option){return this.each(function(){var $this=$(this),data=$this.data("bs.tooltip"),options="object"==typeof option&&option,selector=options&&options.selector;(data||"destroy"!=option)&&(selector?(data||$this.data("bs.tooltip",data={}),data[selector]||(data[selector]=new Tooltip(this,options))):data||$this.data("bs.tooltip",data=new Tooltip(this,options)),"string"==typeof option&&data[option]())})}
// TOOLTIP PUBLIC CLASS DEFINITION
// ===============================
var Tooltip=function(element,options){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",element,options)};Tooltip.VERSION="3.3.0",Tooltip.TRANSITION_DURATION=150,Tooltip.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},Tooltip.prototype.init=function(type,element,options){this.enabled=!0,this.type=type,this.$element=$(element),this.options=this.getOptions(options),this.$viewport=this.options.viewport&&$(this.options.viewport.selector||this.options.viewport);for(var triggers=this.options.trigger.split(" "),i=triggers.length;i--;){var trigger=triggers[i];if("click"==trigger)this.$element.on("click."+this.type,this.options.selector,$.proxy(this.toggle,this));else if("manual"!=trigger){var eventIn="hover"==trigger?"mouseenter":"focusin",eventOut="hover"==trigger?"mouseleave":"focusout";this.$element.on(eventIn+"."+this.type,this.options.selector,$.proxy(this.enter,this)),this.$element.on(eventOut+"."+this.type,this.options.selector,$.proxy(this.leave,this))}}this.options.selector?this._options=$.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},Tooltip.prototype.getDefaults=function(){return Tooltip.DEFAULTS},Tooltip.prototype.getOptions=function(options){return options=$.extend({},this.getDefaults(),this.$element.data(),options),options.delay&&"number"==typeof options.delay&&(options.delay={show:options.delay,hide:options.delay}),options},Tooltip.prototype.getDelegateOptions=function(){var options={},defaults=this.getDefaults();return this._options&&$.each(this._options,function(key,value){defaults[key]!=value&&(options[key]=value)}),options},Tooltip.prototype.enter=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data("bs."+this.type);return self&&self.$tip&&self.$tip.is(":visible")?void(self.hoverState="in"):(self||(self=new this.constructor(obj.currentTarget,this.getDelegateOptions()),$(obj.currentTarget).data("bs."+this.type,self)),clearTimeout(self.timeout),self.hoverState="in",self.options.delay&&self.options.delay.show?void(self.timeout=setTimeout(function(){"in"==self.hoverState&&self.show()},self.options.delay.show)):self.show())},Tooltip.prototype.leave=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data("bs."+this.type);return self||(self=new this.constructor(obj.currentTarget,this.getDelegateOptions()),$(obj.currentTarget).data("bs."+this.type,self)),clearTimeout(self.timeout),self.hoverState="out",self.options.delay&&self.options.delay.hide?void(self.timeout=setTimeout(function(){"out"==self.hoverState&&self.hide()},self.options.delay.hide)):self.hide()},Tooltip.prototype.show=function(){var e=$.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var inDom=$.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!inDom)return;var that=this,$tip=this.tip(),tipId=this.getUID(this.type);this.setContent(),$tip.attr("id",tipId),this.$element.attr("aria-describedby",tipId),this.options.animation&&$tip.addClass("fade");var placement="function"==typeof this.options.placement?this.options.placement.call(this,$tip[0],this.$element[0]):this.options.placement,autoToken=/\s?auto?\s?/i,autoPlace=autoToken.test(placement);autoPlace&&(placement=placement.replace(autoToken,"")||"top"),$tip.detach().css({top:0,left:0,display:"block"}).addClass(placement).data("bs."+this.type,this),this.options.container?$tip.appendTo(this.options.container):$tip.insertAfter(this.$element);var pos=this.getPosition(),actualWidth=$tip[0].offsetWidth,actualHeight=$tip[0].offsetHeight;if(autoPlace){var orgPlacement=placement,$container=this.options.container?$(this.options.container):this.$element.parent(),containerDim=this.getPosition($container);placement="bottom"==placement&&pos.bottom+actualHeight>containerDim.bottom?"top":"top"==placement&&pos.top-actualHeight<containerDim.top?"bottom":"right"==placement&&pos.right+actualWidth>containerDim.width?"left":"left"==placement&&pos.left-actualWidth<containerDim.left?"right":placement,$tip.removeClass(orgPlacement).addClass(placement)}var calculatedOffset=this.getCalculatedOffset(placement,pos,actualWidth,actualHeight);this.applyPlacement(calculatedOffset,placement);var complete=function(){var prevHoverState=that.hoverState;that.$element.trigger("shown.bs."+that.type),that.hoverState=null,"out"==prevHoverState&&that.leave(that)};$.support.transition&&this.$tip.hasClass("fade")?$tip.one("bsTransitionEnd",complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION):complete()}},Tooltip.prototype.applyPlacement=function(offset,placement){var $tip=this.tip(),width=$tip[0].offsetWidth,height=$tip[0].offsetHeight,marginTop=parseInt($tip.css("margin-top"),10),marginLeft=parseInt($tip.css("margin-left"),10);
// we must check for NaN for ie 8/9
isNaN(marginTop)&&(marginTop=0),isNaN(marginLeft)&&(marginLeft=0),offset.top=offset.top+marginTop,offset.left=offset.left+marginLeft,
// $.fn.offset doesn't round pixel values
// so we use setOffset directly with our own function B-0
$.offset.setOffset($tip[0],$.extend({using:function(props){$tip.css({top:Math.round(props.top),left:Math.round(props.left)})}},offset),0),$tip.addClass("in");
// check to see if placing tip in new offset caused the tip to resize itself
var actualWidth=$tip[0].offsetWidth,actualHeight=$tip[0].offsetHeight;"top"==placement&&actualHeight!=height&&(offset.top=offset.top+height-actualHeight);var delta=this.getViewportAdjustedDelta(placement,offset,actualWidth,actualHeight);delta.left?offset.left+=delta.left:offset.top+=delta.top;var isVertical=/top|bottom/.test(placement),arrowDelta=isVertical?2*delta.left-width+actualWidth:2*delta.top-height+actualHeight,arrowOffsetPosition=isVertical?"offsetWidth":"offsetHeight";$tip.offset(offset),this.replaceArrow(arrowDelta,$tip[0][arrowOffsetPosition],isVertical)},Tooltip.prototype.replaceArrow=function(delta,dimension,isHorizontal){this.arrow().css(isHorizontal?"left":"top",50*(1-delta/dimension)+"%").css(isHorizontal?"top":"left","")},Tooltip.prototype.setContent=function(){var $tip=this.tip(),title=this.getTitle();$tip.find(".tooltip-inner")[this.options.html?"html":"text"](title),$tip.removeClass("fade in top bottom left right")},Tooltip.prototype.hide=function(callback){function complete(){"in"!=that.hoverState&&$tip.detach(),that.$element.removeAttr("aria-describedby").trigger("hidden.bs."+that.type),callback&&callback()}var that=this,$tip=this.tip(),e=$.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:($tip.removeClass("in"),$.support.transition&&this.$tip.hasClass("fade")?$tip.one("bsTransitionEnd",complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION):complete(),this.hoverState=null,this)},Tooltip.prototype.fixTitle=function(){var $e=this.$element;($e.attr("title")||"string"!=typeof $e.attr("data-original-title"))&&$e.attr("data-original-title",$e.attr("title")||"").attr("title","")},Tooltip.prototype.hasContent=function(){return this.getTitle()},Tooltip.prototype.getPosition=function($element){$element=$element||this.$element;var el=$element[0],isBody="BODY"==el.tagName,elRect=el.getBoundingClientRect();null==elRect.width&&(
// width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
elRect=$.extend({},elRect,{width:elRect.right-elRect.left,height:elRect.bottom-elRect.top}));var elOffset=isBody?{top:0,left:0}:$element.offset(),scroll={scroll:isBody?document.documentElement.scrollTop||document.body.scrollTop:$element.scrollTop()},outerDims=isBody?{width:$(window).width(),height:$(window).height()}:null;return $.extend({},elRect,scroll,outerDims,elOffset)},Tooltip.prototype.getCalculatedOffset=function(placement,pos,actualWidth,actualHeight){/* placement == 'right' */
return"bottom"==placement?{top:pos.top+pos.height,left:pos.left+pos.width/2-actualWidth/2}:"top"==placement?{top:pos.top-actualHeight,left:pos.left+pos.width/2-actualWidth/2}:"left"==placement?{top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth}:{top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width}},Tooltip.prototype.getViewportAdjustedDelta=function(placement,pos,actualWidth,actualHeight){var delta={top:0,left:0};if(!this.$viewport)return delta;var viewportPadding=this.options.viewport&&this.options.viewport.padding||0,viewportDimensions=this.getPosition(this.$viewport);if(/right|left/.test(placement)){var topEdgeOffset=pos.top-viewportPadding-viewportDimensions.scroll,bottomEdgeOffset=pos.top+viewportPadding-viewportDimensions.scroll+actualHeight;topEdgeOffset<viewportDimensions.top?// top overflow
delta.top=viewportDimensions.top-topEdgeOffset:bottomEdgeOffset>viewportDimensions.top+viewportDimensions.height&&(// bottom overflow
delta.top=viewportDimensions.top+viewportDimensions.height-bottomEdgeOffset)}else{var leftEdgeOffset=pos.left-viewportPadding,rightEdgeOffset=pos.left+viewportPadding+actualWidth;leftEdgeOffset<viewportDimensions.left?// left overflow
delta.left=viewportDimensions.left-leftEdgeOffset:rightEdgeOffset>viewportDimensions.width&&(// right overflow
delta.left=viewportDimensions.left+viewportDimensions.width-rightEdgeOffset)}return delta},Tooltip.prototype.getTitle=function(){var title,$e=this.$element,o=this.options;return title=$e.attr("data-original-title")||("function"==typeof o.title?o.title.call($e[0]):o.title)},Tooltip.prototype.getUID=function(prefix){do prefix+=~~(1e6*Math.random());while(document.getElementById(prefix));return prefix},Tooltip.prototype.tip=function(){return this.$tip=this.$tip||$(this.options.template)},Tooltip.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},Tooltip.prototype.enable=function(){this.enabled=!0},Tooltip.prototype.disable=function(){this.enabled=!1},Tooltip.prototype.toggleEnabled=function(){this.enabled=!this.enabled},Tooltip.prototype.toggle=function(e){var self=this;e&&(self=$(e.currentTarget).data("bs."+this.type),self||(self=new this.constructor(e.currentTarget,this.getDelegateOptions()),$(e.currentTarget).data("bs."+this.type,self))),self.tip().hasClass("in")?self.leave(self):self.enter(self)},Tooltip.prototype.destroy=function(){var that=this;clearTimeout(this.timeout),this.hide(function(){that.$element.off("."+that.type).removeData("bs."+that.type)})};var old=$.fn.tooltip;$.fn.tooltip=Plugin,$.fn.tooltip.Constructor=Tooltip,
// TOOLTIP NO CONFLICT
// ===================
$.fn.tooltip.noConflict=function(){return $.fn.tooltip=old,this}}(jQuery),/* ========================================================================
 * Bootstrap: popover.js v3.3.0
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function($){"use strict";
// POPOVER PLUGIN DEFINITION
// =========================
function Plugin(option){return this.each(function(){var $this=$(this),data=$this.data("bs.popover"),options="object"==typeof option&&option,selector=options&&options.selector;(data||"destroy"!=option)&&(selector?(data||$this.data("bs.popover",data={}),data[selector]||(data[selector]=new Popover(this,options))):data||$this.data("bs.popover",data=new Popover(this,options)),"string"==typeof option&&data[option]())})}
// POPOVER PUBLIC CLASS DEFINITION
// ===============================
var Popover=function(element,options){this.init("popover",element,options)};if(!$.fn.tooltip)throw new Error("Popover requires tooltip.js");Popover.VERSION="3.3.0",Popover.DEFAULTS=$.extend({},$.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),
// NOTE: POPOVER EXTENDS tooltip.js
// ================================
Popover.prototype=$.extend({},$.fn.tooltip.Constructor.prototype),Popover.prototype.constructor=Popover,Popover.prototype.getDefaults=function(){return Popover.DEFAULTS},Popover.prototype.setContent=function(){var $tip=this.tip(),title=this.getTitle(),content=this.getContent();$tip.find(".popover-title")[this.options.html?"html":"text"](title),$tip.find(".popover-content").children().detach().end()[// we use append for html objects to maintain js events
this.options.html?"string"==typeof content?"html":"append":"text"](content),$tip.removeClass("fade top bottom left right in"),
// IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
// this manually by checking the contents.
$tip.find(".popover-title").html()||$tip.find(".popover-title").hide()},Popover.prototype.hasContent=function(){return this.getTitle()||this.getContent()},Popover.prototype.getContent=function(){var $e=this.$element,o=this.options;return $e.attr("data-content")||("function"==typeof o.content?o.content.call($e[0]):o.content)},Popover.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},Popover.prototype.tip=function(){return this.$tip||(this.$tip=$(this.options.template)),this.$tip};var old=$.fn.popover;$.fn.popover=Plugin,$.fn.popover.Constructor=Popover,
// POPOVER NO CONFLICT
// ===================
$.fn.popover.noConflict=function(){return $.fn.popover=old,this}}(jQuery);