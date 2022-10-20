export const BooksComponent = {
    data () {
        return {
            books: [
                {
                    id: 99,
                    title: 'C++ High Performance'
                },
                {
                    id: 110,
                    title: 'Mastering Linux Security and Hardening'
                },
                {
                    id: 101,
                    title: 'Mastering PostgreSQL 10'
                },
                {
                    id: 102,
                    title: 'Python Programming Blueprints'
                },
            ]
        }
    },
    template: `
        <div>
            <h1>Daftar Buku</h1>
            <ul>
                <li v-for="book of books">
                    <router-link :to="{ name: 'book', params: { id: book.id }}">{{ book.title }}</router-link>
                </li>
            </ul>
        </div>
    ` ,
    
}