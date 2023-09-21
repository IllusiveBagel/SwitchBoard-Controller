import Switch from './components/Switch/Switch'
import Clicky from './assets/switch_type_clicky.svg'
import Linear from './assets/switch_type_linear.svg'
import Tactile from './assets/switch_type_tactile.svg'
import Plate from './assets/switch_mount_plate.svg'
import PCB from './assets/switch_mount_pcb.svg'
import Silent from './assets/volume-silent.svg'
import Normal from './assets/volume-normal.svg'
import Loud from './assets/volume-loud.svg'

const App = () => {
	const data = {
		id: "0001",
		name: "MX Black",
		switchData: {
			stemColor: "58,64,69",
			stemType: "standard",
			stemConstruction: "standard",
			housingTopType: "standard",
			housingTopColor: "58,64,69",
			housingBottomType: "standard",
			housingBottomColor: "58,64,69",
			mount: "Both"
		},
		volume: "Normal",
		type: "Linear",
		factoryLubed: false,
		manufacturer: "cherry",
		brand: "cherry-mx",
		grid: "(0, 0)"
	}

	const Type = () => {
		switch (data.type) {
			case "Clicky":
				return <img src={Clicky} className='switchType' />
			case "Linear":
				return <img src={Linear} className='switchType' />
			case "Tactile":
				return <img src={Tactile} className='switchType' />
			default:
				return <img src={Linear} className='switchType' />
		}
	}

	const Mount = () => {
		switch (data.switchData.mount) {
			case "3":
				return <img src={Plate} className='switchMount' />
			case "5":
				return <img src={PCB} className='switchMount' />
			case "Both":
				return <img src={PCB} className='switchMount' />
			default:
				return <img src={PCB} className='switchMount' />
		}
	}

	const Volume = () => {
		switch (data.volume) {
			case "Silent":
				return <img src={Silent} className='switchVolume' />
			case "Normal":
				return <img src={Normal} className='switchVolume' />
			case "Loud":
				return <img src={Loud} className='switchVolume' />
			default:
				return <img src={Normal} className='switchVolume' />
		}
	}

	return (
		<div className='container'>
			<div className='header'>
				<Switch
					id={data.id}
					stemColor={data.switchData.stemColor}
					stemType={data.switchData.stemType}
					stemConstruction={data.switchData.stemConstruction}
					housingTopType={data.switchData.housingTopType}
					housingTopColor={data.switchData.housingTopColor}
					housingBottomType={data.switchData.housingBottomType}
					housingBottomColor={data.switchData.housingBottomColor}
					mount={data.switchData.mount}
				/>
				<div className='title'>
					<h1 className='switchName'>{data.name}</h1>
					<h3 className='switchBrand'>{data.manufacturer}</h3>
					<div className='icons'>
						<Type />
						<Mount />
						<Volume />
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
