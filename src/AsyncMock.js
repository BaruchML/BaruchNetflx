 const movies = [
    {id: 1, title: 'Thor', year: '2009', category: 'science fiction',  idCategory: 1, info: 'lorem', img:'aaaa'},
    {id: 2, title: 'Star Wars', year: '1975', category: 'science fiction', idCategory: 1, info: 'lorem', img:'aaaa'},
    {id: 3, title: 'Lord of The Rings', year: '2001', category: 'fantasy world', idCategory: 2, info: 'lorem', img:'aaaa'},
    {id: 4, title: 'Transformers', year: '2012', category: 'future',  idCategory: 3,info: 'lorem', img:'aaaa'},
    {id: 5, title: 'One Piece', year: '2024', category: 'anime', idCategory: 4, info: 'lorem', img:'aaaa'},
 ]

export const getMovies = () => {
   return new Promise((resolve) => {
        setTimeout(() => {
            resolve(movies)
        },3000)

} )
}

