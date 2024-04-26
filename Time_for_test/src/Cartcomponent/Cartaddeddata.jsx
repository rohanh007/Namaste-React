const Cartaddeddata=(info)=>{
    console.log(info);
    const {
      name ,
      price
    }=info;
    return (
        <div className="datacart_row_product">
        <div className="cartdatacontainer">
            <div className="offercartdata_row">
                <i className="icon-food" role="presentation" aria-hidden="true" style={{ lineHeight: '1.2' }}></i>
                <div className="datacart_txt_name">{name}<div className="offer_data_txt">1 Free Delight for you</div></div>
            </div>
            <div className="offer_data_cart_container">
                <div className="offer_data_cart_row">
                    <div className="offer_data_cart_div">
                        <div className="offer_data_cart_count_product">1</div>
                        <div className="offer_data_cart">{(price)/100}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Cartaddeddata ;