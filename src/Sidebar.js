import { Home, LibraryMusic, Search } from '@material-ui/icons';
import React from 'react';
import { useDataLayerValue } from './DataLayer';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();
  console.log(playlists.items);
  const data = [
    { options: 'Home', icon: Home },
    { options: 'Search', icon: Search },
    { options: 'Your Library', icon: LibraryMusic },
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

      {playlists?.items?.map(playlist => {
        return <SidebarOption title={playlist} />;
      })}
    </div>
  );
};

export default Sidebar;
