import React from 'react'

import firebase from '../../config/firebase';

import { Wrapper, AddNew } from './styles';

export default function Header() {
  const [newFact, setNewFact] = React.useState();

  const onCreate = () => {
    const database = firebase.firestore();
    database.collection('catfacts').add({fact: newFact});
  }

  return (
    <Wrapper>
      <h1> Cat Facts | React Redux and Firebase </h1>
      <AddNew className="add-new-fact">
        <input value={newFact} onChange={(e) => setNewFact(e.target.value)} />
        <button onClick={onCreate} >New CatFact!</button>
      </AddNew>
    </Wrapper>
  )
}
