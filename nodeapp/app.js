const express = require("express");
const path = require("path");

const app = express();
const PORT =  80;

app.set("view engine", "ejs");
app.use(express.static(__dirname));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/editor", (req, res) => {
    res.sendFile(path.join(__dirname, "editor.html"));
});


app.post("/api/submit-code", (req, res) => {

    const { code } = req.body;
    res.json({ message: "Code submitted successfully" });
});


app.get("/api/questions", (req, res) => {
    const questions = [
        {
            id: 1,
            title: "Finding the Nth Fibonacci Number",
            description: "Write a function to find the nth Fibonacci number. The Fibonacci sequence is defined as follows: The first two numbers in the sequence are 0 and 1, and each subsequent number is the sum of the previous two.",
            constraints: "n >= 0",
            examples: "Input: 5\nOutput: 5\n\nInput: 10\nOutput: 55",
            testcases: [
                { input: "5", output: "5" },
                { input: "10", output: "55" }
            ]
        },
        {
            id: 2,
            title: "Reverse a Linked List",
            description: "Write a function to reverse a linked list.",
            constraints: "None",
            examples: "Input: 1->2->3->4->5\nOutput: 5->4->3->2->1",
            testcases: [
                { input: "1->2->3->4->5", output: "5->4->3->2->1" }
            ]
        },
        {
            id: 3,
            title: "Implement a Binary Search Tree",
            description: "Write a class to implement a binary search tree (BST).",
            constraints: "None",
            examples: "Example: \nInput: 5\n       /   \\ \n     3     7\n    / \\   / \\\n   1   4 6   9\nOutput: 5",
            testcases: [
                { input: "5\n       /   \\ \n     3     7\n    / \\   / \\\n   1   4 6   9", output: "5" }
            ]
        }
    ];
    res.render("questions", { questions });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
