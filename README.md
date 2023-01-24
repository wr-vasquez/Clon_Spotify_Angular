# Clon_Spotify_Angular
Repositorio para realizar un clon de Spotify

## Recursos de instalacion
Para iniciar el proyecto es necesario seguir los pasos de instalacion y como primer paso debemos tener instalado node js
## npm install -g @angular/cli 
Comando para iniciar la instalacion de angular en un entorno global, para verificar que se haya instalado podemos usar en consola el siguiente comando (ng v)
## ng new spotify --routing --style=css
Comando para Iniciar el proyecto con las rutas y estilos de css, Una vez termianada la instalacion podemos levantar nuestra aplicacion con el siguiente comando (ng serve)

Tambien podemos Cambiar el puerto en el que corre la app con el siguiente comando  --->  ng s --port 5000 
Esto es  util por si queremos levantar varias app de angular en diferentes puertos

## Visualizar app en movil 
Si estas en una red local es decir si tu celular esta conectado en la misma red de tu pc puedes configura tu aplicacion de angular para poderla ver o compartir a los que esten conectados en la red.

Esto es posible siguiendo los siguientes pasos:
Configuramos el puerto de la app para que angular le de permisos a los que puedan esten conectados en la misma red con este comando
---> ng s --host 0.0.0.0 --port 4100
Una vez tengamos corriendo nuestra app en ese puerto vamos a nuestra terminal con el comando ifconfig y copiamos la ip adicional le agregamos dos puntos y el puerto en el que corre nuestra app  y  ya podemos ver nuestra app en toda la red  ---> 192.168.100.14:4100  

<div >
 <img src="https://i.postimg.cc/dQdxDNtT/conexion-Movil.jpg" title="App Movil" alt="App Movil" width="534" height="800" />
</div>


## ng g m modules/Auth --routing 
Comando para generar nuevos modulos en angular e indicarle que es un modulo con acceso a rutas,
despues de indicar el comando inicial ng la letra g  indica generate y la m representa modules,
seguido va el nombre de la carpeta en la que vamos a generar el nuevo modulo y despues El nombre de el nuevo Modulo como lo es en este caso el modulo Auth, el --routing indica que es un modulo con acceso a enrutamiento dentro de nuestro proyecto.  Esto nos genera el modulo dentro de una carpeta de la siguiente forma.

<img src="https://i.postimg.cc/HkGmmk4d/Auth-Module.png" title="Auth" alt="Auth" />

## ng g m shared/Shared --flat
Podemos usar este comando En caso de Generar solo el modulo es decir que ya existe una carpeta en la que bamos a generar el archivo 
<div>
<img src="https://i.postimg.cc/tgQL1xPS/shared.png" title="Shared" alt="Shared" />
</div>

## ng g c Example
En caso de querer generar componentes podemos usar este comando. Para este caso nos genera un componente completo en el directorio raiz llamado Example con su archivo html, css y archivo de rutas. Si queremos crear el componente en una de las carpetas que ya conocemps lo podemos ejecutar mas o menos asi ---> ng g c shared/components/SideBar
<div>
<img src="https://i.postimg.cc/pLTDDGQy/example.png" title="Example" alt="Example" />
</div>

<div>
Se inicia el archivo Side Bar 
<img src="https://i.postimg.cc/tgPjCLyg/Side-Bar.png" title="Side Bar" alt="Side Bar" />
</div>

## Seccion de Media Player
<div>
Se Inicia a desarrollar el apartado del Media Player de manera personalizada y la Seccion donde apareceran las canciones
<img src="https://i.postimg.cc/cJ8rdjMc/Media-Player.png" title="Media Player" alt="Media Player" />
</div>