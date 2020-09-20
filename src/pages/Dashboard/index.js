import React, {useState, useEffect} from 'react';

import { Wrapper, CatFactsList } from './styles';

import Header from '../../components/Header';

import firebase from '../../config/firebase';

function Dashboard() {
  const [cats, setCats] = useState([]);
  const [newFact, setNewFact] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const database = firebase.firestore()
      const information = await database.collection('catfacts').get()

      setCats(information.docs.map(cat => cat.data()))
    }
    fetchData()
  }, [])

  const onCreate = () => {
    const database = firebase.firestore()
    database.collection('catfacts').add({fact: newFact})
  }

  return (
    <>
    <Header />
    <Wrapper>
      <input value={newFact} onChange={(e) => setNewFact(e.target.value)} />
      <button onClick={onCreate} >Create</button>
      <CatFactsList>
        {cats.map(cat => (
          <li key={cat.fact}>
            {cat.fact}
          </li>
        ))}
      </CatFactsList>
    </Wrapper>
    </>
  );
}

export default Dashboard;
