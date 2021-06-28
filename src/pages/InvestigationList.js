import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container } from '@material-ui/core';
import InvestigationListResults from 'src/components/investigation/InvestigationListResults';
import InvestigationListToolbar from 'src/components/investigation/InvestigationListToolbar';
import { fetchAllInvestigations } from 'src/actions/investigation-actions';
// import investigations from 'src/__mocks__/investigations';

const InvestigationList = () => {
  const dispatch = useDispatch();
  const { investigations, loadingInv } = useSelector((state) => state.investigationData);
  console.log(loadingInv, investigations);
  // const fetchInvestigations = () => {
  // };
  useEffect(() => {
    dispatch(fetchAllInvestigations());
    // if (!user)navigate('/login');
    // else fetchProfileDetails();
    // fetch user details
  }, []);
  return (
    <>
      <Helmet>
        <title>All Investigation Data</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <InvestigationListToolbar />
          <Box sx={{ pt: 3 }}>
            <InvestigationListResults investigations={investigations.data ? investigations.data : []} />
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default InvestigationList;
