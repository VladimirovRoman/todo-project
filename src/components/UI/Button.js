import styles from './Button.module.css'

const Button = (props) => {
	const { children, disabled = false } = props
	return (
		<button {...props} className={styles.button} disabled={disabled}>
			{children}
		</button>
	)
}

export default Button
