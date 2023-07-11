await import("./src/main.ts");
// Esta sintaxis nos permite importar de forma dinámica un modulo
// Eso nos va a permitir en cualquier contexto poder importar
// modulos de forma dinámica sin tener que ser necesariamente
// en la parte superior.
// Esto seria el equivalente en node al require, pero este no
// permite ser importado de forma asincrona.
