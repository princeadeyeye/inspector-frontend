/* eslint-disable linebreak-style */
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  Card,
  TextField,
  CardActions,
  CardContent,
  Button
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { createNewInvestigation } from 'src/actions/investigation-actions';

const CreateInvestigation = () => {
  const [values, setValues] = useState({
    investigation_data: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.userProfile);

  const handleSubmit = () => {
    dispatch(createNewInvestigation({
      inspector_name: profile.name,
      investigation_data: values.investigation_data
    }));
  };
  return (
    <>
      <Helmet>
        <title>Upload Investigation Data </title>
      </Helmet>
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
                    <form sx={{}} noValidate autoComplete="off">
                      <Grid
                        item
                        lg={12}
                        md={12}
                        xs={12}
                      >
                        <TextField
                          sx={{ paddingBottom: '30px' }}
                          value={profile.name}
                          name="inspector_name"
                          disabled
                          helperText="Investigator Name"
                          id="filled-basic"
                          variant="filled"
                        />

                      </Grid>
                      <Grid
                        item
                        lg={12}
                        md={12}
                        xs={12}
                      >
                        <TextField
                          helperText="Enter investigation data"
                          id="filled-basic"
                          sx={{ width: '300px' }}
                          name="investigation_data"
                          value={values.investigation_data}
                          onChange={handleChange}
                          variant="filled"
                          multiline
                          rows={6}
                        />
                      </Grid>
                    </form>
                    <CardActions>
                      <Button onClick={handleSubmit} size="medium">Submit</Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>

            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default CreateInvestigation;
