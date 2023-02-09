export default {
    state: {
        profile: {
            username: "FrancisIX",
            fullName: "Francis Lopez",
        },

        items: [
            {
                question: "What programming language did you like to learn?",
                choices: {
                    A: "PHP",
                    B: "Java",
                    C: "C++"
                },
                correct: "B"
            },

            {
                question: "What kind of laptop do you have? ",
                choices: {
                    A: "Acer",
                    B: "Asus",
                    C: "HP",
                    D: "Lenovo"
                },
                correct: "B"
            }, 

            {
                question: "If you become a zombie, what type of zombie do you want to become ",
                choices: {
                    A: "Dancing Zombie",
                    B: "Break Dance Zombie",
                    C: "Eater Zombie",
                    D: "Vegetarian Zombie"
                },
                correct: "D"
            }, 

            {
                question: "How many ram slot do you have in your lappy ",
                choices: {
                    A: "1 slot",
                    B: "2 slot",
                    C: "2 or more",
                    D: "None"
                },
                correct: "B"
            }, 

            {
                question: "How many pictures in your gallery do you have right now?",
                choices: {
                    A: "1000+",
                    B: "Under 500",
                    C: "Few only",
                    D: "None"
                },
                correct: "B"
            }, 
            
            {
                question: "If there a zombie behind your back what will you do?",
                choices: {
                    A: "Run?",
                    B: "Do nothing",
                    C: "Kill it",
                    D: "Hide somewhere"
                },
                correct: "A"
            }, 

            {
                question: "What css frameworks do you use?",
                choices: {
                    A: "Bootstrap",
                    B: "TailWind",
                    C: "Foundation",
                    D: "Bulma"
                },
                correct: "B"
            }, 

            {
                question: "What kind of project systems did you create in past few months?",
                choices: {
                    A: "Library Managements System",
                    B: "Hospitality Managements System",
                    C: "Grocery Management System",
                    D: "None"
                },
                correct: "B"
            }, 

            {
                question: "Which one is the first search engine in internet?",
                choices: {
                    A: "Google",
                    B: "Archie",
                    C: "Altavista",
                    D: "WAIS"
                },
                correct: "B"
            }, 

            {
                question: "Which one is the first web browser invented in 1990",
                choices: {
                    A: "Internet Explorer",
                    B: "Mosaic",
                    C: "Mozilla",
                    D: "Nexus"
                },
                correct: "D"
            }, 
        ]
        
    },



    getters: {
        profile: state => state.profile,
        items  : state => state.items
    },

    namespaced: true
};
