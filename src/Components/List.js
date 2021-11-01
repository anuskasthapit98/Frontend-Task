import { Table} from 'antd';



export default function List(){
    const columns = [
        {
          title: 'First Name',
          dataIndex: 'FirstName',
          key: 'FirstName',
        },
        {
          title: 'Last Name',
          dataIndex: 'LastName',
          key: 'LastName',
        },
        {
          title: 'Email Address',
          dataIndex: 'Email',
          key: 'Email',
        },
        {
            title: 'Address',
            dataIndex: 'address.City',
            key: 'address',
            render: (text,record) => <div>{record.address.province},{record.address.City}, {record.address.Zip} </div>,
          },
          {
            title: 'Gender',
            dataIndex: 'Gender',
            key: 'Gender',
          },
          {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
          },
          {
            title: 'Start Date',
            dataIndex: 'StartDate',
            key: 'StartDate',
          },
          {
            title: 'Designation',
            dataIndex: 'Designation',
            key: 'Designation',
          },               
        
      ];

      const data = JSON.parse(localStorage.getItem('values'));
     
    return(
          <Table columns={columns} dataSource={data} />
        )
    

  
}

