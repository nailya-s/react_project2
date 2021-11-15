import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import flying from '../../icons/flying-saucer.svg';
import s from './Error.module.css'

const Error = ({reload}) => {
    return (
        <div className={s.container}>
        <Image size='small' src={flying} avatar  />
            <p><strong>Какой-то сверхразум все сломал</strong></p>
            <p className={s.textGrey}>Постараемся быстро починить</p>
            <a className={s.textBlue} onClick={reload}>Попробовать снова</a>
         
        </div>
    )
}

export default Error
