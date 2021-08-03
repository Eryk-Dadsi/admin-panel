import React from 'react';
import styles from './Ordering.scss';
import { ButtonGroup, Button } from '@material-ui/core'

const Ordering = () => (
  <div className={styles.component}>
    <h2>"Ordering view"</h2>
    <ButtonGroup variant="contained" color="secondary" aria-label="contained primary button group">
      <Button href={`${process.env.PUBLIC_URL}/ordering/new`} >New order</Button>
      <Button href={`${process.env.PUBLIC_URL}/ordering/order/:id`}>Order</Button>
    </ButtonGroup>
  </div>
);

export default Ordering;