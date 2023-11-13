import Button from "../components/button";
import { DiJsBadge } from "react-icons/di";


function ButtonPage() {

	const handleClick = () => {
		
	};

	const handleMouseEnter = () => {
		
	}

	return <div>
		<div>
			<Button primary className='mb-5' onClick={handleClick}>
				<DiJsBadge />
				Primary
			</Button>
		</div>
		<div>
			<Button secondary className='mb-5' onMouseEnter={handleMouseEnter}>
				<DiJsBadge />
				Secondary
			</Button>
		</div>
		<div>
			<Button success className='mb-5' onClick={handleClick}>
				<DiJsBadge />
				Success
			</Button>
		</div>
		<div>
			<Button warning className='mb-5' onMouseEnter={handleMouseEnter}>
				<DiJsBadge />
				Warning
			</Button>
		</div>
		<div>
			<Button danger className='mb-5' onClick={handleClick}>
				<DiJsBadge />
				Danger
			</Button>
		</div>
	</div>
}

export default ButtonPage;