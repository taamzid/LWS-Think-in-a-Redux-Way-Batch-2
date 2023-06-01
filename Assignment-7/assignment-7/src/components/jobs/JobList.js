import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { editActive, removeJob } from "../../features/job/jobSlice";
import numberWithCommas from "../../utils/numberWithCommas";

const JobList = ({ job }) => {
  const { title, type, salary, deadline, id } = job || {};
  const dispatch = useDispatch();

  let iconColor;
  switch (type) {
    case "Full Time":
      iconColor = "#FF8A00";
      break;
    case "Internship":
      iconColor = "#FF5757";
      break;
    case "Remote":
      iconColor = "#56E5C4";
      break;
    default:
      iconColor = "#000000";
  }

  const handleEdit = () => {
    dispatch(editActive(job));
  };

  const handleDelete = () => {
    dispatch(removeJob(id));
  };

  return (
    <div class="jobs-list">
      <div class="lws-single-job">
        <div class="flex-1 min-w-0">
          <h2 class="lws-title">{title}</h2>
          <div class="job-footers">
            <div class="lws-type">
              <i
                class="fa-solid fa-stop text-lg mr-1.5"
                style={{ color: iconColor }}
              ></i>
              {type}
            </div>
            <div class="lws-salary">
              <i class="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
              ৳ {numberWithCommas(salary)}
            </div>
            <div class="lws-deadline">
              <i class="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
              {deadline}
            </div>
          </div>
        </div>
        <div class="mt-5 flex lg:mt-0 lg:ml-4">
          <span class="hidden sm:block">
            <Link to={`/edit/${id}`}>
              <button
                onClick={handleEdit}
                type="button"
                class="lws-edit btn btn-primary"
              >
                <i class="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
                Edit
              </button>
            </Link>
          </span>

          <span class="sm:ml-3">
            <button
              onClick={handleDelete}
              type="button"
              class="lws-delete btn btn-danger "
            >
              <i class="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
              Delete
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobList;
