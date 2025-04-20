import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';  
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";
function InfoBox({info}) {
    const HOT_URL="https://images.unsplash.com/photo-1604228741406-3faa38f4907a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3Vubnl8ZW58MHx8MHx8fDA%3D";
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg";
    return(
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia 
                        sx={{ height: 140 }} 
                        image={info.humidity>65 ? RAIN_URL : info.temp>20 ? HOT_URL : COLD_URL } />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {info.humidity>65 ? <ThunderstormIcon style={{fontSize:30,color:'#37474f'}} /> : info.temp>20 ? <SunnyIcon style={{fontSize:30,color:'orange'}} /> : <AcUnitIcon style={{fontSize:30,color:'skyblue'}} />}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temperature={info.temp}&deg;C</p>
                            <p>Humidity={info.humidity}%</p>
                            <p>Minimum Temperature={info.tempMin}&deg;C</p>
                            <p>Maximum Temperature={info.tempMax}&deg;C</p>
                            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
export default InfoBox;