// modules
import nesjohnjoelle from './modules/nesjohnjoelle.js';

// import your .js file here (e.g. import john from './modules/john.js')
// ...

const store = Vuex.createStore({
    modules: {
        nesjohnjoelle,

        // include your module here (e.g. john)
        // ...

    }
});

export default store;
