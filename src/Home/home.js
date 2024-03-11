import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

const Sprint = () => {
    const [records, setRecords]= useState([]);
    const [filter,setFilter] = useState([]);
    const [selectedRows,setSelecterRows] = useState ([]);
    const colums = [
        {
           name:'BoardName',
           selector:row=>row.BoardName,
           sortable:true
        },
        {
            name:'ProjectName',
            selector:row=>row.ProjectName,
            sortable:true
         },
      ];
    const handlechange= (state) =>{
        setSelecterRows(state.selectedRows);
    }
    function handleFilter(event){
        const newData = filter.filter(row=>{
          return row.BoardName.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
          }
    useEffect(()=>{
        const sprintlistgrid='http://helpdeskservice.desss-portfolio.com/api/GetSprintData/LoadSprintGrid?ProjectID=1858&UserTypeID=2&BoardID=1086&EmpID=10'

        axios.post(sprintlistgrid).then((res)=>{
            console.log('sprintlistgrid',res);
            let sprintlist=res.data.data
            setRecords(sprintlist)
            setFilter(sprintlist)
        })
    },[])
  return (
    <div>
              <div>
      <input type="text" placeholder="Name" onChange={handleFilter}/>
         {/* {/ <button onClick={()=>removeemp()}>Remove emoploye</button> /} */}
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
      <div>
        
      </div>
    </div>
  )
}

export default Sprint