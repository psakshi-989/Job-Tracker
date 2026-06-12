import { Typography } from "@ui-elements/components";
import {
  Card,
  CompanyName,
  JobTitle,
  DateText,
  CompanyLogo,
  CardContent,
  Actions,
  ActionButton,
} from "./styled";

export const JobCard = ({ job, onStatusChange, onDelete, onEdit }) => {
  const initials = job.companyName?.[0]?.toUpperCase() ?? "?";
  const colors = [
    "#667eea",
    "#764ba2",
    "#f093fb",
    "#f5576c",
    "#4facfe",
    "#00f2fe",
  ];
  const logoColor =
    colors[job.companyName?.length % colors.length] || "#667eea";

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <Card onClick={() => onEdit && onEdit()}>
      <CardContent>
        <CompanyName>{job.companyName}</CompanyName>
        <JobTitle>{job.role}</JobTitle>
        <DateText>{formatDate(job.createdAt || job.appliedDate)}</DateText>
      </CardContent>
      <CompanyLogo style={{ background: logoColor }}>{initials}</CompanyLogo>
      <Actions onClick={(e) => e.stopPropagation()}>
        <ActionButton onClick={() => onStatusChange(job._id, job.status)}>
          ↻
        </ActionButton>
        <ActionButton onClick={() => onDelete(job._id)}>🗑</ActionButton>
      </Actions>
    </Card>
  );
};
