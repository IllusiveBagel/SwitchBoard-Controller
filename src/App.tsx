import Switch from './components/Switch/Switch'

import styles from './App.module.scss';

const App = () => {
	return (
		<div className={styles.container}>
			<Switch
				id="Test"
				stemColor="237,237,54"
				stemType="standard"
				stemConstruction="standard"
				housingTopType="standard"
				housingTopColor="255,177,228"
				housingBottomType="standard"
				housingBottomColor="179,131,226"
				mount="5"
			/>
		</div>
	)
}

export default App
