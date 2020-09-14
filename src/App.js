import React, { Component } from 'react';
import './App.css';
import Malepic from './image/girl.jpeg';
import Ranker from './image/male.jpg'
import CanvasJSReact from './assets/canvasjs.react';
import { Line, Doughnut } from 'react-chartjs-2';
import altimage from './image/girl.jpeg';
import ReactApexChart from 'react-apexcharts';
import './circle.scss'


var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;



class App extends React.Component {
  state={
    data: null,
    data2: null,
    data3: null
  }
  intervalID;
  componentWillMount(){
    this.getData()

    // this.intervalID= setInterval(this.getData.bind(this),15000);
    // console.log(this.props.url)
    
  }

  componentWillUnmount(){
    clearInterval(this.intervalID);
  }
getData=()=>{
  let url=this.props.url
  let url2=this.props.url2
  let url3= this.props.url3
    let obj={ 
      method: "GET",
      headers : {
        // 'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'apiKey': 'dc7161be3dbf2250c8954e560cc35060'
      },
    }
    fetch(url,obj).then((res)=>{
      if(res.ok){
        return res.json(); 
      }else {
        return Promise.reject(res);
      }
      }).then(employee=>{
      if(employee.success){
      
        console.log(employee)
      }
      else{
        alert(employee.message);
      }
      this.setState({data:employee.object})

      return fetch(url2,obj);      
    }).then(res=>{
      if(res.ok){
        return res.json();
      }
      else{
        return Promise.reject(res);
      }
    }).then(employee2=>{
      if(employee2.success){
        console.log(employee2)
      }
      else{
        alert(employee2.message)
      }
      this.setState({data2:employee2.object})
      return fetch(url3,obj);
    }).then(res=>{
      if(res.ok){
        return res.json();
      }
      else{
        return Promise.reject(res);
      }
    }).then(employee3=>{
      if(employee3.success){
        console.log(employee3)
      }
      else{
        alert(employee3.message)
      }
      this.setState({data3:employee3.object})
    }).catch((error)=>{
      console.warn(error)
    })
    }



  render() {
    
    if((this.state.data3===null)){
      
      return (
        <div class="loader">
          <div class="inner one"></div>
          <div class="inner two"></div>
          <div class="inner three"></div>
        </div>

      )
      
    }
    let saleLabels= Object.keys(this.state.data.sales);
    let saleValues= Object.values(this.state.data.sales)
    // let saleLabels= ['1','2','3','4','5','6','7','8','9','10']
    // let saleValues=['500','300','400','800','100','1000','200','1200','300','1300']
    console.log(saleValues)
    console.log(saleLabels)

    const stateD = {
      labels: ['Total CP Added', 'Total CP-P', 'Total CP-A'],
      datasets: [
        {
          label: 'Rainfall',
          backgroundColor: [
            // '#212121',
            '#ff1744',
            '#fbc02d',
            '#0091ea',
    
          ],
          hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            '#003350',
    
          ],
          fill: false,
          // data: [this.state.data.channelPartner["total CP Added"],this.state.data.channelPartner["total CP-P"], this.state.data.channelPartner["total CP-A"]],
          data: [5,6,5]
    
        }
      ]
    }

    //ApexChart area
    const series= [{
      theme: 'fusion',
      name: 'Total Confirmed',
      data: saleValues
    }, 
  ];
  const options={  
    chart: {
  
    },
    dataLabels: {
      // enabled: false
    },
    stroke: {
      curve: 'smooth',
      
    },
    xaxis: {
      // type: 'datetime',
      categories: saleLabels
    },
    tooltip: {
      x: {
        format: 'dd MMM',
        
      },
    }
  }

