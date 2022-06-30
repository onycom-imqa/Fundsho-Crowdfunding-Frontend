import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useIMQA} from "imqa-react-sdk";


export default function DonationInfo() {
  const IMQARef = useIMQA(); // 삽입
  return (
      <div ref={IMQARef}>
    <div style={{overflow: 'hidden',width: '100%'}}>
      <Box sx={{m: 3}}>
          <Card variant="outlined">
          <CardContent>

            <Typography variant='h5'   color="text.secondary" gutterBottom>Donation Information</Typography>

            <ul>
              <li>
                <Typography variant='body1'   color="text.secondary" gutterBottom>
                  <strong>Total Donation Count:</strong> 468
                </Typography>
              </li>
              <li>
                <Typography variant='body1'   color="text.secondary" gutterBottom>
                  <strong>Total Donation:</strong> $1200
                </Typography>
              </li>
              <li>
                <Typography variant='body1'   color="text.secondary" gutterBottom>
                  <strong>Last Donation Amount:</strong> ₹ 153
                </Typography>
              </li>
            </ul>
          </CardContent>
        </Card>
      </Box>
    </div>
      </div>
  );
}
