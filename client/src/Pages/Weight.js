import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import KittenTable from '../Components/KittenTable';
import Chart from '../Components/Chart';
import ModalButton from '../Components/ModalButton'
import { NewWeightForm } from '../Components/Forms';
import Navbar from '../Components/Navbar';
import 'fontsource-roboto';
import logo from '../logo.svg';

const testingWeight = [{date : Date(2021,1,110), weight: 60},{date : Date(2021,1,11), weight: 70},{date : Date(2021,1,12), weight: 80},{date : Date(), weight: 90}];
const recMins = [50,60,70,80];
const recMaxs = [80,90,100,110];

export default function Weight() {
  const [weights, setWeights] = React.useState(testingWeight);
  const [date, setDate] = React.useState()
  const [weight, setWeight] = React.useState()

  const handleDateChange = event => {
      const { value } = event.target;
      setDate(value);
    };

  const handleWeightChange = event => {
      const { value } = event.target;
      setWeight(value);
  };
    const handleFormSubmit = event => {
      // When the form is submitted, prevent its default behavior, get recipes update the recipes state
      event.preventDefault();
      let numWeight=parseInt(weight)
      setWeights(testingWeight.push({date: date, weight: numWeight}))
      console.log(weights)
    };
  return (
     <div className="root">
      <Grid container spacing={3}>
        <Grid item xs={3}>
        <img src={logo} className="App-logo" alt="logo" />
        </Grid>
        <Grid item xs={9}>
          <Paper className="paper">
              <Typography variant="h1">Kitten 1</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Navbar page={0}/>
        </Grid>
        <Grid item xs={12}>
          <Chart data={testingWeight} recMins={recMins} recMaxs={recMaxs}/>
        </Grid>
        <Grid item xs={12}>
          <ModalButton label="Enter New Feeding" state={false} onClick= {handleFormSubmit}>
              <NewWeightForm onDateChange={handleDateChange} onWeightChange={handleWeightChange}/>
              
          </ModalButton>
        </Grid>
        <Grid item xs={12}>
          <KittenTable data={testingWeight} />
        </Grid>
      </Grid>
    </div>
  );
}