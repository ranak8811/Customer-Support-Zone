# Customer Support Zone 🎫

A React-based dashboard for managing customer support tickets, featuring real-time status tracking, statistics, and a responsive design based on Figma.

**Live Link:** [https://animated-axolotl-5f96af.netlify.app](https://animated-axolotl-5f96af.netlify.app)

---

## 💡 Quick React Q&A

### 1. What is JSX, and why is it used?

**JSX** stands for JavaScript XML. It lets us write HTML-like code directly inside our JavaScript files.  
**Why use it?** It makes writing the UI much easier and more visual. Instead of using complex functions to create elements, we just write what looks like HTML.

### 2. What is the difference between State and Props?

- **State** is like a component's "memory." It holds data that can change over time (like a counter or a list of tickets). The component "owns" and manages its own state.
- **Props** (short for properties) are like "arguments" passed from a parent component to a child. They are read-only and help us pass data down the tree.

### 3. What is the useState hook, and how does it work?

**useState** is a special function that tells React: "I want this variable to be tracked."  
**How it works:** It gives two things: the current value and a function to update that value. When we use the update function, React automatically re-renders the screen to show the new data.

### 4. How can you share state between components in React?

The most common way is called **"Lifting State Up."** It moves the state to the closest common parent of the components that need the data. The parent then passes the state down to the children via **Props**.

### 5. How is event handling done in React?
Event handling is how we respond to user actions like clicks or typing.
- **Naming & Syntax:** We use **camelCase** (like `onClick`) and pass a **function** itself rather than a string.
- **Synthetic Events:** React wraps the browser's native events into its own "SyntheticEvent" system. This ensures that events work exactly the same across all different browsers.
- **The Event Object:** React automatically passes an "event" object (usually called `e`) to your function. This object lets you do things like get input values (`e.target.value`) or stop the page from refreshing (`e.preventDefault()`).

---

## 🛠️ Built With

- **React 19** (Vite)
- **Tailwind CSS** (Styling)
- **DaisyUI** (Components)
- **SweetAlert2** (Notifications)
- **React Icons** (Icons)
