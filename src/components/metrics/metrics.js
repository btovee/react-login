import React , {Component} from 'react'; 
import axiosInstance from '../../services/axois.instance';
import Typography from '@material-ui/core/Typography';

class MetricsComponent extends Component {

    state = {
        metricsData: null
    }
      
    componentDidMount = () => {
        axiosInstance.get('/metrics').then(res => {
            if(res.data){
                this.setState({metricsData: res.data});
            }
        });
    }

    render(){

        let metricsPartial = null; 

        if(this.state.metricsData){
            metricsPartial =  (
                <Typography variant="body1" gutterBottom>
                    {this.state.metricsData}
                </Typography>
            );
        }

        return (
            <>
                {metricsPartial}
            </>
        );
    } 

}

export default MetricsComponent;