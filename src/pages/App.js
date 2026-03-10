import { useState } from 'react';
import github from '../assets/github.png';
import Input from '../components/input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import {api} from '../services/api';

import { Container } from './styles';
function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [respos, setRepos] = useState([]);

  const handleSearchRepos = async () => {
    const {data} = await api.get(`repos/${currentRepo}`)

    if(data.id){

      const isExist = respos.find(repo => repo.id === data.id);
      if(!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return
      }
      
    }
    alert('Repositório não encontrado!');


  }

  const handleRemoveRepo = (id) => {
    const filteredRepositories = respos.filter(repo => repo.id !== id);

    setRepos(filteredRepositories);
    console.log(filteredRepositories);
    console.log('Removendo repositório com ID:', id);
  }



  return (
    <Container>
      <img src={github} width={72} height={72} alt='github logo'/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepos}/>
      {respos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
