//Create the Home UI for the BlogAPP(Cards are preferrred; You may choose your UI preference )
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material';
import axios from 'axios';



const Home = () => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/blogs').then((res) => {
          setRows(res.data);
        });
      }, []);

  return (
    // <div>Home</div>
    <div  style={{paddingLeft:30,paddingTop:50}}>
                <Grid container spacing={2}>

      {rows.map((item)=>(
                  <Grid item xs={4}>
                  <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 320 }}
                image={item.img_url}
                title={item.title}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                {item.title}                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                {item.content}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Delete</Button>
                <Button size="small">Update</Button>
              </CardActions>
            </Card>
                  
           </Grid>
        ))}
        </Grid>
    </div>
  )
}

export default Home

//Write your code here