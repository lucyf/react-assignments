import MapIcon from '@material-ui/icons/Map';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const FooterComponent = () =>{


    return(
        <>
            <footer >
                <hr/>
                <div className="row justify-content-center align-items-center mt-3 mb-3">
                   <h6 className="m-2">SEGUINOS EN: </h6>
                       <img className="m-2" src={'https://i.imgur.com/ZgZ6rk3.png'} width="30rem" alt=""/>
                       <img className="m-2" src={'https://i.imgur.com/3MXRi5V.png'} width="30rem" alt=""/>
                </div>
                <div className="row">
                    <div style={{opacity: 0.75, fontSize: "0.75rem"}} className=" ml-2 row  align-items-center">
                        <ul>
                            <li className="row aling-items-center mb-2">
                            <i><img className="mr-2" src={'https://i.imgur.com/wBPoMxD.png'} width="18rem" alt=""/></i> <a href="#" > 01155667788</a>
                            </li>
                                <li className="row mb-2">
                            <MapIcon fontSize="small" className="mr-2"/><p className="mb-0">Montes de Oca 863, Retiro, Capital Federal, Buenos Aires, Argentina</p>
                            </li>
                                <li className="row">
                            <MailOutlineIcon fontSize="small" className="mr-2"/><a href="#">allyouneed@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                <div className="row ml-auto mr-3 justify-content-right align-items-center">
                    <p style={{fontSize:"0.85rem", opacity:0.75}}>*Todos los productos y datos son ficticios. </p>
                </div>
                </div>

            </footer>
        </>
    )
}

export default FooterComponent;