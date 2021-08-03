import React from 'react';
import styles from './Tables.scss';
import { Button, ButtonGroup } from '@material-ui/core';

const Tables = () => (
  <div className={styles.component}>
    <h2>"Tables view"</h2>
    <ButtonGroup variant="contained" color="secondary" aria-label="contained primary button group">
      <Button href={`${process.env.PUBLIC_URL}/tables/booking/:id`} >Booking</Button>
      <Button href={`${process.env.PUBLIC_URL}/tables/event/:id`}>Event</Button>
    </ButtonGroup>
  </div>
);

export default Tables;