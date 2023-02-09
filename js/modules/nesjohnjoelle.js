export default {
    state: {
        profile: {
            username: "nesjohnjoelle",
            fullName: "Nesjohn Joelle M. Felices",
        },

        items: [
            {
                question: "Meta-analyses of studies of the effectiveness of counseling show what effect size?",
                choices: {
                    A: "Large",
                    B: "Medium",
                    C: "Small"
                },
                correct: "A"
            },

            {
                question: "How many computer languages are in use?",
                choices: {
                    A: "5000",
                    B: "2000",
                    C: "5",
                },
                correct: "B"
            },

            {
                question: "Which of these is not a peripheral, in computer terms?",
               choices: {
                    A: "Motherboard",
                    B: "Mouse",
                    C: "Keyboard"
                },
                correct: "A"
            },

            {
                question: "What does the Internet prefix WWW stand for?",
                choices: {
                    A: "Wide Width Wickets",
                    B: "Western Washington World",
                    C: "World Wide Web",
                },
                correct: "C"
            },

            {
                question: "Who founded Apple Computer?",
                choices: {
                    A: "Bill Gates",
                    B: "Steve Jobs",
                    C: "Stephen Fry",
                },
                correct: "B"
            },

            {
                question: "Which of these products is not made by the Apple Corporation?",
                choices: {
                    A: "iMAC",
                    B: "iPhone",
                    C: "IMAX"
                },
                correct: "C"
            },

            {
                question: "A network designed to allow communication within an organization is called:",
                choices: {
                    A: "an intranet",
                    B: "the Internet",
                    C: "Yahoo"
                },
                correct: "A"
            },

            {
                question: "Which of these is not a kind of computer?",
                choices: {
                    A: "Apple",
                    B: "Lada",
                    C: "Lenovo",
                },
                correct: "B"
            },

            {
                question: "Who introduced the first smartphone?",
                choices: {
                    A: "Microsoft ",
                    B: "Google",
                    C: "IBM and Bell South",
                },
                correct: "C"
            },

            {
                question: "It is developed by Apple and is distributed exclusively for Apple hardware (iPhone, iPad, etc.). One of its well-known features is its multi-touch gestures.",
                choices: {
                    A: "IOS(iPhone OS",
                    B: "Windows OS",
                    C: "Android OS"
                },
                correct: "A"
            },

            /*{
                question: "Question 1",
                choices: {
                    A: "Choice 1",
                    B: "Choice 2",
                    C: "Choice 3",
                },
                correct: "A"
            }, */

            
        ]

        
    },



    getters: {
        profile: state => state.profile,
        items  : state => state.items
    },

    namespaced: true
};
