import React, { useState } from 'react';
import sort from '../icons/sort.png';
import { Input } from 'semantic-ui-react';
import s from './Search.module.css';
import Modal from './Modal/Modal';
import { Header, Divider, Radio, Icon } from 'semantic-ui-react';

const Search = ({filter, setFilter}) => {

  const [visible, setVisible] = useState(false);


  const handleChange = (event, {value}) => {
    setFilter({...filter, sort: value});
  };

  let showModal = () => {
    setVisible(true);
  };


  return (
    <div>
      <Modal visible={visible} setVisible={setVisible}>
      <div className={s.iconStyle} onClick={()=> setVisible(false) } ><Icon link name='close' circular color="grey"/></div>
            <div>
            
                <Header textAlign="center">Сортировка</Header> 
                <Radio
                name="radioGroup"
                label="По алфавиту"
                checked={filter.sort === 'firstName'} value="firstName" onChange={handleChange}
                ></Radio>
                <Divider hidden />
                <Radio
                name="radioGroup"
                label="По дню рождения"
                checked={filter.sort === 'birthday'} value="birthday" onChange={handleChange}
                ></Radio>
            </div>
        </Modal>
      <h2 className="search">Поиск</h2>
      <div className={s.Icon}>
        <Input className="inputStyle" fluid icon='search' iconPosition='left' placeholder='Введи имя, тег, почту...' 
        value={filter.query} onChange={e => setFilter({...filter, query: e.target.value})} />
        <img src={sort} alt={sort} onClick={() => showModal()} />
      </div>


    </div>
  )
}

export default Search
