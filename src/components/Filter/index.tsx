import { useState } from 'react';
import './style.css';

type Props = {
    onFilter: Function
}

type FormData = {
    minPrice?: number;
    maxPrice?: number;
}

export default function Filter({ onFilter }: Props) {

    const [formData, setFormData] = useState<FormData>({
        minPrice: undefined,
        maxPrice: undefined
    })

    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;

        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        onFilter(formData.minPrice || 0, formData.maxPrice || Number.MAX_VALUE);
    }

    return (
        <div className='dsc-filter-container'>
            <form className='dsc-form' onSubmit={handleSubmit}>
                <div className='dsc-input-container'>
                    <input type="text" name='minPrice' placeholder='Preço mínimo' value={formData.minPrice || ""} onChange={handleInputChange} />
                    <input type="text" name='maxPrice' placeholder='Preço máximo' value={formData.maxPrice || ""} onChange={handleInputChange} />
                </div>
                <button className='dsc-btn-filter' type='submit'>Filtrar</button>
            </form>
        </div>
    );
}