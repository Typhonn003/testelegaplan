import { useTodo } from "../hooks/useTodo";
import "../styles/deleteModal.scss";
import "./Button";
import { Button } from "./Button";

export const DeleteTodoModal = ({ id }: { id: number }) => {
  const { isDeleteModalOpen, closeDeleteModal, removeTodo } = useTodo();

  if (!isDeleteModalOpen) return null;

  return (
    <div className="deleteModal">
      <h2>Deletar tarefa</h2>
      <p>Tem certeza que você deseja deletar essa tarefa?</p>
      <div>
        <Button type="button" color="delete" onClick={() => removeTodo(id)}>
          Deletar
        </Button>
        <Button type="button" onClick={closeDeleteModal} color="grey">
          Cancelar
        </Button>
      </div>
    </div>
  );
};
