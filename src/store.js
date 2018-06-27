export const store = {
    data: {
        num: 3,
        count: 0,
        title: 'Im the reactive title',
        arr: ['apple', 'oranges']
    },
    
    actions: {
        increase: function() {
            this.num++;
        },
        addFruit: function() {
            let value = document.querySelector('.input').value;
            store.data['arr'] = [
                ...store.data['arr'],
                value
            ]
        }
    }
}
