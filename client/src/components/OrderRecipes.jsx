import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { alphaOrder, reverseAlphaOrder } from "../actions"

export default function OrderRecipes(props){
    const history = useHistory()
    const { recipes } = props
    const dispatch = useDispatch()

    const [ render, setRender ] = useState(0)
    function alphaOrderRecipes(e){
            
    
        dispatch(alphaOrder(recipes))
        setRender(render + 1)
     
        
        console.log(recipes)
    }

    function reverseOrder(){
        dispatch(reverseAlphaOrder(recipes))
       setRender(render + 1)
        
        
    }
      
    useEffect(() => {
        console.log('useEffect')
        dispatch(alphaOrder(recipes))
    }, [alphaOrderRecipes])

    return (
    <div>
        <button onClick={alphaOrderRecipes}>a-z</button>   
        <button onClick={reverseOrder}>z-a</button>      
    </div>
    )
}