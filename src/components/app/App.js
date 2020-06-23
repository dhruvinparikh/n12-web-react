import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';

import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import AssessmentIcon from '@material-ui/icons/Assessment';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import SearchForm from '../../domain/search/search-form';
import PrimaryMenuAppBar from '../menu';

import HistoryToggleContext from '../../context/history-toggle-context';
import HistoryToggleHook from '../../hooks/history-toggle-hook';

import SearchInputHoook from '../../hooks/search-input-hook';
import SearchInputContext from '../../context/search-input-context';

import useStyles from './App.styles';
import { useTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const theme = useTheme();
  const historyContext = HistoryToggleHook(false);
  const searchContext = SearchInputHoook([]);

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };




  return (
    <Router>

    <div className={classes.grow}>
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              onClick={handleDrawerOpen}
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
              <Typography className={classes.title} variant="h6" noWrap >
                <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }} >
                  N12
                </Link>
              </Typography>
            <HistoryToggleContext.Provider value={historyContext.historyToggle}>
              <SearchInputContext.Provider value={searchContext}>
                <SearchForm/>
              </SearchInputContext.Provider>
            </HistoryToggleContext.Provider >

            <div className={classes.grow} />
            <HistoryToggleContext.Provider value={historyContext}>
            <PrimaryMenuAppBar/>
            </HistoryToggleContext.Provider>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
            <List>
              <ListItem button component={Link} to={'/reports'}  onClick={handleDrawerClose}>
                <ListItemIcon><AssessmentIcon /></ListItemIcon>
                <ListItemText primary={'Reports'} />
              </ListItem>
            </List>
          {/* </Router> */}

          <Divider />
          {/* <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}
        </Drawer>
      </div>
      {/* <Router> */}
        <Route exact={true} path="/" render={() => {
          return(
            <HistoryToggleContext.Provider value={historyContext.historyToggle}>
              <HistoryToggleContext.Consumer>
                {(historyContext) => {
                  // console.log(historyContext)
                  return (
                  <div>here - render history {historyContext.toString()} </div>
                  )
                }}
              </HistoryToggleContext.Consumer>
              <SearchInputContext.Provider value={searchContext.searchQuery}>
                <SearchInputContext.Consumer>
                  {(searchQuery) => {
                    return(
                      <div>
                        {searchQuery.map((entry, index) =>
                          <div key={index}>{entry}</div>
                        )}
                      </div>
                    )
                  }}
                </SearchInputContext.Consumer>
              </SearchInputContext.Provider>
            </HistoryToggleContext.Provider>
          )
        }}/>

        <Route path="/reports" render={()=>{
          return(<div>REPORT</div>)
        }}/>

    </div>
    </Router>

  );
}
