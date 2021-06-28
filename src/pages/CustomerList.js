import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Container } from '@material-ui/core';
import InvestigationListResults from 'src/components/customer/InvestigationListResults';
import InvestigationListToolbar from 'src/components/customer/InvestigationListToolbar';
import investigations from 'src/__mocks__/customers';

const InvestigationList = () => {
  const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.global);
  // const { profile, loadingProfile } = useSelector((state) => state.userProfile);

  const fetchInvestigations = () => {
  };
  useEffect(() => {
    dispatch(fetchInvestigations);
    // if (!user)navigate('/login');
    // else fetchProfileDetails();
    // fetch user details
  }, []);
  return (
    <>
      <Helmet>
        <title>User Investigation Data</title>
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
            <InvestigationListResults investigations={investigations} />
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default InvestigationList;
