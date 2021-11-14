import React from 'react';
import sort from '../icons/sort.png';
import { Input } from 'semantic-ui-react';
import s from './Search.module.css';
import Profiles from './Profiles/Profiles';

const Search = () => {


    return (
        <div>
            <h2 className="search">Поиск</h2>
            <div className={s.Icon}>
            <Input className="inputStyle" fluid icon='search' iconPosition='left' placeholder='Введи имя, тег, почту...' id="before" />
            <img src={sort} alt={sort} />
            </div>
            
        </div>
    )
}

export default Search
