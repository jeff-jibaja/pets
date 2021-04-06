import './button.scss'

export const Button= ({text,clase}) =>{
    return (
        <button className={clase}>{text}</button>
    )   
}