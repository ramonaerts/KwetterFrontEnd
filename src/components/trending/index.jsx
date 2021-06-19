import React, { Component } from "react";
import TrendingService from "../../services/api/trendingService";
import "./index.css";

export default class Trending extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trends: {},
            isLoading: true
        };
      }

    async componentDidMount(){    
        const result = await TrendingService.GetTopTrends();
        this.setState({ trends: result, isLoading: false });
    }

    render() {
        const { trends } = this.state;

        if (this.state.isLoading){
            return <div className="loading"/>
          }

        return (
            <div className="trending-container">
                <div className="trending-header">
                    Trending
                </div>
                <div className="trending-content">
                    {trends.map((trend) => (
                        <div className="trending-item">
                            {trend.topic}
                            <div className="item-count">{trend.tweetCount} tweets</div>
                        </div>                    
                    ))}
                </div>
            
            </div>
          );
    }
}