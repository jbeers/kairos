import * as React from "react"
import { MinistryTile } from '../../components';
import { PageLayout } from '../../layouts';
import './index.css';
import lazarus from '../../images/lazarus.png';
import lighthouse from '../../images/lighthouse.png';
import river from '../../images/river.png';
import coffee from '../../images/coffee.png';
import campfire from '../../images/campfire.png';
import crayons from '../../images/crayons.png';
import hands from '../../images/hands.png';


// markup
const MinistriesPage = () => {
    return <PageLayout>
        <h1>Church Ministries</h1>
        <div className = "ministry_category">
            <h2>Youth/Children</h2>
            <div className={'ministry-category__tiles item-row space-between'}>
                <MinistryTile image={crayons} name="Spark" slug="Spark" attribution="Photo by Anthony from Pexels">
                    Spark is for youth ages 1-9
                </MinistryTile>
                <MinistryTile image={campfire} name="Fire" slug="Fire" attribution="Photo by Vlad Bagacian from Pexels">
                    Fire is for youth ages 10-13
                </MinistryTile>
                <MinistryTile image={lighthouse} name="Beacon" slug="Beacon" attribution="Photo by Erik Mclean from Pexels">
                    Beacon is for youth in JR. and SR. high.
                </MinistryTile>
            </div>
        </div>
        <div>
            <h2>Encouragement</h2>
            <div className={'ministry-category__tiles item-row space-between'}>
                <MinistryTile image={hands} name="Prayer" slug="Prayer" attribution="Photo by Dio Hasbi Saniskoro from Pexels">
                    Send us your prayer requests
                </MinistryTile>
                <MinistryTile image={river} name="Prophetic" slug="Prophetic">
                    Understanding and responding to the voice of the Lord
                </MinistryTile>
                <MinistryTile image={lazarus} name="Lazarus" slug="Lazarus" attribution="Photo by Piotr Twardowski from Pexels">
                    Specific encouragement for daily life
                </MinistryTile>
            </div>
        </div>
        <div>
            <h2>Service</h2>
            <div className={'ministry-category__tiles item-row space-between'}>
                <MinistryTile image={coffee} name="Coffee Shop" slug="CoffeeShop">
                    Hot beverages, community, and comfort
                </MinistryTile>
                <span style={{width: "300px"}}></span>
                <span style={{width: "300px"}}></span>
            </div>
        </div>
    </PageLayout>
}

export default MinistriesPage
