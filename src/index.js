import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import "./index.css";

// Ensure you're using the correct root element ID
const container = document.getElementById('root');
const root = createRoot(container); // Create a root
root.render(<App />); // Render the App component
