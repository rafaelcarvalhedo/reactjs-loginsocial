import React, {Component} from 'react';
import firebase from 'firebase';
import {Grid, Card, CardHeader, Avatar, Typography, CardContent,ListItem,ListItemText,List} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createStyles, withStyles } from '@material-ui/core/styles';

const styles = (theme) =>
    createStyles({
        container: {
            margin : 30,
            display: 'flex',
            flexWrap: 'wrap',
        },
        headerText: {
            width: '100%'
        },
        cardContainer : {
            width : 'calc(100% - 60px)'
        }
    });

class Perfil extends Component {

    constructor(props) {
        super(props);
        this.state = {user: {}};
        //define o contexto do componente como contexto da função
        this.setUser = this.setUser.bind(this);
    }

    componentDidMount() {
        // this.setState({user: firebase.auth().currentUser});
        firebase.auth().onAuthStateChanged(this.setUser);
    }

    setUser(user) {
        console.log(user);
        this.setState({user: user});
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseline />
                <Grid container wrap={true} className={classes.container} >
                    <Typography gutterBottom variant="h5" component="h2" className={classes.headerText} >Perfil</Typography>
                    <Card className={classes.cardContainer}>
                        <CardHeader
                            avatar={<Avatar src={this.state.user.photoURL}> </Avatar>}
                            title={this.state.user.displayName}
                        />
                        <CardContent>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Telefone" secondary= {this.state.user.phoneNumber || '(00) 0000-0000'} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Email" secondary= {this.state.user.email || ' - '} />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>

                </Grid>
            </React.Fragment>

        );
    }
}

export default  withStyles(styles)(Perfil);