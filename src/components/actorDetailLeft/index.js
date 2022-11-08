import React from "react";
import Paper from "@mui/material/Paper";
import CertainCredit from '../certainCredit/';
import Typography from "@mui/material/Typography";

const ActorCredits = ({ actorCreditsCast }) => {
    let credits = []
    for (var i in actorCreditsCast) {
        if (!credits[actorCreditsCast[i].release_date.substr(0, 4)]) {
            credits[actorCreditsCast[i].release_date.substr(0, 4)] = [actorCreditsCast[i]];
        } else {
            for (var j in credits) {
                if (credits[j][0].release_date.substr(0, 4) === actorCreditsCast[i].release_date.substr(0, 4)) {
                    credits[j].push(actorCreditsCast[i])
                }
            }
        }
    }
    credits = credits.reverse();

    let creditsPapers = credits.map((creditsList) => (
        <Paper key={creditsList[0].release_date.substr(0, 4)} sx={{my:1}}>
            <Typography >{creditsList[0].release_date.substr(0, 4)}</Typography>
            <CertainCredit creditsList={creditsList}></CertainCredit>
        </Paper>
    ))

    return creditsPapers;

};
export default ActorCredits;