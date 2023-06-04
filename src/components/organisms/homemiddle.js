import React from 'react'
import styles from './homemiddle.module.css'
import { Link, useNavigate } from "react-router-dom";

export default function Homemiddle() {
  return (<div className={styles.full}>
    <div className={styles.middle}>
    <div style={{marginBottom: "55px"}}><p> Start a new document </p><Link to='/editor' > <img  className={styles.img} src='https://lh3.googleusercontent.com/dO4L8ZzmAN4Es5cbY6eZYH6H11iPv9CW79EPQALJ8oUVqRM9KFnGbiEOdgu1KwisM3uvCqwu0We2b0DOXLAZ8Xc2VOWIN63MmpjS4541'/> </Link> <p>Blank</p></div>
   <div> <Link to='/editor' > <img className={styles.img} src='https://lh3.googleusercontent.com/TXLy8dgIWNj4--yoXxLlAEnZXuoWsBQaxSgnrYwSZOclIQ1IsPu4Lijs4Kl8oq6Ju6xfdaRhvFEsamCVnX-z1zcQaJQBbzy4MpxI0hA'/> </Link><p> Resume</p> </div>
   <div> <Link to='/editor' ><img className={styles.img} src='https://lh3.googleusercontent.com/9deqhBaYmYwd3pcj5LPm0Kx7RaHfx3cE5DTACYKzQujDVFwQZSJbZIOt4koT8bpkAl4_BLWXwVoh5A_pnXlFRrfgiWo7-yWAx-SdwWle7Q'/> </Link><p> Letter</p></div>
   <div> <Link to='/editor' ><img  className={styles.img} src='https://ssl.gstatic.com/docs/templates/thumbnails/10bJALGfGJG8BrzBSmG6EznIq6-84l1TZkQ-HC8jO368_400.png'/> </Link><p> Project</p></div>
   <div> <Link to='/editor' > <img className={styles.img} src='https://ssl.gstatic.com/docs/templates/thumbnails/1XykI9TfWo4IoUqGLjQ-D8NIU4jZ1Ml9OI8-Euj5FrA0_400_3.png'/></Link> <p> Brochure</p></div>
    </div>
    <div className={styles.recent}><div style={{margin:"50px"}}><p>Recent document</p> <img className={styles.img} src='https://lh3.googleusercontent.com/TXLy8dgIWNj4--yoXxLlAEnZXuoWsBQaxSgnrYwSZOclIQ1IsPu4Lijs4Kl8oq6Ju6xfdaRhvFEsamCVnX-z1zcQaJQBbzy4MpxI0hA'></img></div></div>
</div>
  )
}
