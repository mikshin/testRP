export default {
    actions: {
        async fetchItems(ctx, userId = '1') {
            // const res = await fetch('https://mikshin.github.io/NEtelegram/assets/messageStorage/messages@' + userId + '.txt');
            const res = await fetch('https://mikshin.github.io/testRP/assets/content.txt');
            const items = await res.json();
            
            ctx.commit('updateItems', items)
        }
    },
    mutations: {
        updateItems(state, items) {
            state.items = items
        }
    },
    state: {
        items: [] 
    },
    getters: {
        getItems(state) {
            return state.items
        }
    }
}