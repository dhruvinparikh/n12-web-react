import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
// import tileData from './tileData';
import {SearchInputContext} from '../../context/search-input-context';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 'inherit',
    height: 'inherit',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function NavigationDrawer() {
  const classes = useStyles();
  const searchContext = useContext(SearchInputContext);

  return (
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
  );
}