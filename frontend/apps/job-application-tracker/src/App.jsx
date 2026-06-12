import { useState } from "react";
import { useJobs } from "./app/core/hooks/useJobs";
import { useAuth } from "./app/core/hooks/useAuth";
import { AuthLayout } from "./app/core/layouts/AuthLayout/AuthLayout";
import { Dashboard } from "./app/modules/dashboard/Dashboard";
import { Login } from "./app/modules/auth/Login/Login";
import { Signup } from "./app/modules/auth/Signup/Signup";
import { ATSAnalyzer } from "./app/modules/ats/ATSAnalyzer";
import "./App.css";

function App() {
  const { user, isAuthenticated, login, signup, logout } = useAuth();
  const { jobs, loading, error, addJob, removeJob, updateJobStatus, editJob } =
    useJobs();
  const [showSignup, setShowSignup] = useState(false);
  const [isATSModalOpen, setIsATSModalOpen] = useState(false);

  if (!isAuthenticated) {
    return (
      <AuthLayout>
        {showSignup ? (
          <Signup onSignup={signup} onSwitch={() => setShowSignup(false)} />
        ) : (
          <Login onLogin={login} onSwitch={() => setShowSignup(true)} />
        )}
      </AuthLayout>
    );
  }

  return (
    <>
      <Dashboard
        jobs={jobs}
        loading={loading}
        error={error}
        onStatusChange={updateJobStatus}
        onDelete={removeJob}
        onAddJob={addJob}
        onUpdateJob={editJob}
        user={user}
        onLogout={logout}
        onOpenATS={() => setIsATSModalOpen(true)}
      />
      <ATSAnalyzer
        isOpen={isATSModalOpen}
        onClose={() => setIsATSModalOpen(false)}
      />
    </>
  );
}

export default App;
