import Filter from '../Filter';
import * as productService from '../../services/product-service'
import './style.css';
import { useContext, useEffect, useState } from 'react';
import { ProductDTO } from '../../models/Product';
import Listing from '../Listing';
import { ContextProductCount } from '../../utils/context-product';

export default function ListingBody() {

    const {setContextProductCount} = useContext(ContextProductCount);
    const [products, setProducts] = useState<ProductDTO[]>([]);

    function handleFilterSubmit(min: number, max: number){
        const productList = productService.findByPrice(min, max);
        setProducts(productList);
        setContextProductCount(productList.length);
    }

    useEffect(() => {
        handleFilterSubmit(0, Number.MAX_VALUE);
    }, [])

    return (
        <main className='dsc-main'>
            <section className='dsc-container'>
                <Filter onFilter={handleFilterSubmit} />
                <Listing productList={products}/>
            </section>
        </main>
    );
}