export const quizData = [
    {
        id: "Java Script basics",
        title: "Java Script basics",
        img: "https://itproger.com/img/tests/node-js.svg",
        level: "EASY",
        questions: [
            {
                question: "What does the <p> tag mean?",
                options: ["Paragraph", "Image", "Link"],
                answer: "Paragraph"
            },
            {
                question: "How to create a link?",
                options: ["<a>", "<link>", "<href>"],
                answer: "<a>"
            },
            {
                question: "What is HTML?",
                options: ["Programming language", "Markup language", "Database"],
                answer: "Markup language"
            },
            {
                question: "How to create a level 1 heading?",
                options: ["<h1>Heading</h1>", "<header>Heading</header>", "<head>Heading</head>"],
                answer: "<h1>Heading</h1>"
            },
            {
                question: "How to insert a link to another website?",
                options: ["<link href='url'>Link</link>", "<a href='url'>Link</a>", "<url href='url'>Link</url>"],
                answer: "<a href='url'>Link</a>"
            },
            {
                question: "How to create an unordered list?",
                options: ["<ul><li>Item</li></ul>", "<ol><li>Item</li></ol>", "<list><li>Item</li></list>"],
                answer: "<ul><li>Item</li></ul>"
            },
            {
                question: "How to insert an image in HTML?",
                options: ["<pic src='image.png' />", "<img src='image.png' />", "<image src='image.png'></image>"],
                answer: "<img src='image.png' />"
            },
            {
                question: "What is the purpose of the <p> tag?",
                options: ["Creates a paragraph", "Creates a link", "Creates a table"],
                answer: "Creates a paragraph"                
            }, 
            {
                question: "What does the <br> tag do?",
                options: ["Creates a list", "Creates a line break", "Creates bold text"],
                answer: "Creates a line break"
            },
            {
                question: "How to set the page title?",
                options: ["<head>Title</head>", "<h1>Title</h1>", "<title>Title</title>"],
                answer: "<title>Title</title>"
            }
        ]
    },
    {
        id: "React quiz",
        title: "React quiz",
        img: "https://itproger.com/img/tests/react-js.svg",
        level: "MEDIUM",
        questions: [
            {
                question: "What will the following code output?humoconst [state, dispatch] = useReducer((state, action) => {#$@  switch (action.type) {#$@    case 'increment': return state + 1;#$@    default: return state;#$@  }#$@}, 0);#$@dispatch({ type: 'increment' });#$@console.log(state);",
                options: ["1", "0", "undefined", "Error"],
                answer:"0"
            },
            {
                question: "What is Concurrent Rendering in React?",
                options: ["Type of hook","Method to manage state","Styling tool","Mechanism for rendering multiple components simultaneously"],
                answer:"Mechanism for rendering multiple components simultaneously"
            },
            {
                question: "What does the useLayoutEffect hook do?",
                options: [
                            "Performs side effects after rendering but before the browser paint",
                            "Manages state",
                            "Creates a component",
                            "Handles events"
                        ],
                answer:"Performs side effects after rendering but before the browser paint"
            },
            {
                question: "What is React Fiber?",
                options: [
                        "Architecture for managing rendering in React",
                        "Styling library",
                        "Component type",
                        "Hook for effects"
                        ],
                answer:"Architecture for managing rendering in React"
            },
            {
                question: "What will the following code do?humoconst memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);",
                options: [
                        "Error",
                        "Creates a new component",
                        "Memoizes a value that recalculates when a or b changes",
                        "Rerenders the component"
                        ],
                answer:"Memoizes a value that recalculates when a or b changes"
            },
            {
                question: "What is Suspense in React?",
                options: [
                "Hook for managing state",
                "Component to show loading during async operations",
                "Method for rendering",
                "Type of props"
                ],
                answer:"Component to show loading during async operations"
            },
            {
                question: "What does the shouldComponentUpdate method do?",
                options: [
                        "Handles events",
                        "Creates a new component",
                        "Manages effects",
                        "Determines whether a class component should update"
                        ],
                answer:"Determines whether a class component should update"
            },
            {
                question: "What is an Error Boundary?",
                options: [
                        "Styling tool",
                        "Hook type",
                        "Rendering method",
                        "Component to handle errors in child components"
                        ],
                answer:"Component to handle errors in child components"
            },
            {
                question: "What will the following code output?humouseEffect(() => {#$@  const id = setInterval(() => console.log('tick'), 1000);#$@}, []);",
                options: [
                        "Error due to missing interval cleanup",
                        "Logs 'tick' every second",
                        "Outputs nothing",
                        "Logs 'tick' once"
                        ],
                answer:"Error due to missing interval cleanup"
            },
            {
                question: "What are Server Components in React?",
                options: [
                        "Components for managing state",
                        "Components that render only on the server",
                        "Hooks for effects",
                        "Type of props"
                        ],
                answer:"Components that render only on the server"
            }
        ]
    },
    {
        id: "HTML",
        title: "HTML",
        img: "https://itproger.com/img/tests/html.svg",
        level: "MEDIUM",
        questions: [
            {
                question: "What is the result of this code?humo<input type=\"checkbox\" checked/>",
                options: [
                        "Checkbox will be inactive",
                        "Checkbox will be initially checked",
                        "Error",
                        "Nothing will happen"
                        ],
                answer: "Checkbox will be initially checked"
            },
            {
                question: "Which tag is used to create a dropdown list?",
                options: [
                        "<list>",
                        "<menu>",
                        "<select>",
                        "<dropdown>"
                        ],
                answer: "<select>"
            },
            {
                question: "How to insert a comment in HTML?",
                options: [
                        "// comment",
                        "/* comment */",
                        "<!-- comment -->",
                        "# comment"
                        ],
                answer: "<!-- comment -->"
            },
            {
                question: "What does the action attribute in a form do?",
                options: [
                        "Specifies the URL to submit data",
                        "Runs JavaScript",
                        "Saves the form",
                        "Validates the form"
                        ],
                answer: "Specifies the URL to submit data"
            },
            {
                question: "Which tag is used to embed another HTML document?",
                options: [
                        "<div>",
                        "<script>",
                        "<iframe>",
                        "<embed>"
                        ],
                answer: "<iframe>"
            },
            {
                question: "What does the target=\"_blank\" attribute in a link do?",
                options: [
                        "Opens link in the same window",
                        "Opens in a new tab",
                        "Makes the link inactive",
                        "Hides the link"
                        ],
                answer: "Opens in a new tab"
            },
            {
                question: "Which attribute sets the text shown on hover?",
                options: [
                        "label",
                        "alt",
                        "title",
                        "hover"
                        ],
                answer: "title"
            },
            {
                question: "What does the <label for=\"email\"> tag do?",
                options: [
                        "Associates text with an input element with id=\"email\"",
                        "Adds styles",
                        "Creates a field",
                        "Validates email"
                        ],
                answer: "Associates text with an input element with id=\"email\""
            },
            {
                question: "Which HTML5 tag is used for navigation?",
                options: [
                        "<nav>",
                        "<menu>",
                        "<navigate>"
                        ],
                answer: "<nav>"
            },
            {
                question: "Which HTML5 element is used to group main content?",
                options: [
                        "<body>",
                        "<div>",
                        "<main>",
                        "<section>"
                        ],
                answer: "<main>"
            }
        ]
    },
    {
        id: "Python",
        title: "Python",
        img: "https://itproger.com/img/tests/python.svg",
        level: "HARD",
        questions: [
        {
            question: "What will the following code output?humoclass A:#$@    x = 1#$@class B(A):#$@     x = 2#$@class C(A):#$@    x = 3#$@class D(B, C):#$@    pass#$@print(D.x)#$@",
            options: ["1", "2", "3", "TypeError"],
            answer: "2"
        },
        {
            question: "What is a decorator in Python?",
            options: [
            "A function that modifies the behavior of another function",
            "Data type",
            "Method for working with classes",
            "Way to import modules"
            ],
            answer: "A function that modifies the behavior of another function"
        },
        {
            question: "What will the following code output?humoasync def f():#$@    return 42#$@print(type(f()))",
            options: [
            "<class 'int'>",
            "<class 'coroutine'>",
            "<class 'function'>",
            "<class 'awaitable'>"
            ],
            answer: "<class 'coroutine'>"
        },
        {
            question: "Which method is used to implement an iterator?",
            options: ["__iter__()", "__next__()", "__loop__()", "__cycle__()"],
            answer: "__next__()"
        },
        {
            question: "What does the zip() function do?",
            options: [
            "Combines multiple iterables into tuples",
            "Sorts a list",
            "Splits a string",
            "Creates a dictionary"
            ],
            answer: "Combines multiple iterables into tuples"
        },
        {
            question: "What will the following code output?humox = [1, 2, 3]#$@y = x[:]#$@y.append(4)#$@print(x)",
            options: ["[1, 2, 3, 4]", "[1, 2, 3]", "[4]", "Error"],
            answer: "[1, 2, 3]"
        },
        {
            question: "What is a metaclass in Python?",
            options: [
            "A class that creates other classes",
            "Base class",
            "Abstract method",
            "Data type"
            ],
            answer: "A class that creates other classes"
        },
        {
            question: "What will the following code output?humodef f(x, *, y=10): return x + y#$@print(f(5, y=5))",
            options: ["10", "15", "5", "TypeError"],
            answer: "10"
        },
        {
            question: "What is GIL in Python?",
            options: [
            "Global Interpreter Lock",
            "Iterator generator",
            "Graphical interface",
            "Global variable"
            ],
            answer: "Global Interpreter Lock"
        },
        {
            question: "What does the super() method do?",
            options: [
            "Calls a method from the parent class",
            "Creates a new class",
            "Deletes an object",
            "Imports a module"
            ],
            answer: "Calls a method from the parent class"
        }
        ]
    }
];
