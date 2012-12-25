("dialog" in jQuery.fn)||(function(c,d){var a=c.util.ua.ie6,b;c.widget("ui.dialog",{options:{fixed:false,center:false,modalCSS:{backgroundColor:"#000",opacity:0.3},css:{left:0,top:0},fadeIn:false,fadeOut:false,modal:true,draggable:false,timeout:0},_create:function(){var e=this,h=e.options,f=e.widget(),g;h.shim=h.shim||h.bgiframe;e.position={left:h.css.left,top:h.css.top};if(f[0].style){e.elementDisplay=f[0].style.display;e.elementPosition=f[0].style.position}e.elementParent=f.parent();if(a){c("input:checkbox,input:radio",f).each(function(){this.defaultChecked=this.checked})}g=(e.contentLyr=c("<div>",{"class":"ui-dialog",css:c.extend({display:"none",position:(!a&&h.fixed)?"fixed":"absolute"},h.css||{})}).appendTo("body").append(f.show()));if(h.modal){c.ui.dialog.overlay.create(e);g.css("z-index",b.zIndex++).bind("keydown.ui-dialog",function(k){if(k.keyCode!==c.ui.keyCode.TAB){return}var j=c(":tabbable",this),l=j.filter(":first"),i=j.filter(":last");if(k.target==i[0]&&!k.shiftKey){l.focus(1);return false}else{if(k.target===l[0]&&k.shiftKey){i.focus(1);return false}}})}else{g.css("z-index",b.zIndex++);if(h.shim){g.bgiframe()}}if(a){if(h.fixed){c(window).bind("scroll.ui-dialog",c.proxy(function(i){this._offsetContent()},e))}}if(h.fadeIn){e.isAnimated=true;g.fadeIn(h.fadeIn,function(){e.isAnimated=false;e._trigger("open")})}else{g.show();e._trigger("open")}if(h.center){e._center();if(h.fixed){c(window).bind("resize.ui-dialog",c.proxy(e,"_center"))}}else{e._offsetContent()}if(h.draggable&&c.fn.draggable){e._makeDraggable()}if(h.timeout){e.timeout=setTimeout(c.proxy(e,"close"),(h.fadeIn||0)+h.timeout)}},destroy:function(){var e=this,j=e.options,g=e.widget(),i=e.contentLyr,k=e.elementParent,f=e.elementPosition,h=e.elementDisplay;if(k.length){if(a){c("input:checkbox,input:radio",i).each(function(){this.defaultChecked=this.checked})}g.css({position:f||"",display:h||""});k.append(g);e.elementParent=e.elementPosition=e.elementDisplay=null}c.Widget.prototype.destroy.apply(e,arguments);c(window).unbind(".ui-dialog");i.unbind(".ui-dialog").remove();e._trigger("close");e.contentLyr=null;e.isAnimated=false},_makeDraggable:function(){var e=this,f=e.options;e.contentLyr.draggable(f.draggable===true?d:f.draggable)},close:function(){var e=this;if(e.isAnimated){c.log("close: another dialog is closing!");return}var g=e.options,f=e.contentLyr;if(!e._trigger("beforeClose")){return}if(e.timeout){clearTimeout(e.timeout);e.timeout=null}if(g.modal){c.ui.dialog.overlay.close(e)}a&&f.bgiframe("close");if(g.fadeOut){e.isAnimated=true;f.fadeOut(g.fadeOut,c.proxy(e,"destroy"))}else{e.destroy()}},_setOption:function(g,h){var e=this;switch(g){case"zIndex":b.zIndex=h;break;case"css":case"modalCSS":c.extend(e.options.key,h);break;case"draggable":var f=e.contentLyr.is(":data(draggable)");if(f&&!h){e.contentLyr.draggable("destroy")}if(!f&&h){e._makeDraggable()}break}},_offsetContent:function(){var f=this,i=f.options,h=c(window),e=f.position,g=((!a&&i.fixed)?0:h.scrollTop())+e.top;f.contentLyr.css({left:((!a&&i.fixed)?0:h.scrollLeft())+e.left,top:g<0?0:g})},_center:function(){var e=this,h=e.options,f=c(window),g=e.contentLyr;c.extend(e.position,{left:(f.width()-g.width())/2,top:(f.height()-g.height())/2});e._offsetContent()}});c.extend(c.ui.dialog,{version:"1.0",overlay:function(e){c.ui.dialog.overlay.create(e)}});c.extend(c.ui.dialog.overlay,{dialogs:[],maxZ:0,create:function(g){var f=this,j=g.options,h=f.modal,i=c(document),e=c(document.body);f.dialogs.push(g);if(h){h.css("z-index",(g.zIndex=f.maxZ=b.zIndex++));j.shim&&h.bgiframe("close")}else{i.bind("keydown.ui-dialog-overlay,keypress.ui-dialog-overlay",function(l){var k=c.ui.dialog.overlay.dialogs;if(l.target.nodeName!=="HTML"&&!c.contains(k[k.length-1].contentLyr[0],l.target)&&c(l.target).zIndex()<c.ui.dialog.overlay.maxZ){return false}});h=(f.modal=c("<div>",{"class":"ui-dialog-overlay",css:c.extend(j.modalCSS,{display:"none",zIndex:(g.zIndex=f.maxZ=b.zIndex++),left:0,top:0},(a?{position:"absolute",width:e.width(),height:i.height()}:{position:"fixed",width:"100%",height:"100%"}))}).attr("tabindex","-1").appendTo(e));if(a){c(window).bind("resize.ui-dialog-overlay",function(){h.css({width:e.width(),height:i.height()})})}if(j.fadeIn){h.fadeIn(j.fadeIn,function(){if(j.shim){h.bgiframe()}})}else{h.show();if(j.shim){h.bgiframe()}}}},close:function(h){var f=this,k=h.options,j=f.dialogs,g=j.indexOf(h),e=j.length;if(g===e-1){j.pop();if(e>1){f.modal.css("z-index",(f.maxZ=j[e-2].zIndex))}else{f._destroy()}}else{j.splice(g,1)}},_destroy:function(){var e=this;c(document).unbind(".ui-dialog-overlay");if(a){c(window).unbind(".ui-dialog-overlay")}e.modal.remove();e.modal=null}});b=c.ui.dialog;b.zIndex=2000;c.add("ui-dialog")})(jQuery);