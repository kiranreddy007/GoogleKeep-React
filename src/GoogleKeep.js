import React,{useState} from 'react';

import Header from './Header';
import CreateNote from './CreateNote';
import Note from './Note';
import Footer from './Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './GoogleKeepCss.css';

const GoogleKeep = () => {
	const [addItem,setAddItem] = useState([]);
	const addNote = (note) =>{
		//alert('I am Clicked');
		setAddItem((prevData) =>{
			return [...prevData,note];
		});
	};

	const onDelete = (id) =>{
		setAddItem((olddata) =>
			olddata.filter((currdata,indx) =>{
				return indx!==id;
			})
		);
	};

	return (
	<React.Fragment>
		
		<Header />
		<div className="page-wrapper">
		<CreateNote passNote={addNote} />
		{addItem.map((val,index)=>{
			return (
				<Note 
				key={index}
				id={index}
				title={val.title}
				content={val.content}
				deleteItem={onDelete}
				/>
			);
		})}
		</div>
		
		<div className="footer">
			<Footer/>
		</div>
		
	</React.Fragment>
	);
}
export default GoogleKeep;