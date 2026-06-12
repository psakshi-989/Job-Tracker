import { useEffect, useState, useCallback } from "react";
import {
  getAllJobs,
  createJob,
  updateJob,
  deleteJob,
} from "../../api/jobService";
import { STATUS_PROGRESSION } from "../constants/jobConstants";
import { useAuth } from "./useAuth";

export const useJobs = () => {
  const { isAuthenticated } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJobs = useCallback(async () => {
    if (!isAuthenticated) return;

    setLoading(true);
    setError(null);
    try {
      const data = await getAllJobs();
      setJobs(data);
    } catch (err) {
      setError(err.message || "Failed to fetch jobs");
    } finally {
      setLoading(false);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  const addJob = useCallback(
    async (formValues) => {
      try {
        await createJob(formValues);
        await fetchJobs();
      } catch (err) {
        setError(err.message || "Failed to create job");
      }
    },
    [fetchJobs],
  );

  const removeJob = useCallback(
    async (id) => {
      try {
        await deleteJob(id);
        await fetchJobs();
      } catch (err) {
        setError(err.message || "Failed to delete job");
      }
    },
    [fetchJobs],
  );

  const updateJobStatus = useCallback(
    async (id, currentStatus) => {
      const newStatus = STATUS_PROGRESSION[currentStatus] || currentStatus;
      try {
        await updateJob(id, { status: newStatus });
        await fetchJobs();
      } catch (err) {
        setError(err.message || "Failed to update job status");
      }
    },
    [fetchJobs],
  );

  const editJob = useCallback(
    async (id, jobData) => {
      try {
        await updateJob(id, jobData);
        await fetchJobs();
      } catch (err) {
        setError(err.message || "Failed to update job");
      }
    },
    [fetchJobs],
  );

  return {
    jobs,
    loading,
    error,
    addJob,
    removeJob,
    updateJobStatus,
    editJob,
    refetch: fetchJobs,
  };
};
