import React from 'react'
import styles from './homenav.module.css'
import { FcDocument} from "react-icons/fc";
import TextField  from '@mui/material/TextField'
import {AiOutlineSearch} from "react-icons/ai"
export default function Homenav() {
  return (
    <div  className={styles.navmain}>

   <div style={{ display:"flex" }}><FcDocument className={ styles.docicon}/> <h1> Docs</h1></div> 
   <TextField style={{ width: "55rem" ,color:"darkgrey" ,backgroundColor:"honeydew" }}
id="standard-search"
label=  <AiOutlineSearch/> 
type="search"
variant="outlined"
placeholder='Search'
/>
<img  style={{borderRadius:"50%" , marginRight:"40px"}} src='https://media.licdn.com/dms/image/D4D03AQE2cy4zAJmldg/profile-displayphoto-shrink_800_800/0/1678272091304?e=1691625600&v=beta&t=F4A3s71nhHfBShATSJVrE0n9pI0Hn_a0HTTnzc87LPA' height={"70px"} width={"70"}/ >      
    </div>
  )
}
