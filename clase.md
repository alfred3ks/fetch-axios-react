# Fetch:

fetch(), es un método para iniciar el proceso de hacer una busqueda de un recurso en la web.

Este método retorna una promesa, un objeto {}, que se va resolver en el futuro.

Su sintaxis:

```javascript
fetch(resource);
fetch(resource, optionals);
```

En el optionals tenemos que es un objeto {} de opciones,
en el cual le pasaremos el metodo de consulta, las header o cabeceras, el body o cuerpo de la consulta, mode es el paso de capas de más seguridad, y las credencials o credenciales.

Para el primer ejemplo tenemos el componente llamado FetchGetBase.jsx.

En este primer componente vemos como es la estructura basica para iterar y pintar una lista de posts, un arreglo.

Ahora vamos a hacer lo mismo pero vamos a iterar los post de una API, la de jsonplaceholder.

En el componente FetchGetJsonPlaceHolder.jsx tenemos como hacer una petición de tipo get a una api usando fetch().
