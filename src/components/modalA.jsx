import React,{useState,useEffect} from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import request from './services/request';

const Problem2 = () => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width:'500px'
        },
      };
    let subtitle;
    const [modalA, setmodalA] = useState(false);
    const [modalB, setmodalB] = useState(false);
    const [contactAll, setcontactAll] = useState([])
    const [contactUs, setcontactUs] = useState([])
    const [searchValue, setsearchValue] = useState('')
  
    useEffect(() => {
        setmodalA(true)

        try {
            const data = async()=>{
                const res =await request('contacts/?page=1','')
                setcontactAll(res?.results.splice(0,15))
                 
            }
            data()
        } catch (error) {
            
        }
        
    }, [])
    
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
        setmodalA(false);
        setmodalB(false)
    }

    const valuaChange= async(e)=>{
        console.log(e.target.value);
        setsearchValue(e.target.value)
        try {
            const data = async()=>{
                const res =await request(`contacts/?search=${searchValue}?page=1`,'')
                console.log('............res',res);
                setcontactAll(res?.results.splice(0,15))
               
            }
            data()
        } catch (error) {
            
        }
    }


    //  const handleEven =() arr.filter((number) => 
    // //     return number % 2 === 0;
    //   );

      const handleEven=()=>{
         const res = contactAll.forEach(id => {
            if (id % 2 === 0) {
                console.log('........res',res); 
            }
          });
        
      }
    

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <Link to="/modalA">
                <button onClick={()=>setmodalA(true)} className="btn btn-lg btn-outline-primary" type="button" >All Contacts</button>
                </Link>
                <Link to="/modalB">
                <button onClick={()=>setmodalB(true)} className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                </Link>
                </div>
                
            </div>
            <Modal
                isOpen={modalA}
                onAfterOpen={afterOpenModal}
                onRequestClose={()=>setmodalA(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div style={{display:'flex',justifyContent:'space-evenly'}}>
                <h5  style={{background:'#461395',padding:4,marginRight:5,cursor:'pointer',color:'#fff'}}>All Contacts</h5>
                <Link to="/modalB">
                <h5 onClick={()=>{setmodalB(true),setmodalA(false)}} style={{background:'#ff7f50',padding:4,marginRight:5,cursor:'pointer',color:'#fff'}}>Us Contacts</h5>
                </Link>
                <h5 onClick={()=>closeModal()} style={{padding:4,border: '1px solid #46139f',cursor:'pointer'}}>Close</h5>
                </div>
                <div style={{display:'flex'}}>
                    <h3>All contacts</h3>
                    <h5 onClick={()=>handleEven()} style={{marginLeft:70}}>Checkbox</h5>
                </div>
                <div>
                <input value={searchValue} onChange={(e)=>valuaChange(e)} type="text" className="form-control" placeholder="Name"/>
                </div>
                <div>
                {contactAll.map((item,index)=>
                        <div style={{display:'flex',justifyContent:'space-evenly'}}  key={index}>
                            <p  scope="col">{item?.id}</p>
                            <p  scope="col">{item?.phone}</p>
                            <p style={{marginLeft:50}}scope="col">{item?.country?.name}</p>
                        </div>
                        )}
                </div>
                
         </Modal>

            <Modal
                isOpen={modalB}
                onAfterOpen={afterOpenModal}
                onRequestClose={()=>setmodalB(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                 <div style={{display:'flex',justifyContent:'space-evenly'}}>
                 <Link to="/modalA">
                  <h5 onClick={()=>{setmodalA(true),setmodalB(false)}} style={{background:'#461395',padding:4,marginRight:5,cursor:'pointer',color:'#fff'}}>All Contacts</h5>
                </Link>
                <h5 style={{background:'#ff7f50',padding:4,marginRight:5,cursor:'pointer',color:'#fff'}}>Us Contacts</h5>
                <h5 onClick={()=>closeModal()} style={{padding:4,border: '1px solid #46139f',cursor:'pointer'}}>Close</h5>
                </div>
                <div>
                    <h3>Us contacts</h3>
                </div>
                {contactUs.map((item,index)=>
                        <div style={{display:'flex',justifyContent:'space-evenly'}}  key={index}>
                            <p  scope="col">{item?.phone}</p>
                            <p style={{marginLeft:50}}scope="col">{item?.country?.name}</p>
                        </div>
                        )}
               
      </Modal>
        </div>
    );
};

export default Problem2;