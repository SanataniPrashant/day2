import styles from '../ModuleCSS/Product.module.css'

export default function Product() {
  return (
    <>
    <div className={styles.product} id='home'>
      <h1>Products</h1>
      <div>
        <div className={styles.card}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMjevuU5VQnYoNs7Hli3_Ov4zj-va4kmIK5g&s" alt="" />
          <h2>Mens Shoe</h2>
          <p>Price: $50</p>
          <p>From ₹9825.00/mo. with instant cashback Footnote §§ and No Cost EMI Footnote §orMRP ₹119900.00
          (Incl. of all taxes)</p>
          <button>Buy Now</button>
        </div>
        <div className={styles.card}>
          <img src="https://images.meesho.com/images/products/260482757/ipt72_512.webp" alt="" />
          <h2>Mens Shoe</h2>
          <p>Price: $50</p>
          <p>From ₹9825.00/mo. with instant cashback Footnote §§ and No Cost EMI Footnote §orMRP ₹119900.00
          (Incl. of all taxes)</p>
          <button>Buy Now</button>
        </div>
        
        <div className={styles.card}>
          <img src="https://images-eu.ssl-images-amazon.com/images/I/71JsX-27FqL._AC_SR462,693_.jpg" alt="" />
          <h2>Mens Shoe</h2>
          <p>Price: $50</p>
          <p>From ₹9825.00/mo. with instant cashback Footnote §§ and No Cost EMI Footnote §orMRP ₹119900.00
          (Incl. of all taxes)</p>
          <button>Buy Now</button>
        </div>
        <div className={styles.card}>
          <img src="https://i0.wp.com/rmgbd.net/wp-content/uploads/2016/09/small-footwear-makers-request-sd-on-imported-items.jpg?fit=737%2C500&ssl=1" alt="" />
          <h2>Mens Shoe</h2>
          <p>Price: $50</p>
          <p>From ₹9825.00/mo. with instant cashback Footnote §§ and No Cost EMI Footnote §orMRP ₹119900.00
          (Incl. of all taxes)</p>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
    </>
  )
}

