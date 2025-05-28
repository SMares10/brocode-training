
import studioPic from "./assets/maresstudio.jpeg"


function Card(){

        return(
            <div className="card">
                <img className="card-image" src={studioPic} alt="studio picture"></img>
                <h2 className="card-title">Mares Studio</h2>
                <p className="card-text">Indie Game Developer</p>


            </div>


        )


}

export default Card