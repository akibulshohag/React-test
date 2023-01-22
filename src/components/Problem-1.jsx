import React, {useState,useEffect} from 'react';

const Problem1 = () => {
 
const [data, setdata] = useState([
    {
        id:1,
        name:'Test1',
        status: 'active'
    },
    {
        id:2,
        name:'Test2',
        status: 'active'
    },
    {
        id:3,
        name:'Test3',
        status: 'active'
    },
    {
        id:4,
        name:'Test4',
        status: 'completed'
    },
    {
        id:5,
        name:'Test5',
        status: 'completed'
    },
    {
        id:6,
        name:'Test6',
        status: 'completed'
    },
    {
        id:7,
        name:'Test7',
        status: 'all'
    },
    {
        id:8,
        name:'Test8',
        status: 'all'
    },
])

   
    

    const [show, setShow] = useState('all');
    const [tableShow, settableShow] = useState(false)
    const [filterData, setfilterData] = useState([])

    const handleClick = (val) =>{
        setShow(val);
         if(val == 'active'){
            const activeStatus = data.filter((e)=>e.status == val)
            setfilterData(activeStatus)
            
         } else if(val == 'completed'){
            const activeStatus1 = data.filter((e)=>e.status == val)
            setfilterData(activeStatus1)
         }else{
            setfilterData(data)
         }
        
    }
    const formSubmit = ()=>{
        settableShow(true)
    }

    
    

   

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form  className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Name"/>
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Status"/>
                        </div>
                        
                    </form>
                    <div className="col-auto">
                            <button  onClick={()=> settableShow(true)} type="submit" className="btn btn-primary">Submit</button>
                        </div>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        {tableShow ? 
                        <>
                        {filterData.map((item,index)=>
                        <tr key={index}>
                            <th scope="col">{item?.name}</th>
                            <th scope="col">{item?.status}</th>
                        </tr>
                        )}
                        </>
                        :null}
                       
                        </thead>
                        <tbody>
                        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;


