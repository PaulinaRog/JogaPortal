import logo from '../../assets/logo.png';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { LayoutProps } from '../../services/interfaces';
import { useState } from 'react';
import { setDisplayType } from '../../redux/slice';
import {useDispatch} from "react-redux";

const navLinks = [
  { path: '/', label: 'Blog', id: 1 },
  { path: '/about', label: 'About', id: 2 }
];

const Layout: React.FC<LayoutProps> = ({ children }) => {

  const [tiles, setTiles] = useState(false);
  const dispatch = useDispatch();

  const handleDisplayTypeChange = (newDisplayType: any) => {
    dispatch(setDisplayType(newDisplayType));
  };

  const handleChangeViewList = () => {
    setTiles(!tiles);
    handleDisplayTypeChange("list");
  };

  const handleChangeViewTiles = () => {
    setTiles(!tiles);
    handleDisplayTypeChange("tiles");
  };

  return (
    <div className="flex h-screen flex-col">
      <nav className="top-0 flex h-fit w-full items-center justify-between bg-primary px-5 py-2 shadow-md">
        <Link href="/"><img src={(logo as StaticImageData).src} alt="Logo" className="w-[150px]" /></Link>
        <div className="flex h-fit gap-5">
          {navLinks.map((link) => {
            return (
              <Link href={link.path} key={link.id}>
                {link.label.toUpperCase()}
              </Link>
            );
          })}
             {tiles ? (
            <button
              onClick={handleChangeViewTiles}
            >
              <i className="fa-solid fa-table-cells-large"></i>
            </button>
          ) : (
            <button
              onClick={handleChangeViewList}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          )}
        </div>
      </nav>
      <main className="flex-1 overflow-x-hidden overflow-y-scroll">{children}</main>
      <footer className="bottom-0 h-fit w-full bg-primary px-5 py-2">
        &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Layout;
