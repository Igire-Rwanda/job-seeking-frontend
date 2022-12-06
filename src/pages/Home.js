import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import bgImg from "../img/picc.png";
import icon from "../img/user.png";
import JobCards from "../components/jobCard";
import JobsList from "./JobsList";
import jobs from "../components/Assets/Jobs.json";
import { link, NavLink } from "react-router-dom";
import "../Views/jobs2.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobAction } from "../redux/job/action";

const Home = ({ onClose }) => {
  const dispatch = useDispatch();
  const { jobs, isFetching } = useSelector((state) => state.job);

  useEffect(() => {
    getAllJobAction()(dispatch);
  }, []);
  const [job, setJob] = useState("");

  const getJob = (k) => {
    setJob(k.target.value);
  };

  return (
    <div>
      {/* <Navbar/> */}
      <div>
        <img className="max-w-md h-96 mr-12" src={bgImg} />
      </div>
      <div className="home">
        <div className="pt-20 pl-20 font-bold	text-2xl	">
          It's Easy To Find
          <div>
            Your <span className="text-teal-500">Dream Job</span>
          </div>
        </div>
        <div className="pl-20 pt-3">Explore Thausand of Jobs in one place </div>
        <div className="pl-20">and get a job of your dream</div>

        <div className="bg-white w-96	ml-20 h-20 mt-5 rounded-md pl-8 py-4 flex flex-row ">
          {/* <label>Select Job Type</label> */}
          <select onChange={getJob}>
            <option selected value="Select job" className="bg-slate-300">
              Select job
            </option>
            <option value="Web Developer" className="bg-slate-300">
              Web Developer
            </option>
            <option value="Ui/UX Designer" className="bg-slate-300">
              Ui/UX Designer
            </option>
            <option value="Fullstack Developer" className="bg-slate-300">
              Fullstack Developer
            </option>
          </select>
          <span className="flex"> {job}</span>

          <button className="mx-8 bg-teal-500 rounded-md py-2 px-8 md:ml-8 text-white">
            Find Jobs
          </button>
        </div>

        <div className="flex flex-row space-x-40">
          <div className="bg-yellow-400 w-24	ml-20 h-24 mt-20 mb-20 rounded pl-8 py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clip-rule="evenodd"
              />
              <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
            </svg>

            <h5 className="font-bold text-2xl ml-5">20k+</h5>
            <h6 className="ml-5">Job Vacancy</h6>
          </div>

          <div className="bg-sky-500 w-24	ml-18 h-24 mt-20 mb-20 rounded pl-8 py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              class="w-18 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                clip-rule="evenodd"
              />
              <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
            </svg>
            <h5 className="font-bold text-2xl ml-5">50k+</h5>
            <h6 className="ml-5">People got hired</h6>
          </div>

          <div className="bg-orange-600 w-24	ml-20 h-24 mt-20 mb-20 rounded pl-8 py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              class="w-6 h-6"
            >
              <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
              <path
                fill-rule="evenodd"
                d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z"
                clip-rule="evenodd"
              />
            </svg>

            <h5 className="font-bold text-2xl ml-5">2K+</h5>
            <h6 className="ml-5">Companies</h6>
          </div>
        </div>
      </div>
      {jobs.map(
        (jobu, index) =>
          index < 3 && (

            <div className="make-flex bg-white flex flex-col transform transition-transform duration-150 ease-in-out hover:scale-100 hover:border-solid hover:border-2 hover:border-emerald-200 w-96	ml-20 h-15 rounded-md pl-8 py-4  mb-5 p-20 ">
              
              <h2>{jobu.jobTitle}</h2>
              <h3>{jobu.companyName}</h3>
              <h3> |{jobu.emplomentMode}</h3>
              <h3> | Deadline: {jobu.jobDeadLine}</h3>
              <h3 className="pr-[6%]">{jobu.jobDescription}</h3>
              
              <NavLink to="/ReadMore">
                <button className="bg-sky-500	rounded-md py-2 px-6 mt-8 w-36 text-white">
                  READ MORE
                </button>
              </NavLink>
              
            </div>
          )
      )}
      {/* <div className="bg-white flex flex-col max-w-xl	ml-20 h-15 rounded-md pl-8 py-4 flex flex-row mb-5 p-20 ">
          <h2>IT CONSLTANT </h2>
          <h3 className="text-s">BK Thech</h3>
          <h3 className="text-s"> | Remote</h3>

          <h3 className="text-s"> | Full Time</h3>
          <h3 className="mt-3"> It's not the secret that joLinker relies on technology to deliver million of packages everyday to it's customer.Everyday at a low cost.</h3>


<button className="bg-sky-500	rounded-md py-2 px-6 mt-8 w-36 text-white">Read More</button>
        </div> */}
      {/* <div className='JobsContent2'>

        {jobs.map((data) => (

          <div className="jobCard">
            <h4 className="title1">{data.Title}</h4><br />
            <h4 className="h4">{data.Company}</h4>
            <p className="h5">{data.Location}</p>
            <h4 className="Btn1 h5">{data.Timeline}</h4> <br />
            <div className="siderA">
              {data.Description}
            </div>
            <br />
            <div className="siderB">

              <NavLink to='/ReadMore' onClick={onClose} ><button className="btn3">READ MORE</button></NavLink>
              <div className="IconBtn">
              </div>
            </div>
          </div>

        ))}
      </div><br /> */}
    </div>
  );
};

export default Home;
