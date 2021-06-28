import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
// import Budget from 'src/components/dashboard//Budget';
import LatestReports from 'src/components/dashboard/LatestReports';
// import LatestProducts from 'src/components/dashboard//LatestProducts';
import Reports from 'src/components/dashboard/Reports';
// import TasksProgress from 'src/components/dashboard//TasksProgress';
// import TotalCustomers from 'src/components/dashboard//TotalCustomers';
// import TotalProfit from 'src/components/dashboard//TotalProfit';
// import TrafficByDevice from 'src/components/dashboard//TrafficByDevice';

const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard | Police Report</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          {/* <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Budget />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TasksProgress />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalProfit sx={{ height: '100%' }} />
          </Grid> */}
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Reports />
          </Grid>
          {/* <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <TrafficByDevice sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts sx={{ height: '100%' }} />
          </Grid> */}
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestReports />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;
