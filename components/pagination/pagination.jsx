import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import styles from "./pagination.module.css";

const PaginationC = ({ perpage, data, paginate }) => {
  const [page, setPage] = React.useState(1);
  const pageNumbers = Math.ceil(data?.length / perpage);

  const handleChange = (event, value) => {
    setPage(value);
    paginate(value);
  };

  return (
    <Stack spacing={2} className={styles.container}>
      <Pagination
        count={pageNumbers}
        color="primary"
        onChange={handleChange}
        page={page}
      />
    </Stack>
  );
};

export default PaginationC;
