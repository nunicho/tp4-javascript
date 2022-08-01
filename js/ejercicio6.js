/*
LIBROS
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
● ISBN
● Título
● Autor
● Número de páginas
Crear sus respectivos métodos get y set correspondientes para cada propiedad.
Crear el método mostrarLibro() para mostrar la información relativa al libro con el
siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Libro{ 
        constructor(ISBN, titulo, autor, numPaginas){
        this.ISBN = ISBN ;   
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
        }

    mostrarLibro(){
        document.write(`El libro ${this.titulo}, con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene páginas ${this.numPaginas}. <br>`)  
          
    }
    set modificarISBN(nuevoISBN){
        this.ISBN = nuevoISBN
    }
    set modificarTitulo(nuevoTitulo){
        this.titulo = nuevoTitulo
    }
    set modificarAutor(nuevoAutor){
        this.autor = nuevoAutor
    }
    set modificarNumPaginas(nuevoNumPaginas){
        this.numPaginas = nuevoNumPaginas
    }
    get novelaPaginas(){
        return this.numPaginas
    }
}

let novela1 = new Libro('xxx','xxx','xxx','xxx')
novela1.modificarISBN = '978-950-788-090-2'
novela1.modificarTitulo = 'Guerra Mundial Z'
novela1.modificarAutor = 'Max Brooks'
novela1.modificarNumPaginas = 457

novela1.mostrarLibro();

let novela2 = new Libro('xxx','xxx','xxx','xxx')
novela2.modificarISBN = '978-84-9800-493-9'
novela2.modificarTitulo = 'Mundo Anillo'
novela2.modificarAutor = 'Larry Niven'
novela2.modificarNumPaginas = 340

novela2.mostrarLibro();

if (novela1.novelaPaginas > novela2.novelaPaginas){
    document.write(`El libro ${novela1.titulo} tiene más páginas que el libro ${novela2.titulo}. `)
}
else if (novela1.novelaPaginas < novela2.novelaPaginas){
    document.write(`El libro ${novela2.titulo} tiene más páginas que el libro ${novela1.titulo}. `)
}
else{
document.write(`El libro ${novela1.titulo} tiene igual cantidad de páginas que el libro ${novela2.titulo}. `)
}


