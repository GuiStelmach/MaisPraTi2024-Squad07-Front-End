import './Components_styles/Formulario_Anuncio.css'
import '../../../Project_Files/CSS/Patterns.css'
import useCars from "../Hooks/UseCars"
import { useEffect, useState } from 'react'
import { TbFolderPlus, TbHandFinger } from "react-icons/tb";
import { LuDownload } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function Formulario_Anuncio({ formData, setFormData, type }) {
  const [fileList, setFileList] = useState([])
  const { createAds, updateAds } = useCars()
  const navigate = useNavigate()

  useEffect(() => {
    formData.documentos = fileList
  }, [fileList])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const changeFiles = (input) => {
    let newFiles = Array.from(input.files)
    setFileList((prevFileList) => [...prevFileList, ...newFiles])
  };

  const removeFile = (fileIndex) => {
    setFileList((prevFiles) => prevFiles.filter((_, i) => i !== fileIndex));
  }

  const downloadFile = (file) => {
    const fileURL = URL.createObjectURL(file); // Cria uma URL temporária para o arquivo
    const a = document.createElement("a"); // Cria um link <a>
    a.href = fileURL;
    a.download = file.name; // Define o nome do arquivo para download
    a.click(); // Simula o clique no link
    URL.revokeObjectURL(fileURL); // Limpa a URL temporária
  }

  const dropFiles = (e) => {
    e.preventDefault()
    e.target.classList.remove('dragover')
    let newFiles = e.dataTransfer.files
    setFileList((prevFileList) => [...prevFileList, ...newFiles])
    const inputFile = document.querySelector('#file')
    inputFile.files = newFiles
  }

  function formatFileSize(bytes) {
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let unitIndex = 0;
  
    // Converte o tamanho para a unidade apropriada
    while (bytes >= 1024 && unitIndex < units.length - 1) {
      bytes /= 1024;
      unitIndex++;
    }
  
    // Retorna o tamanho formatado com duas casas decimais e a unidade correspondente
    return `${bytes.toFixed(2)} ${units[unitIndex]}`;
  }

  //envia o formulario
  const sendForm = () => {
    // type == 'Criar' ? 
    //   createAds(formData)
    // : updateAds(formData, formData.id)

    navigate('/home')
  }

  return(
      <>
        <div className="form-container">
          <h3>{type} Anúncio</h3>
          <form>
            <div className="input">
              <label htmlFor="name">Nome do Anúncio*</label>
              <input 
                type="text" 
                id="title"
                name='title'
                value={formData.title}
                onChange={handleChange}
                required />
            </div>
            <div className="input">
              <label htmlFor="local">Localização do Veículo*</label>
              <input 
                type="text"  
                id="location"
                name='location' 
                placeholder='Bairro - Cidade'
                value={formData.location}
                onChange={handleChange}
                required/>
            </div>
            <div className="input">
              <label htmlFor="cambio">Câmbio*</label>
              <select 
                id="cambio"
                name='transmission'
                value={formData.transmission}
                onChange={handleChange}>
                <option value="Manual" selected>Manual</option>
                <option value="Automático">Automático</option>
                <option value="Semiautomático">Semiautomático</option>
                <option value="CVT">CVT</option>
              </select>
              <IoIosArrowDown />
            </div>
            <div className="input">
              <label htmlFor="km">Quilometragem*</label>
              <input 
                type="text" 
                id="km"
                name='mileage' 
                placeholder='Número aproximado'
                value={formData.mileage}
                onChange={handleChange}
                required/>
            </div>
            <div className="input">
              <label htmlFor="combustivel">Combustível*</label>
              <select 
                id="combustivel"
                name='main_fuel'
                value={formData.main_fuel}
                onChange={handleChange}>
                <option value="Álcool" selected>Álcool</option>
                <option value="Gasolina">Gasolina</option>
                <option value="Gás">Gás</option>
                <option value="Elétrico">Elétrico</option>
              </select>
              <IoIosArrowDown />
            </div>
            <div className="input">
              <label htmlFor="alt-combustivel">Combustível Alternativo*</label>
              <select 
                id="alt-combustivel"
                name='secondary_fuel'
                value={formData.secundary_fuel}
                onChange={handleChange}>
                <option value="Álcool" selected>Álcool</option>
                <option value="Gasolina">Gasolina</option>
                <option value="Gás">Gás</option>
                <option value="Elétrico">Elétrico</option>
              </select>
              <IoIosArrowDown />
            </div>
            <div className="input">
              <label htmlFor="pot">Potência do Motor*</label>
              <input 
                type="text" 
                id="pot"
                name='engine_power'
                value={formData.engine_power}
                onChange={handleChange}
                required />
            </div>
            <div className="input">
              <label htmlFor="sist">Sistema de Direção*</label>
              <select 
                id="sist"
                name='steering_system'
                value={formData.steering_system}
                onChange={handleChange}>
                <option value="Hidráulico" selected>Hidráulico</option>
                <option value="Elétrico">Elétrico</option>
                <option value="Mecânico">Mecânico</option>
              </select>
              <IoIosArrowDown />
            </div>
            <div className="input">
              <label htmlFor="num">Número de assentos*</label>
              <input 
                type='number' 
                id="num" 
                min={1} 
                max={8}
                name='number_of_seats'
                value={formData.number_of_seats}
                onChange={handleChange}
                required/>
            </div>
            <div className="input">
              <label htmlFor="plate">Placa do veículo*</label>
              <input 
                type="text" 
                id="plate"
                name='plate'
                value={formData.plate}
                onChange={handleChange}
                required />
            </div>
            <div className="input">
              <label htmlFor="price">Valor do Aluguel*</label>
              <input 
                type="text" 
                id="price"
                name='daily_rent_value'
                value={formData.daily_rent_value}
                onChange={handleChange}
                required />
            </div>
            <div className="input">
              <p>Documentos de motorista*</p>
              <div className="input-file-container">
                {fileList.map(file => (
                  <div className="file-container">
                    <div className="file-infos">
                      <p className='name'>{file.name}</p>
                      <p className="size">{formatFileSize(file.size)}</p>
                    </div>
                    <div className="file-buttons">
                      <button 
                        className='download' 
                        type='button' 
                        onClick={() => downloadFile(file)}>Baixar</button>
                      <button 
                        className='remove' 
                        type='button' 
                        onClick={() => removeFile(fileList.indexOf(file))}>Remover</button>
                    </div>
                  </div>
                ))}
                <div 
                  className="input-files" 
                  onDragOver={(e) => {
                    e.preventDefault()
                    e.target.classList.add('dragover')}
                    }
                  onDragLeave={(e) => {
                    e.preventDefault()
                    e.target.classList.remove('dragover')}
                  } 
                  onDrop={(e) => dropFiles(e)}>
                  <label htmlFor="file">
                    <p className="chose-file">Escolher arquivos <TbFolderPlus /></p>
                    <p className="drop-file">Solte o arquivo <LuDownload /></p>
                  </label>
                  <input 
                    type="file" 
                    id="file" 
                    multiple 
                    onChange={(e) => changeFiles(e.target)}/>
                </div>
              </div>
              <p className='info'>Os documentos anexados são exibidos apenas para fins de verificação do motorista e não serão compartilhados com terceiros ou disponibilizados para download fora da plataforma.</p>
            </div>
            <div className="input">
              <label htmlFor="desc">Descrição*</label>
              <textarea 
                id="desc"
                name='description'
                value={formData.description}
                onChange={handleChange}>
              </textarea>
            </div>
            <div className="button-container">
              <button type="submit" onClick={sendForm}>{type == 'Criar' ? 'Criar Anúncio' : 'Salvar Alterações'}</button>
              <p>Campos obrigatórios*</p>
            </div>
          </form>
        </div>
      </>
    )
}

export default Formulario_Anuncio