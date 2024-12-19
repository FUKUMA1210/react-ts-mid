import { Link } from "react-router-dom";

export const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h2>StudentHub</h2>
      <ul>
        <li><Link to="/">所有學生</Link></li>
        <li><Link to="/insert">新增學生</Link></li>
        <li><Link to="/update/1">修改學生資訊</Link></li>
      </ul>
    </div>
  );
};
