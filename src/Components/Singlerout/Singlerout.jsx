import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../API/Index'; 


const SingleRoute = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
            .get(`/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, [id]);

    if (!product) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <h2>{product?.title}</h2>
            <img src={product?.images[0]} alt="" />
        </div>
    );
};

export default SingleRoute;
