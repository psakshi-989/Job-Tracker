import styled from "styled-components";
import { JobCard } from "../JobCard/JobCard";
import { Typography } from "@ui-elements/components";
import { EmptyState, Section, Grid } from "./styled";

export const JobList = ({ jobs, loading, onStatusChange, onDelete }) => {
  if (loading) return <EmptyState>Loading…</EmptyState>;

  if (jobs.length === 0)
    return (
      <EmptyState>
        <Typography name="secondary">
          No applications yet — add one above.
        </Typography>
      </EmptyState>
      
    );

  return (
    <Section>
      <Typography name="textSm" color="#b8b5b0">
        {jobs.length} application{jobs.length !== 1 ? "s" : ""}
      </Typography>
      <Grid>
        {jobs.map((job) => (
          <JobCard
            key={job._id}
            job={job}
            onStatusChange={onStatusChange}
            onDelete={onDelete}
          />
        ))}
      </Grid>
    </Section>
  );
};
