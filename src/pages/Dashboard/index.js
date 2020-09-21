import React, {useState, useEffect} from 'react';

import { Wrapper, CatFactsList, Scroll } from './styles';

import Header from '../../components/Header';
import { FactInput } from '../../components/FactInput';

import firebase from '../../config/firebase';

function Dashboard() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const database = firebase.firestore()
      const information = await database.collection('catfacts').get()

      setCats(information.docs.map(cat => ({...cat.data(), id: cat.id})))
    }
    fetchData()
  }, [])

  return (
    <>
    <Header />
    <Wrapper>
      <CatFactsList>
        {cats.map(cat => (
          <li key={cat.fact}>
            <FactInput cat={cat} />
          </li>
        ))}
      </CatFactsList>
    </Wrapper>
    </>
  );
}

export default Dashboard;
