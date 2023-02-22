import React from "react";
import styles from "./Table.module.css";

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table className={styles.table}>
      <caption></caption>
      <thead>
        <tr>
          <th
            onClick={() => requestSort("name")}
            className={getClassNamesFor("name")}
            className={styles.theadth}
            align="left"
          >
            NOME
          </th>
          <th className={styles.theadth} align="left">
            CNPJ
          </th>
          <th className={styles.theadth} align="left">
            AÇÕES
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr className={styles.tbodytr} key={item.id}>
            <td className={styles.tbodytd}>{item.name}</td>
            <td className={styles.tbodytd}>{item.cnpj}</td>
            <td className={styles.tbodytd} width="150">
              {item.action}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function Table() {
  return (
    <div className="Table">
      <ProductTable
        products={[
          {
            id: 1,
            name: "Nvidia",
            cnpj: "48.479.961/0001-57",
            action: (
              <div align="right">
                <button className={styles.buttonedit}>Editar</button>
                <button className={styles.buttonerase}>Apagar</button>
              </div>
            ),
          },
          {
            id: 2,
            name: "Gigabyte",
            cnpj: "47.377.561/0001-78",
            action: (
              <div align="right">
                <button className={styles.buttonedit}>Editar</button>
                <button className={styles.buttonerase}>Apagar</button>
              </div>
            ),
          },
          {
            id: 3,
            name: "Kingston",
            cnpj: "64.245.525/0001-70",
            action: (
              <div align="right">
                <button className={styles.buttonedit}>Editar</button>
                <button className={styles.buttonerase}>Apagar</button>
              </div>
            ),
          },
          {
            id: 4,
            name: "Samsung",
            cnpj: "56.722.837/0001-07",
            action: (
              <div align="right">
                <button className={styles.buttonedit}>Editar</button>
                <button className={styles.buttonerase}>Apagar</button>
              </div>
            ),
          },
          {
            id: 5,
            name: "AMD",
            cnpj: "90.745.999/0001-90",
            action: (
              <div align="right">
                <button className={styles.buttonedit}>Editar</button>
                <button className={styles.buttonerase}>Apagar</button>
              </div>
            ),
          },
          {
            id: 6,
            name: "Intel",
            cnpj: "87.384.161/0001-04",
            action: (
              <div align="right">
                <button className={styles.buttonedit}>Editar</button>
                <button className={styles.buttonerase}>Apagar</button>
              </div>
            ),
          },
          {
            id: 7,
            name: "Sandisk",
            cnpj: "29.613.677/0001-87",
            action: (
              <div align="right">
                <button className={styles.buttonedit}>Editar</button>
                <button className={styles.buttonerase}>Apagar</button>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
