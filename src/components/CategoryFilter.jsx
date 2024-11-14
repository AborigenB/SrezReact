export default function CategoryFilter({products, setCategory, category, handleCategoryChange}){
    const categories = [];
    products.map(element=>{
        if(categories.includes(element.category)){

        } else {
            categories.push(element.category);
        }
    })
    return(
        <div className="flex gap-4">
            {categories.map((element, index)=>{
                return(<button key={index} onClick={()=>{handleCategoryChange(element)}} className={`p-2 rounded  text-white ${(category == element)? `bg-green-500`:`bg-green-800`}`}>{element}</button>)
            })}
            {console.log(category)}
        </div>
    )
}