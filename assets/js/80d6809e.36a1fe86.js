"use strict";(self.webpackChunkdoc_api_whats_app=self.webpackChunkdoc_api_whats_app||[]).push([[7],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:4},l=void 0,i={unversionedId:"API_WhatsApp-webjs/Archivo_html",id:"API_WhatsApp-webjs/Archivo_html",title:"Archivo_html",description:"Modicar el archivo html",source:"@site/docs/API_WhatsApp-webjs/Archivo_html.md",sourceDirName:"API_WhatsApp-webjs",slug:"/API_WhatsApp-webjs/Archivo_html",permalink:"/docusaurus_web/docs/API_WhatsApp-webjs/Archivo_html",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API_WhatsApp-webjs/Archivo_html.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Iniciar_Authenticacion",permalink:"/docusaurus_web/docs/API_WhatsApp-webjs/Iniciar_Authenticacion"},next:{title:"Metodos_POST",permalink:"/docusaurus_web/docs/API_WhatsApp-webjs/Metodos_POST"}},s={},c=[{value:"Modicar el archivo html",id:"modicar-el-archivo-html",level:2},{value:"Agregar Socket en el html",id:"agregar-socket-en-el-html",level:3},{value:"Crear un evento",id:"crear-un-evento",level:3},{value:"Crear un estilo de css el html",id:"crear-un-estilo-de-css-el-html",level:3},{value:"Iniciar nuesta la aplicacion",id:"iniciar-nuesta-la-aplicacion",level:2},{value:"Configurar el Package.json",id:"configurar-el-packagejson",level:3},{value:"Configurar el app.js",id:"configurar-el-appjs",level:3}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"modicar-el-archivo-html"},"Modicar el archivo html"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Aqui editaremos el archivo html para poder generar el qr")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div class="container" id="app">\n    <h1>WhatsApp API</h1>\n    <div class="qr">\n        <img src="" alt="" id="qrcode" />\n    </div>\n    <h3>Registros</h3>\n    <ul class="logs"></ul>\n    <ul class="chats"></ul>\n</div>\n')),(0,r.kt)("h3",{id:"agregar-socket-en-el-html"},"Agregar Socket en el html"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Una vez hecho eso seguiros con el script de socket ",(0,r.kt)("strong",{parentName:"li"},"Esto lo agregamos abajo de la clase container"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="CDN de Socket"',title:'"CDN',de:!0,'Socket"':!0},'<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.5.4/socket.io.js" crossorigin="anonymous"><\/script>\n')),(0,r.kt)("admonition",{title:"Version actual de Socket",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"  ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://cdnjs.com/libraries/socket.io"},"Ver Aqui")))),(0,r.kt)("h3",{id:"crear-un-evento"},"Crear un evento"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Este codigo lo pegamos abajo del scrip cdn socket")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Agregamos un eveto para poder generar el QR y mandarlo al navegador, con el socket haremos que se ejecute en el puerto configurado")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'   <script>\n        document.addEventListener("DOMContentLoaded", () => {\n            let socket = io("http://localhost:6060", {\n                path: "/socket.io"\n            });\n\n            socket.on("message", (msg) => {\n                let logs = document.querySelector(".logs");\n                let li = document.createElement("li");\n                li.textContent = msg;\n                logs.appendChild(li);\n            });\n\n            socket.on("qr", (src) => {\n                let qrcode = document.querySelector("#qrcode");\n                qrcode.src = src;\n                qrcode.style.display = "block";\n            });\n\n            socket.on("ready", (data) => {\n                document.querySelector("#qrcode").style.display = "none";\n            });\n\n            socket.on("authenticated", (data) => {\n                document.querySelector("#qrcode").style.display = "none";\n            });\n        });\n    <\/script>\n')),(0,r.kt)("h3",{id:"crear-un-estilo-de-css-el-html"},"Crear un estilo de css el html"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"con la etiqueta ",(0,r.kt)("inlineCode",{parentName:"li"},"<style>")," le daremos un estilo a nuestro html para que sea vea bien al momento de levantar la aplicaci\xf3n"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Este codigo lo pegamos en el encabezado del html abajo del title"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docusaurus logo",src:n(9182).Z,width:"641",height:"185"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},' <style>\n        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");\n\n        * {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n            font-family: "Poppins", sans-serif;\n        }\n\n\n        body {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            min-height: 100vh;\n            background: #25d366;\n        }\n\n        .container {\n            background: #fff;\n            padding: 25px 30px;\n            border-radius: 10px;\n            max-width: 860px;\n            width: 860px;\n            height: auto;\n        }\n\n        .container .qr {\n            width: 100%;\n            height: 100%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            text-align: center;\n        }\n\n        .container img {\n            display: none;\n            width: 50%;\n            margin: 10px 0;\n            border: 1px solid #efefef;\n            border-radius: 4px;\n        }\n\n        .container h1 {\n            text-align: center;\n            color: #000a9d;\n        }\n\n        ul.logs {\n            max-height: 150px;\n            padding: 15px 15px 15px 30px;\n            margin-top: 5px;\n            border-radius: 4px;\n            overflow-y: auto;\n            background: #efefef;\n            color: #666;\n            font-size: 14px;\n        }\n\n        ul.logs li:first-child {\n            color: green;\n        }\n    </style>\n')),(0,r.kt)("h2",{id:"iniciar-nuesta-la-aplicacion"},"Iniciar nuesta la aplicacion"),(0,r.kt)("h3",{id:"configurar-el-packagejson"},"Configurar el Package.json"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Configurar el ",(0,r.kt)("strong",{parentName:"p"},"start")," en el package.json como lo tenemos en la imagen para poder usar el ",(0,r.kt)("strong",{parentName:"p"},"NODEMON")," con el nombre del arhivo javascript que creamos en mi caso tengo el de ",(0,r.kt)("strong",{parentName:"p"},"app.js")),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{alt:"Docusaurus logo",src:n(5652).Z,width:"496",height:"489"})))),(0,r.kt)("h3",{id:"configurar-el-appjs"},"Configurar el app.js"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"El archivo javascript vamos a dar unos ajustes para levantar la aplicaci\xf3n en el puerto")),(0,r.kt)("admonition",{title:"inicializaremos el client",type:"info"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'client.initialize();\n\n/**\n* Para ejecutar en el puerto\n*/\nserver.listen(port, () =>\n console.log("Aplicacion conrriendo el puerto \ud83c\udfcd\ud83d\udea8\ud83d\udea6:", `http://localhost:${port}/`)\n);\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Explicaci\xf3n del server.listen"),'"server.listen(port, () =>); " permite que el servidor escuche en un puerto espec\xedfico (definido por la variable port) y esperar las conexiones entrantes.')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Abra una nueva terminal y ejecutar lo siguiente para inicar el servidor")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," npm run start \n")),(0,r.kt)("p",null,"Abrir en el puerto:\ud83d\udc49\ud83d\udc49\u27a1\u27a1",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"http://localhost:6060/"},"http://localhost:6060/"))))}u.isMDXComponent=!0},9182:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/head-3bb5fcfcdd297c8c792df444551f6b2e.png"},5652:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/package-39b74f08a5b99861871f461737755378.png"}}]);