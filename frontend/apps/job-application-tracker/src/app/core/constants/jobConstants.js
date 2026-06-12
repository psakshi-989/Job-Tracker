export const API_BASE_URL = "http://localhost:5000/api";
export const JOBS_ENDPOINT = `${API_BASE_URL}/jobs`;

export const JOB_STATUS = {
  APPLIED: "Applied",
  INTERVIEW: "Interview",
  OFFER: "Offer",
  REJECTED: "Rejected",
};

export const STATUS_PROGRESSION = {
  [JOB_STATUS.APPLIED]: JOB_STATUS.INTERVIEW,
  [JOB_STATUS.INTERVIEW]: JOB_STATUS.OFFER,
  [JOB_STATUS.OFFER]: JOB_STATUS.REJECTED,
  [JOB_STATUS.REJECTED]: JOB_STATUS.APPLIED,
};

export const INITIAL_FORM_DATA = {
  companyName: "",
  role: "",
  status: JOB_STATUS.APPLIED,
  notes: "",
};
