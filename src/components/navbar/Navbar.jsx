import { useState } from 'react';
import Modal from '../modal/Modal';
import './Navbar.css';
import GoogleLogin from 'react-google-login';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowLeft);

function Navbar() {
	const [isModalOpen, setModalOpen] = useState(false);
	const [isModalOpen2, setModalOpen2] = useState(false);

	const openModal = () => {
		closeModal2();
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};
	const openModal2 = () => {
		closeModal();
		setModalOpen2(true);
	};

	const closeModal2 = () => {
		setModalOpen2(false);
	};

	const responseGoogle = (response) => {
		if (response.profileObj) {
			console.log('Usuário autenticado:', response.profileObj);
		} else {
			console.log('Login falhou ou foi cancelado');
		}
	};

	return (
		<>
			<nav className="navbar">
				<a href="">
					<img src="./logoipsum_white.svg" alt="logo mano" />
				</a>

				<button onClick={openModal}>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
						<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
						<path d="M8 9a5 5 0 0 1 4 8c-2.5 0-7 0-8 0a5 5 0 0 1 4-8z" />
					</svg>
					Entrar
				</button>
			</nav>
			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<img src="./logoipsum_black.svg" alt="logo" />

				<div className='img-modal'>
					<img src="./314-4608x3072.jpg" alt="" />
				</div>

				<div className="text">
					<h1>Entre ou crie uma conta</h1>
					<span>Viage o mundo com a melhor. E desfrute as maravilhas da [empresa]</span>
				</div>

				<button onClick={openModal2} className='entrar'>Continuar com e-mail</button>

				<div className="text_or">
					<hr />
					<span>ou</span>
					<hr />
				</div>

				<div onClick={() => { }}>
					<GoogleLogin
						clientId="SEU_ID_DO_CLIENTE_GOOGLE"
						buttonText="Login com Google"
						onSuccess={responseGoogle}
						onFailure={responseGoogle}
						cookiePolicy={'single_host_origin'}
						className="botao-google"
					/>
				</div>
			</Modal>

			<Modal isOpen={isModalOpen2} onClose={closeModal2}>
				<button onClick={openModal} className='modal2-voltar'>
					<FontAwesomeIcon icon={faArrowLeft} size="lg" /> Voltar
				</button>

				<form action="#" className='form-modal2'>
					<label htmlFor="email">Digite seu e-mail</label>
					<br />
					<input type="email" placeholder='Endereço de e-mail' />
					<br />
					<input type="submit" value="Continuar" />
				</form>
			</Modal>

		</>
	)
}

export default Navbar;

