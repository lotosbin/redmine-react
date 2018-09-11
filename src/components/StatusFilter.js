import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
    root: {
        width: 250,
        backgroundColor: theme.palette.background.paper,
        overflowY: 'scroll',
    },
    listItem: {}
});

class StatusFilter extends React.Component {
    state = {
        checked: [],
    };

    handleToggle = value => () => {
        let {id} = value;
        const {checked} = this.state;
        const currentIndex = checked.indexOf(id);
        let newChecked = [...checked];
        if (currentIndex === -1) {
            if (this.props.mode === 'single') {
                newChecked = [];
            }
            newChecked.push(id);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        this.setState({
            checked: newChecked,
        });
        if (this.props.onFilter) {
            let filter = this.props.data.filter(it => newChecked.indexOf(it.id) >= 0);
            this.props.onFilter(filter)
        }
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <List>
                    {this.props.data.map((item) => {
                        let {id, name} = item;
                        return (
                            <ListItem
                                key={id}
                                role={undefined}
                                dense
                                button
                                onClick={this.handleToggle(item)}
                                className={classes.listItem}
                            >
                                <Checkbox
                                    checked={this.state.checked.indexOf(id) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                />
                                <ListItemText primary={`${name}`}/>


                            </ListItem>
                        );
                    })}
                </List>
            </div>
        );
    }
}

StatusFilter.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    onFilter: PropTypes.func,
};

export default withStyles(styles)(StatusFilter);