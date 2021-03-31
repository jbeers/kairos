import * as React from "react"
import { MinistryTile } from '../../components';
import { PageLayout } from '../../layouts';
import './index.css';


const spark = 'https://picsum.photos/seed/picsum1/200/300';
const fire = 'https://picsum.photos/seed/something/200/300';
const beacon = 'https://picsum.photos/seed/picsum1/200/300';


// markup
const MinistriesPage = () => {
    return <PageLayout>
        <div className = "ministry_category">
            <h2>Youth/Children</h2>
            <div className={'item-row space-between'}>
                <MinistryTile image={spark} name="Spark" >
                    Spark is for youth ages 1-9
                </MinistryTile>
                <MinistryTile image={fire} name="Fire">
                    Fire is for youth ages 10-13
                </MinistryTile>
                <MinistryTile image={beacon} name="Beacon">
                    Beacon is for youth in JR. and SR. high.
                </MinistryTile>
            </div>
        </div>
        <div>
            <h2>Encouragement</h2>
            <div className={'item-row space-between'}>
                <MinistryTile image={spark} name="Prayer">
                    Send us your prayer requests
                </MinistryTile>
                <MinistryTile image={fire} name="Prophetic">
                    Understanding and responding to the voice of the Lord
                </MinistryTile>
                <MinistryTile image={fire} name="Lazarus">
                    Specific encouragement for daily life
                </MinistryTile>
            </div>
        </div>
        <div>
            <h2>Service</h2>
            <div className={'item-row space-between'}>
                {/* <MinistryTile image={beacon} name="Hope Rocks">
                    Our food pantry and meal assistance program
                </MinistryTile> */}
                <MinistryTile image={beacon} name="Coffee">
                    Hot beverages, community, and comfort
                </MinistryTile>
                <span style={{width: "300px"}}></span>
                <span style={{width: "300px"}}></span>
            </div>
        </div>
    </PageLayout>
}

export default MinistriesPage
