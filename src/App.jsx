import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import Project from "./pages/Project";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="homepage" element={<Landing />} />
          <Route path="project/:id" element={<Project />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
