// modules
import mikailashanin from './modules/mikailashanin.js';

// import your .js file here (e.g. import john from './modules/john.js')
// ...

const store = Vuex.createStore({
    modules: {
        mikailashanin,

        // include your module here (e.g. john)
        // ...

    }
});

export default store;
