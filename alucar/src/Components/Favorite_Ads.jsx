/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import CarCard_Favorite from "./CarCard_Favorite";
import useCars from "../Hooks/UseCars";

function Favortie_Ads() {
  //pega todos os anuncios disponiveis
  // const { getAllAds } = useCars()
  //const [anuncios, setAnuncios] = useState([])
  // useEffect(() => {
  //   setAnuncios(getAllAds())
  // }, [])
  let anuncios = [
    {
      id: 1,
      title: 'Carro 0km',
      location: '',
      transmission: 'Automático',
      mileage: '16800km',
      main_fuel: 'Álcool',
      secundary_fuel: 'Gasolina',
      engine_power: '',
      steering_system: 'Hidráulico',
      number_of_seats: 0,
      plate: '',
      daily_rent_value: '',
      photos: [],
      desciption: ''
    }, {
      id: 2,
      title: 'Seminovo',
      location: '',
      transmission: 'Automático',
      mileage: '15000km',
      main_fuel: 'Gás',
      secundary_fuel: 'Gasolina',
      engine_power: '',
      steering_system: 'Hidráulico',
      number_of_seats: 5,
      plate: '',
      daily_rent_value: '',
      photos: [],
      desciption: ''
    },
    {
      id: 3,
      title: 'Carro novo disponível',
      location: 'São Paulo, SP',
      transmission: 'Manual',
      mileage: '1320',
      main_fuel: 'Eletrico',
      secundary_fuel: 'Gasolina',
      engine_power: '',
      steering_system: 'Hidráulico',
      number_of_seats: 5,
      plate: '',
      daily_rent_value: '',
      photos: [],
      desciption: ''
    }
  ]
  return(
    anuncios.map((anuncio) => (
      <CarCard_Favorite data={anuncio} />
    ))
  )
}

export default Favortie_Ads