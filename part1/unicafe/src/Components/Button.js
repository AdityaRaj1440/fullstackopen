const Button = ({cat, target, effect}) => {
    return (
        <>
        <button onClick={()=>effect(target+1)}>{cat}</button>
        </>
    )
}

export default Button