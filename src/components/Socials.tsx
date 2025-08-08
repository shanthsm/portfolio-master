import React, { useEffect } from 'react';
import { loadCSS } from 'fg-loadcss';
import { useColorMode } from '@docusaurus/theme-common';
import Icon from '@mui/material/Icon';

const socialDetails = [
  // your social links...
];

const getHoverIconColor = (site: string): string => {
  // your color logic...
};

export const Socials = () => {
  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === 'dark';

  useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );

    return () => {
      if (node.parentNode !== undefined) {
        node.parentNode.removeChild(node);
      }
    };
  }, []);

  return (
    <div>
      {socialDetails.map(cn => (
        <a
          href={cn.link}
          target="_blank"
          rel="noopener noreferrer"
          key={cn.classname}
        >
          <Icon
            className={cn.classname}
            sx={{
              color: isDarkTheme ? 'white' : 'black',
              fontSize: 30,
              marginTop: 1,
              marginRight: 1,
              '&:hover': {
                color: `${getHoverIconColor(cn.name)}`,
              },
            }}
          />
        </a>
      ))}
    </div>
  );
};
