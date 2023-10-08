import '../../css/card.css'

const Card=(props)=>{
    
    const card=props.data
    return(
        <div className="Card-div">
{
    card.map((res)=>(
      <div className="card" key={res.id}>
        <p>{res.name}</p>
        <p>{res.email}</p>
        <p>{res.mobile}</p>
      </div>
    ))
}
        </div>
    )
}

export default Card