export const ListFruit = ({fruitList}) =>{
    return(
        <ul>
            {fruitList.map(fruit =>{
                return(
                <li key={fruit.id}>
                    <h2>{fruit.name}</h2>
                    <h2>{fruit.category}</h2>
                    <h2>{fruit.price}</h2>
                </li>
                )
            })}
        </ul>
    )
}