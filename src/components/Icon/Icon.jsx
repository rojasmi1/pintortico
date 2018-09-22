import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  svgRoot: { height: 28, width: 28 },
  svgRoot2: { height: 24, width: 24 }
};

const Icon = props => {
  const { iconKey, classes } = props;

  switch (iconKey) {
    case 'facebook':
      return (
        <SvgIcon viewBox="0 0 58 58" classes={{ root: classes.svgRoot2 }}>
          <path
            fill="#4267b2"
            d="M55 0H3a3 3 0 0 0-3 3v52a3 3 0 0 0 3 3h28V36h-8v-9h8v-7c0-7 5-11 11-11a64 64 0 0 1 7 0v8h-5c-3 0-4 2-4 4v6h9l-1 9h-8v22h15a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3z"
          />
          <path
            fill="#fff"
            d="M40 58V36h8l1-9h-9v-6c0-2 1-4 4-4h5V9a64 64 0 0 0-7 0c-6 0-11 4-11 11v7h-8v9h8v22z"
          />
        </SvgIcon>
      );
    case 'instagram':
      return (
        <SvgIcon viewBox="0 0 50 52" classes={{ root: classes.svgRoot }}>
          <path fill="none" d="M-1-1h52v50H-1z" />
          <g>
            <g stroke="null">
              <path
                fill="#304FFE"
                d="M36 47H14C7 47 1 41 1 34V14C1 7 7 1 14 1h22c7 0 13 6 13 13v20c0 7-6 13-13 13z"
              />
              <path
                fill="none"
                d="M1 14v20c0 7 6 13 13 13h22c7 0 13-6 13-13V14l-1-4A45 45 0 0 0 7 3C3 6 1 9 1 14z"
              />
              <path
                fill="#6200EA"
                d="M21 4C14 4 8 5 3 8l-2 6v20c0 7 6 13 13 13h22c7 0 13-6 13-13V14C42 8 32 4 21 4z"
              />
              <path
                fill="#673AB7"
                d="M49 18a40 40 0 0 0-48-7v23c0 7 6 13 13 13h22c7 0 13-6 13-13V18z"
              />
              <path
                fill="#8E24AA"
                d="M49 21C42 14 32 9 21 9c-7 0-14 2-20 6v19c0 7 6 13 13 13h22c7 0 13-6 13-13V21z"
              />
              <path
                fill="#C2185B"
                d="M49 34v-8a34 34 0 0 0-48-8v16c0 7 6 13 13 13h22c7 0 13-6 13-13z"
              />
              <path
                fill="#D81B60"
                d="M49 34v-3c-5-10-15-17-28-17-8 0-15 2-20 7v13c0 7 6 13 13 13h22c7 0 13-6 13-13z"
              />
              <path
                fill="#F50057"
                d="M48 38c-2-12-13-22-27-22-8 0-15 3-20 8v10c0 7 6 13 13 13h22c6 0 11-4 12-9z"
              />
              <path
                fill="#FF1744"
                d="M46 42c0-13-11-23-25-23-8 0-15 4-20 9v6c0 7 6 13 13 13h22c4 0 8-2 10-5z"
              />
              <path
                fill="#FF5722"
                d="M21 21c-9 0-16 5-20 12v1c0 7 6 13 13 13h22c3 0 5-1 8-3v-1c0-12-10-22-23-22z"
              />
              <path
                fill="#FF6F00"
                d="M21 24c-9 0-17 6-19 14 1 5 6 9 12 9h22l5-1v-3c0-10-9-19-20-19z"
              />
              <path
                fill="#FF9800"
                d="M21 27c-9 0-17 6-17 15 2 3 6 5 10 5h24v-4c0-9-7-16-17-16z"
              />
              <path
                fill="#FFC107"
                d="M35 47l1-4c0-8-7-14-15-14S6 35 6 43v1c3 2 5 3 8 3h21z"
              />
              <path
                fill="#FFD54F"
                d="M21 32c-7 0-12 5-12 11v3l5 1h18l1-4c0-6-5-11-12-11z"
              />
              <path
                fill="#FFE082"
                d="M21 34c-5 0-9 4-9 9v4h18v-4c0-5-4-9-9-9z"
              />
              <path
                fill="#FFECB3"
                d="M21 37c-4 0-7 3-7 6l2 4h10l2-4c0-3-3-6-7-6z"
              />
              <path
                fill="#FFF"
                d="M33 42H17c-6 0-11-5-11-10V16c0-5 5-10 11-10h16c6 0 11 5 11 10v16c0 5-5 10-11 10zM17 9c-4 0-8 3-8 7v16c0 4 4 7 8 7h16c4 0 8-3 8-7V16c0-4-4-7-8-7H17z"
              />
              <path
                fill="#FFF"
                d="M25 33c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-15c-4 0-7 2-7 6s3 6 7 6 7-2 7-6-3-6-7-6zM36 14l-2 1-1-1 1-2 2 2z"
              />
            </g>
          </g>
        </SvgIcon>
      );
    default:
      break;
  }
};

export default withStyles(styles)(Icon);
