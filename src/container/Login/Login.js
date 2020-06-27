import React, { useState } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "../Login/Login.css";
import LoginImage from '../../static/images/login-card-bg.jpg';

const useStyles = makeStyles({
    root: {
        width: 345,
    },
    media: {
        height: 140,
    },
});

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const classes = useStyles();

    function handleSubmit() {
        console.log(email + " " + password);
    }

    return (
        <div className="Login">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={LoginImage}
                            title="Login Image" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">Login</Typography>
                        </CardContent>
                    </CardActionArea>
                    <form noValidate autoComplete="off">
                        <TextField fullWidth value={email} onChange={e => setEmail(e.target.value)} label="Usuário" />
                        <br />
                        <TextField fullWidth type="password" value={password} onChange={e => setPassword(e.target.value)} label="Senha" />
                    </form>
                    <CardActions>
                        <Button onClick={() => handleSubmit()} size="small" color="primary">Entrar</Button>
                    </CardActions>
                </Card>
        </div>
    );
}