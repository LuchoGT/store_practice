import { IconSearch, IconX } from '@tabler/icons-react';
import './SearchStore.scss';
import { useApi } from '../../hook/useApi';
import { useForm } from 'react-hook-form';
import {useState} from 'react'
import { CardSearchStore } from '../CardSearchStore/CardSearchStore';

interface props{
  openSearch: ()=>void;
}



export const SearchStore = ({openSearch}:props) => {


  const [value, setValue] = useState('');

  const onChange = (e)=>{
    setValue(e.target.value);
  }

  const onSearch=(searchTerm:string)=>{
    console.log('search',searchTerm);
    
  }


  const {characters} = useApi();

    // Almacena la lógica del filtro en una variable
    const filteredCharacters = characters
    ? characters.filter((item) => {
        const searchTerm = value.toLowerCase();
        const full = item.name.toLowerCase();

        return searchTerm && full.startsWith(searchTerm);
      })
    : [];

    console.log(filteredCharacters);
    

  return (
    <div className="search">
      <div className='search-container'>
        <IconSearch 
        onClick={()=>onSearch(value)}
        className='search-container__icon search-container__icon--search'/>
        <input 
              type="text" 
              className='search-container__input' 
              value={value}
              onChange={onChange}
							placeholder='Buscar'/>
        <IconX onClick={openSearch} className='search-container__icon search-container__icon--close'/>
      </div>
      <div className='search-data'>
        {
          filteredCharacters.slice(0,6).map((item)=>(
            <>
            <CardSearchStore {...item}/>
            </>
          ))
        }
      </div>
      <div>Mostrar los {filteredCharacters.length} resultados</div>
    </div>
  )
}
