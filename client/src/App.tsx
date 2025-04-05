import { Route, Switch } from "wouter";
import { useState, useEffect } from "react";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home";
import Read from "./pages/read";
import Create from "./pages/create";
import Explore from "./pages/explore";
import Monetize from "./pages/monetize";
import About from "./pages/about";
import Contact from "./pages/contact";
import NotFound from "./pages/not-found";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">(
    () => (localStorage.getItem("theme") as "light" | "dark") || 
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    root.classList.add("transition");
    
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    
    setTimeout(() => {
      root.classList.remove("transition");
    }, 800);
  };

  return (
    <MainLayout theme={theme} toggleTheme={toggleTheme}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/read" component={Read} />
        <Route path="/create" component={Create} />
        <Route path="/explore" component={Explore} />
        <Route path="/monetize" component={Monetize} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </MainLayout>
  );
}

export default App;
