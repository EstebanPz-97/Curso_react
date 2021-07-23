import './categories.css'

export default function Categories ({Children, title}){
    return (
        <div className='categories'>
             <h3 className="categories__title">{title}</h3>
             {Children}
        </div>
    )
}