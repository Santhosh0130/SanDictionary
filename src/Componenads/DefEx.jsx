export const DefEx = (props) =>{
    return(
        <>
        <div className="defPan">
            <div className="definition">{props.count}.{props.res.definition}</div>
            <div className="example">eg..,<br />{props.res.example == null ? "no example" : props.res.example}</div><br />
        </div>   
        </>
    )
}