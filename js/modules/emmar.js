export default {
    state: {
        profile: {
            username: "emmarcaber",
            fullName: "Emmar Caber",
        },

        items: [
            {
                question: "What in programming is a container for a value and behaves as the value that it contains?",
                choices: {
                    A: "Variables",
                    B: "Methods",
                    C: "Loops"
                },
                correct: "A"
            },
            {
                question: "What logical operator results to true only when both values are true?",
                choices: {
                    A: "OR",
                    B: "AND",
                    C: "NOT"
                },
                correct: "B"
            },
            {
                question: "What logical operator results to true when one of the values are true?",
                choices: {
                    A: "OR",
                    B: "NOT",
                    C: "AND"
                },
                correct: "A"
            },
            {
                question: "What logical operator reverses the result of the value?",
                choices: {
                    A: "OR",
                    B: "AND",
                    C: "NOT"
                },
                correct: "C"
            },
            {
                question: "What is a type of loop that does not stop?",
                choices: {
                    A: "FOR loop",
                    B: "WHILE loop",
                    C: "INFINITE loop"
                },
                correct: "C"
            },
            {
                question: "What is a block of code which is only executed when it is called?",
                choices: {
                    A: "Variables",
                    B: "Functions",
                    C: "Loops"
                },
                correct: "B"
            },
            {
                question: "A function located inside a class.",
                choices: {
                    A: "Method",
                    B: "Variable",
                    C: "Function"
                },
                correct: "A"
            },
            {
                question: "How to print 'Hello World!' in Python?",
                choices: {
                    A: "display('Hello World')",
                    B: "println('Hello World!')",
                    C: "print('Hello World!')"
                },
                correct: "C"
            },
            {
                question: "What is the latest version of Laravel?",
                choices: {
                    A: "Laravel 9",
                    B: "Laravel 10",
                    C: "Laravel 11"
                },
                correct: "B"
            },
            {
                question: "It is a data type that used to store multiple items in a single variable.",
                choices: {
                    A: "Lists",
                    B: "Diction",
                    C: "Settings"
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