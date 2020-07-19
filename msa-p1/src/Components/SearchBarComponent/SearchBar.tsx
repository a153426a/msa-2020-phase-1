import React, { useState } from 'react';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Button, Grid} from '@material-ui/core';
import { IUserInput } from '../../Common/Interfaces'
import './SearchBar.css';

interface ISearchBarProps {
    SetUserInput: (a: IUserInput) => void;
}


function SearchBar(props: ISearchBarProps) {
    var aWeekAgo = new Date(); 
    aWeekAgo.setDate(aWeekAgo.getDate()-7);
    const [StartDate, setStartDate] = useState<Date | null>(
        aWeekAgo,
    );
    const handleStartDateChange = (date: Date | null) => {
        setStartDate(date);
    };

    const handleSubmit = () => {

        let UserInput: IUserInput = {
            StartDate: StartDate,
        }
        props.SetUserInput(UserInput);
    }
    
    return <div className="SearchBarContainer">
        <Grid container spacing={3}>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item xs={6} sm={3}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="yyyy/MM/dd"
                        margin="normal"
                        id="Date"
                        label="Date"
                        value={StartDate}
                        onChange={handleStartDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>

            <Grid item xs={6} sm={3}>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Grid>
        </Grid>
    </div>
}

export default SearchBar
