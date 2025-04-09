import styles from "../ModuleCSS/Footer.module.css"

export default function Footer() {
  return (
    <>
    <footer className={styles.footer}>
      <h1>Footer Section</h1>
      <div>
        <h1>Usefull Links</h1>
        <div>
        <a href="#">Home</a> | 
        <a href="#">About</a> | 
        <a href="#">Contact</a>
        <a href="#">Services</a>
        </div>
      </div>
    <div>
    <h1>Digital Store</h1>
    <div>
      <p>2025 Digital Store. All rights reserved.</p>
      <p>
        <a href="#">Privacy</a> | 
        <a href="#">Terms</a> | 
        <a href="#">Contact</a>
      </p>
    </div>
    
    </div>
    </footer>
    </>
  )
}

