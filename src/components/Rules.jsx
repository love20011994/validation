import { BsPlusLg } from "react-icons/bs"
import React, { useState, useEffect } from 'react';
import axios from "axios";
import {RiDeleteBinLine} from "react-icons/ri"
import {BiPlus,BiMinus} from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux";
 
 let AA=""
function Rules(props) {
    const [set, setRules] = useState([]);
    const [send ,sendCondition]=useState([]);
    const [state,setstate] = useState(false)
    const [count,setcount] = useState(1)
const dispatch=useDispatch()
     
    const [count1,setcount1] = useState(1)
    const end =useSelector(state=>state)
    const contractid = useSelector(state => state.contract)
    
    var contractInitialState = {
        categoryid: "",
        contractid: "",
        contractdate: "",
        ruleName: "",
        categoryid: "",
        contractid: "",
        contractdate: "",
        ruleName: "",
        contractkpi: "",
        priorityValue: "",
        frequencyValue: "",
        penaltyValue: "",
        condition: "",
        days: "",
        contractkpi: "",
      };
      var inputs = { id: "", value1: "", value2: "" };
      const [input, setInput] = useState([inputs]);
      const [Inputt, setInputt] = useState([]);
      const [input1, setInput1] = useState([]);
      const [input2, setInput2] = useState([]);
    
      const [ContractDemo, setContractDemo] = useState(contractInitialState);
      const [ContractDemoArray, setContractDemoArray] = useState("");
      // const [CategoryList, setcategoryList] = useState("");
      const [Contract_kpi, setContract_kpi] = useState("");
      const [Condition, setCondition] = useState("");
      const [Dataadd ,setdata]=useState("");
      const [Acceptable, setAcceptable] = useState("");
      const [Rule, setRule] = useState("");
    
      const [showing, setShowing] = useState(false);
      const [show, setShow] = useState(false);
      const [error, setError] = useState(false);
      const [view, setView] = useState(false);
      const [percent, setpercent] = useState(false);
      const [lable1, setlable1] = useState(false);
      const [lable2, setlable2] = useState(false);
      const [lable3, setlable3] = useState(false);
    
      const [form, setForm] = useState(new FormData());
      // const add = () => {
      //   if (Condition.length !== 5) {
      //     setcount([...Condition, Condition[Condition.length - 1] + 1]);
      //   } else {
      //     return(" ");
      //   }
      // };
      const add =()=>{
        setcount1(count1+1)
    
          setstate(true)
          setcount(count+1 )
          setcount1(count+1 )
    
          console.log("ok")
    
      }
    

  const deletedata = (e) => {
    console.log(Condition)

    setCondition(
      Condition.filter(( habsy,index) => {
        return index !== e;
      })
    );
  };
    
      const dele = () => {
        if (Condition.length !== 1) {
          Condition.pop();
          setcount([...Condition]);
        }
      };
      // // useEffect(()=>{
      //  const dataset=()=>{
      //    if(setCondition.length !==5){
      //      setdata([...setCondition,setCondition[setCondition.length-1]+1])

      //    }
      //  }
      // })
//   const add =()=>{
//       // setstate(true)
//       setcount(count+1)
//       console.log("ok")
//   }
//  const dele=()=>{
//    setcount(count-1)
//  }
  
  useEffect(() => {
    axios
      .get(`http://demosrvr2.optipacetech.com:8000/api/v1/rule/?category_id=${contractid.category}`)
      .then(res => {
        console.log(res)
       
        setRules(res.data)
      })
      .catch(err1 => {
        console.log(err1)

      })
  }, [])


  const conditions = (a, e) => {
    // setruleName([ruleName]:e);
    ContractDemo.ruleName = e;
    console.log(ContractDemo, "concate");
    setContractDemo(...[ContractDemo]);
  setShow(true);
  console.log(e);
  let condition_data = "";
  let accept = [];
  let object = [];
  axios
    .get(
      `http://demosrvr2.optipacetech.com:8000/api/v1/formula1/?rule_id=${e}`
    )
    
     .then((resp) => {
          
        condition_data = resp.data;

        for (let i = 0; i < condition_data.length; i++) {
          let tag = condition_data[i].tag;
          switch (tag) {
            case "TAT":
              console.log(condition_data[i], "BBBBBB");
              object.push(condition_data[i]);
              setShowing(true);
              setpercent(false);
              setlable1(true);
              setlable2(false);
              setlable3(false);
              AA="hhh"
























              break;
            case "FREQUENCY":
              console.log(condition_data[i], "BBBBBB");
              object.push(condition_data[i]);
              setShowing(true);
              setpercent(false);
              setlable1(true);
              setlable2(false);
              setlable3(false);

              break;
            case "TATVAL":
              console.log(condition_data[i], "BBBBBB");
              object.push(condition_data[i]);
              setShowing(true);
              setpercent(false);
              setlable1(true);
              setlable2(false);
              setlable3(false);

              break;
            case "OBJECT":
              console.log(condition_data[i], "MMMMBB");
              object.push(condition_data[i]);
              setShowing(true);
              setpercent(true);
              setlable1(true);
              setlable2(false);
              setlable3(false);

              break;
            case "ACCEPT":
              console.log(condition_data[i], "AAAAAA");
              accept.push(condition_data[i]);
              setShowing(true);
              setView(true);
              setlable1(false);
              setlable2(true);
              setlable3(false);

              break;
          }

          
        }
        setAcceptable(accept);
        setCondition(object);
        

        console.log(Acceptable, "condition");
      });

    axios
      .get(
        `http://demosrvr2.optipacetech.com:8000/api/v1/contractkpi/?rule_id=${e}`
      )
       
      .then((resp) => {
        

        var datas = resp.data;
        setContract_kpi(datas);
        setShowing(true);
        setlable3(true);
        setlable1(false);
        setlable2(false);

        console.log(resp.data, "contractkpi");
      });
  };

  const Onchange = (val, data, id) => {
    console.log(val.name);
    switch (val.name) {
      case "contractid":
        data.contractid = val.value;
        console.log(data.contractid, "YYYYYYYYYY");
        break;
      case "contractdate":
        data.contractdate = val.value;
        break;
      case "categoryid":
        data.categoryid = val.value;
        break;
      case "ruleName":
        data.ruleName = id;
        console.log(data.ruleName, "KKKK");
        break;
      case "priorityValue":
        data.priorityValue = val.value;
        break;
      case "frequencyValue":
        data.frequencyValue = val.value;
        break;

      case "penaltyValue":
        data.penaltyValue = val.value;
        break;
    }
    setContractDemo(data);
  };

  const fOnChange = (e, data, id, index) => {
    switch (e.name) {
      case "value1":
        data.first = e.value;
        console.log(data.first, "GGGG");
        break;
      case "value2":
        data.last = e.value;
        console.log(data.last, "DDDDD");
        break;
    }
    // setInput1(data);

    Inputt[index] = {
      value1: id,
      value2: data.first,
      value3: data.last,
    };

    setInputt(...[Inputt]);
    console.log(Inputt, "sss");
  };

  const acceptOnchange = (e, index) => {
    const { name, value } = e;

    input1[index] = {
      value1: e.name,
      value2: e.value,
    };

    setInput1(...[input1]);
    console.log(input1, "INPUT");
  };
  const lowerbound = (e, index) => {
    const { name, value } = e;
    input2[index] = {
      value1: e.name,
      value2: e.value,
    };

    setInput2(...[input2]);
    console.log(input2, "INPUT");
  };
  
  const demoApi = async (e) => {
    e.preventDefault();
    alert("ok");

    let inputList = [...Inputt];
    let inputList1 = [...input1];
    let inputList2 = [...input2];
    let mainList = "";
    let MainInput = [];

    for (let i = 0; i < inputList.length; i++) {
      const m = {
        event1: inputList[i].value1,
        event2: null,
        event3: inputList[i].value2,
        event4: null,
        event5: inputList[i].value3,
      };
      MainInput.push(m);
    }
    for (let i = 0; i < inputList1.length; i++) {
      const main = {
        event1: inputList1[i].value1,
        event2: null,
        event3: ContractDemo.penaltyValue,
        event4: inputList1[i].value2,
        event5: null,
      };
      MainInput.push(main);
    }
    for (let i = 0; i < inputList2.length; i++) {
      const main = {
        event1: null,
        event2: inputList2[i].value1,
        event3: inputList2[i].value2,
        event4: null,
        event5: null,
      };
      MainInput.push(main);
    }

    await axios
      .get(
        `http://demosrvr2.optipacetech.com:8000/api/v1/contractid_demo/?contractid=${ContractDemo.contractid}`
      )
      
      .then((resp) => {
        console.log(resp.data);
        
        var data = resp.data;

        setContractDemoArray(data);
        // let ret=true;

        data.forEach((index) => {
          let contract = index.contractid;
          let priority = index.priorityid;

          if (ContractDemo.priorityValue == priority) {
            
            ContractDemo.priorityValue = "";
            // setContractDemo({...[ContractDemo]});
            setError(true);
          }
        });

        for (let i = 0; i < MainInput.length; i++) {
          console.log(ContractDemo.ruleName, "name");
          axios
            .post(
              "http://demosrvr2.optipacetech.com:8000/api/v1/contractid_demo/",
               
              {
                contractid: contractid.id,
                categoryid: contractid.category,
                end_dates: contractid.enddate,
                ruleid: ContractDemo.ruleName,
                priorityid: ContractDemo.priorityValue,
                frequencyid: ContractDemo.frequencyValue,
                formula: MainInput[i].event1,
                contractkpi: MainInput[i].event2,
                valueofx: MainInput[i].event3,
             
                days: MainInput[i].event4,
                xpercentage: MainInput[i].event5,
              }
            )
            .then((resp) => {
              console.log(resp.data);
              alert("saved");
              window.location.reload(true);
            })
            .catch((e) => {
              console.log(e);
              alert(e);
            });
        }
      });
  };

  return ( 
    <div className="container" style={{marginTop: "-15.5rem",display:"flex", marginLeft:"2.5rem"}} >
  <div className="row"
   style={{width: "104%",
    marginLeft: "-4.5%",
    overflowX:'hidden'}}>
  <div class="col" id="panel">
  <div class="panel panel-primary" id="result_panel">
  <div class="panel-heading"><h6 class="panel-title">Rule</h6></div>
  <div class="panel-body">

      <ul class="list-group">
       
      {set.map((set, i) => (
        // <div>
          <li class="list-group-item"    value={i + 1}
          onClick={(e) => {
              conditions(e.target,set.id);
            }} >  
          {set.rule_name}

          </li>
          
          // </div>
             ))}
              <li class="list-group-item1"  style={{height:'226px' ,backgroundColor:'#f5f5f5'}}> &nbsp; </li>
              {/* <li class="list-group-item" style={{heigth:'20px'}}> &nbsp; </li>
              <li class="list-group-item" style={{heigth:'20px'}}> &nbsp; </li>
              <li class="list-group-item" style={{heigth:'20px'}}> &nbsp; </li> */}
          </ul>
           

          </div>

  </div>

  </div>
 
    <div className="col-sm" id="pro">
    <div className="container">
                <table style={{marginLeft:'-21px'}}>
                  <tbody>
                    <br></br>

                    <div>
                      <div style={{heigth:"2rem"}}>
                        <table>
                          <th>
                            <lable>Priority &nbsp; &nbsp;</lable>
                          </th>
                          <td>
                            <input
                              type="text"
                              className="col-md-9"
                              name="priorityValue"
                              defaultValue={ContractDemo.priorityValue}
                           
                              onChange={(e) => Onchange(e.target, ContractDemo)}
                            />
                            <br/>
                            {error && (
                              <span style={{fontSize:"76%"}} className="text-danger">
                                this priority was already taken
                              </span>
                            )}
                          </td><td >
                            {view && (
                              <div style={{marginLeft:'-2%'}}>
                                  <th>
                                    <lable>
                                       Penalty&nbsp; &nbsp;
                                    </lable>
                                  </th>
                                  <td>
                                    <input
                                      type="text"
                                      className="col-md-9"
                                      name="penaltyValue"
                                      style={{width:'76%'}}
                                      defaultValue={ContractDemo.penaltyValue}
                                     
                                      onChange={(e) =>
                                        Onchange(e.target, ContractDemo)
                                      }
                                    ></input>
                                  </td>
                                
                              </div>
                            )}
                          </td>
                          <th>
                            <label>
                            &nbsp;  &nbsp; Frequency  
                            
                            </label>
                          </th>
                          <td>
                            <div>
                              {!view && (
                                <select
                                  className="form-select"
                                  style={{width:"13rem" ,height:"2rem",marginLeft:"2rem"}}
                                  name="frequencyValue"
                                  defaultValue={ContractDemo.frequencyValue}
                                  id="inputoption"
                                  aria-label="Default select example"
                                   onChange={(e) =>
                                    Onchange(e.target, ContractDemo)
                                  }
                                >
                                  <option selected>Select frequency</option>
                                  <option value="1">1 day</option>
                                  <option value="2">2 day</option>
                                  <option value="3">3 day</option>
                                </select>
                              )}
                                &nbsp; &nbsp; &nbsp;{view&&(
                             <select
                                className="form-select col-md-6"
                                name="frequencyValue"
                                style={{width:"355px"}}
                                defaultValue={ContractDemo.frequencyValue}
                                id="inputoption"
                                aria-label="Default select example"
                               
                                onChange={(e) =>
                                  Onchange(e.target, ContractDemo)
                                }
                              >
                                <option selected>Select frequency</option>
                                <option value="1">1 day</option>
                                <option disabled>2 day</option>
                                <option disabled>3 day</option>
                              </select>
                              )}
                            </div>
                            
                          </td>
                        
                        
                                
                            
                        </table>
                      </div>
                    </div>
                  </tbody>
                </table>
              </div>
        
             

            <div style={{width:'52rem',margin:"auto",marginBottem:"10px",marginTop:"5%"}}>
              <table className="table table-borderless"
                id="borderless">
                <tbody>
                  {showing && (
                    <div>
                      <div>
                        <div style={{display:"flex", marginLeft:"1rem"}}>
                          <table style={{width:"100%"}}>
                            {/* {lable1 && (
                              <tr>
                                <th>Condition</th>
                                <th> &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Penalty Amount</th>
                                {percent && <th>X Percentage</th>}
                              </tr>
                            )} */}
                            <tr>
                              <th>{AA}</th>
                            </tr>

                            {Condition && 
                                 Condition.slice(0,count).map((item, index) => {
                                return (
                                  <tr key={index}>
                                    <td style={{ width:"57%",boder:"1px solid black"}}>
                                      <input
                                        className="marquee"
                                        style={{width:'100%'}}
                                        type="text"
                                        value={item.condition}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="col-sm-4"
                                        style={{marginLeft:'30%',width:'219px'}}
                                        name={"first"}
                                        value={input.first}
                                        
                                        onChange={(e) => {
                                          fOnChange(
                                            e.target,

                                            input,
                                            item.id,
                                            index
                                          );
                                        }}
                                      />
                                    </td>
                                    <td>
                                      {percent && (
                                        <input
                                          type="text"
                                          style={{width:'169px'}}
                                          className="col-sm-5"
                                          name={"last"}
                                          value={input.last}
                                          onChange={(e) => {
                                            fOnChange(
                                              e.target,
                                              input,
                                              item.id,
                                              index
                                            );
                                          }}
                                        />
                                      )}
                                    </td>
                                    <td> 
                              
                                    <div className="row1">
                                  
  <div className="row-sm-4"  style={{marginLeft: "-3rem", marginTop: "-1.5rem"
}} onClick={()=>{deletedata(index)}} >{count1===index+1?null:<RiDeleteBinLine />}</div>
                                      
                                      {/* {Condition.length-1 === index &&

                                      } */}
 <div className="col-sm-4" id={count1} style={{marginLeft: "-3rem", marginTop: "-1.5rem"
}} onClick={add} >{count1===index+1?<BiPlus/>:null?index+1===index:null?<BiPlus/>:null}</div>

</div>
                                
                              </td>

                                  </tr>
                                );
                              })}
                          </table>
                        </div>
                      </div>

                      <div>
                        <div Style="display:flex; margin-left:10rem">
                          <table Style="width:160%">
                            {lable2 && (
                              <tr>
                                <th>Condition</th>
                                <th>Days</th>
                              </tr>
                            )}

                            {Acceptable &&
                              Acceptable.map((item, index) => {
                                return (
                                  <tr key={index}>
                                    <td Style="width:57%">
                                      <input
                                        
                                        type="text"
                                        // name={"id"}

                                        value={item.condition}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="col-sm-5"
                                        name={item.id}
                                        // value={input1.first}
                                        onChange={(e) => {
                                          acceptOnchange(e.target, index);
                                        }}
                                      />
                                    </td>
                                  </tr>
                                );
                              })}

                             
                          </table>
                        </div>
                      </div>

                      
{/* conditioncall */}
                      <div Style="display:flex; margin-left:2rem ;padding :none">
                        <table>
                      
                          {Contract_kpi &&
                            Contract_kpi.slice(0,count).map((item, index) => { 
                              return (
                                <tr style={{padding:"none"}} key={index}>
                                   <tr>
                                <th>&nbsp;&nbsp;Condition</th>
                                <th>Penalty Amount</th>
                               
                      </tr>
                       
                               
                                  <td style={{width: "53%",
    marginTop: "7px"}}>
                                    {" "}
                                   
                                    <input
                                      className="col-sm-4"
                                      type="text"
                                      tyle={{width: "53%",}}
                                      value={item.condition}
                                    />
                                </td>

                              
                                  <td>
                                     <input
                                      className="col-sm-4"
                                      type="text"
                                      name={item.id}
                                      onChange={(e) => {
                                        lowerbound(e.target, index);
                                      }}
                                    />
                                  </td>
                                  <td>       <div className="row1">
                                  
                                  <div className="row-sm-4" onClick={()=>{deletedata(index)}} ><RiDeleteBinLine /></div>
                                                                      
                                                                      {/* {Condition.length-1 === index &&
                                
                                                                      } */}
                                 <div className="col-sm-4" id={count1} style={{marginLeft: "-3rem", marginTop: "-1.5rem"
                                }} onClick={add} >{count1===index+1?<BiPlus/>:null?count1!==index:null?<BiPlus/>:null}</div>
                                
                                </div>
                              </td>
                                </tr>
                              );
                            })}
                        </table>
                      </div>
                    </div>
                  )}
                  <div Style="display:flex; margin-left:10rem"></div>
                </tbody>
              </table>
            </div>
            <div className="form-group row" style={{marginTop:"1rem"}}>
              <div className="col-sm-4">
                {" "}
                <button
                  className="btn btn-outline-success"
                  onClick={(e) => {
                    demoApi(e);
                  }}
                >
                  Save
                </button>
              </div>
            
              <div class="col-sm-4" style={{marginLeft:'0%'}}>
                <button   className="btn btn-info"
                style={{marginLeft:"138%"}}
                onClick={() =>
                  dispatch({
                    type: "next_component",
                    payload: {
                      key: "secondStep",
                      label: "second step ",
                      isDone: true,
                      component: 2,
                    },
                  })
                }
              >
                Back
              </button></div>
 
  <button className="btn btn-outline-primary" style={{marginLeft:'19%'}}
                onClick={() =>
                  dispatch({
                    type: "next_component",
                    payload: {
                      key: "fouthStep",
                      label: "fourth step ",
                      isDone: true,
                      component: 4,
                    },
                  })
                }
              >
                Next
              </button>
   

              
              </div>

</div>
</div>
 
   
{/* </div> */}
{/* <button
                onClick={() =>
                  dispatch({
                    type: "next_component",
                    payload: {
                      key: "secondStep",
                      label: "second step ",
                      isDone: true,
                      component: 2,
                    },
                  })
                }
              >
                Back
              </button> */}
              {/* <button
                onClick={() =>
                  dispatch({
                    type: "next_component",
                    payload: {
                      key: "fouthStep",
                      label: "fourth step ",
                      isDone: true,
                      component: 4,
                    },
                  })
                }
              >
                next
              </button> */}

{/* 
<div class="row" style={{marginTop:"49%",
    justifyContent: "space-between",
    marginLeft: "-13rem"
}}> */}
  {/* <div class="col-sm-4"><button   className="btn btn-info"
                onClick={() =>
                  dispatch({
                    type: "next_component",
                    payload: {
                      key: "secondStep",
                      label: "second step ",
                      isDone: true,
                      component: 2,
                    },
                  })
                }
              >
                Back
              </button></div>
  <div class="col-sm-4">
  <button className="btn btn-outline-primary"
                onClick={() =>
                  dispatch({
                    type: "next_component",
                    payload: {
                      key: "fouthStep",
                      label: "fourth step ",
                      isDone: true,
                      component: 4,
                    },
                  })
                }
              >
                Next
              </button>
  </div>
</div> */}
</div>
  );

}
export default Rules;
























