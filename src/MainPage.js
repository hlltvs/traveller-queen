import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Data from "./Cities/Data";
import LanguageIcon from "@mui/icons-material/Language";
import PublicIcon from "@mui/icons-material/Public";

const drawerWidth = 25|0;

function MainPage(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [selectedCity, setSelectedCity] = React.useState({});
  const [visitedCity, setVisitedCity] = React.useState(
    "Simbat yolunda yürüyen yorulmaz."
  );

  const [visitedCityList, setVisitedCityList] = React.useState([
    { country: "China", city: "Hong Kong" },
    { country: "China", city: "Makao" },

    { country: "Japan", city: "Tokyo" },
    { country: "Japan", city: "Osaka" },
    { country: "Japan", city: "Hiroshima" },
    { country: "Japan", city: "Fukuyama" },

    { country: "Japan", city: "Kyoto" },
    { country: "South Korea", city: "Seoul" },

    { country: "Finland", city: "Helsinki" },
    { country: "Sweden", city: "Uppsala" },
    { country: "Sweden", city: "Stockholm" },
    { country: "Sweden", city: "Södertälje" },

    { country: "Montenegro", city: "Podgorica" },
    { country: "Montenegro", city: "Budva" },
    { country: "Montenegro", city: "Kotor" },
    { country: "Bosnia and Herzegovina", city: "Sarajevo" },
    { country: "Bosnia and Herzegovina", city: "Mostar" },
    { country: "Serbia", city: "Belgrade" },

    { country: "Georgia", city: "Tbilisi" },
    { country: "Georgia", city: "Batumi" },

    { country: "Turkey", city: "Mersin" },
    { country: "Turkey", city: "Ankara" },
    { country: "Turkey", city: "Sorgun" },
    { country: "Turkey", city: "Nevşehir" },
    { country: "Turkey", city: "Konya" },
    { country: "Turkey", city: "Afyon" },
    { country: "Turkey", city: "Eskişehir" },
    { country: "Turkey", city: "Istanbul" },
    { country: "Turkey", city: "Giresun" },
    { country: "Turkey", city: "Kayseri" },
  ]);

  const [planToVisitCityList, setPlanToVisitedCityList] = React.useState([
    { country: "Thailand", city: "Bangkok" },
    { country: "Thailand", city: "Phuket" },
  ]);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ul style={{ paddingLeft: "20px" }}> Plan to Travel</ul>
        {planToVisitCityList.map((text, index) => (
          <ListItem key={text.city} disablePadding>
            <ListItemButton
              //selected={customization.isOpen.findIndex((id) => id === item.id) > -1}
              onClick={() => {
                setSelectedCity({ city: text.city, visited: false });
                setVisitedCity(text.city);
              }}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <LanguageIcon /> : <PublicIcon />}
              </ListItemIcon>
              <ListItemText primary={text.city} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ul style={{ paddingLeft: "20px" }}>Travelled</ul>
        {visitedCityList.map((text, index) => (
          <ListItem key={text.city} disablePadding>
            <ListItemButton
              onClick={() => {
                setSelectedCity({ city: text.city, visited: true });
                setVisitedCity(text.city);
              }}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <LanguageIcon /> : <PublicIcon />}
              </ListItemIcon>
              <ListItemText primary={text.country + "/" + text.city} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {visitedCity}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Data selectedCity={selectedCity} />
      </Box>
    </Box>
  );
}

MainPage.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default MainPage;
