export default {
    state: {
        profile: {
            username: "LouisaOrobiaSilva",
            fullName: "Louisa Orobia Silva",
        },

        items: [
            {
                question: "What is Data?",
                choices: {
                    A: "organized facts",
                    B: "unorganized facts",
                    C: "pure facts"
                },
                correct: "B"
            },
            {
                question: "What markup language served as the application of sgml?",
                choices: {
                    A: "xml",
                    B: "sgml",
                    C: "html"
                },
                correct: "C"
            },
            {
                question: "What is web design?",
                choices: {
                    A: "design on a website",
                    B: "design on a poster",
                    C: "design on a picture"
                },
                correct: "A"
            },
            {
                question: "what is full-stack developer?",
                choices: {
                    A: "someone who design the visual aspects of websites ",
                    B: "someone who maintains the mechanisms that process data",
                    C: "someone who do both the woprk of front-end and back-end developer"
                },
                correct: "C"
            },
            {
                question: "What is a website",
                choices: {
                    A: "collection of web page ",
                    B: "collection of a poster",
                    C: "collection of a picture"
                },
                correct: "A"
            },
            {
                question: "what is an ethical hacker?",
                choices: {
                    A: "black hat hacker",
                    B: "gray hat hacker",
                    C: "white hat hacker"
                },
                correct: "C"
            },
            {
                question: "what is cracker?",
                choices: {
                    A: "someone who breaks in to gather only data",
                    B: "someone who breaks in to destroy only the data",
                    C: "both a and b"
                },
                correct: "C"
            },
            {
                question: "what is CSS?",
                choices: {
                    A: "a stylesheet language",
                    B: "a markup language",
                    C: "a scripting language"
                },
                correct: "A"
            },
            {
                question: "what is javascript?",
                choices: {
                    A: "a stylesheet language",
                    B: "a markup language",
                    C: "a scripting language"
                },
                correct: "C"
            },
            {
                question: "what is HTML?",
                choices: {
                    A: " a stylesheet language",
                    B: "a markup language",
                    C: "a scripting language"
                },
                correct: "B"
            }

        ]
    },

    getters: {
        profile: state => state.profile,
        items  : state => state.items
    },

    namespaced: true
};
