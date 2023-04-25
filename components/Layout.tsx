import Footer from './Footer';
import { Meta } from './Meta';
import { Navbar } from './Navbar';

export const Layout: React.FC<any> = ({ children }) => {
  return (
    <>
      <Meta />
      <main>{children}</main>
    </>
  );
};
