import * as React from 'react';
import { IRepresenter } from './IRepresenter';
import s from './Representer.module.scss';

export default class Representer extends React.Component<IRepresenter, {}>{
    public render(): React.ReactElement<IRepresenter> {
        return <div>
            <div className={[s['container-fluid'],s['p-0']].join()}>
                <div className={s['col-12']}>
                    <div className={s['row']}>
                        <div className={[s['col-12'],s['Presenter-Date']].join()}>12 Nov 2020</div>
                    </div>
                    <div className={[s['row'],s['RedRibbon']].join()}>
                        <div className={[s['col-2'],s['RedRibbon-Left']].join()}>hello</div>
                        <div className={[s['col-8'],s['RedRibbon-center']].join()}>hello</div>
                        <div className={[s['col-2'],s['RedRibbon-Right']].join()}>hello</div>
                    </div>

                    <div className={[s['row'],s['Presenter']].join()}>
                        <div className={s['col-4']}>
                            <img className={s['Presenter-image']} src='./Capture.PNG'></img>
                            <img className={s['Presenter-image']} src='./Capture.PNG'></img>
                        </div>
                        <div className={[s['col-2'],s['Presenter-time']].join()}>13.00-11.00</div>
                        <div className="col-6">
                            <div className="Presenter-Details-heading">heading</div>
                            <div className="Presenter-Details">details</div>
                            <div className="Presenter-Subheading">subheading</div>
                            <div className="Presenter-Details">details</div>
                        </div>
                    </div>

                    <div className="row Presenter">
                        <div className="col-4">
                            <img className="Presenter-image" src='./Capture.PNG'></img>
                            <img className="Presenter-image" src='./Capture.PNG'></img>
                        </div>
                        <div className="col-2 Presenter-time">13.00-11.00</div>
                        <div className="col-6">
                            <div className="Presenter-Details-heading">heading</div>
                            <div className="Presenter-Details">details</div>
                            <div className="Presenter-Subheading">subheading</div>
                            <div className="Presenter-Details">details</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}