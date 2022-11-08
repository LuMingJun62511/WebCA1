import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";

const PeopleCard = ({ people }) => {
    let filterKnow = (t) => {
        if (t === undefined) {
            return "";
        } else if (t.media_type === "movie") {
            return t.title;
        } else {
            return t.name;
        }
    }
    let known;
    let kA = people.known_for;
    if (kA.length === 0) {
        known = ""
    } else {
        let t1 = filterKnow(kA[0]);
        let t2 = filterKnow(kA[1]);
        let t3 = filterKnow(kA[2]);
        known = "".concat(t1, t2, t3)
    }

    return (
        <Link to={`/actors/${people.id}`} underline="none">
            <Card>
                <CardMedia
                    sx={{ width: 270, height: 350, justifyContent: 'center', alignItems: 'center' }}
                    image={
                        people.profile_path
                            ? `https://themoviedb.org/t/p/w600_and_h900_bestv2/${people.profile_path}`
                            : img
                    }
                />
                <CardContent>
                    <Grid container>
                        <Grid item>
                            <Typography variant="h6" component="p" >
                                {people.name}
                            </Typography>
                        </Grid>
                        <Grid item zeroMinWidth>
                            <Typography noWrap component="p">
                                {known}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card >
        </Link>
    );
};

export default PeopleCard;