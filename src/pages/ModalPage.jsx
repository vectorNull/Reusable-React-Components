import React, { useState } from 'react'
import Modal from '../components/Modal';
import Button from '../components/button'

function ModalPage() {
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		setShowModal(true);
	}

	const handleClose = () => {
		setShowModal(false);
	}

	const actionBar = <div>
			<Button onClick={handleClose} primary>Accept</Button>
		</div>
		
	const modal = <Modal onClose={handleClose} actionBar={actionBar}>
			<p>
				Here is some important information for you to accept.
			</p>
		</Modal>

	return (
		<div>
			<Button onClick={handleClick} primary>
				Open Modal
			</Button>
			{showModal && modal}
		</div>
	)
}

export default ModalPage;