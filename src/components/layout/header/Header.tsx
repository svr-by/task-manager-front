import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

import { PATHS } from '@/router/paths';
import LogoSvg from '@/assets/img/logo.svg';
import AccountMenu from '../accountMenu/AccountMenu';
import './Header.css';

type THeaderProps = {
  title: string;
};

export default function Header({ title }: THeaderProps) {
  return (
    <header className="header">
      <div className="header-logo">
        <Tooltip title="Главная" placement="bottom-start">
          <Link to={PATHS.MAIN} className="header-logo__link">
            <img src={LogoSvg} alt="Logo" className="header-logo__image" />
          </Link>
        </Tooltip>
      </div>
      <h1 className="header-logo">{title}</h1>
      <AccountMenu />
    </header>
  );
}
