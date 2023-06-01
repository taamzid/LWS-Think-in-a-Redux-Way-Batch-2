import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/student/login/Login";
import Signup from "./components/student/reg/Signup";
import AdminLogin from "./components/admin/login/AdminLogin";
import Dashboard from "./components/admin/Dashboard/Dashboard";
import Videos from "./components/admin/Dashboard/Videos/Videos";
import Assignment from "./components/admin/Dashboard/Assignment/Assignment";
import Quiz from "./components/admin/Dashboard/Quizzes/Quiz";
import CoursePlayer from "./components/student/player/CoursePlayer";
import Leaderboard from "./components/student/leaderboard/Leaderboard";
import StudentQuiz from "./components/student/Quiz/StudentQuiz";
import useAuthCheck from "./hooks/useAuthCheck";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import AdminPublicRoute from "./components/AdminPublicRoute";
import AdminPrivateRoute from "./components/AdminPrivateRoute";
import AssignmentMark from "./components/admin/Dashboard/Assignment Mark/AssignmentMark";
import AddVideo from "./components/admin/Dashboard/Videos/AddVideo/AddVideo";
import AddAssignment from "./components/admin/Dashboard/Assignment/AddAssignment/AddAssignment";

function App() {
  const authChecked = useAuthCheck();

  return !authChecked ? (
    <div>Checking authentication...</div>
  ) : (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/student/registration"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
        <Route
          path="/student/coursePlayer"
          element={
            <PrivateRoute>
              <CoursePlayer />
            </PrivateRoute>
          }
        />
        <Route
          path="/student/leaderboard"
          element={
            <PrivateRoute>
              <Leaderboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/student/studentQuiz"
          element={
            <PrivateRoute>
              <StudentQuiz />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminPublicRoute>
              <AdminLogin />
            </AdminPublicRoute>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <AdminPrivateRoute>
              <Dashboard />
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/admin/videos"
          element={
            <AdminPrivateRoute>
              <Videos />
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/admin/assignment"
          element={
            <AdminPrivateRoute>
              <Assignment />
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/admin/quiz"
          element={
            <AdminPrivateRoute>
              <Quiz />
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/admin/assignmentMark"
          element={
            <AdminPrivateRoute>
              <AssignmentMark />
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/admin/addVideo"
          element={
            <AdminPrivateRoute>
              <AddVideo />
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/admin/addAssignment"
          element={
            <AdminPrivateRoute>
              <AddAssignment />
            </AdminPrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
