import styled from "styled-components";
import { useTheme } from "../../context/ThemeContext";
import { Typography } from "@ui-elements/components";
import {
  Card,
  Container,
  Footer,
  FormPanel,
  HeroBackground,
  HeroBadge,
  HeroContent,
  HeroPanel,
  HeroShape,
  Page,
} from "./style";

export const AuthLayout = ({ children }) => {
  const { isDark } = useTheme();

  return (
    <Page $isDark={isDark}>
      <Container>
        <Card $isDark={isDark}>
          <FormPanel $isDark={isDark}>{children}</FormPanel>
          <HeroPanel $isDark={isDark}>
            <HeroBackground />
            <HeroShape />
            <HeroContent>
              <HeroBadge $isDark={isDark}>
                ✨ Trusted → clean onboarding
              </HeroBadge>
              <Typography name="textSm">
                Securely track your job applications, stay organized, and keep
                your progress in one beautiful workspace.
              </Typography>
            </HeroContent>
          </HeroPanel>
        </Card>
      </Container>
      <Footer>© {new Date().getFullYear()} Job Application Tracker</Footer>
    </Page>
  );
};
