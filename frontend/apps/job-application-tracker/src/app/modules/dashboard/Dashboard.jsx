import { useState } from "react";
import styled from "styled-components";
import { Typography } from "@ui-elements/components";
import { JobCard } from "../jobs/JobCard/JobCard";
import { AddJobModal } from "../jobs/AddJobModal/AddJobModal";
import { useTheme } from "../../core/context/ThemeContext";
import {
  Container,
  Header,
  Logo,
  Nav,
  NavItem,
  UserAvatar,
  WelcomeSection,
  Column,
  ColumnHeader,
  ColumnTitle,
  ColumnCount,
  JobList,
  LogoutButton,
  AddJobButton,
  Footer,
  FooterAddJobButton,
  ThemeToggle,
  ATSButton,
} from "./style";

export const Dashboard = ({
  jobs,
  loading,
  error,
  onStatusChange,
  onDelete,
  onAddJob,
  onUpdateJob,
  user,
  onLogout,
  onOpenATS,
}) => {
  const { isDark, toggleTheme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);

  const groupJobsByStatus = (jobs) => {
    return {
      applied: jobs.filter((job) => job.status?.toLowerCase() === "applied"),
      interview: jobs.filter(
        (job) => job.status?.toLowerCase() === "interview",
      ),
      offer: jobs.filter((job) => job.status?.toLowerCase() === "offer"),
      rejected: jobs.filter((job) => job.status?.toLowerCase() === "rejected"),
    };
  };

  const groupedJobs = groupJobsByStatus(jobs);

  const columns = [
    { id: "applied", title: "Applied to jobs", jobs: groupedJobs.applied },
    { id: "interview", title: "Interview jobs", jobs: groupedJobs.interview },
    { id: "offer", title: "Offer", jobs: groupedJobs.offer },
    { id: "rejected", title: "Rejected", jobs: groupedJobs.rejected },
  ];

  const handleAddJob = async (values) => {
    await onAddJob(values);
  };

  const handleEditJob = async (values) => {
    await onUpdateJob(editingJob._id, values);
  };

  const handleOpenModal = (job = null) => {
    setEditingJob(job);
    setIsModalOpen(true);
  };

  return (
    <Container $isDark={isDark}>
      <Header $isDark={isDark}>
        <Logo $isDark={isDark}>TrackMyJob</Logo>
        <div style={{ display: "flex", alignItems: "center" }}>
          {onOpenATS && <ATSButton onClick={onOpenATS}>ATS Analyzer</ATSButton>}
          <ThemeToggle onClick={toggleTheme}>
            {isDark ? "☀️" : "🌙"}
          </ThemeToggle>
          <LogoutButton onClick={onLogout} $isDark={isDark}>
            Logout
          </LogoutButton>
        </div>
      </Header>

      <WelcomeSection $isDark={isDark}>
        <Typography
          name="heading3"
          weight={700}
          color={isDark ? "#ffffff" : "#1a1a2e"}
        >
          Welcome Back, {user?.username || "User"}! 👋
        </Typography>
      </WelcomeSection>

      {error && (
        <div style={{ color: "#ff6b6b", marginBottom: "20px" }}>{error}</div>
      )}

      <JobList>
        {columns.map((column) => (
          <Column key={column.id} $isDark={isDark}>
            <ColumnHeader>
              <ColumnTitle $isDark={isDark}>{column.title}</ColumnTitle>
              <ColumnCount $isDark={isDark}>{column.jobs.length}</ColumnCount>
            </ColumnHeader>
            {column.jobs.map((job) => (
              <JobCard
                key={job._id}
                job={job}
                onStatusChange={onStatusChange}
                onDelete={onDelete}
                onEdit={() => handleOpenModal(job)}
                $isDark={isDark}
              />
            ))}
          </Column>
        ))}
      </JobList>

      <Footer>
        <FooterAddJobButton onClick={() => handleOpenModal(null)}>
          + Add Job
        </FooterAddJobButton>
      </Footer>

      <AddJobModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={editingJob ? handleEditJob : handleAddJob}
        editingJob={editingJob}
        $isDark={isDark}
      />
    </Container>
  );
};
