import "../styles/deleteModal.scss";
import "../styles/wrapper.scss";
import { useTodo } from "../hooks";
import { Button } from "../components";

export const DeleteTodoModal = ({ id }: { id: number }) => {
  const { isDeleteModalOpen, closeDeleteModal, removeTodo } = useTodo();

  if (!isDeleteModalOpen) return null;

  return (
    <div className="wrapper">
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
    </div>
  );
};
