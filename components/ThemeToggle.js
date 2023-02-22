import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledThemeToggle = styled.div`
  overflow: hidden;
  display: flex;
  gap: 0.5rem;
  overflow: hidden;
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
`;

const StyledThemeButton = styled.button`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  height: 2.5rem;
  width: 2.5rem;

  transform: ${(props) =>
    props.current ? 'translate(100%, 120%)' : 'translate(0, 0)'};

  transition: transform 0.5s;

  visibility: ${(props) => (props.current ? 'hidden' : 'visible')};

  &:hover {
    transform: rotate(10deg);
  }

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <StyledThemeToggle>
        <StyledThemeButton
          aria-label="Toggle Light Mode"
          current={theme === 'light'}
          type="button"
          onClick={() => setTheme('light')}
        >
          <SunIcon />
        </StyledThemeButton>
        <StyledThemeButton
          aria-label="Toggle Dark Mode"
          current={theme === 'dark'}
          type="button"
          onClick={() => setTheme('dark')}
        >
          <MoonIcon />
        </StyledThemeButton>
      </StyledThemeToggle>
    </>
  );
}