    //
    const stateL = {
      labels: saleLabels,
      datasets: [
        {
          label: 'Sales',
          backgroundColor: [
            '#ff1744',
            '#ffff8d',
            '#69f0ae',
            '#0091ea',
            '#7c4dff'
          ],
          hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            '#003350',
            '#35014F'
          ],
          fill: false,
          data: saleValues,
          borderColor: '#3f51b5',
          pointBackgroundColor: 'blue'
        }
      ]
    }
      return (
        <div className="body-container">
        <div className="left-container">
          <div className="dp">
            <img src={(this.state.data.profile.profileImgUrl===null)?altimage:this.state.data.profile.profileImgUrl} alt="profile pic" />
          </div>
          <div className="about">
            <h4>{this.state.data.profile.name}</h4>
            <h5>Sales Manager</h5>
            <div className="row-pro">
            <h5>Date of Joining</h5>
            <h5>{this.state.data.profile.dateOfJoining}</h5>
            </div>
            <div className="row-pro">
            <h5>Points</h5>
            <h5 className="mgright">{this.state.data.profile.point}</h5>
            </div>
            <div className="row-pro">
            <h5>Rank</h5>
            <h5 className="mgright">{this.state.data.profile.ranks}</h5>
            </div>
          </div>
          <div className="contact">
            <h5 id="contacts">Contacts</h5>
            <div className="row-pro">
            <h5>Address</h5>
            <h5 class="mgright">{this.state.data.profile.address}</h5>
            </div>
            <div className="row-pro">
            <h5>e-mail</h5>
            <h5 className="mgright">{this.state.data.profile.email}</h5>
            </div>
            <div className="row-pro">
            <h5 >Contact No.</h5>
            <h5 className="mgright">Confidential</h5>
            </div>
          </div>
        </div>
        <div className="middle-container">
          <div className="m-item1">
          {/* <ReactApexChart  options={options} series={series} type="area"  style={{width:"100%",height:'100%',boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} />               */}
            <Line
              data={stateL}
              options={{
                layout:{
                  padding: {
                    left: -5,
                    right: 0,
                    top: 0,
                    bottom: -8
                }
                },
                responsive: true,
                maintainAspectRatio:false,
                title: {
                  display: true,
                  text: 'Saldo',
                  fontSize: 15
                },
                scales: {
                  xAxes: [{
                    gridLines: {
                      display: false,
                      color: 'rgba(255, 0, 0, .2)', // can still set the colour.
                       
                    },
                    // scaleLabel: {
                    //   display: true,
                    //   labelString: 'Date'
                    // }
                  }],
                  yAxes: [{
                    gridLines: {
                      display: false
                    },
                    // scaleLabel: {
                    //   display: true,
                    //   labelString: 'Revenue'
                    // },
                    ticks: {
                      suggestedMin: 5000000,
                      lineTension:0,

                    }
                  }]
                },
                legend: {
                  display: false,

                }

              }}
            />

          </div>
          <div className="m-item2">
            <div className="m-header">
              <h5>Sale Status</h5>
            </div>
            <div className="m-r2">
              <h5>Total Walk-ins</h5>
            <h2>{this.state.data.saleStatus.WalkIn}</h2>
            </div>
            <div className="m-r2">
              <h5>Total Documents Approved</h5>
              <h2>{this.state.data.saleStatus["doc-approved"]}</h2>
            </div>
            <div className="m-r2">
              <h5>Revenue Conversion</h5>
              <h2>{this.state.data.saleStatus["revenue Conversion"]}</h2>
            </div>
            <div id="mr2" className="m-r2">
              <h5>Cancellation Conversion</h5>
            <h2>{this.state.data.saleStatus["cancellation Conversion"]}</h2>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="r-item1">
            <Doughnut className="dn"
              data={stateD}
              options={{
                responsive: true,
                   title: {
                  display: true,
                  text: 'Deals',
                  fontSize: 15
                },
                legend: {
                  display: true,
                  position: 'right',
                  labels: {
                    usePointStyle: true,
                    padding: 20
                  }
                },
                cutoutPercentage: 80,

              }}
            />
          </div>
          <div className="r-item2">
            <div className="r-row">
              <div className="r-header">
                <h5 id="title">Account</h5>
              </div>
            </div>
            <div className="ranker-profile">
              <div className="ranker-dp">
                <img src={(this.state.data2.profile.profileImgUrl===null)?altimage:this.state.data.profile.profileImgUrl} alt="Ranker DP" />
              </div>
              <div className="ranker-about">
                <h4>{this.state.data2.profile.name}</h4>
              </div>
            </div>
            <div className="ranker-profile">
              <div className="ranker-dp">
                <img src={(this.state.data.profile.profileImgUrl===null)?altimage:this.state.data.profile.profileImgUrl} alt="Ranker DP" />
              </div>
              <div className="ranker-about">
                <h4>{this.state.data3.profile.name}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
  }

}

export default App;
