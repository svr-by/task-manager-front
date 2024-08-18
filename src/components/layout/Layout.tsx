import { Outlet } from 'react-router-dom';

import Header from './header/Header';
import Footer from './footer/Footer';
import './Layout.css';

type TLayoutProps = {
  navMenu?: boolean;
  header?: boolean;
  footer?: boolean;
  title?: string;
  children: React.ReactNode;
};

export default function Layout({
  navMenu = true,
  header = true,
  footer = true,
  title = '',
  children,
}: TLayoutProps) {
  return (
    <main className="layout">
      {navMenu && <aside className="layout__nav-menu"></aside>}
      <div className="layout__content">
        {header && <Header title={title} />}
        <div className="layout__outlet">{children ? children : <Outlet />}</div>
        {footer && <Footer />}
      </div>
    </main>
  );
}
