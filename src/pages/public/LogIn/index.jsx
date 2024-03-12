import React, { useState } from "react";
import Button from "../../../components/Button";
import { useAuth } from "../../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/loged-in");
    } catch (error) {
      setError(`Erro ao fazer login!
      Erro: ${error}`);
    }
    setLoading(false);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="columns is-centered">
      <div className="column is-one-third">
        <h1 className="title is-1 has-text-centered">Physicare</h1>
        <p className="subtitle is-6 has-text-centered">
          Faça o login para começar a utilizar nossos serviços
        </p>
        <form className="box has-shadow" onSubmit={handleSubmit}>
          {error && <div className="notification is-danger">{error}</div>}
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="Seu email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Senha</label>
            <div className="control">
              <input
                className="input"
                type="password"
                placeholder="Sua senha"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <Button disabled={loading} type="submit" className="is-primary">
                Login
              </Button>
            </div>
            <div className="control">
              <Link to="/auth/sign-up">
                <Button type="button" className="is-link">
                  Cadastrar-se
                </Button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
