/* eslint-disable no-undef */
import '../Components/Components_styles/LastCars.css';
//import tracker from "../../assets/chevrolet-tracker-rs-2024.png"
//import fiat from "../../assets/Novo-Fiat-tipo (3).png"
//import kwid from "../../assets/kwid.png"
//import cambio from "../../assets/mudanca-de-marcha.png"
//import velocimetro from "../../assets/velocimetro.png"
//import combustivel from "../../assets/posto-de-gasolina.png"
//import local from "../../assets/local.png"
//import calendario from "../../assets/calendario.png"
import maior from "../assets/maior.svg"
import Favortie_Ads from './Favorite_Ads';


const LastCars = () => {
    return (
        <section id='involucrum-2'>
            <div className='last-cars'>
                <div className='last-cars-text'>
                <h2 className='cars-t'>EXPLORE OS ÚLTIMOS ANÚNCIOS</h2>
                <p className='cars-p'>Descubra os carros mais recentes disponíveis para aluguel na sua região</p>
                </div>
                <div className='cars-cards'>
                    {/* componente que contem os cards */}
                    <Favortie_Ads />

                    {/*
                    <div className='card'>
                        <img src={tracker} alt="Tracker" />
                        <h5 className='card-t'>Chevrolet Tracker 2024</h5>
                        <hr />
                        <div className='card-details'>
                            <div className='details-item'>
                                <img className='details-img' src={cambio} alt="cambio" />
                                <p className='details-p'>Manual</p>
                            </div>
                            <div className='details-item'>
                            <img className='details-img' src={velocimetro} alt="velocimetro" />
                            <p className='details-p'>91.436 km</p>
                            </div>
                            <div className='details-item'>
                            <img className='details-img' src={combustivel} alt="combustivel" />
                            <p className='details-p'>Gasolina</p>
                            </div>
                        </div>
                        <div className='card-local'>
                            <img src={local} alt="local" />
                            <p className='local-p'>Canasvieiras - Florianópolis</p>
                        </div>
                        <div className='card-btn'>
                            <img src={calendario} alt="calendario" />
                            <p className='card-btn-p'>Alugue Agora</p>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={fiat} alt="Fiat Tipo" />
                        <h5 className='card-t'>Fiat Tipo 2020</h5>
                        <hr />
                        <div className='card-details'>
                            <div className='details-item'>
                                <img className='details-img' src={cambio} alt="cambio" />
                                <p className='details-p'>Manual</p>
                            </div>
                            <div className='details-item'>
                            <img className='details-img' src={velocimetro} alt="velocimetro" />
                            <p className='details-p'>91.436 km</p>
                            </div>
                            <div className='details-item'>
                            <img className='details-img' src={combustivel} alt="combustivel" />
                            <p className='details-p'>Gasolina</p>
                            </div>
                        </div>
                        <div className='card-local'>
                            <img src={local} alt="local" />
                            <p className='local-p'>Coqueiros - Florianópolis</p>
                        </div>
                        <div className='card-btn'>
                            <img src={calendario} alt="calendario" />
                            <p className='card-btn-p'>Alugue Agora</p>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={kwid} alt="Kwid" />
                        <h5 className='card-t'>Renault Kwid 2020</h5>
                        <hr />
                        <div className='card-details'>
                        <div className='details-item'>
                                <img className='details-img' src={cambio} alt="cambio" />
                                <p className='details-p'>Manual</p>
                            </div>
                            <div className='details-item'>
                            <img className='details-img' src={velocimetro} alt="velocimetro" />
                            <p className='details-p'>91.436 km</p>
                            </div>
                            <div className='details-item'>
                            <img className='details-img' src={combustivel} alt="combustivel" />
                            <p className='details-p'>Gasolina</p>
                            </div>
                        </div>
                        <div className='card-local'>
                            <img src={local} alt="local" />
                            <p className='local-p'>Lagoa da Conceição - Florianópolis</p>
                        </div>
                        <div className='card-btn'>
                            <img src={calendario} alt="calendario" />
                            <p className='card-btn-p'>Alugue Agora</p>
                        </div>
                    </div>
                    */}
                    
                </div>
                <div className='more-cars-btn'>
                    <p className='more-cars-p'>Ver Todos os Anúncios</p>
                    <img className='more-cars-img' src={maior} alt="maior" />
                </div>         
            </div>
        </section>
    )
}

export default LastCars

