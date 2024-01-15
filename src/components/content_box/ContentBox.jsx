import './ContentBox.css';

// eslint-disable-next-line react/prop-types
const ContentBox = ({ children }) => {
	
	return (
		<div className="content">
			{children}
		</div>
	)
}

export default ContentBox;