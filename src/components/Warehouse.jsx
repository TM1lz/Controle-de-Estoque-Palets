import { useState } from "react";
import styles from "./Warehouse.module.css";

export default function Warehouse({ bloco }) {
  const [dados, setDados] = useState(bloco.prateleiras);        // Estado atual visível
  const [original, setOriginal] = useState(bloco.prateleiras);  // Backup original
  const [editando, setEditando] = useState(false);              // Modo de edição

  const handleChange = (linhaIndex, itemIndex, novoValor) => {
    const novoEstado = dados.map((linha, i) =>
      linha.map((item, j) =>
        i === linhaIndex && j === itemIndex ? novoValor : item
      )
    );
    setDados(novoEstado);
  };

  const handleEditar = () => {
    setEditando(true);
  };

  const handleSalvar = () => {
    setOriginal(dados);  // Atualiza o backup com os dados salvos
    setEditando(false);
  };

  const handleCancelar = () => {
    setDados(original);  // Restaura os dados anteriores
    setEditando(false);
  };

  return (
    <div className={styles.container}>
      <h2>{bloco.nome}</h2>
      {dados.map((linha, i) => (
        <div key={i} className={styles.prateleira}>
          {linha.map((item, j) => (
            <input
              key={j}
              className={styles.caixa}
              type="text"
              value={item}
              onChange={(e) => handleChange(i, j, e.target.value)}
              readOnly={!editando}
            />
          ))}
        </div>
      ))}

      <div className={styles.botoes}>
        {!editando ? (
          <button onClick={handleEditar}>Editar</button>
        ) : (
          <>
            <button onClick={handleSalvar}>Salvar</button>
            <button onClick={handleCancelar}>Cancelar</button>
          </>
        )}
      </div>
    </div>
  );
}
