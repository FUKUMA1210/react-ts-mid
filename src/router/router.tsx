import { createHashRouter } from "react-router";
import App from '../view/all';
import { Insert } from "../view/insert"
import { Update } from "../view/Update"
import { Sidebar } from "../componets/SideBar"
import { Outlet } from "react-router-dom";


const Layout = () => (
    <div className="app">
      <Sidebar />
      <Outlet /> {/* 渲染對應的頁面組件 */}
    </div>
  );

export const router = createHashRouter([
    {
    path: "/",
    element: <Layout />, // 包含 SideBar
    children: [
      { path: "/", element: <App /> },
      { path: "/insert", element: <Insert /> },
      { path: "/update/:id", element: <Update /> }, // 修改頁面支援動態路由
    ],
  },
]);