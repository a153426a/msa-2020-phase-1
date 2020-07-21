import React, { useState, useEffect } from 'react';
import MediaCard from '../MediaCardComponent/MediaCard';
import { Grid } from '@material-ui/core';
import './MediaGrid.css';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

interface IState {
    img_src: any;
    camera: any;
}
interface IMediaGridProps {
    StartDate: (Date | null);
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        },
        gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        },
        title: {
        color: theme.palette.primary.light,
        },
        titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        },
    }),
);

function MediaGrid(props: IMediaGridProps) {
    const [ItemArray, setItemArray] = useState<IState[]>([{ img_src: 'https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02820/opgs/edr/fcam/FLB_647832728EDR_F0820938FHAZ00206M_.JPG', camera: {
        id: 20,
        name: "FHAZ",
        rover_id: 5,
        full_name: "Front Hazard Avoidance Camera"
        } }]);
    var requestDate:string = ''; 
    if(props.StartDate) { 
        requestDate = props.StartDate?.getFullYear() + '-' + (props.StartDate.getMonth()+1) + '-' + props.StartDate?.getDate();
    }

    const classes = useStyles();

    useEffect(() => {
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key='+process.env.REACT_APP_API_KEY+'&earth_date=' + requestDate)
            .then(response => response.json())
            .then(response => {
                setItemArray(response.photos);
            })
            .catch(() => console.log("it didn't work")
            );
    }, [props.StartDate]);

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cellHeight={'auto'} cols={2.5}>
                {ItemArray.map((el, index) => (
                <GridListTile key={"image_"+index}>
                    <img src={el.img_src} alt={el.camera.full_name} />
                    <GridListTileBar
                        title={el.camera.full_name}
                        classes={{
                            root: classes.titleBar,
                            title: classes.title,
                        }}
                        actionIcon={
                            <IconButton aria-label={`star ${el.camera.full_name}`}>
                            <StarBorderIcon className={classes.title} />
                            </IconButton>
                        }
                    />
                </GridListTile>
                ))}
            </GridList>
        </div>
    );
    
}

export default MediaGrid
