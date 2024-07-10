// src/PageDetails.js
import React, { useEffect, useState } from "react";

const PageDetails = ({ pageId }) => {
  const [details, setDetails] = useState(null);
  const [since, setSince] = useState("2023-01-01"); // default start date
  const [until, setUntil] = useState("2023-12-31"); // default end date

  useEffect(() => {
    fetchPageDetails();
  }, [pageId, since, until]);

  const fetchPageDetails = () => {
    const url = `/${pageId}/insights/page_fans,page_engaged_users,page_impressions,page_actions_post?since=${since}&until=${until}&period=total_over_range`;

    window.FB.api(url, (response) => {
      setDetails(response.data);
    });
  };

  const handleDateChange = (event) => {
    if (event.target.name === "since") {
      setSince(event.target.value);
    } else {
      setUntil(event.target.value);
    }
  };

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card-cont">
      <div className="filter-cont">
        <div className="filter">
          <label>Since:</label>
          <input
            type="date"
            name="since"
            value={since}
            onChange={handleDateChange}
          />
        </div>
        <div className="filter">
          <label>Until:</label>
          <input type="date" name="until" onChange={handleDateChange} />
        </div>
      </div>

      <div className="profile-detail">
        <div className="card">
          <h3>Total Followers / Fans</h3>

          <p>{details[0].values[0].value}</p>
        </div>
        <div className="card">
          <h3>Total Engagement</h3>

          <p>{details[1].values[0].value}</p>
        </div>
        <div className="card">
          <h3>Total Impressions</h3>

          <p>{details[2].values[0].value}</p>
        </div>
        <div className="card">
          <h3>Total Reactions</h3>

          <p>{details[3].values[0].value}</p>
        </div>
      </div>
    </div>
  );
};

export default PageDetails;
