class Book
{
    constructor(title, author, isbn, copies)
    {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }

    static getBooksList(Books)
    {
        Books.forEach(function(element)
        {
            console.log(element.title);
        });
    }

}

class User
{
    constructor(name, number, issuedBooks)
    {
        this.name = name;
        this.number = number
        this.issuedBooks = issuedBooks;
    }

    static issueBook(user, book)
    {
        if(book.copies <= 0)
        {
            console.log("No copies available");
            return false;
        }

        else
        {
            book.copies--;
            let userArray = user.issuedBooks;
            let flag = false;

            if(userArray.length == 0)
            {
                let book_obj = 
                {
                    isbn : book.isbn,
                    copies : 1
                }

                userArray.push(book_obj);
                return true;
            }
            userArray.forEach(function(element)
            {
                if(element.isbn == book.isbn)
                {
                    flag = true;
                    element.copies++;
                    return true;
                }
            });

            if(flag == false)
            {
                let book_obj = 
                {
                    isbn : book.isbn,
                    copies : 1
                }

                userArray.push(book_obj);
            }
            console.log(`${book.title} has been issued to ${user.name}`);
            return true;
        }
    }

    static returnBook(user, book)
    {
        let userArray = user.issuedBooks;
        let flag = false;

        userArray.forEach(function(element)
        {
            if(element.isbn == book.isbn)
            {
                flag = true;
                element.copies--;
                if(element.copies == 0)
                {
                    userArray.splice(userArray.indexOf(element), 1);
                }
                return true;
            }
        });

        if(flag == false)
        {
            console.log("Book is not issued to this user");
            return false;
        }

        book.copies++;
        console.log(`${book.title} has been returned by ${user.name}`);
        return true;
    }
}

let book1 = new Book("Harry Potter", "JK Rowling", "12345", 5);
let book2 = new Book("Lord of the Rings", "Tolkien", "12346", 10);
let book3 = new Book("The Hobbit", "Tolkien", "12347", 15);
let book4 = new Book("The Alchemist", "Paulo Coelho", "12348", 20);
let book5 = new Book("The Alchemist - 2", "Paulo Coelho", "12349", 25);

let book_list = [book1, book2, book3, book4, book5];

let user1 = new User("John", "123456789", []);
let user2 = new User("Mary", "987654321", []);
let user3 = new User("Bob", "123456789", []);
let user4 = new User("Alice", "987654321", []);
let user5 = new User("Tom", "123456789", []);

let user_list = [user1, user2, user3, user4, user5];

console.log(Book.getBooksList(book_list));
console.log(User.issueBook(user1, book1));
console.log(user1);
console.log(User.returnBook(user1, book1));
console.log(user1);