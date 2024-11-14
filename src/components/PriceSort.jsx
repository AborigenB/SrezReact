export default function PriceSort({sortProducts}){
    return(
        <select onChange={(e)=>{sortProducts(e.target.value)}}>
            <option value="default">По умолчанию</option>
            <option value="asc">По Возрастанию</option>
            <option value="desc">По Убыванию</option>
        </select>
    )
}