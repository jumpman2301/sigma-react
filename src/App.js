import React, { Component } from 'react';
import classNames from 'classnames';
import { AppTopbar } from './AppTopbar';
import { AppFooter } from './AppFooter';
import { AppMenu } from './AppMenu';
import { AppInlineProfile } from './AppInlineProfile';
import { Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { FormsDemo } from './components/FormsDemo';
import { SampleDemo } from './components/SampleDemo';
import { DataDemo } from './components/DataDemo';
import { PanelsDemo } from './components/PanelsDemo';
import { OverlaysDemo } from './components/OverlaysDemo';
import { MenusDemo } from './components/MenusDemo';
import { MessagesDemo } from './components/MessagesDemo';
import { ChartsDemo } from './components/ChartsDemo';
import { MiscDemo } from './components/MiscDemo';
import { EmptyPage } from './components/EmptyPage';
import { UtilsDemo } from './components/UtilsDemo';
import { Documentation } from "./components/Documentation";
import { ScrollPanel } from 'primereact/components/scrollpanel/ScrollPanel';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'fullcalendar/dist/fullcalendar.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';
import './layout/layout.scss';

class App extends Component {

    constructor() {
        super();
        this.state = {
            layoutMode: 'static',
            layoutColorMode: 'light',
            staticMenuDesktopInactive: false,
            overlayMenuActive: false,
            staticMenuMobileActive: false,
            topbarMenuActive: false,
            menuActive: false
        };

        this.onTopbarMobileMenuButtonClick = this.onTopbarMobileMenuButtonClick.bind(this);
        this.onWrapperClick = this.onWrapperClick.bind(this);
        this.onToggleMenu = this.onToggleMenu.bind(this);
        this.onSidebarClick = this.onSidebarClick.bind(this);
        this.onRootMenuItemClick = this.onRootMenuItemClick.bind(this);
        this.onMenuItemClick = this.onMenuItemClick.bind(this);
        this.createMenu();
    }

    onWrapperClick(event) {
        if (!this.topbarMenuClick && !this.topbarMenuButtonClick ) {
            this.setState({
                topbarMenuActive: false
            });
        }

        if(!this.menuClick) {
            this.setState({
                overlayMenuActive: false,
                menuActive: false,
                staticMenuMobileActive: false
            })
        }

        this.menuClick = false;
        this.topbarMenuClick = false;
        this.topbarMenuButtonClick = false;
    }

    onTopbarMobileMenuButtonClick(event) {
        this.topbarMenuButtonClick = true;
        this.setState({topbarMenuActive: !this.state.topbarMenuActive});
        event.preventDefault();
    }

    onToggleMenu(event) {
        this.menuClick = true;

        if(this.state.layoutMode === 'overlay') {
            this.setState({
                overlayMenuActive: !this.state.overlayMenuActive
            });
        }
        else {
            if (this.isMobile()) {
                this.setState({staticMenuMobileActive: !this.state.staticMenuMobileActive});
            }
            if (this.isDesktop()) {
                this.setState({staticMenuDesktopInactive: !this.state.staticMenuDesktopInactive});
            }
        }

        event.preventDefault();
    }

    onSidebarClick(event) {
        this.menuClick = true;
        setTimeout(() => {this.layoutMenuScroller.moveBar(); }, 500);
    }

    onRootMenuItemClick(event) {
        this.setState({
            menuActive: !this.state.menuActive
        });

        event.originalEvent.preventDefault();
    }

    onMenuItemClick(event) {
        if(!event.item.items) {
            this.setState({
                overlayMenuActive: false,
                staticMenuMobileActive: false
            })
        }
    }

    createMenu() {
        this.menu = [
            {label: 'Dashboard', icon: 'fa fa-fw fa-home', command: () => { window.location = '#/'}},
            {
                label: 'Menu Modes', icon: 'fa fa-fw fa-cog',
                items: [
                    {label: 'Static Menu', icon: 'fa fa-fw fa-bars',  command: () => this.setState({layoutMode: 'static'}) },
                    {label: 'Overlay Menu', icon: 'fa fa-fw fa-bars',  command: () => this.setState({layoutMode: 'overlay'}) }
                ]
            },
            {
                label: 'Layout Options', icon: 'fa fa-fw fa-diamond',
                items: [
                    {label: 'Dark', icon: 'fa fa-fw fa-bars',  command: () => this.setState({layoutColorMode: 'dark'}) },
                    {label: 'Light', icon: 'fa fa-fw fa-bars',  command: () => this.setState({layoutColorMode: 'light'}) }
                ]
            },
            {
                label: 'Components', icon: 'fa fa-fw fa-bars', badge: '2', badgeStyleClass: 'teal-badge',
                items: [
                    {label: 'Sample Page', icon: 'fa fa-fw fa-columns', command: () => { window.location = '#/sample'}},
                    {label: 'Forms', icon: 'fa fa-fw fa-code', command: () => { window.location = '#/forms'}},
                    {label: 'Data', icon: 'fa fa-fw fa-table', command: () => { window.location = "#/data"}},
                    {label: 'Panels', icon: 'fa fa-fw fa-list-alt', command: () => { window.location = "#/panels"}},
                    {label: 'Overlays', icon: 'fa fa-fw fa-square', command: () => { window.location = "#/overlays"}},
                    {label: 'Menus', icon: 'fa fa-fw fa-minus-square-o', command: () => { window.location = "#/menus"}},
                    {label: 'Messages', icon: 'fa fa-fw fa-circle-o-notch', command: () => { window.location = "#/messages"}},
                    {label: 'Charts', icon: 'fa fa-fw fa-area-chart', command: () => { window.location = "#/charts"}},
                    {label: 'Misc', icon: 'fa fa-fw fa-user-secret', command: () => { window.location = "#/misc"}}
                ]
            },
            {
                label: 'Template Pages', icon: 'fa fa-fw fa-life-saver',
                items: [
                    {label: 'Empty Page', icon: 'fa fa-fw fa-square-o', command: () => { window.location = "#/empty"}},
                    {label: 'Login', icon: 'fa fa-fw fa-sign-in', url: 'assets/pages/login.html', target: '_blank'},
                    {label: 'Error', icon: 'fa fa-fw fa-exclamation-circle', url: 'assets/pages/error.html', target: '_blank'},
                    {label: '404 Page', icon: 'fa fa-fw fa-times', url: 'assets/pages/404.html', target: '_blank'},
                    {label: 'Access Denied', icon: 'fa fa-fw fa-exclamation-triangle', url: 'assets/pages/access.html', target: '_blank'}
                ]
            },
            {
                label: 'Menu Hierarchy', icon: 'fa fa-fw fa-sitemap',
                items: [
                    {
                        label: 'Submenu 1', icon: 'fa fa-fw fa-sign-in',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    {label: 'Submenu 1.1.1', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 1.1.2', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 1.1.3', icon: 'fa fa-fw fa-sign-in'},
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    {label: 'Submenu 1.2.1', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 1.2.2', icon: 'fa fa-fw fa-sign-in'}
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'fa fa-fw fa-sign-in',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    {label: 'Submenu 2.1.1', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 2.1.2', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 2.1.3', icon: 'fa fa-fw fa-sign-in'},
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    {label: 'Submenu 2.2.1', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 2.2.2', icon: 'fa fa-fw fa-sign-in'}
                                ]
                            },
                        ]
                    }
                ]
            },
            {label: 'Docs', icon: 'fa fa-fw fa-book', command: () => { window.location = "#/documentation"}}
        ];
    }

    isMobile() {
        return window.innerWidth <= 640;
    }

    isTablet() {
        let width = window.innerWidth;
        return width <= 1024 && width > 640;
    }

    isDesktop() {
        return window.innerWidth > 1024;
    }

    render() {
        let wrapperClass = classNames('wrapper', {
            'menu-layout-overlay': this.state.layoutMode === 'overlay',
            'menu-layout-static': this.state.layoutMode === 'static',
            'sidebar-inactive-l': this.state.staticMenuDesktopInactive,
            'sidebar-active-m': this.state.staticMenuMobileActive && this.state.layoutMode === 'static',
            'layout-menu-overlay-active': this.state.overlayMenuActive && this.state.layoutMode === 'overlay'
        });
        let sidebarClassName = classNames("sidebar",{'dark-sidebar': this.state.layoutColorMode === 'dark'});

        return (
            <div className={wrapperClass} onClick={this.onWrapperClick}>
                <AppTopbar onToggleMenu={this.onToggleMenu} onTopbarMobileMenuButtonClick={this.onTopbarMobileMenuButtonClick}
                           topbarMenuActive={this.state.topbarMenuActive}/>

                <div ref={(el) => this.sidebar = el} className={sidebarClassName} onClick={this.onSidebarClick}>

                    <ScrollPanel ref={(el) => this.layoutMenuScroller = el} style={{height:'100%'}}>
                        <div className="sidebar-scroll-content" >
                            <div className="logo"></div>
                            <AppInlineProfile />
                            <AppMenu model={this.menu} onMenuItemClick={this.onMenuItemClick} onRootMenuItemClick={this.onRootMenuItemClick} layoutMode={this.state.layoutMode}
                                     active={this.state.menuActive} />
                        </div>
                    </ScrollPanel>
                </div>

                <div className="main">
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/forms" component={FormsDemo} />
                    <Route path="/sample" component={SampleDemo} />
                    <Route path="/data" component={DataDemo} />
                    <Route path="/panels" component={PanelsDemo} />
                    <Route path="/overlays" component={OverlaysDemo} />
                    <Route path="/menus" component={MenusDemo} />
                    <Route path="/messages" component={MessagesDemo} />
                    <Route path="/charts" component={ChartsDemo} />
                    <Route path="/misc" component={MiscDemo} />
                    <Route path="/empty" component={EmptyPage} />
                    <Route path="/utils" component={UtilsDemo} />
                    <Route path="/documentation" component={Documentation} />
                </div>

                <AppFooter />
            </div>
        );
    }
}

export default App;
