import * as React from 'react';
import {useState} from 'react';

import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { useNavigate } from 'react-router-dom';


const BasicCard = (props) => {

    const navigate = useNavigate()
   

  return (
    
    <Card 
    variant="outlined" 
    sx={{ minWidth: '320px' }}             
    onClick={()=>{
      props.setIsStart(true);
        navigate('/pictures-test')
    }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Typography level="h2" fontSize="md" sx={{ alignSelf: 'flex-start' }}>
          {props.Title}
        </Typography>
        <Typography level="body2">{props.Date}</Typography>
      </Box>
      <IconButton
        aria-label="bookmark Bahamas Islands"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
      >
        <BookmarkAdd />
      </IconButton>

      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img
          src={props.Picture}
          alt=""
        />
      </AspectRatio>
      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">Total Score:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {props.Score}
          </Typography>
        </div>
        <Button
          className="bg-blue-500"
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600 }}
          onClick={()=>{
            props.setIsStart(true);
          }}
        >
          Start Test
        </Button>
      </Box>
    </Card>
  );
}


export default BasicCard;