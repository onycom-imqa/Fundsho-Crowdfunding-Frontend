import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import {useIMQA} from "imqa-react-sdk";

export default function CardSkeleton() {
    const IMQARef = useIMQA(); // 삽입
  return (
    <div ref={IMQARef}>
    <div className="card-skeleton">
        <Stack spacing={1}>
        <Skeleton variant="text" width={70}/>
        <Skeleton variant="text" width={270}/>
        <Skeleton variant="text" width={250}/>
        <Skeleton variant="rectangular" width={270} height={158} />
        <Skeleton variant="circular" width={40} height={40}/>

        <Skeleton variant="text" width={70}/>
        <Skeleton variant="text" width={270}/>
        <Skeleton variant="text" width={200}/>

        </Stack>
    </div>
    </div> // 삽입
  );
}
