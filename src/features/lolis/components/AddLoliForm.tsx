import {
  Button,
  Checkbox,
  createStyles,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  Switch,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Field, Form } from "react-final-form";
import { tags } from "./tags";

type CupSize = "a" | "b" | "c" | "d" | "d+";
type HairColor = "black" | "brown" | "blonde" | "red" | "green" | "blue";

interface Values {
  firstName: string;
  lastName: string;
  age: number;
  hairColor: HairColor;
  cupSize: CupSize;
  favoriteTags?: string[];
  isLewded: boolean;
}

const initialValues: Values = {
  firstName: "Reimu",
  lastName: "Hakurei",
  age: 15,
  hairColor: "black",
  cupSize: "c",
  favoriteTags: ["1"],
  isLewded: true,
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
  })
);

export const AddLoliForm: React.FunctionComponent = () => {
  const onSubmit = (values: Values) => {
    console.log("SANITY CHECK");
    alert(JSON.stringify(values));
  };

  const validateRequired = (value: any) =>
    value ? undefined : "Required Field";

  const renderedTagCheckbox = tags.map((tag) => (
    <Field<string>
      key={tag.id}
      name="favoriteTags"
      type="checkbox"
      value={tag.id.toString()}
      render={({ input, meta }) => (
        <FormControlLabel
          label={tag.name}
          control={<Checkbox {...input}></Checkbox>}
        ></FormControlLabel>
      )}
    ></Field>
  ));

  const classes = useStyles();

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Paper className={classes.root}>
            <Grid container justify="flex-start" spacing={1}>
              <Grid item>
                <Typography variant="h3">Add Loli Form</Typography>
              </Grid>
              <Grid container item spacing={3}>
                <Grid item xs={5}>
                  <Field<string>
                    name="firstName"
                    validate={validateRequired}
                    render={({ input, meta }) => (
                      <TextField
                        {...input}
                        label="First Name"
                        placeholder="Reimu"
                        // required
                        fullWidth
                        error={meta.error && meta.touched}
                        helperText={meta.touched && meta.error}
                      ></TextField>
                    )}
                  ></Field>
                </Grid>
                <Grid item xs={5}>
                  <Field<string>
                    name="lastName"
                    validate={validateRequired}
                    render={({ input, meta }) => (
                      <TextField
                        {...input}
                        label="Last Name"
                        placeholder="Hakurei"
                        // required
                        fullWidth
                        error={meta.error && meta.touched}
                        helperText={meta.touched && meta.error}
                      ></TextField>
                    )}
                  ></Field>
                </Grid>
                <Grid item xs={2}>
                  <Field<string>
                    name="age"
                    validate={validateRequired}
                    render={({ input, meta }) => (
                      <TextField
                        {...input}
                        type="number"
                        label="Age"
                        placeholder="14"
                        error={meta.error && meta.touched}
                        helperText={meta.touched && meta.error}
                      ></TextField>
                    )}
                  ></Field>
                </Grid>
              </Grid>
              <Grid container item spacing={3}>
                <Grid item xs={6}>
                  <Field<string>
                    name="hairColor"
                    validate={validateRequired}
                    render={({ input, meta }) => (
                      <FormControl fullWidth error={meta.error}>
                        <InputLabel id="label-hair-color">
                          Hair Color
                        </InputLabel>
                        <Select {...input} labelId="label-hair-color">
                          <MenuItem value=""></MenuItem>
                          <MenuItem value="black">Black</MenuItem>
                          <MenuItem value="brown">Brown</MenuItem>
                          <MenuItem value="blonde">Blonde</MenuItem>
                          <MenuItem value="red">Red</MenuItem>
                          <MenuItem value="green">Green</MenuItem>
                          <MenuItem value="blue">Blue</MenuItem>
                        </Select>
                        <FormHelperText>
                          {meta.touched && meta.error}
                        </FormHelperText>
                      </FormControl>
                    )}
                  ></Field>
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name="cupSize"
                    validate={validateRequired}
                    render={({ input, meta }) => (
                      <FormControl fullWidth error={meta.touched && meta.error}>
                        <InputLabel id="label-cup-size">Cup Size</InputLabel>
                        <Select {...input} labelId="label-cup-size">
                          <MenuItem value="a">A</MenuItem>
                          <MenuItem value="b">B</MenuItem>
                          <MenuItem value="c">C</MenuItem>
                          <MenuItem value="d">D</MenuItem>
                          <MenuItem value="d+">D+</MenuItem>
                        </Select>
                        <FormHelperText>
                          {meta.touched && meta.error}
                        </FormHelperText>
                      </FormControl>
                    )}
                  ></Field>
                </Grid>
              </Grid>

              <Grid container item xs={12}>
                <FormGroup row>
                  <Field
                    name="isLewded"
                    // Need type in order to craft the correct inputs
                    // If not placed, will attempt to set with value, when should be the checked attribute
                    type="checkbox"
                    render={({ input, meta }) => (
                      <FormControlLabel
                        label="Lewded"
                        control={<Switch {...input}></Switch>}
                      ></FormControlLabel>
                    )}
                  ></Field>
                </FormGroup>
              </Grid>

              <Grid container item xs={12}>
                <FormControl>
                  <FormLabel>Favorite Tags</FormLabel>
                  <FormGroup row>{renderedTagCheckbox}</FormGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                {/* FORM WON'T SUBMIT IF THERE ARE ERRORS */}
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={submitting}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </form>
      )}
    ></Form>
  );
};
