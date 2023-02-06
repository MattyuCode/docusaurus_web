---
sidebar_position: 2
---

## Crear el arhivo javascript

- creamos una arhivo javascript **app.js** y pegamos el siguiente codigo para ir probando la api y que nos genere un **QR** en la terminal

```js
const qrcode = require("qrcode-terminal");
const { Client } = require("whatsapp-web.js");
const client = new Client();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Cliente conectado!");
});

client.initialize();
```

### Lo iniciamos

- Abrir una nueva terminal para levantar la aplicacion

```git
  node app
```

- Ahora ya deberiamos ver algo como esto
  ![Docusaurus logo](/img/qr.png)

## Importar todas las dependencias

- Aqui declaramos todas las dependencias que vamos a estar utilizando

```js
const { Client, MessageMedia, LocalAuth } = require("whatsapp-web.js");
const { body, validationResult } = require("express-validator");

const express = require("express");
const socketIo = require("socket.io");
const qrcode = require("qrcode");
const http = require("http");
const fs = require("fs");
const fileUpload = require("express-fileupload");
const axios = require("axios");
const mime = require("mime-types");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
```

## Configuramos el puerto para abrir en el navegador

- `Abajo de IO declaramos el puerto`

```js
const port = process.env.PORT || 6060;
```

## Utilizar el Express

- `Abajo de PORT pegamos lo siguiente`

```js
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
  fileUpload({
    debug: false,
  })
);

app.get("/", (req, res) => {
  res.sendFile("index.html", {
    root: __dirname,
  });
});
```
### Crear un archivo html con el nombre index.html
- el html nos ayudara para poder ejecutar nuestra aplicacion en el navegador y que nos genere un **QR**
![Docusaurus logo](/img/html.png)

:::info OJO: 👀👀

<details>
  <summary>Explicación del codigo anterior</summary>

- **app.use(express.json());**

  - Esta línea hace que Express utilice el middleware JSON, lo que significa que la aplicación puede manejar solicitudes y respuestas JSON.

- **app.use(
  express.urlencoded({
  extended: true, }) );**

  - permite que la aplicación maneje los datos enviados en el cuerpo de las solicitudes HTTP
    con codificación URL. El parámetro "extended: true" significa que se permitirán
    valores de tipo objeto y matriz en lugar de solo valores de cadena.

- **app.use(
  fileUpload({
  debug: false,}));**

  - permite a la aplicación manejar la carga de archivos en solicitudes HTTP.
    El parámetro "debug: false" desactiva los mensajes de depuración en la consola.

- **app.get("/", (req, res) => {
  res.sendFile("index.html", {
  root: \_\_dirname, });});** - Este código define una ruta GET para la raíz "/".
  Cuando se reciba una solicitud GET en esta ruta,
  la respuesta será el archivo "index.html" en el directorio actual, especificado por { root: \_\_dirname }
  
</details>
:::

<!-- <details>
  <summary>Toggle me!</summary>
  <div>
    <div>This is the detailed content</div>
    <br/>
    <details>
      <summary>
        Nested toggle! Some surprise inside...
      </summary>
      <div>
        😲😲😲😲😲
      </div>
    </details>
  </div>
</details> -->
