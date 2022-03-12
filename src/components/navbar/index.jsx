import './styles.scss';
import {
  ChatBubbleOutline,
  DarkModeOutlined,
  FullscreenExitOutlined,
  ListOutlined,
  NotificationsNoneOutlined,
  SearchOutlined,
} from '@mui/icons-material';
import LanguageIcon from '@mui/icons-material/Language';
import { DarModeContext } from '../context/darkModeContext';
import { useContext } from 'react';

export const Navbar = () => {
  const { dispatch } = useContext(DarModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" name="search" id="search" placeholder="Buscar..." />
          <SearchOutlined />
        </div>
        <div className="items">
          <div className="item">
            <div className="language">
              <LanguageIcon />
              English
            </div>
          </div>
          <div className="item">
            <DarkModeOutlined className="icon" onClick={() => dispatch({ type: 'TOGGLE' })} />
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutline className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlined className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
