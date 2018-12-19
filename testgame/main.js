//TestGame main
//Author: Joshua S

// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
const app = new PIXI.Application();

// The application will create a canvas element for you that you
// can then insert into the DOM
document.body.appendChild(app.view);

// load the texture we need
PIXI.loader.add('logo', '/assets/logo.png').load((loader, resources) => {
    // This creates a texture from a 'bunny.png' image
    const logo = new PIXI.Sprite(resources.logo.texture);

    // Setup the position of the bunny
    bunny.x = app.renderer.width / 2;
    bunny.y = app.renderer.height / 2;
    
    
});
