import * as React from 'react';
import { IRepresenter } from './IRepresenter';
import styles from './Representer.module.scss';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

export default class Representer extends React.Component<IRepresenter, {}>{
    public render(): React.ReactElement<IRepresenter> {
        return <div className={styles.representer}>
            <div className={[styles['container-fluid'], styles['p-0']].join(" ")}>
                <div className={styles['col-12']}>
                    <div className={styles['row']}>
                        <div className={[styles['col-12'], styles['PresenterDate']].join(" ")}>12 Nov 2020</div>
                    </div>

                    <div className={[styles['row'], styles['RedRibbon']].join(" ")}>
                        <div className={[styles['col-2'], styles['RedRibbon-Left']].join(" ")}>
                            <Icon iconName='ChevronDownMed' />
                        </div>
                        <div className={[styles['col-8'], styles['RedRibbon-center']].join(" ")}>hello</div>
                        <div className={[styles['col-2'], styles['RedRibbon-Right']].join(" ")}>
                            <Icon iconName='ChevronDownMed' />
                        </div>
                    </div>

                    <div className={[styles['row'], styles['Presenter']].join(" ")}>
                        <div className={styles['col-5']}>
                            <img className={styles['Presenter-image']} src='./Capture.PNG'></img>
                            <img className={styles['Presenter-image']} src='./Capture.PNG'></img>
                        </div>
                        <div className={[styles['col-2'], styles['Presenter-time']].join(" ")}>13.00-11.00</div>
                        <div className="col-5">
                            <div className={styles['Presenter-Details-heading']}>heading</div>
                            <div className={styles['Presenter-Details']}>details</div>
                            <div className={styles['Presenter-Subheading']}>subheading</div>
                            <div className={styles['Presenter-Details']}>details</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}