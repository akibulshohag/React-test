import React,{useState} from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const Problem2 = () => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
    let subtitle;
    const [modalA, setmodalA] = useState(false);
    const [modalB, setmodalB] = useState(false);
  
    
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
        setmodalA(false);
        setmodalB(false)
    }

    

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <Link to="/modalA">
                <button  onClick={()=>setmodalA(true)} className="btn btn-lg btn-outline-primary" type="button" >All Contacts</button>
                </Link>
                <Link to="/modalB">
                <button onClick={()=>setmodalB(true)} className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                </Link>

                </div>
                
            </div>
            {/* <Modal
                isOpen={modalA}
                onAfterOpen={afterOpenModal}
                onRequestClose={()=>setmodalA(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div style={{display:'flex',justifyContent:'space-evenly'}}>
                <h5  style={{background:'#461395',padding:4,marginRight:5,cursor:'pointer',color:'#fff'}}>All Contacts</h5>
                <h5 onClick={()=>{setmodalB(true),setmodalA(false)}} style={{background:'#ff7f50',padding:4,marginRight:5,cursor:'pointer',color:'#fff'}}>Us Contacts</h5>
                <h5 onClick={()=>closeModal()} style={{padding:4,border: '1px solid #46139f',cursor:'pointer'}}>Close</h5>
                </div>
                <div>
                    <h3>All contacts</h3>
                </div>
                
         </Modal> */}
{/* 
            <Modal
                isOpen={modalB}
                onAfterOpen={afterOpenModal}
                onRequestClose={()=>setmodalB(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                 <div style={{display:'flex',justifyContent:'space-evenly'}}>
                <h5 onClick={()=>{setmodalA(true),setmodalB(false)}} style={{background:'#461395',padding:4,marginRight:5,cursor:'pointer',color:'#fff'}}>All Contacts</h5>
                <h5 style={{background:'#ff7f50',padding:4,marginRight:5,cursor:'pointer',color:'#fff'}}>Us Contacts</h5>
                <h5 onClick={()=>closeModal()} style={{padding:4,border: '1px solid #46139f',cursor:'pointer'}}>Close</h5>
                </div>
                <div>
                    <h3>Us contacts</h3>
                </div>
               
      </Modal> */}
        </div>
    );
};

export default Problem2;