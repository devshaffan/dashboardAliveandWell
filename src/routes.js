/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons

import Person from "@material-ui/icons/Person";

// core components/views for Admin layout

import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Employees from "views/employeeTable/Employees";
import authService from "services/auth.service";
// core components/views for RTL layout


const ifAdmin = () => {
  var dashboardRoutes = [
    {
      path: "/patients",
      name: "Patient List",
      icon: "content_paste",
      component: TableList,
      layout: "/admin",
    },
    {
      path: "/user",
      name: "User",
      icon: Person,
      component: UserProfile,
      layout: "/admin",
    },
    {
      path: "/employees",
      name: "Employee List",
      icon: "content_paste",
      component: Employees,
      layout: "/admin",
    },
  ];
  const User = authService.getCurrentUser()
  if (!User) {
    return null;
  }
  else if (!User.roles.includes('admin')) {
    return dashboardRoutes.splice(0, 1)
  }
  return dashboardRoutes
}


const dashboardRoutes = ifAdmin()



export default dashboardRoutes;
