---
sidebar_position: 4
---

## Modicar el archivo html

- Aqui editaremos el archivo html para poder generar el qr

```html 
<div class="container" id="app">
    <h1>WhatsApp API</h1>
    <div class="qr">
        <img src="" alt="" id="qrcode" />
    </div>
    <h3>Registros</h3>
    <ul class="logs"></ul>
    <ul class="chats"></ul>
</div>
```

### Agregar Socket en el html

- Una vez hecho eso seguiros con el script de socket **Esto lo agregamos abajo de la clase container**
```js title="CDN de Socket"
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.5.4/socket.io.js" crossorigin="anonymous"></script>
```
:::tip Version actual de Socket
  **[Ver Aqui](https://cdnjs.com/libraries/socket.io)**
:::

### Crear un evento
`Este codigo lo pegamos abajo del scrip cdn socket`
- Agregamos un eveto para poder generar el QR y mandarlo al navegador, con el socket haremos que se ejecute en el puerto configurado

```javascript
   <script>
        document.addEventListener("DOMContentLoaded", () => {
            let socket = io("http://localhost:6060", {
                path: "/socket.io"
            });

            socket.on("message", (msg) => {
                let logs = document.querySelector(".logs");
                let li = document.createElement("li");
                li.textContent = msg;
                logs.appendChild(li);
            });

            socket.on("qr", (src) => {
                let qrcode = document.querySelector("#qrcode");
                qrcode.src = src;
                qrcode.style.display = "block";
            });

            socket.on("ready", (data) => {
                document.querySelector("#qrcode").style.display = "none";
            });

            socket.on("authenticated", (data) => {
                document.querySelector("#qrcode").style.display = "none";
            });
        });
    </script>
```

### Crear un estilo de css el html
- con la etiqueta `<style>` le daremos un estilo a nuestro html para que sea vea bien al momento de levantar la aplicación
 - `Este codigo lo pegamos en el encabezado del html abajo del title`

![Docusaurus logo](/img/head.png)



```css
 <style>
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
        }


        body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: #25d366;
        }

        .container {
            background: #fff;
            padding: 25px 30px;
            border-radius: 10px;
            max-width: 860px;
            width: 860px;
            height: auto;
        }

        .container .qr {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .container img {
            display: none;
            width: 50%;
            margin: 10px 0;
            border: 1px solid #efefef;
            border-radius: 4px;
        }

        .container h1 {
            text-align: center;
            color: #000a9d;
        }

        ul.logs {
            max-height: 150px;
            padding: 15px 15px 15px 30px;
            margin-top: 5px;
            border-radius: 4px;
            overflow-y: auto;
            background: #efefef;
            color: #666;
            font-size: 14px;
        }

        ul.logs li:first-child {
            color: green;
        }
    </style>
```

## Iniciar nuesta la aplicacion 

### Configurar el Package.json
- Configurar el **start** en el package.json como lo tenemos en la imagen para poder usar el **NODEMON** con el nombre del arhivo javascript que creamos en mi caso tengo el de **app.js**

    ![Docusaurus logo](/img/package.png)

### Configurar el app.js
- El archivo javascript vamos a dar unos ajustes para levantar la aplicación en el puerto

:::info inicializaremos el client

   ``` js
   client.initialize();

/**
 * Para ejecutar en el puerto
 */
server.listen(port, () =>
    console.log("Aplicacion conrriendo el puerto 🏍🚨🚦:", `http://localhost:${port}/`)
);
```

<details>
  <summary>Explicación del server.listen</summary>
 "server.listen(port, () =>);
" permite que el servidor escuche en un puerto específico (definido por la variable port) y esperar las conexiones entrantes.
</details>
:::

- Abra una nueva terminal y ejecutar lo siguiente para inicar el servidor

```bash
 npm run start 
```


Abrir en el puerto:👉👉➡➡**[http://localhost:6060/](http://localhost:6060/)**
