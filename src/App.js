import HomePage from "./components/pages/homepage/HomePage";
import BlogPage from "./components/pages/blogpage/BlogPage";
import { Routes, Route } from "react-router-dom";
import "./components/colors/colors.module.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Route to spesific page
const pathToHomePage = "/";
const pathToBlogPage = "/blog-page";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route
            path={pathToHomePage}
            element={<HomePage pathToBlogPage={pathToBlogPage} />}
          />
          <Route
            path={pathToBlogPage}
            element={<BlogPage pathToHomePage={pathToHomePage} />}
          />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
