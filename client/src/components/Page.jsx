import PostRecipes from "./PostRecipes"
import style from '../styles/Page.module.css'
import styleHome from '../styles/Home.module.css'

export default function Page(props){
const { refresh, currentPage, length } = props

function prevPage(){
    if(currentPage===1)return;
    refresh(currentPage - 1)
    
}

function nextPage(){
    if(currentPage>=length/9)return;
    refresh(currentPage + 1)
}

return (
    <div>
        <h3 className={styleHome.title}>Pagina: {currentPage}</h3>

        <button className={style.button} onClick={prevPage}>Pagina previa</button>
        <button className={style.button} onClick={nextPage}>Pagina siguiente</button>


    </div>
)
}
