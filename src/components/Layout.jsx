import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="mx-auto max-w-[375px] md:max-w-[1440px]">
      <Outlet />
    </div>
  );
};

export default Layout;
