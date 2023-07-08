import React, { useState, useEffect } from "react";
import axios from "axios";
import GitHubCalendar from "react-github-calendar";

const GithubStats = () => {
  const [userStats, setUserStats] = useState({});

  const GITHUB_API_URL = "https://api.github.com";
  const USERNAME = "patrickwchoi";
  // const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

  useEffect(() => {
    async function fetchUserStats() {
      try {
        const response = await axios.get(
          `${GITHUB_API_URL}/users/${USERNAME}`,
          {
            // headers: {
            //   'Authorization': `token ${TOKEN}`,
            // },
          },
        );

        setUserStats(response.data);
      } catch (error) {
        console.error("Error fetching user stats:", error);
      }
    }

    fetchUserStats();
  }, []);

  return (
    <div className="githubStats">
      <GitHubCalendar username={USERNAME} />
    </div>
  );
};

export default GithubStats;
