import React, { useState } from 'react';
import sort from '../icons/sort.png';
import { Input } from 'semantic-ui-react';
import s from './Search.module.css';
import Modal from './Modal/Modal';
import { Header, Divider, Radio, Icon } from 'semantic-ui-react';

const Search = () => {
  const [value, setValue] = useState(null);
  const [visible, setVisible] = useState(false);
  const handleChange = (event, {value}) => {
    setValue(value);  
    setVisible(false);
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
                checked={value === 'alphabet'} value="alphabet" onChange={handleChange}
                ></Radio>
                <Divider hidden />
                <Radio
                name="radioGroup"
                label="По дню рождения"
                checked={value === 'birthDate'} value="birthDate" onChange={handleChange}
                ></Radio>
            </div>
        </Modal>
      <h2 className="search">Поиск</h2>
      <div className={s.Icon}>
        <Input className="inputStyle" fluid icon='search' iconPosition='left' placeholder='Введи имя, тег, почту...' id="before" />
        <img src={sort} alt={sort} onClick={() => showModal()} />
      </div>


    </div>
  )
}

export default Search
