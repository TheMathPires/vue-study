new Vue ({
    el: '#desafio',
    data: {
        name: 'Matheus',
        age: 26,
        imageLink: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
        inputValue: 'Input value'
    },
    methods: {
        tripleAge() {
            return this.age*3
        },
        randomNumber() {
            return Math.random(0,1)
        }
    }
})