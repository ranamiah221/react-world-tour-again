

const Country = ({country,handleVisited}) => {

    const {name, flags, population, region}=country;
    return (
        <div style={{border:"2px solid skyblue", margin:'15px',padding:'15px', borderRadius:'15px'}}>
            <h3>name : {name?.common}</h3>
            <img src={flags?.png} alt="" />
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <button onClick={()=>handleVisited(country)} style={{background:'skyblue'}}>Mark Visited</button>
        </div>
    );
};

export default Country;