const Cartaddeddata=(info)=>{
    console.log(info);
    const {
      name ,
      price,
     defaultPrice
    }=info;
    return (
        <div>
            <div className='zeroheightdiv'></div>
            <div className='datacart_row_'>
                <div className='cartdatacontainer'>
                    <div className='offercartdata_row'>
                        {/* <i className="styles_icon__m6Ujp _2MJB6 icon-Veg styles_iconVeg__shLxJ" role="presentation" aria-hidden="true" style={{ lineHeight: '1.2' }}></i> */}
                        <div className='datacart_txt_name'>
                            {name}
                        </div>
                    </div>
                    <div className='offer_data_cart_container'>
                        <div className='offer_data_cart_row'>
                            <div className='cartadded_count'>
                                {/* <div className='cartadded_count_add'>
                                                                    ADD
                                                                </div> */}
                                <div className='cartadded_count_plus'>
                                    +
                                </div>
                                <div className='cartadded_count_minus'>
                                    -
                                </div>
                                <div className='cartadded_count_data_minus'>
                                    1
                                </div>
                            </div>
                            <div className='cartadded_data_price'>
                                <span>{price ? (price / 100) : (defaultPrice / 100)}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Cartaddeddata;