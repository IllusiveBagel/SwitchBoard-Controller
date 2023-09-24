import Switch from './components/Switch/Switch'
import { 
	Spring,
	Lubed
} from './components/Icons'
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
		"id": "0001",
		"name": "MX Black",
		"switchDesign": {
			"stemColor": "58,64,69",
			"stemType": "standard",
			"stemConstruction": "standard",
			"housingTopType": "standard",
			"housingTopColor": "58,64,69",
			"housingBottomType": "standard",
			"housingBottomColor": "58,64,69",
			"mount": "both"
		},
		"switchConstruction": {
			"stem": "POM",
			"housingTop": "Nylon",
			"housingBottom": "Nylon"
		},
		"switchData": {
			"actuation": 60,
			"bottomOut": 80,
			"preTravel": 2,
			"totalTravel": 4
		},
		"spring": "stainless-steel",
		"volume": "normal",
		"type": "linear",
		"factoryLubed": false,
		"manufacturer": "cherry",
		"brand": "cherry-mx",
		"grid": "(0, 0)"
	}

	const Type = () => {
		switch (data.type) {
			case "clicky":
				return <img src={Clicky} className='switchType' />
			case "linear":
				return <img src={Linear} className='switchType' />
			case "tactile":
				return <img src={Tactile} className='switchType' />
			default:
				return <img src={Linear} className='switchType' />
		}
	}

	const Mount = () => {
		switch (data.switchDesign.mount) {
			case "3":
				return <img src={Plate} className='switchMount' />
			case "5":
				return <img src={PCB} className='switchMount' />
			case "both":
				return <img src={PCB} className='switchMount' />
			default:
				return <img src={PCB} className='switchMount' />
		}
	}

	const Volume = () => {
		switch (data.volume) {
			case "silent":
				return <img src={Silent} className='switchVolume' />
			case "normal":
				return <img src={Normal} className='switchVolume' />
			case "loud":
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
					stemColor={data.switchDesign.stemColor}
					stemType={data.switchDesign.stemType}
					stemConstruction={data.switchDesign.stemConstruction}
					housingTopType={data.switchDesign.housingTopType}
					housingTopColor={data.switchDesign.housingTopColor}
					housingBottomType={data.switchDesign.housingBottomType}
					housingBottomColor={data.switchDesign.housingBottomColor}
					mount={data.switchDesign.mount}
				/>
				<div className='title'>
					<h1 className='switchName'>{data.name}</h1>
					<h3 className='switchBrand'>{data.manufacturer} - {data.brand}</h3>
					<div className='icons'>
						<Type />
						<Mount />
						<Volume />
					</div>
				</div>
			</div>
			<div className="content">
				<table className="switchData">
					<tbody>
						<tr>
							<th>Actuation:</th>
							<td>{data.switchData.actuation}g</td>
						</tr>
						<tr>
							<th>Bottom-out:</th>
							<td>{data.switchData.bottomOut}g</td>
						</tr>
						<tr>
							<th>Pre-travel:</th>
							<td>{data.switchData.preTravel}mm</td>
						</tr>
						<tr>
							<th className='last'>Total travel:</th>
							<td className='last'>{data.switchData.totalTravel}mm</td>
						</tr>
					</tbody>
				</table>
				<div className='contentRight'>
					<div className='springContainer'>
						<h4>Stainless Steel</h4>
						<Spring color='#B9B9B9' />
					</div>
					<div className='lubeContainer'>
						<h4>{data.factoryLubed ? 'Factory Lubed' : 'Not Lubed'}</h4>
						<Lubed />
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
