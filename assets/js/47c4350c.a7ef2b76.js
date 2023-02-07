"use strict";(self.webpackChunkdoc_api_whats_app=self.webpackChunkdoc_api_whats_app||[]).push([[297],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>g});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=p(t),d=a,g=c["".concat(u,".").concat(d)]||c[d]||m[d]||o;return t?n.createElement(g,s(s({ref:r},l),{},{components:t})):n.createElement(g,s({ref:r},l))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6083:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const o={sidebar_position:5},s=void 0,i={unversionedId:"API_WhatsApp-webjs/Metodos_POST",id:"API_WhatsApp-webjs/Metodos_POST",title:"Metodos_POST",description:"Ver numero registrado",source:"@site/docs/API_WhatsApp-webjs/Metodos_POST.md",sourceDirName:"API_WhatsApp-webjs",slug:"/API_WhatsApp-webjs/Metodos_POST",permalink:"/docusaurus_web/docs/API_WhatsApp-webjs/Metodos_POST",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API_WhatsApp-webjs/Metodos_POST.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Archivo_html",permalink:"/docusaurus_web/docs/API_WhatsApp-webjs/Archivo_html"},next:{title:"Toastr en JavaScript",permalink:"/docusaurus_web/docs/Toastr - JavaScript/ToastrJS"}},u={},p=[{value:"Ver numero registrado",id:"ver-numero-registrado",level:2},{value:"Crear el metodo Enviar Mensaje",id:"crear-el-metodo-enviar-mensaje",level:2},{value:"Metodo para Enviar un archivo",id:"metodo-para-enviar-un-archivo",level:2}],l={toc:p};function c(e){let{components:r,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"ver-numero-registrado"},"Ver numero registrado"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mattyu")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Declaramos una variable que se llame ",(0,a.kt)("strong",{parentName:"li"},"verNumeroRegistrado"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Esto nos ayudara ver si el numero ya esta registrado o no")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Pegamos el siguiente codigo abajo del client.initialize()")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Docusaurus logo",src:t(4002).Z,width:"699",height:"287"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const verNumeroRegistrado = async (numero) => {\n    const esRegistrado = await client.isRegisteredUser(numero);\n    return esRegistrado;\n};\n")),(0,a.kt)("h2",{id:"crear-el-metodo-enviar-mensaje"},"Crear el metodo Enviar Mensaje"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Pegamos el siguiente codigo abajo de la variable verNumeroRegistrado")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'app.post("/enviar-mensaje",\n    [body("number").notEmpty(), body("message").notEmpty()],\n    async (req, res) => {\n        const errores = validationResult(req).formatWith(({\n            msg\n        }) => {\n            return msg;\n        });\n\n        if (!errores.isEmpty()) {\n            return res.status(422).json({\n                status: false,\n                message: errores.mapped(),\n            });\n        }\n\n        const number = formatoNumeroTelefono(req.body.number);\n        const message = req.body.message;\n        const esNumeroRegistrado = await verNumeroRegistrado(number);\n\n        if (!esNumeroRegistrado) {\n            return res.status(422).json({\n                status: false,\n                message: "El n\xfamero ingresado no est\xe1 registrado",\n            });\n        }\n\n        client.sendMessage(number, message)\n            .then((response) => {\n                res.status(200).json({\n                    status: true,\n                    response: response,\n                });\n            })\n            .catch((err) => {\n                res.status(500).json({\n                    status: false,\n                    response: err,\n                });\n            });\n    }\n);\n')),(0,a.kt)("h2",{id:"metodo-para-enviar-un-archivo"},"Metodo para Enviar un archivo"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Este metodo sirver para enviar un archivo a cuaquier n\xfamero que tenemos agregado a nuestro contacto")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'app.post("/enviar-archivo", async (req, res) => {\n    const number = formatoNumeroTelefono(req.body.number);\n    const caption = req.body.caption;\n    const fileUrl = req.body.file;\n\n    let mimetype;\n    const attachment = await axios\n        .get(fileUrl, {\n            responseType: "arraybuffer",\n        })\n        .then((response) => {\n            mimetype = response.headers["content-type"];\n            return response.data.toString("base64");\n        });\n    const media = new MessageMedia(mimetype, attachment, "Media");\n\n    client.sendMessage(number, media, {\n            caption: caption,\n        })\n        .then((response) => {\n            res.status(200).json({\n                status: true,\n                response: response,\n            });\n        })\n        .catch((err) => {\n            res.status(500).json({\n                status: false,\n                response: err,\n            });\n        });\n});\n')))}c.isMDXComponent=!0},4002:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/aqui-4916f187f7f88fc6d6d7053781a27f84.png"}}]);