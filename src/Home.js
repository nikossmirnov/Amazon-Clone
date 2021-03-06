import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' alt='' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg' /> 
          
                <div className='home__row'>
                <Product 
                title='You dont know JS'
                price={10.00}
                image='https://m.media-amazon.com/images/I/41kn-mEpe6L._SL500_SX145_.jpg'
                rating='****' />
                   <Product 
                title='You dont know JS'
                price={10.00}
                image='https://m.media-amazon.com/images/I/41kn-mEpe6L._SL500_SX145_.jpg'
                rating='****' />
                   <Product 
                title='You dont know JS'
                price={10.00}
                image='https://m.media-amazon.com/images/I/41kn-mEpe6L._SL500_SX145_.jpg'
                rating='****' />  
                </div>


                <div className='home__row'>
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />

                </div>
                
                <div className='home__row'>
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />


                </div>
        </div>
        </div>


    )
}

export default Home
