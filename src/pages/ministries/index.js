import * as React from "react"
import { MinistryTile } from '../../components';
import { BasicLayout } from '../../layouts';


const spark = 'https://picsum.photos/seed/picsum1/200/300';
const fire = 'https://picsum.photos/seed/something/200/300';
const beacon = 'https://picsum.photos/seed/picsum1/200/300';


// markup
const MinistriesPage = () => {
    return <BasicLayout>
        <div>
            <h2>Youth Ministry</h2>
            <div className={'item-row'}>
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
            <h2>Service Ministries</h2>
            <div className={'item-row'}>
                <MinistryTile image={spark} name="Prayer">
                    Spark is for youth ages 1-9
                </MinistryTile>
                <MinistryTile image={fire} name="Prophetic">
                    Fire is for youth ages 10-13
                </MinistryTile>
                <MinistryTile image={beacon} name="Hope Rocks">
                    Beacons is for youth in JR. and SR. high.
                </MinistryTile>
            </div>
        </div>
        <div>
            <h2>Youth Ministry</h2>
            <div className={'item-row'}>
                <MinistryTile image={spark} name="Women">
                    Spark is for youth ages 1-9
                </MinistryTile>
            </div>
        </div>
    </BasicLayout>
}

export default MinistriesPage
