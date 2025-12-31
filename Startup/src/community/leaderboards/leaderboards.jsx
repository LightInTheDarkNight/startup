import React from "react";
import { Table } from "react-bootstrap";

export function Leaderboards() {
    return (
        <main className="mx-auto p-4 bg-light">
            <h2>Friends</h2>
            <Table striped responsive>
                <thead>
                    <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Handle</th>
                        <th scope="col">Level</th>
                        <th scope="col">Score</th>
                        <th scope="col">Class</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    <tr>
                        <th scope="row">1</th>
                        <td>John</td>
                        <td>42</td>
                        <td>11562</td>
                        <td>Swordsman</td>
                    </tr>
                    <tr className="table-active">
                        <th scope="row">2</th>
                        <td>You</td>
                        <td>36</td>
                        <td>11550</td>
                        <td>Mage</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Adam</td>
                        <td>24</td>
                        <td>11300</td>
                        <td>Cloak</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Leroy</td>
                        <td>26</td>
                        <td>1456</td>
                        <td>Archer</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Billy</td>
                        <td>24</td>
                        <td>1200</td>
                        <td>Scout</td>
                    </tr>
                </tbody>
            </Table>
            
            <h2>Global</h2>
            <Table striped responsive>
                <thead>
                    <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Handle</th>
                        <th scope="col">Level</th>
                        <th scope="col">Score</th>
                        <th scope="col">Class</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    <tr>
                        <th scope="row">1</th>
                        <td>SquidKid</td>
                        <td>42</td>
                        <td>11562</td>
                        <td>Swordsman</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>TECHNOBLADELIVES!!!</td>
                        <td>36</td>
                        <td>11550</td>
                        <td>Mage</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Mr. Beast</td>
                        <td>24</td>
                        <td>11300</td>
                        <td>Cloak</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>JOHN CENA</td>
                        <td>26</td>
                        <td>1456</td>
                        <td>Archer</td>
                    </tr>
                    <tr>
                        <th scope="row" colSpan="5" className="text-center">....</th>
                    </tr>
                    <tr>
                        <th scope="row">4000000</th>
                        <td>Scrub 4000678</td>
                        <td>24</td>
                        <td>1200</td>
                        <td>Scout</td>
                    </tr>
                    <tr>
                        <th scope="row">4000001</th>
                        <td>Scrub 4000679</td>
                        <td>24</td>
                        <td>1200</td>
                        <td>Scout</td>
                    </tr>
                    <tr className="table-active">
                        <th scope="row">4000002</th>
                        <td>You</td>
                        <td>24</td>
                        <td>1200</td>
                        <td>Scout</td>
                    </tr>
                    <tr>
                        <th scope="row">4000003</th>
                        <td>Scrub 4000680</td>
                        <td>24</td>
                        <td>1200</td>
                        <td>Scout</td>
                    </tr>
                    <tr>
                        <th scope="row">4000004</th>
                        <td>Bob Taylor</td>
                        <td>24</td>
                        <td>1200</td>
                        <td>Scout</td>
                    </tr>
                    <tr>
                        <th scope="row"colSpan="5" className="text-center">....</th>
                    </tr>
                </tbody>
            </Table>
            
        </main>
    );
}