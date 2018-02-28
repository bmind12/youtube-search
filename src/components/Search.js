import React from 'react'
import propTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'

/* Material UI */
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import { withStyles } from 'material-ui/styles'

const styles = (theme) => ({
    button: {
        margin: theme.spacing.unit,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    }
});

const renderTextField = ({ input, label }) => (
    <TextField label={label} {...input} />
)

let Search = ({
    classes,
    handleSubmit,
    pristine,
    reset,
    submitting
}) =>
    <form onSubmit={handleSubmit}>
        <Field
            component={renderTextField}
            label="Search"
            name="query"
        />
        <Button
            className={classes.button}
            color="primary"
            disabled={pristine || submitting}
            type="submit"
        >
            Search
        </Button>
    </form>

Search = reduxForm({
    form: 'search'
})(Search)

Search.propTypes = {
    classes: propTypes.object.isRequired
}

export default withStyles(styles)(Search)
