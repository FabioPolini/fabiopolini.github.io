"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[3566],{93566:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var o=a(94367),l=a(27216),n=a(13790),r=a(24769),u=a(62471);const s=[{text:"About Jupyter",url:"https://jupyter.org"},{text:"Markdown Reference",url:"https://commonmark.org/help/"}];var c;!function(e){e.open="help:open",e.shortcuts="help:shortcuts",e.about="help:about"}(c||(c={}));const m={id:"@retrolab/help-extension:plugin",autoStart:!0,requires:[n.ITranslator],optional:[l.IMainMenu],activate:(e,t,a)=>{const{commands:l}=e,n=t.load("retrolab");l.addCommand(c.open,{label:e=>e.text,execute:e=>{const t=e.url;window.open(t)}}),l.addCommand(c.shortcuts,{label:n.__("Keyboard Shortcuts"),execute:()=>{const e=u.createElement("span",{className:"jp-AboutRetro-about-header"},u.createElement("div",{className:"jp-AboutRetro-about-header-info"},n.__("Keyboard Shortcuts"))),t=u.createElement("table",{className:"jp-AboutRetro-shortcuts"},u.createElement("thead",null,u.createElement("tr",null,u.createElement("th",null,n.__("Name")),u.createElement("th",null,n.__("Shortcut")))),u.createElement("tbody",null,l.keyBindings.filter((e=>l.isEnabled(e.command))).map(((e,t)=>u.createElement("tr",{key:t},u.createElement("td",null,l.label(e.command)),u.createElement("td",null,u.createElement("pre",null,e.keys.join(", "))))))));return(0,o.showDialog)({title:e,body:t,buttons:[o.Dialog.createButton({label:n.__("Dismiss"),className:"jp-AboutRetro-about-button jp-mod-reject jp-mod-styled"})]})}}),l.addCommand(c.about,{label:n.__("About %1",e.name),execute:()=>{const t=u.createElement(u.Fragment,null,u.createElement("span",{className:"jp-AboutRetro-header"},u.createElement(r.retroIcon.react,{height:"256px",width:"auto"}))),a=n.__("RETROLAB ON GITHUB"),l=u.createElement("span",null,u.createElement("a",{href:"https://github.com/jupyterlab/retrolab",target:"_blank",rel:"noopener noreferrer",className:"jp-Button-flat jp-AboutRetro-about-externalLinks"},a)),s=n.__("Version: %1",e.version),c=u.createElement(u.Fragment,null,u.createElement("span",{className:"jp-AboutRetro-body"},s),u.createElement("div",null,l)),m=new o.Dialog({title:t,body:c,buttons:[o.Dialog.createButton({label:n.__("Dismiss"),className:"jp-AboutRetro-about-button jp-mod-reject jp-mod-styled"})]});m.addClass("jp-AboutRetro"),m.launch()}});const m=s.map((e=>({args:e,command:c.open})));a&&(a.helpMenu.addGroup([{command:c.about}]),a.helpMenu.addGroup([{command:c.shortcuts}]),a.helpMenu.addGroup(m))}}}}]);
//# sourceMappingURL=3566.c1d33f5.js.map