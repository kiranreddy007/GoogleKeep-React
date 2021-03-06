import React from 'react';
import './GoogleKeepCss.css';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const IndividualNote = (props) => {
	
	const showNote = () =>{
		props.showItem(props.id);
	};

	return (
	<React.Fragment>
		<div className>	
		<div className="column">
				<div className="card  mt-3 mb-3 bg-warning " style={{height:"200px"}}>
			  		<div className="card-body">
						<h5>{props.title}</h5>
						<br/>
						<p>{props.content}</p>
						<div className="card-footer">
						<Button onClick={deleteNote}>
							<DeleteIcon />
						</Button>
						</div>
					</div>
				</div>
				</div>
		</div>
	</React.Fragment>
	);
}
export default IndiviualNote;
