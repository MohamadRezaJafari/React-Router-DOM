import { NavLink, Outlet, useLocation } from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  // استفاده از استیت فرستاده شده از لاگین
  console.log(location.state);
  return (
    <div id="dashboard">
      <div id="sidebar">
        <NavLink to="profile">پروفایل</NavLink>
        <NavLink to="payment">پرداخت</NavLink>
      </div>
      {/* برای نمایش محتوای پروفایل و پرداخت */}
      <Outlet />
    </div>
  );
}

export default Dashboard;
