import React from "react";
import TableItem from "./TableItem";

export default ({ pairs, topBtcturk, topParibu, topKoineks, usd }) => (
  <div className="table-responsive">
    <table className="table table-hover table-sm table-custom">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col" />
          <th scope="col">Buy</th>
          <th scope="col" />
          <th scope="col" />
          <th scope="col">Sell</th>
          <th scope="col" />
          <th scope="col">Result</th>
        </tr>
      </thead>
      <tbody>
        {pairs.map((pair, index) => (
          <TableItem
            pair={pair}
            key={index}
            topParibu={topParibu}
            topBtcturk={topBtcturk}
            topKoineks={topKoineks}
            usd={usd}
          />
        ))}
      </tbody>
    </table>
  </div>
);
