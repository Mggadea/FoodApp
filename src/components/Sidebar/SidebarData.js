import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import EcoRoundedIcon from "@material-ui/icons/EcoRounded";
export const SidebarData = [
  {
    title: "Home",
    icon: <AppsRoundedIcon />,
    link: "/home",
  },
  {
    title: "Search",
    icon: <SearchRoundedIcon />,
    link: "/search",
  },
  {
    title: "Favourites",
    icon: <FavoriteRoundedIcon />,
    link: "/favourites",
  },
  {
    title: "Veggie",
    icon: <EcoRoundedIcon />,
    link: "/veggie",
  },
  {
    title: "About",
    icon: <InfoRoundedIcon />,
    link: "/about",
  },
];
