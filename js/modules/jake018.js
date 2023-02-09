export default {
    state: {
        profile: {
            username: "jake018",
            fullName: "Jake Agnas",
        },

        items: [
            {
                question: "What is HTML ?",
                choices: {
                    A: "HTML is a programming language ",
                    B: "HTML is a Markup Language ",
                    C: "HTML is scripting language"
                },
                correct: "B"
            },

            {
                question: "Who Developed  HTML ?",
                choices: {
                    A: "Tim Berners-Lee ",
                    B: "Nesjhon Felices",
                    C: "Benidect Reyes"
                },
                correct: "A"
            },
            {
                question: "Who developed PHP ?",
                choices: {
                    A: "Joshua Abinal",
                    B: "Rasmus Lerdorf ",
                    C: "Kian Adrisola"
                },
                correct: "B"
            },
            {
                question: "Who developed JS ?",
                choices: {
                    A: "Nhate Cyurus",
                    B: "Brendan Eich ",
                    C: "Kenneth Relatores"
                },
                correct: "B"
            },
            {
                question: "Who developed R programming ?",
                choices: {
                    A: "Jogi Occiano and Ric Oñate",
                    B: "Mel Ramos and Ivan Calleja ",
                    C: "Ross Ihaka and Robert Gentleman "
                },
                correct: "C"
            },
            {
                question: "Choose the correct HTML element for the largest heading:                " ,
                choices: {
                    A: "H1",
                    B: " H2",
                    C: "heading"
                },
                correct: "A"
            },
            {
                question: "What is the correct HTML element for inserting a line break?                ",
                choices: {
                    A: "lb",
                    B: "break",
                    C: "br"
                },
                correct: "C"
            },
            {
                question: "Use for tryping",
                choices: {
                    A: "mouse",
                    B: "Keyboard",
                    C: "touchpad ",
                },
                correct: "B"
            },
            {
                question: "Use for creating design or layout ?" ,
                choices: {
                    A: "HTMl,CSS",
                    B: " PHP ,MySQL",
                    C: "LAravel,C++"
                },
                correct: "A"
            },
            {
                question: "whio is the Developer of laravel ?",
                choices: {
                    A: "Taylor Otwell",
                    B: "Arvic Babol",
                    C: "Mel Ramos JR."
                },
                correct: "A"
            },
        ]
    },



    getters: {
        profile: state => state.profile,
        items  : state => state.items
    },

    namespaced: true
};
