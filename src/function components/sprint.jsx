import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState ,useEffect} from 'react'
import DataTable from "react-data-table-component";
import axios from 'axios'
import Edit from '../images/edit_icon.png'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';





const sprint = (props ) => {
    const [records, setRecords] = useState([]);
    const [reload, setRelode] = useState(true);
    const [filter, setFilter] = useState([]);
    const [selectedRows, setSelecterRows] = useState([]);
    const [logindataid, setLogindataid] = useState(JSON.parse(localStorage.getItem("HelpDeskLoginDatas")));

    const colums = [
      {
        name: 'Project Name',
        selector: row => row.ProjectName,
        sortable: true
      },
      {
        name: 'Board Name',
        selector: row => row.BoardName,
        sortable: true
      },
      {
        name: 'Sprint Name',
        selector: row => row.SprintName,
        sortable: true
      },
      {
      name: 'SprintStartDate',
      selector: row => row.SprintStartDate,
      sortable: true
      },
      {
      name: 'SprintEndDate',
      selector: row => row.SprintEndDate,
      sortable: true
      },
      {
      name: 'SprintDeliveryDate',
      selector: row => row.SprintDeliveryDate,
      sortable: true
      },
      {
      name: 'SprintEstimatedHours',
      selector: row => row.SprintEstimatedHours,
      sortable: true
      },
      {
      name: 'SprintCompletedHours',
      selector: row => row.SprintCompletedHours,
      sortable: true
      },
      {
      name: 'Allot Task',
      selector: row => <button onClick={() => editsprint(row)} > <img width={50} height={50} src={Edit} /></button>
      },
      {
      name: 'Comments',
      selector: row => row.Comments,
      sortable: true,
  
      },
    ];

   function  editsprint (event){

    console.log( 'edit', event);
    }

    

    const handlechange = (state) => {
        setSelecterRows(state.selectedRows);
      }
      function handleFilter(event) {
        const newData = filter.filter(row => {
          return row.ProjectName.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
      }
      function handleFilterr(event) {
        const newData = filter.filter(row => {
          return row.BoardName.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
      }
      function handleFilterrr(event) {
        const newData = filter.filter(row => {
          return row.SprintName.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
      }
      function handleFilter(event) {
        const newData = filter.filter(row => {
          return row.SprintStartDate.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
      }
      function handleFilterr(event) {
        const newData = filter.filter(row => {
          return row.SprintEndDate.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
      }
      function handleFilterrr(event) {
        const newData = filter.filter(row => {
          return row.SprintDeliveryDate.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
      }
      function handleFilter(event) {
        const newData = filter.filter(row => {
          return row.SprintEstimatedHours.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
      }
      function handleFilter(event) {
        const newData = filter.filter(row => {
          return row.SprintCompletedHours.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
      }
      function handleFilterr(event) {
        const newData = filter.filter(row => {
          return row.Comments.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
      }
     
    useEffect(() => {

        const ProjectID = '';
        const BoardID = '';
        const UserTypeID = '';
        const EmpID = '';
        const sprint = 'http://helpdeskservice.desss-portfolio.com/api/GetSprintData/LoadSprintGrid?ProjectID=' + ProjectID + '&UserTypeID=1&BoardID=' + BoardID + '&EmpID=10'
        axios.post(sprint)
          .then(res => {
            console.log('sprint', sprint)
            let sprintlist = res.data.data
            console.log('res',  res.data.data)
            console.log('ProjectID', ProjectID)
            setRecords(sprintlist)
            setFilter(sprintlist)
            console.log('checl employe', yusuf)
          })
          .catch(error => {
            console.log(error);
          })
      },{})
  return (
    <div>
        <Tabs>
    <TabList>
      <Tab>Pending Sprint</Tab>
      <Tab>Current Sprint</Tab>
    </TabList>

    <TabPanel>
        <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
    <div>
      <div className="search-filter">
        <input type="text" placeholder="ProjectName" onChange={handleFilter} />
        <input type="text" placeholder="BoardName" onChange={handleFilterr} />
        <input type="text" placeholder="SprintName" onChange={handleFilterrr} />
        <input type="date" placeholder="SprintStartDate" onChange={handleFilter} />
        <input type="date" placeholder="SprintEndDate" onChange={handleFilterr} />
        <input type="date" placeholder="SprintDeliveryDate" onChange={handleFilterrr} />
        <input type="number" placeholder="SprintEstimatedHours" onChange={handleFilter} />
        <input type="number" placeholder="SprintCompletedHours" onChange={handleFilter} />
        <input type="text" placeholder="Comments" onChange={handleFilterr} />
      </div>
        <DataTable
            columns={colums}
            data={records}
            fixedHeader
            pagination
            filterable
            selectableRowsHighlight
            onSelectedRowsChange={handlechange}
        />
      </div>
      
    </TabPanel>
  </Tabs>
    </div>
  )
}

export default sprint