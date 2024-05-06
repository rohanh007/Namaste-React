import "../../template/css/Cartbtn.css";
const Cartbtn=({additem , removeitem, count})=>{
   console.log(count);

    return (
        <div className="added_cart_container">
        <button className=" added_cart_comman_css added_cart_left_container add-button-left-container" onClick={removeitem}>
          <div className="added_cart_sign_comman">−</div>
        </button>
        <div className=" added_cart_text_add">
          <button className="added_cart_comman_css added_cart_add_btn">
            <div className=" added_cart_sign_comman">Add</div>
          </button>
          <button direction="stable" className="added_cart_comman_css added_cart_count">
            <div className=" added_cart_sign_comman">{count}</div>
          </button>
          {/* <button className="added_cart_comman_css added_cart_second">
            <div className="added_cart_sign_comman">2</div>
          </button> */}
        </div>
        <button className="added_cart_comman_css added_cart_right_container add-button-right-container" onClick={additem}>
          <div className="added_cart_sign_comman">+</div>
        </button>
      </div>
    )
}

export default Cartbtn ;