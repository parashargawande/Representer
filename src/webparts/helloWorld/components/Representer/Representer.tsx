import * as React from 'react';
import { IRepresenter } from './IRepresenter';
import styles from './Representer.module.scss';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { sp } from "@pnp/sp/presets/all";
import * as moment from 'moment-timezone'

export default class Representer extends React.Component<IRepresenter, {}>{
    state = {
        timesZones: {
            PST: ""
        },
        events: []
    }
    public componentDidMount() {
        sp.setup({
            spfxContext: this.props.context
        });

        sp.web.lists.getByTitle("Representers").items.select("*", "AttachmentFiles").expand("AttachmentFiles").get().then((item: any) => {
            console.log(item);
            this.setState({ events: item });
        });

    }
    public render(): React.ReactElement<IRepresenter> {

        let items = this.state.events.map(item => {
            return <div className={[styles['row'], styles['Presenter']].join(" ")}>
                <div className={styles['col-5']}>
                    {
                        item.AttachmentFiles.map(image => {
                            return <img className={styles['Presenter-image']} src={image.ServerRelativeUrl}></img>
                        })
                    }
                </div>
                <div className={[styles['col-2'], styles['Presenter-time']].join(" ")}>{moment(item.EventStart).format('HH:mm')}-{moment(item.EventEnd).format('HH:mm')}</div>
                <div className="col-5">
                    <div className={styles['Presenter-Details-heading']}>{item.Title}</div>
                    <div className={styles['Presenter-Details']}>{item.Description}</div>
                    {/* <div className={styles['Presenter-Subheading']}>{item.SubHeading}</div> */}
                    <div dangerouslySetInnerHTML={{ __html: item.SubDescription }}></div>
                </div>
            </div>
        });

        let PST = "", JST = "", EST = "", IST = "";
        if (this.state.events.length > 0) {
            PST = moment(this.state.events[0].EventStart).tz('America/Los_Angeles').format('DD MMM HH:mm') + "-" + moment(this.state.events[this.state.events.length - 1].EventEnd).tz('America/Los_Angeles').format('HH:mm z')
            EST = moment(this.state.events[0].EventStart).tz('America/New_York').format('DD MMM HH:mm') + "-" + moment(this.state.events[this.state.events.length - 1].EventEnd).tz('America/New_York').format('HH:mm z')
            JST = moment(this.state.events[0].EventStart).tz('Asia/Tokyo').format('DD MMM HH:mm') + "-" + moment(this.state.events[this.state.events.length - 1].EventEnd).tz('Asia/Tokyo').format('HH:mm z')
            let currentDate = new Date();
            IST = moment((new Date()).toISOString()).tz('Asia/Kolkata').format('H:mm z');
        }

        return <div className={styles.representer}>
            <div className={[styles['container-fluid'], styles['p-0']].join(" ")}>
                <div className={styles['col-12']}>
                    <div className={styles['row']}>
                        <div className={[styles['col-12'], styles['PresenterDate']].join(" ")}>{this.state.events.length > 0 ? moment(this.state.events[0].EventStart).format("DD MMM YYYY") : ""}</div>
                    </div>
                    <div className={[styles['row'], styles['RedRibbon']].join(" ")}>
                        <div className={[styles['col-2'], styles['RedRibbon-Left']].join(" ")}>
                            <Icon iconName='ChevronDownMed' />
                        </div>
                        <div className={[styles['col-8'], styles['RedRibbon-center']].join(" ")}>{PST + "/" + EST }</div>
                        <div className={[styles['col-2'], styles['RedRibbon-Right']].join(" ")}>
                            <Icon iconName='ChevronDownMed' />
                        </div>
                    </div>
                    {
                        items
                    }
                </div>
            </div>
        </div>
    }
}