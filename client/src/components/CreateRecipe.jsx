import { useState } from "react"
import { useSelector } from "react-redux"
import { postRecipe } from "../actions"
import styleHome from '../styles/Home.module.css'

export default function CreateRecipe(){

    const diets = useSelector(state => state.diets)
   
    const [input, setInput ] = useState({
        name: '',
        summary: '',
        healthScore: 0,
        step: [],
        diet: []        
    })



    function handleOnChange(e){
        setInput({...input, [e.target.name]: e.target.value})
         if(input.name && input.summary && input.diet.length) 
            e.target.form[7].type = 'submit'
    }

    function handleOnSelect(e){
        setInput({...input, diet: [...input.diet, e.target.form[3].value]})
        if(input.name && input.summary && e.target.form[3].value) 
            e.target.form[7].type = 'submit'
    }

    function handleOnStep(e){
        setInput({...input, step: [...input.step, e.target.form[4].value]})
        e.target.form[4].value = ''
        e.target.form[4].focus()
        if(input.name && input.summary && input.diet.length) 
            e.target.form[7].type = 'submit'
    }

    function handleOnSubmit(e){
        
        e.preventDefault()
        console.log('targete' ,e.target[0])
        postRecipe(input)
        e.target.form = [...e.target]
        handleOnClear(e)
    }

    function handleOnClear(e){
        for(let i=0; i<5; i++)
            e.target.form[i].value = '' 
        setInput({
            name: '',
            summary: '',
            healthScore: 0,
            step: [],
            diet: []
        })
        e.target.form[7].type = 'hidden'
     }

    return (
        <div className={styleHome.Home}>
            <h3 className={styleHome.title}>Crear una Receta</h3>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <label className={styleHome.title}>Nombre: </label>
                    <input type='text' name='name' pattern="^[A-Za-z' ']+$" title='Letras y espacios' onChange={handleOnChange} />
                </div>
                <div>
                    <label className={styleHome.title}>Resumen del plato: </label>
                    <textarea type='text' name='summary' onChange={handleOnChange} />
                </div>
                <div>
                    <label className={styleHome.title}>Nivel de "comida saludable": </label>
                    <input type='range' name='healthScore' min={1} max={100} onChange={handleOnChange} />
                    <label className={styleHome.title}>{input.healthScore}</label>
                </div>
                    <div> 
                        <label className={styleHome.title}>Tipos de dietas: </label>
                        <select name='diets' onChange={handleOnSelect}>
                            <option className={styleHome.title} value=''>Seleccionar</option>
                            {
                            diets.length? diets.map((r, i) => (
                                <option key = {i} value={r.name}>{r.name}</option>
                            )): null}
                    </select>
                    </div>
                <div>
                    <label className={styleHome.title}>Pasos a seguir: </label>
                    <input type='text' name='step'  />
                    <input type='button' name='addStep' value='Agregar Paso' onClick={handleOnStep} />
                </div>
                <div>
                    <input type='button' name='clear' value='Borrar' onClick={handleOnClear} />
                    
                </div>
                <div>
                    <input type='hidden' name='submitRecipe' value='Almacenar' />
                </div>
                <div>
                    <h3 className={styleHome.title}>Vista preliminar</h3>
                    <div>
                    <label className={styleHome.title}>{input.name}</label>
                    </div>
                    <div>
                    <label className={styleHome.title}>{input.summary}</label>
                    </div>
                    <div>
                    <label className={styleHome.title}>{input.healthScore}</label>
                    </div>
                    <div className={styleHome.title}>Dietas:
                        {input.diet?.map((r, i) => (
                            <div key={i}>{i + 1}-{ r }</div>
                        ))}
                    </div>
                    <div className={styleHome.title}>Pasos:
                        { input.step?.map((r, i) => (
                        <div key={i}>Paso {i + 1}: {r}</div> 
                        ))}
                    </div>
  
                </div>
            </form>
        </div>
    )
}


