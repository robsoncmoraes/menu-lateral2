import styles from "./Formmanufacturer.module.css";

export default function Formmanufacturer() {
  return (
    <>
      <h1>Informações Gerais</h1>

      <form className={styles.editForm}>
        <fieldset>
          <div>
            <label>
              CPF/CNPJ <input type="number" placeholder="000.000.000-00" />
            </label>
          </div>

          <div>
            <label>
              Razão Social/Nome <input type="text" />
            </label>
          </div>

          <div>
            <label>
              Nome Fantasia <input type="text" />
            </label>
          </div>
        </fieldset>

        <fieldset>
          <div>
            <label>Tipo de Fornecedor</label>
            <select id="TipoFornecedor">
              <option selected disabled value=""></option>
              <option>Opção 01</option>
              <option>Opção 02</option>
              <option>Opção 03</option>
            </select>
          </div>

          <div>
            <label>Indicador de Inscrição Estadual</label>
            <select id="IndicadorInscEstadual">
              <option selected disabled value=""></option>
              <option>Opção 01</option>
              <option>Opção 02</option>
              <option>Opção 03</option>
            </select>
          </div>

          <div>
            <label>
              Inscrição Estadual
              <input type="number" placeholder="000.000.000.000" />
            </label>
          </div>
        </fieldset>

        <h1>Imformações de endereço</h1>

        <fieldset>
          <div>
            <label>
              CEP <input type="number" placeholder="00000-000" />
            </label>
          </div>
        </fieldset>

        <fieldset>
          <div>
            <label>
              Rua <input type="text" />
            </label>
          </div>
          <div>
            <label>
              Número <input type="text" />
            </label>
          </div>
          <div>
            <label>
              Complemento <input type="text" />
            </label>
          </div>
        </fieldset>

        <fieldset>
          <div>
            <label>
              Bairro <input type="text" />
            </label>
          </div>
          <div>
            <label>
              Cidade
              <input type="number" placeholder="000.000.000.000" />
            </label>
          </div>
          <div>
            <label>Estado</label>
            <select id="Estado">
              <option selected disabled value=""></option>
              <option>Rio de Janeiro</option>
              <option>São Paulo</option>
              <option>Minas Gerais</option>
            </select>
          </div>
          <div>
            <label>
              Cód. do município no IBGE
              <input type="number" placeholder="000.000.000.000" />
            </label>
          </div>
        </fieldset>
      </form>
    </>
  );
}
