---
sidebar_position: 3
---

## Crear objecto Client
  
  - `Pegamos el siguiente codigo abajo del app.get()`

- Creamos un nuevo Objeto de client para tener una conexión de sesión

```js
const client = new Client({
  restartOnAuthFail: true,
  puppeteer: {
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-accelerated-2d-canvas",
      "--disable-gpu",
    ],
  },
  authStrategy: new LocalAuth(),
});
```

<details>
  <summary>Explicación del codigo anterior</summary>


1. 'restartOnAuthFail: true': Esto significa que el cliente se reiniciara automaticamente si se produce un error de autenticacion.
2. 'puppeteer: { }': Las opciones para la instancia de Puppeteer.     
3. 'headless: true': Este parametro significa que Puppeteer ejecutara Chrome en modo "sin cabezal", es decir, sin una interfaz grafica de usuario visible. 
4. 'args: [... ]': Este parametro es una matriz de argumentos que se pasaran a Chrome cuando se ejecute. Estos argumentos incluyen opciones para desactivar ciertas caracteristicas de seguridad y de GPU para mejorar el rendimiento. 
5. 'authStrategy: new LocalAuth() : Este parametro especifica la estrategia de autenticación que se usara en el cliente. En este caso, se esta utilizando "LocalAuth", que es una estrategia de autenticaci6n incorporada en "puppeteer-cluster".

</details>

## Crear el metodo Connection
- El Metodo Connection nos ayudar a generar QR y revisar el inicio de session

```js
io.on("connection", (socket) => {
    socket.emit("message", "Conectando....!");

    // Se genera un QR para poder escanearlo en el navegador
    client.on("qr", (qr) => {
        console.log("QR received", qr);
        qrcode.toDataURL(qr, (err, url) => {
            socket.emit("qr", url);
            socket.emit("message", "Código QR recibido, escanear por favor!");
        });
    });

    //Para conectarse al WhatsApp
    client.on("ready", () => {
        console.log("Usuario conectado");
        socket.emit("ready", "WhatsApp está listo");
        socket.emit("message", "Usuario conectado");
    });

    //Para autenticación del WhatasApp
    client.on("authenticated", () => {
        socket.emit("authenticated", "WhatsApp está autenticado");
        socket.emit("message", "WhatsApp está autenticado");
        console.log("AUTENTICADO");
    });

    //Para el fallo de inicio de session al WhatasApp
    client.on("auth_failure", (session) => {
        socket.emit("message", "Error de autenticación, reiniciando...");
        console.log("ERROR REINICIANDO AUTTENTICACION");
    });

    //Para desconectarse al  WhatasApp
    client.on("disconnected", (reason) => {
        socket.emit("message", "Whatsapp está desconectado!");
        client.destroy();
        client.initialize();
    });
});
```

## Metodo de recibir mensajes
- Este metodo nos ayudara a tener los mensajes automaticos y los configuremos para poder usarlos
y tambien buscar a los grupos con los IDs para poder usarlos despues
```js
client.on("message", (msg) => {
    if (msg.body === "Hola") {
        msg.reply("Hola, muy buen día en que puedo ayudarte");
        /* El metodo getChats() nos servira para mostrar
         en el chat si es un grupo y nos dara el id*/
        client.getChats().then((chats) => {
            console.log(chats[0]);
        });
    } else if (msg.body === "Buenos días") {
        msg.reply("Buenos días en que puedo ayudarte");

    } else if (msg.body === "grupos" || msg.body === "Grupos" || msg.body === "Ver grupos") {
        /* El metodo getChats() nos servira para generar 
        solamente el ID y nombre de los grupos encontrados*/
        client.getChats().then((chats) => {
                const grupos = chats.filter((listaGrupos) => listaGrupos.isGroup);
                if (grupos.length === 0) {
                    msg.reply("No hay grupos");
                } else {
                    let respuesta = "Aqui estan tus grupos:\n\n";
                    grupos.forEach((grupo, i) => {
                        respuesta += `ID: ${grupo.id._serialized}\nName: ${grupo.name}\n\n`;
                    });
                    respuesta +=
                        "_Puede usar la identificación del grupo para enviar un mensaje al grupo._";
                    msg.reply(respuesta);
                }
            })
            .catch((err) => console.error(err));
    }
});

```



