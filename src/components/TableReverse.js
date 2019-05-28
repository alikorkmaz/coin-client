import React from "react";
import TableItemReverse from "./TableItemReverse";

export default ({ pairs, topBtcturk, topParibu, topKoineks, usd }) => (
  <div className="table-responsive">
    <table className="table table-hover table-sm table-custom">
      <thead>
        <tr>
          <th scope="col">Result</th>
          <th scope="col" />
          <th scope="col">Sell</th>
          <th scope="col" />
          <th scope="col" />
          <th scope="col">Buy</th>
          <th scope="col" />
          <th scope="col">Title</th>
        </tr>
      </thead>
      <tbody>
        {pairs.map((pair, index) => (
          <TableItemReverse
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
