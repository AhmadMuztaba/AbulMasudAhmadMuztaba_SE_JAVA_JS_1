import React, { Component } from 'react';
import Header from '../About/header/Header'
class Dashboard extends Component {
    render() {
        return (<>
            <Header/>
            <section className="dashboard__info">
                <div className="dashboard__info--user">
                <div className="dashboard__info--user--circle"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR1msLazQkTAVSK9SRNuGE0Zwq2xqf-p-MEg&usqp=CAU" className="profilepic" alt="profilePic"/></div>
                    <div className="dashboard__info--user--circle">Ahmad</div>
                    <div className="dashboard__info--user--circle"><b>Sold items:</b>3</div>
                    <div className="dashboard__info--user--circle"><b>Posted Items:</b>10<br /></div>     
                </div>
            </section>
            <section className="dashboard__buttons">
                <a><button type="button btn-lg" name="button" className="btn btn-warning btn-lg dashboard__buttons-btn">Notification</button></a>
                <div className="dashboard__buttons--notification">
                    2
                </div>
            </section>
        </>
        );
    }
}

export default Dashboard;