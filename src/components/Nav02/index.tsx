// app\components\Nav02\index.tsx ナビ02

import style from "../Nav02/nav.module.css"
import { useState } from "react"

function Nav02() {

   const [OpenNav, setOpenNav] = useState<boolean>(false)
   const open = () => setOpenNav(true)
   const close = () => setOpenNav(false)

   return (
      <>
         <nav className={`${style.nav} ${OpenNav && style.open}`} onClick={close}>
            <ul className={`${style.ul} ${OpenNav && style.open}`}>
               <li><a href="/">トップページ</a></li>
               <li><a href="/about">アバウトページ</a></li>
               <li><a href="/news/1">ニュースページ</a></li>
               <li><a href="/contact">コンタクトページ</a></li>
            </ul>
            <button className={style.close} onClick={close}>閉じる</button>
         </nav>
         <button className={style.btn} onClick={open}>開く</button>

      </>
   )

}


export default Nav02