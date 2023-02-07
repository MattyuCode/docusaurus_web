# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Configurar el deploy
- ir en docusaurus.config.js
      
    `El nombre del link de github con el nombre de usuario`
    - url: 'https://mattyucode.github.io/',

    `El nombre del repositorio`
    - baseUrl: '/docusaurus_web',
    
    `El nombre del usuario de github`
    - organizationName: 'mattyucode',
    
    `El nombre del repositorio o el nombre del proyecto`
    - projectName: 'docusaurus_web', 
    
    `El nombre de la rama que se va a crear`
    - deploymentBranch: "gh-pages",
    
    `y pasar este ultimo`
    - trailingSlash: false,


 <!-- npm run build -->

```bash
    git init 
    git add .
    git commit -m "Mattyu Actualizado"
```

- pegar el de repo

- pegar el codigo que viene de docusaurus
```bash
    GIT_USER=mattyucode npm run deploy
```

