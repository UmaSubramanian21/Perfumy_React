// import images to use 
import img1 from "../assets/images/one.jpg"
import img2 from "../assets/images/two.jpg"
import img3 from "../assets/images/three.jpg"


// products page
function Products() {
    return (
      <div className="products">
        {/* product1 */}
        <section class="product1">
          <img src={img1} alt="perfume_image"></img>
          <p className="pro_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.illo!</p>
        </section>
  
        {/* Product2 */}
        <section>
          <img src={img2} alt="perfume_image"></img>
          <p className="pro_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. harum!</p>
        </section>
  
        {/* product 3 */}
        <section>
          <img src={img3} alt="perfume_image"></img>
          <p className="pro_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.  officiis.</p>
        </section>
      </div>
    )
  }

  //  export to another 
export default Products
