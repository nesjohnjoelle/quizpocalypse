// modules
import arvic from './modules/arvic.js';
import jake018 from './modules/jake018.js';


// import your .js file here (e.g. import john from './modules/john.js')
// ...

const store = Vuex.createStore({
    modules: {
        arvic,
        jake018,

        // include your module here (e.g. john)
        // ...

    }
});

export default store;
