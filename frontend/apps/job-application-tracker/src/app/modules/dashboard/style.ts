import styled from "styled-components";

interface ThemeProps {
  $isDark?: boolean;
}

export const Container = styled.div<ThemeProps>`
  min-height: 100vh;
  background: ${(props) => (props.$isDark ? "#1a1a2e" : "#f5f5f5")};
  padding: 24px;
  transition: background 0.3s ease;
`;

export const Header = styled.header<ThemeProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 32px;
  background: ${(props) =>
    props.$isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.8)"};
  border-radius: 16px;
  margin-bottom: 32px;
  backdrop-filter: blur(10px);
  border: ${(props) =>
    props.$isDark ? "none" : "1px solid rgba(0, 0, 0, 0.1)"};
  transition:
    background 0.3s ease,
    border 0.3s ease;
`;

export const Logo = styled.div<ThemeProps>`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => (props.$isDark ? "#ffffff" : "#1a1a2e")};
  transition: color 0.3s ease;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 32px;
`;

interface NavItemProps {
  $active?: boolean;
}

export const NavItem = styled.button<NavItemProps>`
  background: none;
  border: none;
  color: ${(props) => (props.$active ? "#ffffff" : "#a0a0a0")};
  font-size: 1rem;
  font-weight: ${(props) => (props.$active ? "600" : "400")};
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    color: #ffffff;
  }

  ${(props) =>
    props.$active &&
    `
    background: rgba(255, 255, 255, 0.1);
  `}
`;

export const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const WelcomeSection = styled.div<ThemeProps>`
  margin-bottom: 32px;
`;

export const JobList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`;

export const Column = styled.div<ThemeProps>`
  background: ${(props) =>
    props.$isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(255, 255, 255, 0.8)"};
  border-radius: 16px;
  padding: 20px;
  min-height: 400px;
  border: ${(props) =>
    props.$isDark ? "none" : "1px solid rgba(0, 0, 0, 0.1)"};
  transition:
    background 0.3s ease,
    border 0.3s ease;
`;

export const ColumnHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ColumnTitle = styled.div<ThemeProps>`
  color: ${(props) => (props.$isDark ? "#ffffff" : "#1a1a2e")};
  font-size: 1rem;
  font-weight: 600;
  transition: color 0.3s ease;
`;

export const ColumnCount = styled.div<ThemeProps>`
  background: ${(props) =>
    props.$isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
  color: ${(props) => (props.$isDark ? "#ffffff" : "#1a1a2e")};
  font-size: 0.85rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 12px;
  transition:
    background 0.3s ease,
    color 0.3s ease;
`;

export const AddButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const LogoutButton = styled.button<ThemeProps>`
  background: ${(props) =>
    props.$isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
  border: ${(props) =>
    props.$isDark
      ? "1px solid rgba(255, 255, 255, 0.2)"
      : "1px solid rgba(0, 0, 0, 0.2)"};
  color: ${(props) => (props.$isDark ? "#ffffff" : "#1a1a2e")};
  font-size: 0.9rem;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) =>
      props.$isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)"};
  }
`;

export const AddJobButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-right: 12px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 100;
`;

export const FooterAddJobButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(102, 126, 234, 0.6);
  }
`;

export const ThemeToggle = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s ease;
  margin-right: 12px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const ATSButton = styled.button<ThemeProps>`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-right: 12px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }
`;
