import React,{useState} from 'react';


import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { useNavigate } from 'react-router-dom';


const HomePage = (props) =>{
    const navigate = useNavigate()
    let today = new Date().toLocaleDateString()



    return(
        <div className="flex flex-col items-center justify-between p-20">
            <div className="flex flex-row">

    <div className={props.isStart ? "opacity-20 px-20 py-20":'px-20 py-20'}>
    <Card 
    variant="outlined" 
    sx={{ minWidth: '320px' }}             

    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Typography level="h2" fontSize="md" sx={{ alignSelf: 'flex-start' }}>
          Social Skills
        </Typography>
        <Typography level="body2">{today}</Typography>
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
          src="https://wallpapercave.com/wp/wp2013780.jpg"
          alt=""
        />
      </AspectRatio>
      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">Total Score:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            0
          </Typography>
        </div>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600 }}
          disabled={props.isStart ? true : false}
          onClick={()=>{navigate('/pictures-test')}}
        >
          Start Test
        </Button>
      </Box>
    </Card>
    </div>

     

     <div className={props.isStart2 ?'opacity-20 px-20 py-20':'px-20 py-20'}>
    <Card 
    variant="outlined" 
    sx={{ minWidth: '320px' }}             
    onClick={()=>{
        navigate('/motivation-test')
    }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Typography level="h2" fontSize="md" sx={{ alignSelf: 'flex-start' }}>
        Motivational Skills
        </Typography>
        <Typography level="body2">{today}</Typography>
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
          src='https://images6.alphacoders.com/419/thumb-1920-419392.jpg'
          alt=""
        />
      </AspectRatio>
      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">Total Score:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            0
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
          }}
        >
          Start Test
        </Button>
      </Box>
    </Card>
    </div>



      </div>
    </div>
    )
}

export default HomePage;
