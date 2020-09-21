import React, { useState } from 'react'
import firebase from '../../config/firebase';

import { Container } from './styles';

export const FactInput = ({cat}) => {
  const [fact, setFact] = useState(cat.fact);

  const onUpdate = () => {
    const database = firebase.firestore();
    database.collection('catfacts').doc(cat.id).set({...cat, fact})
  }

  const onDelete = () => {
    const database = firebase.firestore();
    database.collection('catfacts').doc(cat.id).delete()
  }

  return (
    <Container>
      <input value={fact} onChange={(e) => {setFact(e.target.value)}} />
      <span className="buttons">
        <button onClick={onUpdate} >Edit</button>
        <button onClick={onDelete} >Remove</button>
      </span>
    </ Container>
  )
}
