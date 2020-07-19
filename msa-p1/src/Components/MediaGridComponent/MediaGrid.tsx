import React, { useState, useEffect } from 'react';
import MediaCard from '../MediaCardComponent/MediaCard';
import { Grid } from '@material-ui/core';
import './MediaGrid.css';

interface IState {
    img_src: any;
    camera: any;
}
interface IMediaGridProps {
    StartDate: (Date | null);
}
function MediaGrid(props: IMediaGridProps) {
    const [ItemArray, setItemArray] = useState<IState[]>([{ img_src: '', camera: {} }]);
    console.log(props.StartDate);
    var requestDate:string = ''; 
    if(props.StartDate) { 
        requestDate = props.StartDate?.getFullYear() + '-' + (props.StartDate.getMonth()+1) + '-' + props.StartDate?.getDate();
    }

    useEffect(() => {
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=' + process.env.REACT_APP_API_KEY + '&earth_date=' + requestDate)
            .then(response => response.json())
            .then(response => {
                setItemArray(response.photos)
            })
            .catch(() => console.log("it didn't work")
            );
    }, [props.StartDate]);

    console.log('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=' + process.env.REACT_APP_API_KEY + '&earth_date=' + requestDate)

    var Cards: JSX.Element[] = [];
    ItemArray.forEach((el: IState, i: Number) => {
        if (!el || !el.img_src || !el.camera) {
            return;
        }
        Cards.push(
            <Grid key={"card_"+i} item sm={6} md={4} lg={3} className="MediaGridCard">
                <MediaCard ImageUrl={el.img_src} Description={el.camera.full_name} />
            </Grid>)
    })

    if(Cards[0]) { 
        return (
            <div>
                <Grid container spacing={3} className="MediaGridContainer">
                    {Cards}
                </Grid>
            </div>
        )
    } else { 
        return ( 
            <div> 
                There are no photos in the database, please try another day. 
            </div>
        )
    }
    
}

export default MediaGrid
