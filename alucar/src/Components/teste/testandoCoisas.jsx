import  { useState } from "react";

function App() {
  const [user, setUser] = useState(null); // Estado para armazenar o usuário
  const [userId, setUserId] = useState(""); // Estado para armazenar o ID digitado

  const fetchUserById = () => {
    fetch(`http://localhost:8080/get-r-user/id/?id=${userId}`)
      .then((response) => {
        if (!response.ok) {
          // Trata respostas de erro (como 404 ou 500)
          return response.json().then((error) => {
            throw new Error(error.error); // Lança a mensagem de erro do backend
          });
        }
        return response.json(); // Converte a resposta JSON para um objeto
      })
      .then((data) => {
        setUser(data); // Atualiza o estado com os dados do usuário
        console.log("Usuário encontrado:", data);
      })
      .catch((error) => {
        console.error("Erro ao buscar usuário:", error.message);
        setUser(null); // Reseta o estado em caso de erro
      });
  };
  
  
  

  return (
    <div className="flexbox_container justify_flexbox_vertical_items">
      <h1>Buscar Usuário por ID</h1>
      {/* Input para o ID */}
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Digite o ID do usuário"
      />
      <button onClick={fetchUserById}>Buscar Usuário</button>

      {/* Exibe os dados do usuário */}
      {user ? (
        <div>
          <h2>Informações do Usuário:</h2>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Nome:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Senha:</strong> {user.password}</p>
          <p><strong>CPF:</strong> {user.cpf || "Não informado"}</p>
          <p><strong>Data de Nascimento:</strong> {user.birthdate || "Não informado"}</p>
          <p><strong>Telefone:</strong> {user.phone || "Não informado"}</p>
          <p><strong>Avaliação Média:</strong> {user.average_rating || "Não informado"}</p>
          <p><strong>Data de Criação:</strong> {user.created_at || "Não informado"}</p>
          <p><strong>Foto:</strong> {user.photo || "Não disponível"}</p>
        </div>
      ) : (
        <p>Digite um ID e clique no botão para buscar o usuário.</p>
      )}
    </div>
  );
}

export default App;
