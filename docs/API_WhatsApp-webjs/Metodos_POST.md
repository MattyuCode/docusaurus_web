---
sidebar_position: 5
---


## Ver numero registrado


- Declaramos una variable que se llame **verNumeroRegistrado**
    - Esto nos ayudara ver si el numero ya esta registrado o no
    
`Pegamos el siguiente codigo abajo del client.initialize()`

![Docusaurus logo](/img/aqui.png)

```js 
const verNumeroRegistrado = async (numero) => {
    const esRegistrado = await client.isRegisteredUser(numero);
    return esRegistrado;
};
```

## Crear el metodo Enviar Mensaje
`Pegamos el siguiente codigo abajo de la variable verNumeroRegistrado`

```js 
app.post("/enviar-mensaje",
    [body("number").notEmpty(), body("message").notEmpty()],
    async (req, res) => {
        const errores = validationResult(req).formatWith(({
            msg
        }) => {
            return msg;
        });

        if (!errores.isEmpty()) {
            return res.status(422).json({
                status: false,
                message: errores.mapped(),
            });
        }

        const number = formatoNumeroTelefono(req.body.number);
        const message = req.body.message;
        const esNumeroRegistrado = await verNumeroRegistrado(number);

        if (!esNumeroRegistrado) {
            return res.status(422).json({
                status: false,
                message: "El número ingresado no está registrado",
            });
        }

        client.sendMessage(number, message)
            .then((response) => {
                res.status(200).json({
                    status: true,
                    response: response,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: false,
                    response: err,
                });
            });
    }
);
```
## Metodo para Enviar un archivo
- Este metodo sirver para enviar un archivo a cuaquier número que tenemos agregado a nuestro contacto

```js
app.post("/enviar-archivo", async (req, res) => {
    const number = formatoNumeroTelefono(req.body.number);
    const caption = req.body.caption;
    const fileUrl = req.body.file;

    let mimetype;
    const attachment = await axios
        .get(fileUrl, {
            responseType: "arraybuffer",
        })
        .then((response) => {
            mimetype = response.headers["content-type"];
            return response.data.toString("base64");
        });
    const media = new MessageMedia(mimetype, attachment, "Media");

    client.sendMessage(number, media, {
            caption: caption,
        })
        .then((response) => {
            res.status(200).json({
                status: true,
                response: response,
            });
        })
        .catch((err) => {
            res.status(500).json({
                status: false,
                response: err,
            });
        });
});
```