import React, { useState , useEffect} from 'react';
import axios from "axios";
import {AiOutlineExclamationCircle} from 'react-icons/ai'
// import SimpleReactValidator from "simple-react-validator";
 
import Rules from './Rules';
import { useDispatch } from 'react-redux';
 
function Contractid(props){
//   const formik =useFormik({
// initialValues :{
//   contractid:'',
//   end :''
// },
//   })
  const[posts,setPost] = useState([]);
  const [error, setError] = useState(false);
  const [contractid,setContractid]=useState("");
  const [data,setData]=useState(null)
   
  const [end,setEnd]=useState("");
  const[start1,setStart1]=useState("")
  const [category,setCategory]=useState("0");


 
  // const [isLoading, setIsLoading] = useState(true);
const dispatch=useDispatch()
// const submitForm = () => {
//   const formValid = simpleValidator.current.allValid();
//   if (!formValid) {
//     simpleValidator.current.showMessages(true);
//     forceUpdate(1)
//   } else {
//     console.log('submit form.');
//   }
// };
const [isValidcontractid, setIsValidContractid] = useState(true)
    let [contractidError, setContractidError] = useState('')

    //for  end
    const [isValidend, setIsValidLastend] = useState(true)
    const [endError, setEndError] = useState('')
    //for Category
    const [isValidCategory, setIsValidCategory] = useState(true);
    const [categoryError, secategoryError] = useState('');
    const [error1,seterror1] = useState()
    const [error2,seterror2] = useState()


   

    
    

    const validateContractid = (event) => {
      console.log(event.name,event.value, 'VALIDTUN')

     
 

      switch(event.name){
        case "contractid":
          if (event.value!=="") {
              // if([0-9]){
                
                    setIsValidContractid(true)
                    setContractidError('')
                    return true
                   
                } 
              else {
              
                    setIsValidContractid(true)
                    setContractidError('Enter a contractid')
                    return true
                    
                }
                case "category" :
                  // if(2>1){
                  //   setIsValidCategory(true)
                  //   secategoryError('')
                  //   return true
                  // }
                  // else{
                  //   setIsValidCategory(true)
                  //   secategoryError('Enter a category')
                    
                  //   return true
                  // }

                case "end":
                  if (event.value!=="") {
                      // if([0-9]){
                        
                        setIsValidLastend(true)
                            setEndError('')
                            return true
                           
                        } 
                      else {
                      
                        setIsValidLastend(false)
                            setEndError('Enter a contractid')
                            return false
                            
                        }
      }
      alert('Fill this blank ')
      // if (contractid!=="") {
      //   // if([0-9]){
          
      //         setIsValidContractid(true)
      //         setContractidError('')
      //         return true
             
      //     } 
      //   else {
        
      //         setIsValidContractid(false)
      //         setContractidError('Enter a contractid')
      //         return false
              
      //     }
      // } 
    } 
    // const validateEnd = (end) => {
    //   if (end) {
    //     if(''){
    //       setIsValidContractid(true))
    //       setContractidError('Enter a end date')
    //       return false
    //       } 
    //     else {
    //       setIsValidContractid(false))
    //       setContractidError('Enter a end date')
    //           return false
    //       }
    //   } 
    // } 
    const onClick=()=>{

      if(category==0){
        seterror1("please select category")
      }
      else if(category==1){
        setIsValidCategory(false)
        seterror1("")
  
      }
      else{
        console.log("love")
      }
     
if(!start1){
  seterror2("please select date")

}
else{
  setIsValidLastend(true)  
  seterror2("")
}

      console.log(contractid)
if(contractid){
      dispatch({
        type: "next_component",
        payload: {
          key: "thirdStep",
          label: "third step ",
          isDone: true,
          component: 3,
        },
      });
      dispatch({type:"contract",payload:{id:contractid,enddate:end,category:category}})
    }else{
      // validateContractid(contractidError,endError)
      setContractidError('Enter a contractid')
       setEndError('Enter a end date')
       secategoryError('Enter a Category')
       
      //  validateContractid();
      
      
    }
  }

  
  useEffect(() =>{
     axios
     .get(`http://demosrvr2.optipacetech.com:8000/api/v1/category/`)
    .then(res=>{
      console.log(res)
      setPost(res.data)
    })
   .catch(err =>{
     console.log(err)
   })
  }, [])

  const submitHandler=(e)=>{
  e.preventDefault();
  }
  

  // function setEnd(val){
  //   setData(val.target.value)
  //   console.warn(val.target.value)
  // }


  // const postData={contractid,end,category}
  
  // console.log(postData)
  // axios.post(`http://demosrvr2.optipacetech.com:8000/api/v1/contractid_demo/`,postData)
  // .then((res)=>{
  //   console.log(res)
  // })
  // .catch((err)=>{
  //   console.log(err)
  // })
    return (

      <div className="container" style={{marginTop:"-9rem",position:"relative"}}>
        <br />
        <form >
        <div className="row" >
          <div className="col-sm" onSubmit={submitHandler}>
            <div className="form-group row">
              <label
                // for="contractid"
                className="col-sm-3 col-form-label"
               style={{color:"black"}}
              >
                Contract Id
              </label>
              <div className="col-sm-9">
                <input
                  type="number"
                  style={{ width: "23rem",background:'white',border:"0.5px solid black"  }}
                  className="form-control shadow-none shadow-sm "
                  placeholder="Enter a value"
                  value={contractid}
                  name="contractid"
                  onChange={ (e)=>{setContractid (e.target.value);
                    validateContractid(e.target)}}
                  // onBlur={() => {
                  //   simpleValidator.current.showMessageFor("contractid")
                  //   forceUpdate(1);
                  // }}
                /> 
                 {/* {simpleValidator.current.message("contractid", contractid, "required|contractid")} */}
                 {/* {isValidcontractid &&(  <span>{contractidError}</span>)} */}
                 {isValidcontractid && <span style={{color:'red',fontSize:'13px'}}>{contractidError}</span>}
              </div>
            </div>
            <div className="form-group row">
              <label
              // for="contractdate" 
              className="col-sm-3 col-form-label"
               style={{color:"black"}}>
                Start Date
              </label>

              <div className="col-sm-9">
                <input
                  type="date"
                  className="form-control shadow-none shadow-sm "
                  style={{ width: "23rem",border:"0.5px solid black" }}
                  placeholder="Enter a value"
                  name="start"
                  onChange= { (e)=>{setStart1(e.target.value);}}

                 
                /> 
                              {isValidend && <span style={{color:'red',fontSize:'13px'}}>{error2}</span>}

              </div>
            </div>

            <div className="form-group row">
              <label
               //for="contractdate" 
              className='col-sm-3 col-form-label'
               style={{color:"black"}}>
                End Date
              </label>
              <div className="col-sm-9">
                <input
                  type="date"
                  className="form-control shadow-none shadow-sm "
                  style={{ width: "23rem" ,border:"0.5px solid black"}}
                  placeholder="Enter a value"
                
                  name="end"
                  defaultValue={end}
                  
               onChange= { (e)=>{setEnd (e.target.value);
                validateContractid(e.target)}}
              
                /> 
              {isValidend && <span style={{color:'red',fontSize:'13px'}}>{endError}</span>}

                {/* {isValidend&&(<span>{endError}</span>)} */}
                 
              </div>
              
            </div>

            <div className='form-group row'>
              <label
                // for="inputoption"
                className='col-sm-3 col-form-label'>

                Category &nbsp;&nbsp;&nbsp;
              </label>

              <div className='col-sm-9'>

                <select
                type="option"
                  name=" category"
                  className ='form-control shadow-none shadow-sm '
                  style={{ width: "23rem" ,border:"0.5px solid black"}}
                  id="inputoption"
                  aria-label="Default select example"
                  value={category}
                  //  onChange={ (e)=>{setCategory(e.target.value)}}
                  onChange={(e) =>setCategory(e.target.value)}
                    
                >

                  <option type="option"  
                  selected style={{backgroundColor:"#13255b",color:"white", width: "160px" , fontSize: "15px"}}>Open this select categorry</option>
                 
                 {posts.map((post,i)=>(
          <option  type='option'  
     style={{ width: "160px",height:'30rem', fontSize: "13px", fontWeight: 'bold' }} 
      value={i+1}>{post.category}
 
 
                   
 </option>
                 )
                 
                 )}
                              

                      
                     
                </select>
              {isValidCategory &&  <span style={{color:'red',fontSize:'13px'}}>{error1}</span>}



              </div>

            </div>
            </div> </div>
<div class="col-sm-4" style={{marginTop: "27%",marginLeft:'136%'}}>
             

                <button   className="btn btn-info"
                
                onClick={() =>
                  dispatch({
                    type: "next_component",
                    payload: {
                      key: "firstStep",
                      label: "first step ",
                      isDone: true,
                      component: 1,
                    },
                  })
                }
              >
                Back
              </button>
              <button  className="btn btn-outline-info" style={{marginLeft:'6%'}}
              // onSubmit={submitForm}
type="button"
                onClick={onClick}
              >
                Next
              </button>
              </div>
 </form>
      </div>




    );

  
}
export default Contractid;


































 