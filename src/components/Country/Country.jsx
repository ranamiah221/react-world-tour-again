

const Country = ({country}) => {
    console.log(country)
    const {name, flags}=country;
    return (
        <div style={{border:"2px solid skyblue", margin:'15px',padding:'15px', borderRadius:'15px'}}>
            <h3>name : {name?.common}</h3>
            <img src={flags?.png} alt="" />
        </div>
    );
};

export default Country;