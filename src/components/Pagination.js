import React, { useState } from 'react'
import Data from '../Data.json'
import ProductList from './ProductList';
import DisabledButton from './DisabledButton';

export default function Pagination() {
  const [currentPage,  setCurrentPage] = useState(1)
  const recordsPerPage = 1;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Data.length / recordsPerPage)
  //const numbers = [...Array(npage + 1 ).keys()].slice(1)

  function prePage() {
    if(currentPage !== 1) {
      setCurrentPage(currentPage - 1)
      console.log(currentPage)
    }
  }
  function changePage(pageNumber) {
    setCurrentPage(pageNumber)
  }
  function nextPage() {
    if(currentPage !== npage) {
      setCurrentPage(currentPage + 1)
    }
  }
  function prePrePage() {
    setCurrentPage(1);
  }
  function nextNextPage() {
    const nextNextIndex = (currentPage + Data.length) * recordsPerPage;
    if (nextNextIndex <= Data.length) {
      setCurrentPage(currentPage);
    }
     else {
      setCurrentPage(npage);
    }
  }
 
  function renderPageNumbers() {
    const pageNumbers = [];
    const maxPageNumbers = 5;
  
    // Calculate the range of page numbers to display
    let startPage;
    let endPage;
    
    if (npage <= maxPageNumbers) {
      // If the total number of page numbers is less than or equal to the maximum,
      // display all page numbers
      startPage = 1;
      endPage = npage;
    } else {
      // If the total number of page numbers is greater than the maximum,
      // calculate the range based on the current page
      if (currentPage <= Math.ceil(maxPageNumbers / 2)) {
        startPage = 1;
        endPage = maxPageNumbers;
      } else if (currentPage >= npage - Math.floor(maxPageNumbers / 2)) {
        startPage = npage - maxPageNumbers + 1;
        endPage = npage;
      } else {
        startPage = currentPage - Math.floor(maxPageNumbers / 2);
        endPage = currentPage + Math.floor(maxPageNumbers / 2);
      }
    }
  
  // Adjust the start and end page numbers to keep the current page in the middle
  const middleNumer = maxPageNumbers - (endPage - startPage + 1);
  if (middleNumer > 0) {
    startPage = Math.max(1, startPage - middleNumer);
    endPage = Math.min(npage, endPage + middleNumer);
  }
  // Create an array of JSX elements for page numbers
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(
      <li className={`page-item ${currentPage === i ? 'active' : ''}`} key={i}>
        <button className='page-item' onClick={() => changePage(i)}>
          {i}
        </button>
      </li>
    );
  }
  
  return pageNumbers;
  }
  
  return (
    <div>
      <ProductList records={records}/>
      <ul className='pagination'>
        <li className={`page-item ${currentPage > 1 ? '' : 'disable'}`}>
          <button className='page-link' onClick={prePrePage}>&laquo;</button>
          <button className='page-link' onClick={prePage}>&lt;</button>
          
        </li>
       {/* {
            numbers.map((n, i) => (
              <li className={`page-item ${currentPage === n ? 'active' : ""}`} key={i}>
                <button className='page-item' onClick={() => changePage(n)}>{n}</button>
                
              </li>
            ))
        } */}
        {renderPageNumbers()}
         <li className={`page-item ${currentPage === npage ? 'disable' : ''}`}>
          <button className='page-link' onClick={nextPage}>&gt;</button>
          <button className='page-link' onClick={nextNextPage}>&raquo;</button>
        </li>
      </ul>

      <DisabledButton/>
    </div>
  )
}