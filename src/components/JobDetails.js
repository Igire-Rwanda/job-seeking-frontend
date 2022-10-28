import React from "react";

const JobDetails = () => {
  return (
    <div className="flex  divide-x-2 pt-20">
      <div className="p-7 space-y-8">
        <div className="bg-white rounded-full">
          <p className="text-slate-300 px-8 py-1">Search</p>
        </div>
        <div className=" rounded-full px-8 py-1 cursor-pointer">
          <p>Post a job</p>
        </div>
        <div className="px-8 cursor-pointer ">
          <p>Jobs</p>
        </div>
        <div className="px-8 cursor-pointer">
          {" "}
          <p>Candidates </p>{" "}
        </div>
        <div className="px-8 cursor-pointer">
          {" "}
          <p>Interviews</p>
        </div>
        <div className="px-8 cursor-pointer">
          {" "}
          <p>Billing</p>{" "}
        </div>
        <div className="px-8 cursor-pointer">
          {" "}
          <p>Settings</p>{" "}
        </div>
        <div className=" px-8 cursor-pointer">
          {" "}
          <p>Help</p>{" "}
        </div>
        <div className="px-12 py-8 cursor-pointer">
          {" "}
          <p>Log Out</p>{" "}
        </div>
      </div>

      <div className="pl-20   font-semibold ">
        <div className="bg-white ml-20 max-w-full mt-5 rounded-md	">
          {/* <img className='w-28 h-28' src={pImg}/> */}

          <h4 className="text-xl  align-items-center p-5 pl-20">
            Include Details
          </h4>
        </div>

        <div className="bg-white ml-20 rounded-md mt-5	max-w-full h-96">
          <div className=" px-10 py-3">
            <h4 className="pr-5">Job Title</h4>
            <input
              type="text"
              class="border rounded-md text-gray-900 text-sm  w-96 h-8 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-400  dark:text-"
              required
            />

            <h4 className="pr-5">Job location</h4>
            <input
              type="text"
              class="border rounded-md text-gray-900 text-sm  w-96 h-8 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-400  dark:text-"
              required
            />
            <h4 className="pr-5">Job Address</h4>
            <input
              type="text"
              class="border rounded-md text-gray-900 text-sm  w-96 h-8 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-400  dark:text-"
              required
            />

            <h4 className="pt-3">Job Type</h4>
            <div className="flex pt-3 space-x-1">
              <button className="p-2 text-sm bg-slate-200">Full-time</button>
              <button className="p-2 text-sm bg-slate-200">Part-time</button>
              <button className="p-2 text-sm bg-slate-200">Contract</button>
              <button className="p-2 text-sm bg-slate-200">Temporary</button>
              <button className="p-2 text-sm bg-slate-200">Internership</button>
            </div>
            <h4 className="pt-3">Job Schedule</h4>
            <div className="flex pt-3 space-x-1">
              <button className="p-2 text-sm bg-slate-200">4 hour shift</button>
              <button className="p-2 text-sm bg-slate-200">8 hour shift</button>
              <button className="p-2 text-sm bg-slate-200">
                10 hour shift
              </button>
              <button className="p-2 text-sm bg-slate-200">
                12 hour shift
              </button>
              <button className="p-2 text-sm bg-slate-200"> Day Shift</button>
              <button className="p-2 text-sm bg-slate-200">
                {" "}
                Monday to Friday
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white ml-20 rounded-md mt-20 mb-10	max-w-full h-96">
          <div className=" px-10 py-10">
            <h4 className="pr-5">
              Number of people you want to hire for this job
            </h4>
            <input
              type="text"
              class="border mb-3 rounded-md text-gray-900 text-sm  w-96 h-8 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-400  dark:text-"
              required
            />
            <h4 className="pr-5">
                Benefits Being Offered
            </h4>
            <div className="pt-3 grid gap-4 grid-cols-3 grid-rows-3">
    <button className="p-2 text-sm bg-slate-200">Health Insuarance</button>
              <button className="p-2 text-sm bg-slate-200">Paid time off</button>
              <button className="p-2 text-sm bg-slate-200">
                Dental Insuarance
              </button>
              <button className="p-2 text-sm bg-slate-200">
                Vision Insuarance
              </button>
              <button className="p-2 text-sm bg-slate-200"> Retirement Plan</button>
              <button className="p-2 text-sm bg-slate-200">
                {" "}
             Health Saving account
              </button>
              <button className="p-2 text-sm bg-slate-200">
                {" "}
            Parental Leave
              </button>
              <button className="p-2 text-sm bg-slate-200">
                {" "}
             Employee discount
              </button>
              <button className="p-2 text-sm bg-slate-200">
                {" "}
             Relocation assistance
              </button>
            </div>
          </div>
          <a
            href="./PostJob"
            class="text-blue-900	mt-4 float-left mb-5 bg-white	 border-l-2 focus:border-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  ml-5 mb-2 dark:bg-white dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Back
          </a>

          <a
            href="./JobDescription"
            class="text-white mt-4 float-right mr-12 mb-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Save and Continue
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
