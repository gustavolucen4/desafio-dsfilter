import { useContext } from 'react';
import { ContextProductCount } from '../../utils/context-product';
import './style.css';

export default function Header(){

    const {contextProductCount} = useContext(ContextProductCount);

    return(
        <header className='dsc-header'>
            <div className='dsc-header-container dsc-container'>
                <h1>DSFilter</h1>
                <div>
                    <p>{contextProductCount} produto(s)</p>
                </div>
            </div>
        </header>
    );
}