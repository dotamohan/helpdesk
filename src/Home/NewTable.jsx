import React from 'react'
import { useState ,useEffect} from 'react'
import axios from 'axios'
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import Loader from '../images/loader2.gif';

const NewTable = (props) => {
    const[state,setState]=useState("this is the new table")
    const [records, setRecords] = useState([]);
    const [employe, setEmploye] = useState([]);
    const [filter, setFilter] = useState([]);
    const [empfilter, setEmpfilter] = useState([]);
    const [selectedRows, setSelecterRows] = useState([]);
    const [reload, setRelode] = useState(true);
    const [createprojectdatas, setProjectid] = useState(JSON.parse(localStorage.getItem("createprojectdatas")));
    const [logindataid, setLogindataid] = useState(JSON.parse(localStorage.getItem("HelpDeskLoginDatas")));


    const colums = [
        {
          name: 'Department',
          selector: row => row.Department,
          sortable: true
        },
        {
          name: 'Designation',
          selector: row => row.Designation,
          sortable: true
        },
        {
          name: 'EmpName',
          selector: row => row.EmpName,
          sortable: true
        },
        // {
        // name:'EmpID',
        // selector:row=>row.EmpID,
        // sortable:true
        // }
      ];
      const columss = [
        {
          name: 'Employe name',
          selector: row => row.EName,
          sortable: true
        },
        // {
        // name:'Employe id',
        // selector:row=>row.PrjEmpID,
        // sortable:true
        // },
      ];
    
    
      const adduser = () => {
        const selecterIds = selectedRows.map(row => row.EmpID).join(',');
        console.log('employee', selecterIds);
    
        const emp = 'https://helpdeskservice.desss-portfolio.com/api/AssignResources/AddEmployee?CompanyID=' + logindataid.CompanyID + '&ProjectID=' + createprojectdatas.ProjectID + '&EmpID=' + selecterIds;
        axios.post(emp).then(res => {
          let employee = res.data.data
          console.log('employee', employee);
          setRelode(!reload)
        })
          .catch(error => {
            console.log(error);
          })
    
      }
      const removeemp = () => {
        // setLoader(true)
        const selecterIdss = selectedRows.map(row => row.PrjEmpID).join(',');
        console.log('employee', selecterIdss);
    
        const removeEmp = 'https://helpdeskservice.desss-portfolio.com/api/RemoveButton/DeleteRow?PrjEmpID=' + selecterIdss;
        console.log('employid', removeEmp);
        axios.delete(removeEmp).then(res => {
          // setLoader(false)
          let removeid = res.data.data
          console.log('employid', removeid);
          setRelode(!reload)
          console.log(reload)
    
        })
          .catch(error => {
            console.log(error);
          })
      }
      const handlechange = (state) => {
        setSelecterRows(state.selectedRows);
      }
      function handleFilter(event) {
        const newData = filter.filter(row => {
          return row.Department.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
      }
      function handleFilterr(event) {
        const newData = filter.filter(row => {
          return row.Designation.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
      }
      function handleFilterrr(event) {
        const newData = filter.filter(row => {
          return row.EmpName.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
      }
      function emphandling(event) {
        const newData = empfilter.filter(row => {
          return row.EName.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setEmploye(newData)
      }
      console.log(records)
      useEffect(() => {
        props.onUpdateStateValue(true);
        const Project = 'https://helpdeskservice.desss-portfolio.com/api/AssignResources/LoadEmpoyee?CompanyID=' + logindataid.CompanyID + '&ProjectID=' + createprojectdatas.ProjectID;
        axios.post(Project)
          .then(res => {
            props.onUpdateStateValue(true);
            let yusuf = res.data.data
            console.log('ProjectID', createprojectdatas.ProjectID)
            setRecords(yusuf)
            setFilter(yusuf)
            console.log('checl employe', yusuf)
            const Project1 = 'https://helpdeskservice.desss-portfolio.com/api/ProjectMembers/LoadEmp?CompanyID=' + logindataid.CompanyID + '&ProjectID=' + createprojectdatas.ProjectID;
            axios.post(Project1)
              .then(res => {
                props.onUpdateStateValue(false);
                let yusuf = res.data.data
                console.log('data 2', yusuf)
                setEmploye(yusuf)
                setEmpfilter(yusuf)
              })
          })
          .catch(error => {
            console.log(error);
          })
    
       
    
      }, [reload])

  return (
    <div className='first-addemp'>

    <div className='two-addemp1'>
      <div className="add-employees">
        <button onClick={() => adduser()} >Add Employees</button>
      </div>
      <div className="search-filter">
        <input type="text" placeholder="Department" onChange={handleFilter} />
        <input type="text" placeholder="Designation" onChange={handleFilterr} />
        <input type="text" placeholder="EmpName" onChange={handleFilterrr} />
      </div>
      <DataTable
        columns={colums}
        data={records}
        selectableRows
        fixedHeader
        pagination
        filterable
        selectableRowsHighlight
        onSelectedRowsChange={handlechange}

      />
    </div>
    <div className='two-addemp2'>
      <div className="add-employees">
        <button onClick={() => removeemp()}>Remove employees</button>
      </div>
      <div className="search-filter">
        <input type="text" placeholder="Employe name" onChange={emphandling} />
      </div>
      <DataTable
        columns={columss}
        data={employe}
        selectableRows
        fixedHeader
        pagination
        filterable
        selectableRowsHighlight
        onSelectedRowsChange={handlechange}
      />

    </div>




  </div>
  )
}

export default NewTable