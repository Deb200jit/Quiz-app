import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("₹ 0");

  const data = [
    {
      id: 1,
      question: "Which operator can be used to free the memory allocated for an object in C++??",
      answers: [
        {
          text: "Unallocate",
          correct: false,
        },
        {
          text: "Free()",
          correct: false,
        },
        {
          text: " Collect",
          correct: false,
        },
        {
          text: "delete",
          correct: true,
        },
      ],
    },
    {
      id: 2,
      question: "Which feature of OOP is exhibited by the function overriding??",
      answers: [
        {
          text: "Polymorphism",
          correct: true,
        },
        {
          text: "Encapsulation",
          correct: false,
        },
        {
          text: "Abstraction",
          correct: false,
        },
        {
          text: "Inheritance",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which feature of OOP indicates code reusability??",
      answers: [
        {
          text: "Abstraction",
          correct: false,
        },
        {
          text: "Polymorphism",
          correct: false,
        },
        {
          text: "Inheritance",
          correct: true,
        },
        {
          text: "Encapsulation",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "What is a table joined with itself called??",
      answers: [
        {
          text: "Join",
          correct: false,
        },
        {
          text: "Self Join",
          correct: true,
        },
        {
          text: "Outer Join",
          correct: false,
        },
        {
          text: "Inner Join",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which of the following is known as the minimal super key?",
      answers: [
        {
          text: "Primary Key",
          correct: false,
        },
        {
          text: "Foreign Key",
          correct: false,
        },
        {
          text: "Candidate Key",
          correct: true,
        },
        {
          text: "None Of These Above",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "What is the variables declared in a class for the use of all methods of the class called?",
      answers: [
        {
          text: "Instance Variable",
          correct: true,
        },
        {
          text: "Global Variable",
          correct: false,
        },
        {
          text: "Reference Variable",
          correct: false,
        },
        {
          text: "Objects",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "In the worst case, the number of comparisons needed to search a singly linked list of length n for a given element is ?",
      answers: [
        {
          text: "log(2*n)",
          correct: false,
        },
        {
          text: "log(2*n) -1",
          correct: false,
        },
        {
          text: "n",
          correct: true,
        },
        {
          text: "n/2",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Which data structure is required to convert the infix to prefix notation?",
      answers: [
        {
          text: "Stack",
          correct: true,
        },
        {
          text: "Linked list",
          correct: false,
        },
        {
          text: "Binary tree",
          correct: false,
        },
        {
          text: "Queue",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Which data structure is mainly used for implementing the recursive algorithm?",
      answers: [
        {
          text: "Queue",
          correct: false,
        },
        {
          text: "Stack",
          correct: true,
        },
        {
          text: "Binary Tree",
          correct: false,
        },
        {
          text: "Linked List",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Which of the following is the prefix form of A+B*C?",
      answers: [
        {
          text: "A+(BC*)",
          correct: false,
        },
        {
          text: "+AB*C",
          correct: false,
        },
        {
          text: "ABC+*",
          correct: false,
        },
        {
          text: "+A*BC",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "What happens when '2' == 2 is executed?",
      answers: [
        {
          text: "False",
          correct: true,
        },
        {
          text: "True",
          correct: false,
        },
        {
          text: "ValueError occurs",
          correct: false,
        },
        {
          text: "TypeError occurs",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "The term HTTP stands for?",
      answers: [
        {
          text: "Hyper terminal tracing program",
          correct: false,
        },
        {
          text: "Hypertext tracing protocol",
          correct: false,
        },
        {
          text: "Hypertext transfer protocol",
          correct: true,
        },
        {
          text: "Hypertext transfer program",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Which of the following command is a type of Data Definition language command?",
      answers: [
        {
          text: "Create",
          correct: true,
        },
        {
          text: "Update",
          correct: false,
        },
        {
          text: "Delete",
          correct: false,
        },
        {
          text: "Merge",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Which one of the following is the most common internet protocol?",
      answers: [
        {
          text: "HTML",
          correct: false,
        },
        {
          text: "NetBEUI",
          correct: false,
        },
        {
          text: "IPX/SPX",
          correct: false,
        },
        {
          text: "TCP/IP",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question: "The minimum number of stacks required to implement a stack is __",
      answers: [
        {
          text: "2",
          correct: true,
        },
        {
          text: "5",
          correct: false,
        },
        {
          text: "3",
          correct: false,
        },
        {
          text: "1",
          correct: false,
        },
      ],
    },
    {
      id: 16,
      question: "Which one of the following is a loop construct that will always be executed once?",
      answers: [
        {
          text: "for",
          correct: false,
        },
        {
          text: "do while",
          correct: true,
        },
        {
          text: "switch",
          correct: false,
        },
        {
          text: "while",
          correct: false,
        },
      ],
    },
    {
      id: 17,
      question: "In which one of the following, the multiple lower entities are grouped (or combined) together to form a single higher-level entity?",
      answers: [
        {
          text: "Specialization",
          correct: false,
        },
        {
          text: "Generalization",
          correct: true,
        },
        {
          text: "Aggregation",
          correct: false,
        },
        {
          text: "None of the above",
          correct: false,
        },
      ],
    },
    {
      id: 18,
      question: "The term IPv4 stands for??",
      answers: [
        {
          text: "Internet Protocol Version 4",
          correct: true,
        },
        {
          text: "International Programming Version 4",
          correct: false,
        },
        {
          text: "None of these",
          correct: false,
        },
        {
          text: "Internet Programming Version 4",
          correct: false,
        },
      ],
    },
    {
      id: 19,
      question: " Which of the following option is not a core data type in the python language?",
      answers: [
        {
          text: "Dictionary",
          correct: false,
        },
        {
          text: "Lists",
          correct: false,
        },
        {
          text: "Class",
          correct: true,
        },
        {
          text: "All of the above",
          correct: false,
        },
      ],
    },
    {
      id: 20,
      question: "What is another name for the circular queue among the following options?",
      answers: [
        {
          text: "Ring buffer",
          correct: true,
        },
        {
          text: "Square buffer",
          correct: false,
        },
        {
          text: "Rectangle buffer",
          correct: false,
        },
        {
          text: "None of the above",
          correct: false,
        },
      ],
    },
    {
      id: 21,
      question: " Which of the following are TCL commands?",
      answers: [
        {
          text: "COMMIT and ROLLBACK",
          correct: true,
        },
        {
          text: "UPDATE and TRUNCATE",
          correct: false,
        },
        {
          text: "SELECT and INSERT",
          correct: false,
        },
        {
          text: "GRANT and REVOKE",
          correct: false,
        },
      ],
    },
    {
      id: 22,
      question: "Which one of the following commands is used for removing (or deleting) a relation forms the SQL database?",
      answers: [
        {
          text: "Delete",
          correct: false,
        },
        {
          text: "Drop",
          correct: true,
        },
        {
          text: "Remove",
          correct: false,
        },
        {
          text: "All of the above",
          correct: false,
        },
      ],
    },
    {
      id: 23,
      question: "In specific, if the systems use separate protocols, which one of the following devices is used to link two systems?",
      answers: [
        {
          text: "Repeater",
          correct: false,
        },
        {
          text: "Bridge",
          correct: false,
        },
        {
          text: "Gateway",
          correct: true,
        },
        {
          text: "Hub",
          correct: false,
        },
      ],
    },
    {
      id: 24,
      question: " Which of the following keys is generally used to represents the relationships between the tables?",
      answers: [
        {
          text: "Foreign key",
          correct: true,
        },
        {
          text: "Primary key",
          correct: false,
        },
        {
          text: "Secondary key",
          correct: false,
        },
        {
          text: "None of the above",
          correct: false,
        },
      ],
    },
    {
      id: 25,
      question: "The time complexity of enqueue operation in Queue is __",
      answers: [
        {
          text: "O(1)",
          correct: true,
        },
        {
          text: "O(n)",
          correct: false,
        },
        {
          text: "O(logn)",
          correct: false,
        },
        {
          text: "O(nlogn)",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "₹ 100" },
        { id: 2, amount: "₹ 200" },
        { id: 3, amount: "₹ 300" },
        { id: 4, amount: "₹ 500" },
        { id: 5, amount: "₹ 1000" },
        { id: 6, amount: "₹ 2000" },
        { id: 7, amount: "₹ 4000" },
        { id: 8, amount: "₹ 8000" },
        { id: 9, amount: "₹ 16000" },
        { id: 10, amount: "₹ 32000" },
        { id: 11, amount: "₹ 50000" },
        { id: 12, amount: "₹ 100000" },
        { id: 13, amount: "₹ 150000" },
        { id: 14, amount: "₹ 250000" },
        { id: 15, amount: "₹ 500000" },
        { id: 16, amount: "₹ 1000000" },
        { id: 17, amount: "₹ 2000000" },
        { id: 18, amount: "₹ 3000000" },
        { id: 19, amount: "₹ 4000000" },
        { id: 20, amount: "₹ 5000000" },
        { id: 21, amount: "₹ 6000000" },
        { id: 22, amount: "₹ 7000000" },
        { id: 23, amount: "₹ 8000000" },
        { id: 24, amount: "₹ 9000000" },
        { id: 25, amount: "₹ 10000000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
