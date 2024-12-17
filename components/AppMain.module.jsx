import blogPosts from "../content"
import style from "./AppMain.module.css";
console.log(style.main)

function AppMain() {

    return (
      <section className={style.main}>
        <div className={style.container}>
            <h1 className={style.titolo}>IL MIO BLOG</h1>
            <div className={style.card}>
                <div> <img className={style.immagine} src={blogPosts[1].image} alt="" /></div>
                <h3 className={style.titoloPost}>{blogPosts[1].title}</h3>
                <p className={style.paragrafo}>{blogPosts[1].content}</p>
                <div className={style.button}>LEGGI DI PIÙ</div>
            </div>
        </div> 
      </section>
    )
  }
  
  export default AppMain