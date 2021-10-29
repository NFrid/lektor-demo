import React from 'react';
import SectionsMenu from './SectionsMenu';
import '../styles/Header.scss';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => (
  <div className="Header">
    <a className="logo" href="/">
      Vercel Demo
    </a>
    <SectionsMenu />
  </div>
);

export default Header;
