import { useState } from "react";
import styles from "./Formmanufacturer.module.css";

export default function Formmanufacturer() {
  const [signupState, setSignupState] = useState({
    CpfCnpj: "",
    RazaoSocial: "",
    NomeFantasia: "",
    TipoFornecedor: "",
    IndicadorInscEstadual: "",
    InscEstadual: "",
    Cep: "",
    Rua: "",
    Numero: "",
    Complemento: "",
    Bairro: "",
    Cidade: "",
    Estado: "",
    ibge: "",
  });

  const handleSignupForm = (event, key) => {
    setSignupState({ ...signupState, [key]: event.target.value });
    event.preventDefault();
  };

  return (
    <>
      <h1 className={styles.title}>Informações Gerais</h1>

      <form className={styles.editForm} onSubmit={handleSignupForm}>
        <fieldset className={styles.group}>
          <div className={styles.alignForm}>
            <label>
              CPF/CNPJ{" "}
              <input
                className={styles.alignInput}
                type="number"
                placeholder="000.000.000-00"
                value={signupState.CpfCnpj}
                onChange={(event) => handleSignupForm(event, "CpfCnpj")}
              />
            </label>
          </div>

          <div className={styles.alignForm}>
            <label>
              Razão Social/Nome{" "}
              <input
                className={styles.alignInput}
                type="text"
                value={signupState.RazaoSocial}
                onChange={(event) => handleSignupForm(event, "RazaoSocial")}
              />
            </label>
          </div>

          <div className={styles.alignForm}>
            <label>
              Nome Fantasia{" "}
              <input
                className={styles.alignInput}
                type="text"
                value={signupState.NomeFantasia}
                onChange={(event) => handleSignupForm(event, "NomeFantasia")}
              />
            </label>
          </div>
        </fieldset>

        <fieldset className={styles.group}>
          <div className={styles.alignForm}>
            <label>Tipo de Fornecedor</label>
            <select
              className={styles.alignInput}
              value={signupState.TipoFornecedor}
              onChange={(event) => handleSignupForm(event, "TipoFornecedor")}
            >
              <option selected disabled value=""></option>
              <option>Opção 01</option>
              <option>Opção 02</option>
              <option>Opção 03</option>
            </select>
          </div>

          <div className={styles.alignForm}>
            <label>Indicador de Inscrição Estadual</label>
            <select
              className={styles.alignInput}
              id="IndicadorInscEstadual"
              value={signupState.IndicadorInscEstadual}
              onChange={(event) =>
                handleSignupForm(event, "IndicadorInscEstadual")
              }
            >
              <option selected disabled value=""></option>
              <option>Opção 01</option>
              <option>Opção 02</option>
              <option>Opção 03</option>
            </select>
          </div>

          <div className={styles.alignForm}>
            <label>
              Inscrição Estadual
              <input
                className={styles.alignInput}
                type="number"
                placeholder="000.000.000.000"
                value={signupState.InscEstadual}
                onChange={(event) => handleSignupForm(event, "InscEstadual")}
              />
            </label>
          </div>
        </fieldset>

        <h1 className={styles.title}>Informações de endereço</h1>

        <fieldset className={styles.group}>
          <div className={styles.alignForm}>
            <label>
              CEP{" "}
              <input
                className={styles.aligncep}
                type="number"
                placeholder="00000-000"
                value={signupState.Cep}
                onChange={(event) => handleSignupForm(event, "Cep")}
              />
            </label>
          </div>
        </fieldset>

        <fieldset className={styles.group}>
          <div className={styles.alignForm}>
            <label>
              Rua{" "}
              <input
                className={styles.alignrua}
                type="text"
                value={signupState.Rua}
                onChange={(event) => handleSignupForm(event, "Rua")}
              />
            </label>
          </div>
          <div className={styles.alignForm}>
            <label>
              Número{" "}
              <input
                className={styles.alignnumber}
                type="text"
                value={signupState.Numero}
                onChange={(event) => handleSignupForm(event, "Numero")}
              />
            </label>
          </div>
          <div className={styles.alignForm}>
            <label>
              Complemento{" "}
              <input
                className={styles.aligncomp}
                type="text"
                value={signupState.Complemento}
                onChange={(event) => handleSignupForm(event, "Complemento")}
              />
            </label>
          </div>
        </fieldset>

        <fieldset className={styles.group}>
          <div className={styles.alignForm}>
            <label>
              Bairro{" "}
              <input
                className={styles.alignbairro}
                type="text"
                value={signupState.Bairro}
                onChange={(event) => handleSignupForm(event, "Bairro")}
              />
            </label>
          </div>
          <div className={styles.alignForm}>
            <label>
              Cidade
              <input
                className={styles.aligncidade}
                type="text"
                placeholder=" "
                value={signupState.Cidade}
                onChange={(event) => handleSignupForm(event, "Cidade")}
              />
            </label>
          </div>
          <div className={styles.alignForm}>
            <label>Estado</label>
            <select
              className={styles.alignstate}
              id="Estado"
              value={signupState.Estado}
              onChange={(event) => handleSignupForm(event, "Estado")}
            >
              <option selected disabled value=""></option>
              <option>Rio de Janeiro</option>
              <option>São Paulo</option>
              <option>Minas Gerais</option>
            </select>
          </div>
          <div className={styles.alignForm}>
            <label>
              Cód. do município no IBGE
              <input
                className={styles.alignibge}
                type="number"
                id="IBGE"
                value={signupState.ibge}
                onChange={(event) => handleSignupForm(event, "ibge")}
              />
            </label>
          </div>
        </fieldset>
      </form>
    </>
  );
}
