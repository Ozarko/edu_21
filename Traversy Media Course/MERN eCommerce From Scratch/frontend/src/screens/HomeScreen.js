import React, { useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productAction'
import Product from '../components/Product'
import Loader from './Loader'
import Message from './Message'
const HomeScreen = () => {

  const dispatch = useDispatch()

  const {loading, error, products} = useSelector(state => state.productList)
  
  useEffect(()=> {
    dispatch(listProducts());
  }, [dispatch])

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader/>
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product, index) => (
            <Col key={`ProductItem--${index}`} sm={12} md={6} lg={4} xlg={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}

export default HomeScreen
