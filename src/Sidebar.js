import { Home, LibraryMusic, Search } from '@material-ui/icons';
import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';

const Sidebar = () => {
  const data = [
    { options: 'Home', icon: Home, playList: 'Hip Hop' },
    { options: 'Search', icon: Search, playList: 'Rock' },
    { options: 'Your Library', icon: LibraryMusic, playList: 'Jazz' },
  ];

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
        alt="Spotify-logo"
      />
      {data.map(({ options, icon }) => {
        return <SidebarOption title={options} Icon={icon} />;
      })}
      <br />
      <strong className="sidebar__title">PLAYLIST</strong>
      <hr />
      {data.map(({ playList }) => {
        return <SidebarOption title={playList} />;
      })}
    </div>
  );
};

export default Sidebar;
