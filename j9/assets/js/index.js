  import { Book } from './classes/Book.js';
  import { Users } from './classes/Users.js';
 

  window.addEventListener('DOMContentLoaded', (event) => {

  let booksTab=[];
    let usersTab=[];


        let book0 = new Book(0,"Eragon","Jea Dujardin",1990,200,"ceci est résumé", 'https://upload.wikimedia.org/wikipedia/commons/8/83/Christopher_Paolini%2C_Eragon_1.jpg')
       let book1 = new Book(1,"Eragon2","Jea Dujardin",1992,250,"ceci est résumé couurt ", 'https://upload.wikimedia.org/wikipedia/commons/8/83/Christopher_Paolini%2C_Eragon_1.jpg')
       let book2 = new Book(2,"Eragon3","Jea Dujardin",2000,1000,"ceci est résumé rapide", 'https://upload.wikimedia.org/wikipedia/commons/8/83/Christopher_Paolini%2C_Eragon_1.jpg')
    


        let user0 = new Users(0,"vicous", "vicous@free.fr", "Victor","Oustiakine" ,'https://upload.wikimedia.org/wikipedia/commons/a/a3/Cosplay_of_Pikachu%2C_Fanime_2015_%2818125488996%29.jpg')
         let user1 = new Users(0,"max", "sb@free.fr", "max","maxxxx" ,'https://upload.wikimedia.org/wikipedia/commons/a/a3/Cosplay_of_Pikachu%2C_Fanime_2015_%2818125488996%29.jpg')
          let user2 = new Users(0,"Anth", "anthony@free.fr", "anthony","couarmier" ,'https://upload.wikimedia.org/wikipedia/commons/a/a3/Cosplay_of_Pikachu%2C_Fanime_2015_%2818125488996%29.jpg')
    
  
    
          booksTab.push(book0);
     booksTab.push(book1);
     booksTab.push(book2) ;
    usersTab.push(user0);
     usersTab.push(user1);
     usersTab.push(user2);
     
console.log(booksTab, usersTab)
  

     
     sessionStorage.setItem("books", JSON.stringify(...booksTab));
      sessionStorage.setItem("user", JSON.stringify(...usersTab));
  });
  
