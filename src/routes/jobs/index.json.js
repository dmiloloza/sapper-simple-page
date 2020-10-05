import {jobs} from "./_data";
import {v4 as uuidv4} from "uuid";

export function get(req, res) {

    res.end(JSON.stringify(jobs));

}

export function post(req, res) {
    const title = req.body.title;
    const salary = req.body.salary;
    const details = req.body.details;
    const id = uuidv4();

    jobs.push({title, salary, details, id});

    res.end(JSON.stringify(jobs))
}
