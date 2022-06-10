import React from "react";
import "./Paginate.scss";
import Pagination from "react-responsive-pagination";
const Paginate = (props) => {
  const { totalPages, currentPage, setCurrentPage } = props;
  return (
    <Pagination
      current={currentPage}
      total={totalPages}
      onPageChange={setCurrentPage}
    />
  );
};
export default Paginate;
