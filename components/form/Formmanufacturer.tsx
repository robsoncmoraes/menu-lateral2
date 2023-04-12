import { useForm } from "react-hook-form";
import styles from "./Formmanufacturer.module.css";
import Input from "./Input";
import Submitbutton from "./Submitbutton";

export default function Formmanufacturer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};

  return (
    <>
      <h1 className={styles.title}>Informações Gerais</h1>

      <form id="FormId">
        <fieldset className={styles.group}>
          <Input
            label="CPF/CNPJ"
            text="CPF/CNPJ"
            name="cpfcnpj"
            type="text"
            placeholder="000.000.000-00"
            register={register}
            errors={errors}
          />

          <Input
            label="Razão Social/Nome"
            type="text"
            text="Razão Social/Nome"
            name="razaosocial"
            register={register}
            errors={errors}
          />

          <Input
            label="Nome Fantasia"
            type="text"
            text="Nome Fantasia"
            name="nomefantasia"
            register={register}
            errors={errors}
          />
        </fieldset>

        <fieldset className={styles.group}>
          <div>
            <label>Tipo de Fornecedor</label>
            <select
              title="seleção"
              className={styles.alignInput}
              {...register("tipofornecedor", {
                validate: (value) => {
                  return value != "0";
                },
              })}
            >
              <option selected disabled value="0"></option>
              <option value="importacao">Importação</option>
              <option value="nacional">Nacional</option>
              <option value="direto">Direto</option>
              <option value="indireto">Indireto</option>
            </select>
            {errors?.tipofornecedor?.type === "required" && (
              <p className="error-message">Tipo de Fornecedor é obrigatório</p>
            )}
          </div>

          <div>
            <label>Indicador de Inscrição Estadual</label>
            <select
              className={styles.alignInput}
              id="IndicadorInscEstadual"
              {...register("indicadorinscestadual", { required: true })}
            >
              <option selected disabled value=""></option>
              <option>Opção 01</option>
              <option>Opção 02</option>
              <option>Opção 03</option>
            </select>
            {errors?.indicadorinscestadual?.type === "required" && (
              <p className="error-message">
                Indicador de Inscrição Estadual é obrigatório
              </p>
            )}
          </div>
          <Input
            label="Inscrição Estadual"
            type="text"
            text="Inscrição Estadual"
            name="inscestadual"
            placeholder="000.000.000"
            register={register}
            errors={errors}
          />
        </fieldset>

        <h1 className={styles.title}>Informações de endereço</h1>

        <fieldset className={styles.group}>
          <Input
            label="CEP"
            type="text"
            text="CEP"
            name="cep"
            placeholder="00000-000"
            register={register}
            errors={errors}
          />
        </fieldset>

        <fieldset className={styles.group}>
          <Input
            label="Rua"
            type="text"
            text="Rua"
            name="rua"
            register={register}
            errors={errors}
          />

          <Input
            label="Número"
            type="text"
            text="Número"
            name="numero"
            register={register}
            errors={errors}
          />

          <Input
            label="Complemento"
            type="text"
            text="Complemento"
            name="complemento"
            register={register}
            errors={errors}
          />
        </fieldset>

        <fieldset className={styles.group}>
          <Input
            label="Bairro"
            type="text"
            text="Bairro"
            name="bairro"
            register={register}
            errors={errors}
          />

          <Input
            label="Cidade"
            type="text"
            text="Cidade"
            name="cidade"
            register={register}
            errors={errors}
          />

          <div>
            <label>Estado</label>
            <select
              className={styles.alignstate}
              id="Estado"
              {...register("estado", { required: true })}
            >
              <option selected disabled value=""></option>
              <option>Rio de Janeiro</option>
              <option>São Paulo</option>
              <option>Minas Gerais</option>
            </select>
            {errors?.estado?.type === "required" && (
              <p className="error-message">Estado é obrigatório</p>
            )}
          </div>

          <Input
            label="Cód. do Município no IBGE"
            type="text"
            id="IBGE"
            text="Cód. do Município no IBGE"
            name="ibge"
            register={register}
            errors={errors}
          />
        </fieldset>

        <Submitbutton
          id="ButtonId"
          text="Enviar"
          onClick={(event) => {
            event.preventDefault();
            handleSubmit(onSubmit)();
          }}
        />
        <button
          id="ButtonId"
          onClick={(event) => {
            event.preventDefault();
            handleSubmit(onSubmit)();
          }}
        >
          {" "}
          Enviar{" "}
        </button>
      </form>
    </>
  );
}
