import "../css/error.css";
import {useNavigate} from 'react-router-dom'
function Error(){

    let history=useNavigate();

    return <div className="error_main_div">
      <div className="error_message_div">
        <h1>404 Error</h1>
        <h4>OOps, sorry page not found</h4>

        <button onClick={()=>{history('/')}}>Back to Home</button>
      </div>
    </div>
}

export default Error;