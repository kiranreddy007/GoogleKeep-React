import React,{useState} from 'react';

import './GoogleKeepCss.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const CreateNote = (props) => {
	
	const [note,setNote] = useState({
		title:'',
		content:'',
	});

	const [expand,setExpand] = useState(false);

	const InputEvent = (event) =>{
		
		//const value = event.target.value;
		//const name = event.target.name;
		
		const {name,value} = event.target;

		setNote((prevData) =>{
			return{
	 			...prevData,
				[name]:value,
			};
		});
	};

	const addEvent = () => {
		props.passNote(note);
		setNote({
		title:'',
		content:'',
	});
	};
	
	const expandIt = () =>{
		setExpand(true);
	};

	const backtoNormal = () =>{
		setExpand(false);
	};
	
	return (
		<React.Fragment>
		<div className=" row justify-content-center">
			<div className="card mt-3 mb-3 col-5 bg-info">
	  			<div className="card-body">
					<div className='container'>
					<form>
						{expand ?
						<div className="mb-3">
						  <label className="form-label text-white">Name of Note</label>
						  <input name='title' type="text" value={note.title} onChange={InputEvent} className="form-control" placeholder="Note" />
						</div>
						: null}
						<div className="mb-3">
						  <label className="form-label text-white">Note Description</label>
						  <textarea name='content' value={note.content} onChange={InputEvent} onClick={expandIt} onDoubleClick={backtoNormal} className="form-control" rows="4" placeholder="Add Note Description"></textarea>
						</div>
						{expand ?
						<Button style={{backgroundColor:'#e3f2fd'}} onClick={addEvent}>
						<AddCircleIcon />
					    </Button>
						
					    : null}
					</form>
					</div>
				</div>
		    </div>
		</div>
	</React.Fragment>
	);
}
export default CreateNote;