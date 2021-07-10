import { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  // Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';
// import getInitials from 'src/utils/getInitials';

const InvestigationListResults = ({ investigations, ...rest }) => {
  const [selectedInvestigationIds, setSelectedInvestigationIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedInvestigationIds;

    if (event.target.checked) {
      newSelectedInvestigationIds = investigations.map((Investigation) => Investigation.unique_id);
    } else {
      newSelectedInvestigationIds = [];
    }

    setSelectedInvestigationIds(newSelectedInvestigationIds);
  };

  const handleSelectOne = (event, unique_id) => {
    const selectedIndex = selectedInvestigationIds.indexOf(unique_id);
    let newSelectedInvestigationIds = [];

    if (selectedIndex === -1) {
      newSelectedInvestigationIds = newSelectedInvestigationIds.concat(selectedInvestigationIds, unique_id);
    } else if (selectedIndex === 0) {
      newSelectedInvestigationIds = newSelectedInvestigationIds.concat(selectedInvestigationIds.slice(1));
    } else if (selectedIndex === selectedInvestigationIds.length - 1) {
      newSelectedInvestigationIds = newSelectedInvestigationIds.concat(selectedInvestigationIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedInvestigationIds = newSelectedInvestigationIds.concat(
        selectedInvestigationIds.slice(0, selectedIndex),
        selectedInvestigationIds.slice(selectedIndex + 1)
      );
    }

    setSelectedInvestigationIds(newSelectedInvestigationIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedInvestigationIds.length === investigations.length}
                    color="primary"
                    indeterminate={
                      selectedInvestigationIds.length > 0
                      && selectedInvestigationIds.length < investigations.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Investigator Name
                </TableCell>
                <TableCell>
                  Investigator Email
                </TableCell>
                <TableCell>
                  Investigator Data
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
                <TableCell>
                  Registration date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {investigations.slice(0, limit).map((Investigation) => (
                <TableRow
                  hover
                  key={Investigation.unique_id}
                  selected={selectedInvestigationIds.indexOf(Investigation.unique_id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedInvestigationIds.indexOf(Investigation.unique_id) !== -1}
                      onChange={(event) => handleSelectOne(event, Investigation.unique_id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      {/* <Avatar
                        src={Investigation.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(Investigation.name)}
                      </Avatar> */}
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {Investigation.inspector_name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {Investigation.email}
                  </TableCell>
                  <TableCell>
                    {`${Investigation.investigation_data}`}
                  </TableCell>
                  <TableCell>
                    {Investigation.phone}
                  </TableCell>
                  <TableCell>
                    {moment(Investigation.created).format('DD/MM/YYYY')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={investigations.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

InvestigationListResults.propTypes = {
  investigations: PropTypes.array.isRequired
};

export default InvestigationListResults;
