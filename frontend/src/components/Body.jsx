import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Register from "./Register";
export default function Body() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </div>
  );
}
