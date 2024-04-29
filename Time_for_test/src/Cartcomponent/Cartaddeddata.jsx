const Cartaddeddata=(info)=>{
    console.log(info);
    const {
      name ,
      price
    }=info;
    return (
        <div className="cartaddeddata_container">
            <div className="cartaddeddata_product_name_container">
                <i className="styles_icon__m6Ujp _2MJB6 icon-Veg styles_iconVeg__shLxJ" role="presentation" aria-hidden="true" style={{ lineHeight: '1.2' }}></i>
                <div className="cartaddeddata_name_product">Combo for 1 Veg<button className="customize_btn">Customize</button></div>
            </div>
            <div className="add_price_count-container">
                <div className="add_mutiple_count_container">
                    <div className="mutiple_addpro mutiple_addpro_two">
                        <div className="multiple_addpro_add_one multiple_addpro_add_two multiple_addpro_add_three ">ADD</div>
                        <div className="multiple_addpro_add_three M_addpro_plus_I M_addpro_plus_II">+</div>
                        <div className="addpro_plus_sign">+</div>
                        <div className="addpro_empty"></div>
                        <div className="addpro_count">1</div>
                    </div>
                    <div className="price_container_add"><span className="add_pro_price">359</span></div>
                </div>
            </div>
        </div>

    )
}

export default Cartaddeddata;