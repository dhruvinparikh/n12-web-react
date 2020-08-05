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

export default function ResultsGridList() {
  const classes = useStyles();
  const searchContext = useContext(SearchInputContext);
  // arg any type query 
  
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}  cols={3}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <ListSubheader component="div">Results</ListSubheader>
        </GridListTile>
          {
            Object.entries(searchContext.searchResult).map((value,index) => {
              // console.log(value[1].item[0].name)
              // render cards here
              // <div key={value[0]} value={value[1].item[0].name}>{value[1].item[0].name}</div>
              return (
                <GridListTile key={value[0]}>
                <img src={value[0]} alt={value[0]} />
                <GridListTileBar
                  title={value[1].item[0].name}
                  // subtitle={<span>by: {tile.author}</span>}
                  actionIcon={
                    <IconButton aria-label={`info about ${value[1].item[0].name}`} className={classes.icon}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
                </GridListTile>
              )
            })
          }
        {/* {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))} */}
      </GridList>
    </div>
  );
}