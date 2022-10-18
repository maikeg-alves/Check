import { Route, Routes } from "react-router-dom";
import { Home, Upload, Prova, NotFoundPage, ServerError } from "../pages";

const MYRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="upload" element={<Upload />} />
      <Route path="prova" element={<Prova />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="500" element={<ServerError />} />
    </Routes>
  );
};

export default MYRoutes;
