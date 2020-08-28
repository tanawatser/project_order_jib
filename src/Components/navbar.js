import React, { Component } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBNavbarToggler,
    MDBCollapse,
  } from "mdbreact";
import Routes from '../Routes'
import Login from './login'
import Auth from './authlogin'
import Logo from '../Assets/jib-logo-white2.png'

export default class navbar extends Component {
    constructor(props) {
        super(props);
        this.Auth = new Auth();
        this.state={
          img:"http://172.18.0.30/JIBHR/img_hr/"+localStorage.getItem('img')+".JPG"
        }
      }
    state = {
        isOpen: false,
      };
        
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

    render() {
        return (
            <>
            <Router>
              {localStorage.getItem("access") ? (
                <div>
                  <MDBNavbar color="cyan darken-1" dark expand="lg">
                    <MDBNavbarBrand>
                      <img src={Logo} alt="" width="60px" />
                    </MDBNavbarBrand>
                    <MDBNavbarBrand>
                      <strong className="white-text">
                        Branch Order
                      </strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse
                      id="navbarCollapse3"
                      isOpen={this.state.isOpen}
                      navbar
                    >
                  
    
    
                      <MDBNavbarNav right>
                        <MDBNavItem>
                            <img src={this.state.img} className="rounded-circle z-depth-0" alt="" height="40" />
                        </MDBNavItem>
                        &nbsp;&nbsp;&nbsp;
                        <MDBNavItem>
                          <MDBNavLink to="#!" >สวัสดี</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                          <MDBDropdown>
                            <MDBDropdownToggle nav caret style={{ width: "220px" }}>
                              <span className="mr-2">
                                {this.Auth.getProfile().fullname}
                              </span>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                              <MDBDropdownItem
                                onClick={() => {
                                  alert("Op1");
                                }}
                              >
                                About
                              </MDBDropdownItem>
                              <MDBDropdownItem
                                onClick={() => {
                                  localStorage.removeItem('img')
                                  this.Auth.logout();
                                  window.location.reload();
                                }}
                              >
                                Logout
                              </MDBDropdownItem>
                            </MDBDropdownMenu>
                          </MDBDropdown>
                        </MDBNavItem>
                      </MDBNavbarNav>
                    </MDBCollapse>
                  </MDBNavbar>
                  
    
                  <MDBNavbar 
                
                    color="cyan darken-1"
                    dark
                    expand="sm"
                    style={{ height: "auto" }}
                    
                  >
                    <MDBCollapse 
                      id="navbarCollapse3"
                      isOpen={this.state.isOpen}
                    ></MDBCollapse>
                    <MDBNavbarNav  className="subnav">
                      <MDBNavItem >
                        <MDBNavLink to="/">หน้าหลัก</MDBNavLink>
                      </MDBNavItem>
    
                      <MDBNavItem>
                        <MDBDropdown>
                          <MDBDropdownToggle nav caret>
                            <span className="mr-2">สาขา</span>
                          </MDBDropdownToggle>
                          <MDBDropdownMenu>
                            <MDBDropdownItem href="/order">
                              สั่งสินค้า
                            </MDBDropdownItem>
                            <MDBDropdownItem href="/list">
                              รายการสินค้าที่สั่ง
                            </MDBDropdownItem>
                          </MDBDropdownMenu>
                        </MDBDropdown>
                      </MDBNavItem>
    
                      <MDBNavItem>
                        <MDBDropdown>
                          <MDBDropdownToggle nav caret>
                            <span className="mr-2">จัดการ</span>
                          </MDBDropdownToggle>
                          <MDBDropdownMenu>
                            <MDBDropdownItem href="/listorder">
                              รายการสั่งซื้อสินค้า
                            </MDBDropdownItem>
                            <MDBDropdownItem href="/branch-limit">
                              จำกัดออเดอร์สาขา [Manage Branch Limit]
                            </MDBDropdownItem>
                            <MDBDropdownItem href="/product-limit">
                              จำกัดจำนวนสินค้า [Manage Product Limit]
                            </MDBDropdownItem>
                            <MDBDropdownItem href="/category">
                              จัดกลุ่มสินค้า [Manage Group Category]
                            </MDBDropdownItem>
                            <MDBDropdownItem href="/stock">
                              จัดการ Stock สาขา [Manage Stock Branch]
                            </MDBDropdownItem>
                          </MDBDropdownMenu>
                        </MDBDropdown>
                      </MDBNavItem>
    
                      <MDBNavItem>
                        <MDBDropdown>
                          <MDBDropdownToggle nav caret>
                            <span className="mr-2">ตั้งค่า</span>
                          </MDBDropdownToggle>
                          <MDBDropdownMenu>
                            <MDBDropdownItem href="/config">
                              สิทธ์ในการสั่งซื้อ [สาขา]
                            </MDBDropdownItem>
                            <MDBDropdownItem href="/time">
                              เวลาในการ [เปิด/ปิด] ระบบสั่งซื้อ
                            </MDBDropdownItem>
                          </MDBDropdownMenu>
                        </MDBDropdown>
                      </MDBNavItem>
                    </MDBNavbarNav>
                  </MDBNavbar>
                  <Routes />
                </div>
              ) : (
                <Login />
              )}
            </Router>
          </>
        )
    }
}
