

// import React, { useState, useEffect } from 'react';
// import { useTable, usePagination } from 'react-table';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const StudentComponent = () => {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     getStudents();
//   }, []);

//   const getStudents = async () => {
//     try {
//       const response = await fetch('http://localhost:2000/api/student');
//       const data = await response.json();
//       setStudents(data);
//     } catch (error) {
//       console.log('Error:', error);
//     }
//   };

//   const columns = React.useMemo(
//     () => [
//       { Header: 'Name', accessor: 'name' },
//       { Header: 'Student ID', accessor: 'student_id' },
//       { Header: 'Email', accessor: 'mail' },
//       { Header: 'Department', accessor: 'department' },
//       { Header: 'Semester', accessor: 'semester' },
//       { Header: 'Preference 1', accessor: 'preference_1' },
//       { Header: 'Preference 2', accessor: 'preference_2' },
//       { Header: 'Preference 3', accessor: 'preference_3' },
//     ],
//     []
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     page,
//     prepareRow,
//     canPreviousPage,
//     canNextPage,
//     pageOptions,
//     nextPage,
//     previousPage,
//     state: { pageIndex },
//   } = useTable({ columns, data: students }, usePagination);

//   return (
//     <div>
//       <link
//         href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
//         rel="stylesheet"
//         integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
//         crossorigin="anonymous"
//       />
//       <h2>Students</h2>
//       <table {...getTableProps()} className="table">
//         <thead>
//           {headerGroups.map(headerGroup => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map(column => (
//                 <th {...column.getHeaderProps()}>{column.render('Header')}</th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {page.map(row => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map(cell => (
//                   <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table> 
//       <div className="pagination-container" style={{alignItems:'center',alignContent:'center'}}>
//         <button onClick={() => previousPage()} disabled={!canPreviousPage}>
//           Previous
//         </button>
//         <span>
//           Page{' '}
//           <strong>
//             {pageIndex + 1} of {pageOptions.length}
//           </strong>{' '}
//         </span>
//         <button onClick={() => nextPage()} disabled={!canNextPage}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default StudentComponent;



import React, { useState, useEffect } from 'react';
import { useTable, usePagination } from 'react-table';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentComponent = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = async () => {
    try {
      const response = await fetch('http://localhost:2000/api/student');
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const columns = React.useMemo(
    () => [
      { Header: 'Name', accessor: 'name' },
      { Header: 'Student ID', accessor: 'student_id' },
      { Header: 'Email', accessor: 'mail' },
      { Header: 'Department', accessor: 'department' },
      { Header: 'Semester', accessor: 'semester' },
      { Header: 'Preference 1', accessor: 'preference_1' },
      { Header: 'Preference 2', accessor: 'preference_2' },
      { Header: 'Preference 3', accessor: 'preference_3' },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable({ columns, data: students }, usePagination);

  return (
    <div className="container">
      <h2 className="mt-4 mb-4">STUDENTS</h2>
      <table {...getTableProps()} className="table table-striped">
        <thead className="table-dark">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination-container d-flex justify-content-center align-items-center">
        <button
          className="btn btn-primary"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous
        </button>
        <span className="mx-3">
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <button
          className="btn btn-primary"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StudentComponent;
