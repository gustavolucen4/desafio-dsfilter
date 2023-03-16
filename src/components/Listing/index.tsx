import { ProductDTO } from '../../models/Product';
import './style.css';

type Props = {
    productList: ProductDTO[];
}

export default function Listing({ productList }: Props) {

    return (
        <>
            {
                productList.length > 0 ?
                    <div className='dsc-product-list-container'>

                        {
                            productList.map(product => (
                                <div key={product.id} className='dsc-product-card'>
                                    <p className='dsc-product-description'>{product.name}</p>
                                    <h4 className='dsc-product-price'>R$ {product.price.toFixed(2)}</h4>
                                </div>
                            ))
                        }

                    </div>
                    :
                    <></>
            }
        </>
    );
}