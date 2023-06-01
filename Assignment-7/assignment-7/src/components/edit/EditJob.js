import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeJob } from "../../features/job/jobSlice";

const EditJob = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [deadline, setDeadline] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { editing } = useSelector((state) => state.job) || {};

  useEffect(() => {
    const { id, title, type, salary, deadline } = editing || {};

    if (id) {
      setTitle(title);
      setType(type);
      setSalary(salary);
      setDeadline(deadline);
    } else {
      reset();
    }
  }, [editing]);

  const reset = () => {
    setTitle("");
    setType("");
    setSalary("");
    setDeadline("");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      changeJob({
        id: editing?.id,
        data: {
          title: title,
          type: type,
          salary: salary,
          deadline: deadline,
        },
      })
    );
    navigate("/");
  };

  return (
    <div class="lg:pl-[14rem] mt-[5.8125rem]">
      <main class="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 class="mb-10 text-center lws-section-title">Edit Job</h1>

        <div class="max-w-3xl mx-auto">
          <form onSubmit={handleUpdate} class="space-y-6">
            <div class="fieldContainer">
              <label
                for="lws-JobTitle"
                class="text-sm font-medium text-slate-300"
              >
                Job Title
              </label>
              <select
                id="lws-JobTitle"
                name="lwsJobTitle"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              >
                <option value="" hidden selected>
                  Select Job
                </option>
                <option>Software Engineer</option>
                <option>Software Developer</option>
                <option>Full Stack Developer</option>
                <option>MERN Stack Developer</option>
                <option>DevOps Engineer</option>
                <option>QA Engineer</option>
                <option>Product Manager</option>
                <option>Social Media Manager</option>
                <option>Senior Executive</option>
                <option>Junior Executive</option>
                <option>Android App Developer</option>
                <option>IOS App Developer</option>
                <option>Frontend Developer</option>
                <option>Frontend Engineer</option>
              </select>
            </div>

            <div class="fieldContainer">
              <label for="lws-JobType">Job Type</label>
              <select
                id="lws-JobType"
                name="lwsJobType"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="" hidden selected>
                  Select Job Type
                </option>
                <option>Full Time</option>
                <option>Internship</option>
                <option>Remote</option>
              </select>
            </div>

            <div class="fieldContainer">
              <label for="lws-JobSalary">Salary</label>
              <div class="flex border rounded-md shadow-sm border-slate-600">
                <span class="input-tag">BDT</span>
                <input
                  type="number"
                  name="lwsJobSalary"
                  id="lws-JobSalary"
                  required
                  class="!rounded-l-none !border-0"
                  placeholder="20,00,000"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                />
              </div>
            </div>

            <div class="fieldContainer">
              <label for="lws-JobDeadline">Deadline</label>
              <input
                type="date"
                name="lwsJobDeadline"
                id="lws-JobDeadline"
                required
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>

            <div class="text-right">
              <button
                type="submit"
                id="lws-submit"
                class="cursor-pointer btn btn-primary w-fit"
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default EditJob;
