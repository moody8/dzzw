(function(a,c){var b="fe-temp-tabs-id";a.extend(a.ui.tabs.prototype.options,{lazyImg:"data-lazy-src",lazyHtml:"fe-lazy-html",isPreLoad:true});a.extend(a.ui.tabs.prototype,{_lazyImg:function(d){var e=this.options.lazyImg,f=this._getBoxes(d).find("img["+e+"]");this._setImgsAttr(f)},_lazyHtml:function(d){var e=this._getBoxes(d);this._setLazyHTML(e,d)},_getBoxes:function(d){var e=a(this.boxes[d]);if(this.options.isPreLoad===true){e=e.add(a(this.boxes[d+1]))}return e},_lazyScrollImg:function(e){var d=this.options.lazyImg,f=e.find("img["+d+"]");this._setImgsAttr(f)},_lazyScrollHtml:function(e){var f=this.options.lazyHtml,d=e.find("textarea."+f);this._setLazyHTML(e)},_setImgsAttr:function(e){var d=this.options.lazyImg;if(e.length>0){e.each(function(f){a(this).attr("src",a(this).attr(d));a(this).removeAttr(d)})}},_setLazyHTML:function(f,e){var d=this;f.each(function(j){var k=f.eq(j),g=k.find("textarea."+d.options.lazyHtml),h=g.length;if(h>0){var m=b+"-"+(Math.floor(Math.random()*10000));g.each(function(n){var l=a(this).val();if(n===h-1){l+="<span id="+m+"></span>"}a(this).replaceWith(l)});d._available(m,function(){var i=(e)?{index:e,boxes:k}:{boxes:k};a("#"+m).remove();d._trigger("after",null,i)},k)}})},_available:function(h,d,g){if(!h||!a.isFunction(d)){return}var f=1,e=a.later(40,g,function(){if(a("#"+h).length>0&&!!(d()||1)||++f>500){e.cancel()}},[],true)}})})(jQuery);