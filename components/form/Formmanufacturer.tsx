import { useState } from "react";
import styles from "./Formmanufacturer.module.css";

export default function Formmanufacturer() {
  const [signupState, setSignupState] = useState({
    cpfcnpj: "",
    razaosocial: "",
    nomefantasia: "",
    tipodefornecedor: "",
    indicadorinscestadual: "",
    inscestadual: "",
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    ibge: "",
  });

  const handleSignupForm = (event, key) => {
    setSignupState({ ...signupState, [key]: event.target.value });
    event.preventDefault();
  };
}
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
                type="text"
                placeholder="000.000.000-00"
                value={signupState.cpfcnpj}
                onChange={(event) => handleSignupForm(event, "cpfcnpf")}
              />
            </label>
          </div>

          <div className={styles.alignForm}>
            <label>
              Razão Social/Nome{" "}
              <input
                className={styles.alignInput}
                type="text"
                value={signupState.razaosocial}
                onChange={(event) => handleSignupForm(event, "razaosocial")}
              />
            </label>
          </div>

          <div className={styles.alignForm}>
            <label>
              Nome Fantasia{" "}
              <input
                className={styles.alignInput}
                type="text"
                value={signupState.nomefantasia}
                onChange={(event) => handleSignupForm(event, "nomefantasia")}
              />
            </label>
          </div>
        </fieldset>

        <fieldset className={styles.group}>
          <div className={styles.alignForm}>
            <label>Tipo de Fornecedor</label>
            <select
              className={styles.alignInput}
              value={signupState.tipodefornecedor}
              onChange={(event) => handleSignupForm(event, "tipodefornecedor")}
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
              value={signupState.indicadorinscestadual}
              onChange={(event) =>
                handleSignupForm(event, "indicadorinscestadual")
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
                value={signupState.inscestadual}
                onChange={(event) => handleSignupForm(event, "inscestadual")}
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
                value={signupState.cep}
                onChange={(event) => handleSignupForm(event, "cep")}
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
                value={signupState.rua}
                onChange={(event) => handleSignupForm(event, "rua")}
              />
            </label>
          </div>
          <div className={styles.alignForm}>
            <label>
              Número{" "}
              <input
                className={styles.alignnumber}
                type="text"
                value={signupState.numero}
                onChange={(event) => handleSignupForm(event, "numero")}
              />
            </label>
          </div>
          <div className={styles.alignForm}>
            <label>
              Complemento{" "}
              <input
                className={styles.aligncomp}
                type="text"
                value={signupState.complemento}
                onChange={(event) => handleSignupForm(event, "complemento")}
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
                value={signupState.bairro}
                onChange={(event) => handleSignupForm(event, "bairro")}
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
                value={signupState.cidade}
                onChange={(event) => handleSignupForm(event, "cidade")}
              />
            </label>
          </div>
          <div className={styles.alignForm}>
            <label>Estado</label>
            <select
              className={styles.alignstate}
              id="Estado"
              value={signupState.estado}
              onChange={(event) => handleSignupForm(event, "estado")}
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
