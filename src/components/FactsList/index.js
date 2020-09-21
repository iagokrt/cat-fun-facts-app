import React from 'react'

import firebase from '../../config/firebase';

import { Wrapper, List } from './styles';

import { FactInput } from '../../components/FactInput';

export default function FactsList() {
  const [cats, setCats] = React.useState([]);

  React.useEffect(() => {
    const database = firebase.firestore();

    // const unsubscribe
    return database.collection('catfacts').onSnapshot((snapshot) => {
      const catsData = [];

      snapshot.forEach(doc => catsData.push((
        { ...doc.data(), id: doc.id }
      )));

      setCats(catsData);
      console.log(catsData);
    });
    // directly returning is equal to return unsubscribe variable afterwards
    // return unsubscribe
  }, []);

  return (
    <Wrapper>
      <List>
        {cats.map(cat => (
          <li key={cat.fact}>
            <FactInput cat={cat} />
            <span>Author: {cat.author}</span>
          </li>
        ))}
      </List>
    </Wrapper>
  )
}
