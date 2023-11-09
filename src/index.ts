import { BubbleSort } from "../sortalgorithms/BubbleSort"
import { Book } from "./models/Book"

const books:Book[]=[]

let book: Book={
    mainAuthorName: 'J. R. R. Tolkien',
    title: 'The Two Towers',
    pages: 352,
    publicationYear: 1954
}
books.push(book)

 book={
    mainAuthorName: 'George Orwell',
    title: "Animal Farm: A Fairy Story",
    pages: 215,
    publicationYear: 2018
}
books.push(book)

book = {
    mainAuthorName: 'J. R. R. Tolkien',
    title: "The Fellowship of the Ring",
    pages: 423,
    publicationYear: 1954
}
books.push(book)


/// aqui n teve problema de passar sem o tipo, mas no teste precisa 
const compare=(a:Book, b:Book)=> a.title>b.title
const bubble = new BubbleSort(books,compare)
bubble.sort()
console.log(bubble.values)

const compare2=(a: number, b:number)=> a>b
const numbers = [1,58,-96,13,458,-6448]
const bubble2= new BubbleSort(numbers, compare2)
bubble2.sort()
console.log(bubble2.values);

