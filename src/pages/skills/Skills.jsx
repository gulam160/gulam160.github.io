import { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import Skillscards from "../../components/Skillscards";
import GitHubCalendar from "github-calendar";
import "github-calendar/dist/github-calendar-responsive.css";
import "./skills.css";

const images = [
  {
    logo: "https://cdn-icons-png.flaticon.com/128/174/174854.png",
    name: "HTML",
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/128/732/732190.png",
    name: "CSS",
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
    name: "JavaScript",
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/128/5968/5968381.png",
    name: "TypeScript",
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/128/760/760457.png",
    name: "React",
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/redux.svg",
    name: "Redux",
  },
  {
    logo: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/nextjs-boilerplate-logo.png",
    name: "Next.js",
  },
  {
    logo: "https://t3.ftcdn.net/jpg/03/52/67/82/240_F_352678266_NFcwIwhhY76mkQItT4lCxyxcCTP3LgvY.jpg",
    name: "Node.js",
  },
  {
    logo: "https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png",
    name: "Express.js",
  },
  {
    logo: "https://www.svgrepo.com/show/331488/mongodb.svg",
    name: "MongoDB",
  },
  {
    logo: "https://www.happylifecreators.com/wp/wp-content/uploads/2022/06/chakra-ui_title2-768x431.png",
    name: "Chakra UI",
  },
  {
    logo: "https://i.pinimg.com/originals/01/e5/00/01e500fca29c045d432b64f285f9c229.png",
    name: "Git",
  },
  {
    logo: "https://t4.ftcdn.net/jpg/02/50/30/59/240_F_250305943_sDC6la1N1fDl3bLgfLxOkQwItIodsdMb.jpg",
    name: "GitHub",
  },
  {
    logo: "https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8",
    name: "Postman",
  },
];

function MyGitHubCalendar() {
  useEffect(() => {
    GitHubCalendar(".calendar", "gulam160", { responsive: true });
  }, []);

  return <div className="calendar">Loading the data just for you.</div>;
}

const MySkills = () => {
  return (
    <div className="myAbout about" id="skills">
      <PageHeader title="Skills" description="My technical expertise" />
      <div className="myskill-card">
        {images &&
          images.map((el, i) => (
            <Skillscards
              key={i + Math.floor(Math.random(40) + 10)}
              name={el.name}
              logo={el.logo}
            />
          ))}
      </div>

      {/* Statics Section */}
      <PageHeader title="Statistics & Calender" />

      <div>
        <a href="https://github.com/gulam160/github-readme-stats">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=gulam160"
            alt="github-top-langs"
            id="github-top-langs"
          />
        </a>
      </div>

      <div className="mystatistics-card">
        <div>
          <a href="https://github-readme-streak-stats.herokuapp.com">
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=gulam160"
              alt="github-streak-stats"
              id="github-streak-stats"
            />
          </a>
        </div>

        <div>
          <a href="https://github.com/gulam160/github-readme-stats">
            <img
              src="https://github-readme-stats.vercel.app/api?username=gulam160"
              alt="github-stats-card"
              id="github-stats-card"
            />
          </a>
        </div>
      </div>

      <div className="calender react-activity-calendar">
        <MyGitHubCalendar className="react-activity-calendar" />
      </div>
    </div>
  );
};

export default MySkills;
