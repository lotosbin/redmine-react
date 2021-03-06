import {AppBar, IconButton} from "@material-ui/core";
import Dialog from "@material-ui/core/es/Dialog/Dialog";
import Slide from "@material-ui/core/es/Slide/Slide";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import CloseIcon from "@material-ui/icons/Close";
import styles from "./IssueDialog.module.css";
import React, {Component} from "react";
import Issue from "../../../components/Issue";

function Transition(props: any) {
    return <Slide direction="up" {...props} />;
}

class IssueDialog extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            issue: props.data,
        };
    }

    componentWillReceiveProps(nextProps: Readonly<any>, nextContext: any): void {
        this.setState({issue: nextProps.data});
    }

    handleClose = () => {
        let {onClose} = this.props;
        this.setState({issue: null});
        onClose && onClose();
    };

    show(issue: any) {
        this.setState({issue});
    }

    render() {
        return (
            <Dialog fullScreen open={!!this.state.issue} onClose={this.handleClose} TransitionComponent={Transition}>
                <AppBar className={styles.app_bar}>
                    <Toolbar>
                        <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                            <CloseIcon/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Issue data={this.state.issue}/>
            </Dialog>
        );
    }
}

export default IssueDialog;
