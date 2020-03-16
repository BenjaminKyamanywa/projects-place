export class Book {
    constructor(title, author, description, pages, currentPage, read){
        this.title = title;
        this.author = author;
        this.description = description;
        this.pages = pages;
        this.currentPage = currentPage;
        this.read = read;
    }
    readBook(page){
        if (page < 1 || page > this.pages){
            return 0;
        } else if (page >= 1 && page < this.pages){
            this.currentPage = page;
            return 1;
        } else if(page == this.pages) {
            this.currentPage = page;
            this.read = true;
            return 1;  
        } 
    }
}

const bookOne = new Book("Greatness Book One",'William',"story", 40, 15 ,false);
const bookTwo = new Book("Whisper Book Two","Shabu","story", 50, 20, false);
const bookThree = new Book("Epic Book Three","Rest","story", 60, 10, false);

export const books = [bookOne, bookTwo, bookThree];

