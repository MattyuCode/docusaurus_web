# Toastr en JavaScript

Podemos implementar Toastr en nuestro proyecto de JavaScript para mostrar alguna alerta o un mensaje de envio etc,
aqui tengo los pasos para agregarlo.

## Crear una clase en HTML

- Primero agregamos una clase en HTML

```html
<div class="message">
  <button class="btnMsg">Ver Mensaje</button>
</div>
```

## CDNJS para agregar TOASTR

- Dirijirse a la pagina de CDNJS y copiar Toaster y Jquery
  - [CDNJS - TOASTR](https://cdnjs.com/libraries/toastr.js)
  - [CDNJS - JQUERY](https://cdnjs.com/libraries/jquery)

:::info OJO: 👀👀
Tiene que ir primero jquery
:::

```js title="JAVASCRIPT"
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.min.js"></script>
```

```css title="CSS"
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.min.css">
```

## Función en JavaScript

- Declaramos una varible que se llame btn para seleccionar nuestra clase que se llama **btnMsg**

```js title="JAVASCRIPT"
const btn = document.querySelector(".btnMsg");

btn.addEventListener("click", () => {
  // alert("Click");
  toastr.success("Mensaje enviado con exito", "Exito..!");
});
```

## Tipos de Toastr

- Pagina de toastr para ir probando
  [TOASTR.JS](https://codeseven.github.io/toastr/demo.html)

  - ```js
    toastr.success("Mensaje enviado con exito", "Exito..!");
    ```
  - ```js
    toastr.error("Ocuarrio un error al enviar", "Error..!");
    ```
  - ```js
    toastr.info("Antes de enviar guarde cambios 😂", "Info..!");
    ```
  - ```js
    toastr.warning("Adevertencia tiene que llenar todos los campos", "Aviso..!");
    ```
 -  **Position de Toastr**
   ```js
      toastr.success("Mensaje enviado con exito", "Exito..!", {
        "positionClass": "toast-bottom-right",
    });
    ```
    
## Images

<!-- note, caution, info, danger, success -->

:::note 🥳🥳🎉✨
  Resultado final
:::

![Docusaurus logo](/img/image.png)

