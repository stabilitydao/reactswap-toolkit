import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import Flex from "../../../components/Box/Flex";
import { LogoIcon, LogoWithTextIcon } from "../../../components/Svg";
import { MenuContext } from "../context";

interface Props {
  isDark: boolean;
  href: string;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); }
  50% { transform:  scaleY(0.1); }
`;

const StyledLink = styled("a")`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  
  .desktop-icon {
    width: 160px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
  .eye {
    animation-delay: 20ms;
  }
  &:hover {
    .eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
  
  img {
    width: 36px;
    height: 36px
  }
  
  div {
    margin-left: 6px;
    font-size: 24px;
    font-weight: bold;
  }
  color: ${({ theme }) => theme.colors.text};
 
`;

const Logo: React.FC<Props> = ({ isDark, href }) => {
  const { linkComponent } = useContext(MenuContext);
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <img src="/logo.png" alt="ReactSwap" />
      <div>ReactSwap</div>
      {/*<LogoIcon className="mobile-icon" />*/}
      {/*<LogoWithTextIcon className="desktop-icon" isDark={isDark} />*/}
    </>
  );

  return (
    <Flex>
      <StyledLink href={href} as={linkComponent} aria-label="Pancake home page">
        {innerLogo}
      </StyledLink>
    </Flex>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
