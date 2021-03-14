//react
import React, { Fragment } from 'react';
//import { Link } from "react-router-dom";


//Mui
 import { makeStyles } from '@material-ui/core/styles';
 import { Typography } from '@material-ui/core';
 import Dialog from '@material-ui/core/Dialog';
 import DialogTitle from '@material-ui/core/DialogTitle';
 import DialogContent from '@material-ui/core/DialogContent';
 import Box from '@material-ui/core/Box';
 import Paper from '@material-ui/core/Paper';
 import Button from '@material-ui/core/Button';
 import { Formik, Form, Field } from 'formik';
 import { TextField } from 'formik-material-ui';
 import Select from '@material-ui/core/Select';
 import MenuItem from '@material-ui/core/MenuItem';



//Custom Components



  const useStyles = makeStyles((theme) => ({
    
   }));
const AppointmentModal =(props) => {
    const { setOpen, open, id, handleReply } = props;

    const classes = useStyles();
    const handleClose = () => setOpen(false);

    const handleSubmit = (values) => {
      const center=values.center.split(`$`)
    handleReply(center[0], values);
  };
  let initialValues = {
    fname: '',
    email: '',
    age: '',
    center:'',
  };
    return(
        <Dialog onClose={handleClose} aria-labelledby="appointment-dialog" open={open}>
      <DialogTitle id="appointment-dialog">Appointment</DialogTitle>

      <DialogContent className={classes.dialog}>
        <Formik
          initialValues={initialValues}
          //validationSchema={QuestionSchema}
          enableReinitialize
          onSubmit={handleSubmit}
        >
          {({ submitForm, setFieldValue, values }) => (
            <Form>
              <Paper>
                <Box p={2}>
                  <Field
                    component={TextField}
                    type="test"
                    name="fname"
                    label="Enter your fullname"
                    fullWidth
                    multiline
                  />
                </Box>
              </Paper>
              <br />
              <Paper>
                <Box p={2}>
                  <Field
                    component={TextField}
                    type="test"
                    name="email"
                    label="Enter your Email"
                    fullWidth
                    multiline
                  />
                </Box>
              </Paper>
              <br />
              <Paper>
                <Box p={2}>
                  <Field
                    component={TextField}
                    type="test"
                    name="age"
                    label="Enter your Age"
                    fullWidth
                    multiline
                  />
                </Box>
              </Paper>
              <br />
              <Paper>
                <Box p={2}>
                  <Typography>Center</Typography>
                  <Select
                    component={Select}
                    type="test"
                    name="center"
                    value={values.center}
                    onChange={(e)=>setFieldValue('center',e.target.value)}
                  >
                  <option value="604deee8be3c6193edcb9a49$Divya Mother Milk Bank">Divya Mother Milk Bank</option>
                   <option value="604def3dbe3c6193edcb9a4a$Amara Milk Bank">Amara Milk Bank</option>
                   <option value="604def75be3c6193edcb9a4b$Lokmanya Tilak Hospital">Lokmanya Tilak Hospital</option>
                   <option value="604defe4be3c6193edcb9a4c$Vijaya hospital">Vijaya hospital</option>
                  </Select>
                </Box>
              </Paper>
              <br />
              <Button variant="contained" color="primary" fullWidth onClick={submitForm}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
    )    
};

export default AppointmentModal;