---
sidebar_position: 1
---
# Instalacón

- Primeros pasos para crear la Api de WhatsApp

:::info Instalar NODEJS
Tienes que tener instalado NODEJS v12 o el más superior, **[Descargar Aqui](https://nodejs.org/en/)**
:::

- crear una carpeta y abrir en visual studio code 
  - Iniciar el **package.json** para guardar las **Dependencias**
  - en un **terminal ** agrega lo siguiente

```bash
   npm init
```

## Instalaciones de NPM

```bash title="WhatsApp_Web"
   npm i whatsapp-web.js
```

```bash title="QRCode_Terminal"
   npm i qrcode-terminal
```

```bash title="Express"
   npm i express
```

```bas title="socket.io"
   npm i socket.io
```

- El **QRCode** nos servira para gerner el QR en el navegador

```bash title="QRCode"
   npm i qrcode
```

```bash title="Nodemon"
  npm i -g nodemon
```

```bash title="HTPP"
  npm i http
```

```bash title="Express_Validator"
  npm i express-validator
```

```bash title="Axios"
  npm i axios
```

```bash title="Mime_Type"
  npm i mime-types
```

```bash title="Express_fileupload"
  npm i express-fileupload
```

:::caution Puedes copiar el codigo de un solo para instalar todo

````bash
    npm i whatsapp-web.js
    npm i qrcode-terminal
    npm i express
    npm i socket.io
    npm i qrcode
    npm i -g nodemon
    npm i http
    npm i express-validator
    npm i axios
    npm i mime-types
    npm i express-fileupload
:::

## package.json
- En el package.json tenemos que tener algo asi
    ```json
    {
        "name": "a_w",
        "version": "1.0.0",
        "description": "",
        "main": "app.js",
        "scripts": {
            "start": "node app.js",
            "start:dev": "nodemon app.js",
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "author": "",
        "license": "ISC",
        "dependencies": {
            "axios": "^1.2.6",
            "express": "^4.18.2",
            "express-fileupload": "^1.4.0",
            "express-validator": "^6.14.3",
            "http": "^0.0.1-security",
            "mime-types": "^2.1.35",
            "qrcode": "^1.5.1",
            "qrcode-terminal": "^0.12.0",
            "socket.io": "^4.5.4",
            "whatsapp-web.js": "^1.19.2"
        }
    }
  ```


