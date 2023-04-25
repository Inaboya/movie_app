import { Meta } from './Meta';

export const Layout: React.FC<any> = ({ children }) => {
  return (
    <>
      <Meta />
      <main>{children}</main>
    </>
  );
};
