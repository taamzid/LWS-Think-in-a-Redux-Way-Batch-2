import React from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <div class="sidebar">
      <nav>
        <ul class="space-y-4">
          <li>
            <Link to="/" class="main-menu menu-active" id="lws-alljobs-menu">
              <i class="fa-solid fa-briefcase"></i>
              <span>&nbsp; All Available Jobs</span>
            </Link>
            <ul class="space-y-6 lg:space-y-2 ">
              <li>
                <a
                  class="sub-menu"
                  href="/jobs/internship"
                  id="lws-internship-menu"
                >
                  <i class="fa-solid fa-stop !text-[#FF5757]"></i>&nbsp;
                  Internship
                </a>
              </li>
              <li>
                <a
                  class="sub-menu"
                  href="/jobs/fulltime"
                  id="lws-fulltime-menu"
                >
                  <i class="fa-solid fa-stop !text-[#FF8A00]"></i>&nbsp; Full
                  Time
                </a>
              </li>
              <li>
                <a class="sub-menu" href="/jobs/remote" id="lws-remote-menu">
                  <i class="fa-solid fa-stop !text-[#56E5C4]"></i>&nbsp; Remote
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/addjob" class="main-menu" id="lws-addJob-menu">
              <i class="fa-solid fa-file-circle-plus"></i>
              <span>&nbsp; Add NewJob</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Aside;
