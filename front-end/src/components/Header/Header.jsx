import React from "react";
import { redirect } from "react-router-dom";
import "./header.css"
import Logo from "../Logo/Logo";
import { useNavigate } from "react-router-dom";

function Header({ userName, isLoggedIn }) {
  const navigate = useNavigate();

  function redirectPerfilPage() {
    navigate('/profile');
  }

  function handleLogin() {
    navigate('/login');
  }


  return (
    <header className="tryitter-header">
      <div className="logo">
        <Logo/>
      </div>
    
      {/* botão onClick deverá redirecionar o usuário para o perfil dele */}
      {!isLoggedIn ? <button className="user-perfil" onClick={() => redirectPerfilPage()}>Meu Perfil </button> : null}
      <div className="user-info">
        {isLoggedIn ? (
          <>
            {/* Aqui precisaremos exibir o nome do usuário logado */}
            <div className="username">{userName}</div>
            <button className="login-logout-button">Sair</button>
          </>
        ) : (
          <button className="login-logout-button" onClick={() => handleLogin()}>Entrar</button>
        )}
      </div>
    </header>
  );
}

export default Header;


