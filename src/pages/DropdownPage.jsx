import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';

function DropdownPage() {
    const [selected, setSelected] = useState(null);

	const handleSelect = (option) => {
		setSelected(option)
	};

	const options = [
		{ label: 'label 1', value: 'value of label 1' },
		{ label: 'label 2', value: 'value of label 2' },
		{ label: 'label 3', value: 'value of label 3' },

	]

	return (
		<div className='flex'>
			<Dropdown options={options} onChange={handleSelect} value={selected} />
		</div>
	)
}

export default DropdownPage