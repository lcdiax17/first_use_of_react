export const CardPerson = ({name, age, country}) =>{
    return(
        <>
        <fieldset>
            <h1>{name}</h1>
            <h2>{age}</h2>
            <h4>{country}</h4>
        </fieldset>
        </>
    )
}