	import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
	import Button from '../UI/Button'
	import styles from './TodosActions.module.css'

	const TodosActions = ({
		resetTodo,
		deleteComplitedTodos,
		complitedTodosExist,
	}) => {
		return (
			<div className={styles.todosActionsContainer}>
				<Button title="Reset Todos" onClick={resetTodo}>
					<RiRefreshLine />
				</Button>
				<Button
					title="Clear Complited Todos"
					onClick={deleteComplitedTodos}
					disabled={!complitedTodosExist}
				>
					<RiDeleteBin2Line />
				</Button>
			</div>
		)
	}

	export default TodosActions
