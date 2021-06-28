/* eslint-disable linebreak-style */
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  Card,
  TextField,
  //   CardActions,
  CardContent
} from '@material-ui/core';
// import InvestigationListResults from 'src/components/investigation/InvestigationListResults';
// import InvestigationListToolbar from 'src/components/investigation/InvestigationListToolbar';
// import investigations from 'src/__mocks__/investigations';
// import CreateInvestigationToolbar from 'src/components/product/ProductListToolbar';
// import ProductCard from 'src/components/product//ProductCard';
// import products from 'src/__mocks__/products';

const CreateInvestigation = () => (
  <>
    <Helmet>
      <title>Personal Investigation Data </title>
    </Helmet>
    {/* <Box
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
    </Box> */}
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        {/* <CreateInvestigationToolbar /> */}
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={4}
              md={6}
              xs={12}
            >
              <Card>
                <CardContent>
                  <form sx={{ display: 'flex' }} noValidate autoComplete="off">
                    <TextField id="filled-basic" label="Filled" variant="filled" />
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                  </form>
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </Box>
      </Container>
    </Box>
  </>
);

export default CreateInvestigation;
