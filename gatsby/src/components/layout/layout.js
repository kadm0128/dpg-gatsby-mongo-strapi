import React from "react";
import SEO from './seo';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css';
import "./layout.css"

library.add(faAngleDown);

const Layout = (props) => {
    console.log(props);
    const { data } = props;
    const { title, links } = data;
    console.log(props);
    return (
        <>
            <SEO title={title} />
            <div className="container-fluid header">
                <div className="main-header">
                    <div className="container">
                        <a href="#">
                            <img src="https://www.boursakuwait.com.kw/assets/images/logo_header.png" alt="Boursa Kuwait" className="logo_header" />     
                        </a>
                        <div className="dv_search_account_holder">
                            <div className="row">
                                <div className="input-group">
                                    <input type="text" className="form-control" id="txtSearch" placeholder="Search" />
                                </div>
                            </div>
                            &nbsp;
                            <button className="btn btn-login" type="button">Login</button>
                            <span className="register_text">&nbsp;
                                or
                                &nbsp;
                                <a href="#">Register</a>
                            </span>
                        </div>
                        <div className="dv_main_menu">
                            <ul>
                                {
                                    links.map(({ SubLinks, id, name, path}) =>
                                        (
                                            <li key={id}>
                                                {SubLinks ? (
                                                    <>
                                                        <a href="#">{name}<FontAwesomeIcon icon="angle-down" /></a>
                                                        <ul>
                                                            {
                                                                SubLinks.map(({name, url}, index) => 
                                                                    (
                                                                        <li key={index}><a href={url}>{name}</a></li>
                                                                    )
                                                                )
                                                            }
                                                        </ul>
                                                    </>
                                                ) : (
                                                    <a href={path}>{name}</a>
                                                )}
                                                <span></span>
                                            </li>
                                        )   
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="home_ticker"></div>
            </div>
            <div className="container-fluid">
                <main className="main-content">{ props.children }</main>
            </div>
        </>
    )
}

Layout.propTypes = {
  //children: PropTypes.node.isRequired,
}

export default Layout
