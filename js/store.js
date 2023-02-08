// modules
import arvic from './modules/arvic.js';

// import your .js file here (e.g. import john from './modules/john.js')
// ...

const store = Vuex.createStore({
    modules: {
        arvic,
        jake,

        // include your module here (e.g. john)
        // ...

    }
});

export default store;
