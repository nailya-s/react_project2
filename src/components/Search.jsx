import React from 'react';
import sort from '../icons/sort.png';
import { Input, Tab } from 'semantic-ui-react';
import s from './Search.module.css';

const Search = () => {
    const panes = [
        {
          menuItem: 'Tab 1',
          render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>,
        }
      ]


    return (
        <div>
            <h2 className="search">Поиск</h2>
            <div className={s.Icon}>
            <Input className="inputStyle" fluid icon='search' iconPosition='left' placeholder='Введи имя, тег, почту...' id="before" />
            <img src={sort} alt={sort} />
            </div>
            

            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </div>
    )
}

export default Search
