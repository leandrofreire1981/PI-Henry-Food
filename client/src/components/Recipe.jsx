import { useSelector } from "react-redux";
import PostRecipes from "./PostRecipes";

export default function Recipe(){

    const recipe = useSelector(state => state.recipe)
    return (
        <>
            {recipe?.map(r => (
                <PostRecipes key={r.id} name={r.name} summary={r.summary} healthScore={r.healthScore} image={r.image} diets={r.diets} steps={r.steps} />
            ))}
        </>
    )
}