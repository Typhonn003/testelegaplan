import { useState } from "react";
import "../styles/modal.scss";
import "./Button";
import { Button } from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  createTodo: (label: string) => void;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  createTodo,
}) => {
  const [title, setTitle] = useState("");

  if (!isOpen) return null;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo(title);
    setTitle("");
  };

  return (
    <div className="modal container">
      <h2>Nova Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input
            type="text"
            placeholder="Digite"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <div>
          <Button type="submit">Adicionar</Button>
          <Button type="button" onClick={onClose} color="grey">
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  );
};
