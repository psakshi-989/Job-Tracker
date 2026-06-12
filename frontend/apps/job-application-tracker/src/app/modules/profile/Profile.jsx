import styled from "styled-components";
import { Typography, Button } from "@ui-elements/components";

const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 12px 16px;
  border: 0.5px solid #e4e2dc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Profile = ({ user, onLogout }) => (
  <Card>
    <div>
      <Typography name="heading6" weight={600}>
        {user?.username}
      </Typography>
      <Typography name="textSm" color="#7a766f">
        Member
      </Typography>
    </div>
    <div>
      <Button variant="secondary" size="sm" onClick={onLogout}>
        Logout
      </Button>
    </div>
  </Card>
);
