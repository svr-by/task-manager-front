import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ButtonBase from '@mui/material/ButtonBase';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import Divider from '@mui/material/Divider';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

import { signOut } from '@/redux/slices/userSlice';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { PATHS } from '@/router/paths';
import './AccountMenu.css';

function stringAvatar(name: string) {
  return {
    sx: { bgcolor: '#337ec2' },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

export default function AccountMenu() {
  const { account } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const anchorRef = useRef(null);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleNavigateMenuItem = (path: PATHS) => {
    navigate(path);
    setOpen(false);
  };

  const handleSignout = () => {
    dispatch(signOut());
    setOpen(false);
  };

  return account ? (
    <div className="account-menu">
      <ButtonBase
        disableRipple
        ref={anchorRef}
        className="account-menu__button"
        onClick={() => setOpen(true)}
      >
        <Avatar {...stringAvatar(account.name)} className="account-menu__avatar" />
      </ButtonBase>

      <Popover
        open={open}
        onClose={() => setOpen(false)}
        anchorEl={anchorRef.current}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        data-testid="account-popover"
      >
        <div className="account-menu__info">
          <div className="account-menu__title">
            <h5 className="account-menu__name">{account.name}</h5>
          </div>
        </div>
        <Divider />
        <div className="account-menu__nav">
          <div
            className="account-menu__nav-item"
            onClick={() => handleNavigateMenuItem(PATHS.ACCOUNT)}
          >
            <PermIdentityIcon className="account-menu__nav-icon" />
            Профиль
          </div>
          <div className="account-menu__nav-item" onClick={handleSignout}>
            <ExitToAppIcon className="account-menu__nav-icon" />
            Выйти
          </div>
        </div>
      </Popover>
    </div>
  ) : null;
}
