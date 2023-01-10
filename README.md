### Chart-Gpt Api

How to use api?

```
// login user and get token

method => POST
route => /login
body: {
    username: string,
    password: string | number
}

// search data from chart-gpt

method => POST
route => /api/search-data
body: {
    data: 'your text for search'
}

```