import { jobs } from "./_data";

export function get(req, res) {

    res.end(JSON.stringify(jobs));

}
